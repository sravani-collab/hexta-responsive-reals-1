import type { Player, Tech } from 'video.js'

// HLS Level interface
export interface HLSLevel {
  bitrate: number
  width: number
  height: number
  codecs: string
  url: string
}

// HLS Events interface
export interface HLSEvents {
  'loadedmetadata': () => void
  'bandwidth': (event: { bandwidth: number }) => void
  'qualityChanged': (event: { selectedQuality: string | number }) => void
}

// HLS Tech interface
export interface HLSTech {
  bandwidth: number
  levels?: HLSLevel[]
  on<K extends keyof HLSEvents>(event: K, callback: HLSEvents[K]): void
  off<K extends keyof HLSEvents>(event: K, callback: HLSEvents[K]): void
}

// Extended Tech interface
export interface VideoJSTechWithHLS extends Tech {
  hls?: HLSTech
}

// Extended Player interface
export interface VideoJSPlayerWithHLS extends Player {
  dispose(): unknown
  isDisposed(): unknown
  on(arg0: string, handleError: () => void): unknown
  error(): VideoJSError | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ready: any
  hls?: HLSTech
  tech(): VideoJSTechWithHLS | null
  tech(name: string): VideoJSTechWithHLS | null
}

// VideoJS Player Events
export interface VideoJSEvents {
  'ready': () => void
  'loadstart': () => void
  'loadedmetadata': () => void
  'canplay': () => void
  'play': () => void
  'pause': () => void
  'ended': () => void
  'error': () => void
  'qualityChanged': (event: { selectedQuality: string | number }) => void
}

// VideoJS Error interface
export interface VideoJSError {
  code: number
  message: string
  status?: number
}

// VideoJS Source interface
export interface VideoJSSource {
  src: string
  type: string
}

// VideoJS Options interface
export interface VideoJSOptions {
  autoplay?: boolean
  controls?: boolean
  muted?: boolean
  loop?: boolean
  fluid?: boolean
  aspectRatio?: string
  poster?: string
  playbackRates?: number[]
  responsive?: boolean
  sources?: VideoJSSource[]
  html5?: {
    hls?: {
      enableLowInitialPlaylist?: boolean
      smoothQualityChange?: boolean
      overrideNative?: boolean
    }
  }
}