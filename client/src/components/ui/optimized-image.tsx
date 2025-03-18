import { useState, useEffect } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface OptimizedImageProps extends Omit<HTMLMotionProps<'img'>, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setError(false);

    // Create a new image object
    const img = new Image();
    
    // Load high quality image in background
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
      onLoad?.();
    };

    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };

    // If priority is true, load high quality image immediately
    if (priority) {
      setCurrentSrc(src);
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority, onLoad]);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-sm text-muted-foreground">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative h-full ${className}`}>
      <motion.img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? 'blur-sm' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      )}
    </div>
  );
} 