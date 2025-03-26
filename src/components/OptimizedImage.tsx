import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle external images
  if (src.startsWith('http')) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  }

  // Handle local images
  const decodedSrc = decodeURIComponent(src);
  const lastDotIndex = decodedSrc.lastIndexOf('.');
  const lastSlashIndex = decodedSrc.lastIndexOf('/');
  
  const imagePath = decodedSrc.substring(0, lastDotIndex);
  const imageDir = decodedSrc.substring(0, lastSlashIndex);
  const imageName = decodedSrc.substring(lastSlashIndex + 1, lastDotIndex);
  
  // Generate paths for optimized images
  const webpSrc = `${imageDir}/optimized/${imageName}.webp`;
  const srcSet = [400, 800, 1200, 1600]
    .map(size => `${imageDir}/optimized/${imageName}-${size}.jpg ${size}w`)
    .join(', ');

  // Ensure all paths are properly encoded
  const encodedWebpSrc = encodeURI(webpSrc);
  const encodedSrcSet = encodeURI(srcSet);
  const encodedOriginalSrc = encodeURI(decodedSrc);
  
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <picture>
        <source
          type="image/webp"
          srcSet={encodedWebpSrc}
        />
        <source
          type="image/jpeg"
          srcSet={encodedSrcSet}
          sizes={sizes}
        />
        <img
          src={encodedOriginalSrc}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
        />
      </picture>
    </div>
  );
}; 