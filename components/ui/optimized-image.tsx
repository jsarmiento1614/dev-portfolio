"use client"

import { useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackSrc?: string
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  fallbackSrc = "/placeholder.svg" 
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={false}
      loading="lazy"
    />
  )
}
