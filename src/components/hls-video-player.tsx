"use client"

import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'

import type { 
  VideoJSPlayerWithHLS, 
  VideoJSOptions, 
  VideoJSError,
  VideoJSTechWithHLS,
  HLSLevel
} from '@/types/videojs-hls'

interface HLSVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  fluid?: boolean
  aspectRatio?: string
  onReady?: (player: VideoJSPlayerWithHLS) => void
}

export default function HLSVideoPlayer({
  src,
  poster,
  className = "",
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  fluid = true,
  aspectRatio = "16:9",
  onReady
}: HLSVideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<VideoJSPlayerWithHLS | null>(null)

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js")
      videoElement.classList.add('vjs-big-play-centered')
      
      videoRef.current.appendChild(videoElement)

      const options: VideoJSOptions = {
        autoplay: autoplay,
        controls: controls,
        muted: muted,
        loop: loop,
        fluid: fluid,
        aspectRatio: aspectRatio,
        poster: poster,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        responsive: true,
        sources: [{
          src: src,
          type: 'application/x-mpegURL'
        }],
        html5: {
          hls: {
            enableLowInitialPlaylist: true,
            smoothQualityChange: true,
            overrideNative: true
          }
        }
      }

      const player = playerRef.current = videojs(videoElement, options) as VideoJSPlayerWithHLS

      // Player ready callback
      player.ready(() => {
        console.log('VideoJS HLS player is ready')
        
        // Enable adaptive bitrate streaming
        const tech: VideoJSTechWithHLS | null = player.tech()
        if (tech?.hls) {
          tech.hls.bandwidth = 0 // Let HLS.js auto-select initial bandwidth
          
          // Handle quality level changes
          const handleLoadedMetadata = (): void => {
            const levels: HLSLevel[] | undefined = tech.hls?.levels
            if (levels && levels.length > 1) {
              console.log(`HLS: ${levels.length} quality levels available`)
              levels.forEach((level: HLSLevel, index: number) => {
                console.log(`Quality ${index}: ${level.width}x${level.height} @ ${level.bitrate}bps`)
              })
            }
          }
          
          tech.hls.on('loadedmetadata', handleLoadedMetadata)
        }

        if (onReady) {
          onReady(player)
        }
      })

      // Handle errors with proper typing
      const handleError = (): void => {
        const error: VideoJSError | null = player.error()
        if (error) {
          console.error('VideoJS Error:', {
            code: error.code,
            message: error.message,
            status: error.status
          })
        }
      }

      player.on('error', handleError)

      // Handle other events
      const handleLoadedMetadata = (): void => {
        console.log('Video metadata loaded')
      }

      const handleLoadStart = (): void => {
        console.log('Video load started')
      }

      const handleCanPlay = (): void => {
        console.log('Video can start playing')
      }

      player.on('loadedmetadata', handleLoadedMetadata)
      player.on('loadstart', handleLoadStart)
      player.on('canplay', handleCanPlay)
    }

    // Cleanup function
    return () => {
      const player = playerRef.current
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [src, autoplay, controls, muted, loop, fluid, aspectRatio, poster, onReady])

  return (
    <div data-vjs-player className={className}>
      <div ref={videoRef} />
    </div>
  )
}

// Custom CSS styles
const customStyles = `
  .video-js {
    width: 100%;
    height: 100%;
  }
  
  .video-js .vjs-big-play-button {
    font-size: 2.5em;
    line-height: 2.3;
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    border: 0.15em solid #fff;
    margin-left: -1.25em;
    margin-top: -1.25em;
    transition: all 0.3s ease;
  }
  
  .video-js:hover .vjs-big-play-button,
  .video-js .vjs-big-play-button:focus {
    background-color: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
  
  .video-js .vjs-control-bar {
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
    transition: opacity 0.3s ease;
  }
  
  .video-js .vjs-progress-control .vjs-progress-holder {
    height: 0.5em;
  }
  
  .video-js .vjs-progress-control .vjs-progress-holder .vjs-load-progress,
  .video-js .vjs-progress-control .vjs-progress-holder .vjs-play-progress {
    height: 0.5em;
  }
  
  .video-js .vjs-play-progress {
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  }
  
  .video-js .vjs-volume-panel {
    transition: width 0.3s ease;
  }
  
  .video-js:hover .vjs-control-bar {
    opacity: 1;
  }
`

// Inject custom styles only once
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('hls-player-styles')
  if (!existingStyle) {
    const styleElement = document.createElement('style')
    styleElement.id = 'hls-player-styles'
    styleElement.textContent = customStyles
    document.head.appendChild(styleElement)
  }
}