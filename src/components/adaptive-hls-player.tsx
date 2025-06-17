"use client"

import dynamic from 'next/dynamic'

// Dynamically import the HLS player to avoid SSR issues
const HLSVideoPlayer = dynamic(() => import('./hls-video-player'), {
  ssr: false,
  loading: () => (
    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-muted" />
  )
})

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
  const handlePlayerReady = (): void => {
    console.log('HLS Player ready')
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
        onReady={handlePlayerReady}
        className="w-full h-full rounded-xl"
      />
    </div>
  )
}