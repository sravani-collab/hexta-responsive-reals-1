"use client"

import dynamic from 'next/dynamic'
import { Skeleton } from '@heroui/react'
import type { VideoJSPlayerWithHLS } from '@/types/videojs-hls'

// Dynamically import the HLS player to avoid SSR issues
const HLSVideoPlayer = dynamic(() => import('./hls-video-player'), {
  ssr: false,
  loading: () => (
    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-muted">
      <Skeleton className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <div className="text-muted-foreground text-sm">Loading video player...</div>
        </div>
      </div>
    </div>
  )
})


interface BandwidthEvent {
  bandwidth: number
}

interface AdaptiveHLSPlayerProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function AdaptiveHLSPlayer({
  src,
  poster,
  className = "relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl",
  autoplay = true,
  muted = true,
  loop = true,
  controls = false
}: AdaptiveHLSPlayerProps) {
  const handlePlayerReady = (player: VideoJSPlayerWithHLS): void => {
    console.log('HLS Player ready with adaptive streaming enabled')
    
    // Removed unused handleQualityChange function

    // Handle video events
    const handlePlay = (): void => {
      console.log('Video started playing')
    }

    const handlePause = (): void => {
      console.log('Video paused')
    }

    const handleEnded = (): void => {
      console.log('Video ended')
    }

    const handleLoadStart = (): void => {
      console.log('Video load started')
    }

    const handleCanPlay = (): void => {
      console.log('Video can start playing')
    }

    const handleError = (): void => {
      const error = player.error()
      if (error) {
        console.error('Player error:', {
          code: error.code,
          message: error.message
        })
      }
    }

    // Add event listeners with proper typing
    player.on('play', handlePlay)
    player.on('pause', handlePause)
    player.on('ended', handleEnded)
    player.on('loadstart', handleLoadStart)
    player.on('canplay', handleCanPlay)
    player.on('error', handleError)
    
    // Try to access HLS tech for bandwidth monitoring
    const tech = player.tech()
    if (tech?.hls) {
      const handleBandwidthUpdate = (event: BandwidthEvent): void => {
        console.log('Bandwidth updated:', event.bandwidth, 'bps')
        
        // Log quality recommendation based on bandwidth
        if (event.bandwidth > 5000000) {
          console.log('Bandwidth sufficient for 1080p')
        } else if (event.bandwidth > 2500000) {
          console.log('Bandwidth sufficient for 720p')
        } else {
          console.log('Bandwidth suggests 480p')
        }
      }

      tech.hls.on('bandwidth', handleBandwidthUpdate)
    }
  }

  return (
    <div className={className}>
      <HLSVideoPlayer
        src={src}
        poster={poster}
        autoplay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        fluid={true}
        aspectRatio="16:9"
        onReady={handlePlayerReady}
        className="w-full h-full rounded-xl"
      />
    </div>
  )
}