import { assetUrl } from '@/lib/assetUrl'
import { cn } from '@/lib/cn'

type Props = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function PublicImage({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
}: Props) {
  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={cn(className)}
    />
  )
}
