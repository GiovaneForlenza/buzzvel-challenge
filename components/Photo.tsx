import type { StaticImageData } from "next/image";

type PhotoProps = {
  /** A statically imported file from assets/images. */
  image: StaticImageData;
  /** Describe the image. Use "" only for purely decorative images. */
  alt: string;
  className?: string;
  /** Use for images visible on first load (above the fold). */
  eager?: boolean;
};

/** Simple <img> wrapper. Width/height come from the imported file to avoid layout shift. */
export default function Photo({
  image,
  alt,
  className = "",
  eager = false,
}: PhotoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      className={`bg-primary-blue-light object-cover ${className}`}
    />
  );
}
