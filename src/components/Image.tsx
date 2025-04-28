import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fill?: boolean;
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = 'lazy',
  onLoad,
  onError,
  ...props
}) => {
  const imgStyle: React.CSSProperties = {
    ...style,
    width: width ? `${width}px` : props.fill ? '100%' : 'auto',
    height: height ? `${height}px` : props.fill ? '100%' : 'auto',
    objectFit: props.fill ? 'cover' : 'initial',
    position: props.fill ? 'absolute' : 'static',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={imgStyle}
      loading={loading}
      width={width}
      height={height}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default Image; 