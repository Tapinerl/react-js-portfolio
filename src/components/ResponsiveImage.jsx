import images from '../generated/images.json';

export default function ResponsiveImage({ src, alt, sizes = '(max-width: 900px) calc(100vw - 32px), 1120px', loading = 'lazy', decoding = 'async', width, height, ...props }) {
  const asset = images[src];
  const preview = asset?.variants.find(item => item.width >= 960) || asset?.variants.at(-1);
  return (
    <img
      {...props}
      src={preview?.src || src}
      srcSet={asset?.variants.map(item => `${item.src} ${item.width}w`).join(', ')}
      sizes={asset ? sizes : undefined}
      width={width || asset?.width}
      height={height || asset?.height}
      alt={alt}
      loading={loading}
      decoding={decoding}
    />
  );
}
