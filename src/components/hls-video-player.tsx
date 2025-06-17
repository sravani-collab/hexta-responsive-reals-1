"use client"

import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface HLSVideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  onReady?: () => void
}

export default function HLSVideoPlayer({
  src,
  poster,
  className = "",
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  onReady
}: HLSVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Check if HLS is supported
    if (Hls.isSupported()) {
      const hls = new Hls({
        // Enable automatic quality switching
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
        
        // Adaptive bitrate settings
        abrEwmaFastLive: 3.0,
        abrEwmaSlowLive: 9.0,
        abrEwmaFastVoD: 3.0,
        abrEwmaSlowVoD: 9.0,
        abrEwmaDefaultEstimate: 500000,
        abrBandWidthFactor: 0.95,
        abrBandWidthUpFactor: 0.7,
        abrMaxWithRealBitrate: false,
        
        // Fragment loading settings
        maxLoadingDelay: 4,
        maxBufferLength: 30,
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferHole: 0.5,
      })

      hlsRef.current = hls

      // Load the HLS stream
      hls.loadSource(src)
      hls.attachMedia(video)

      // Event listeners
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS manifest loaded')
        if (onReady) {
          onReady()
        }
      })

      hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
        const level = hls.levels[data.level]
        console.log(`Quality: ${level.height}p`)
      })

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Network error, recovering...')
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Media error, recovering...')
              hls.recoverMediaError()
              break
            default:
              console.error('Fatal error:', data.type)
              hls.destroy()
              break
          }
        }
      })

      // Available quality levels loaded
      hls.on(Hls.Events.MANIFEST_LOADED, (event, data) => {
        console.log(`${data.levels.length} quality levels available`)
      })

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback for Safari (native HLS support)
      video.src = src
      console.log('Using native HLS support')
      if (onReady) {
        video.addEventListener('loadedmetadata', onReady)
      }
    } else {
      console.error('HLS not supported by browser')
    }

    // Video event listeners
    const handleLoadStart = () => {}
    const handleCanPlay = () => {}
    const handlePlay = () => {}
    const handlePause = () => {}
    const handleEnded = () => {}
    const handleError = () => {
      if (video.error) {
        console.error('Video error:', video.error.code)
      }
    }

    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // Cleanup function
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
      
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadedmetadata', onReady || (() => {}))
    }
  }, [src, onReady])

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '0.75rem',
        objectFit: 'cover'
      }}
    />
  )
}