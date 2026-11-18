import type { ImgHTMLAttributes } from "react";

export const PLACEHOLDER_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png";

type PlaceholderImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  alt: string;
};

/** Simple <img> wrapper. All images in the project use the placeholder for now. */
export default function PlaceholderImage({
  alt,
  className = "",
  ...rest
}: PlaceholderImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={PLACEHOLDER_SRC}
      alt={alt}
      loading="lazy"
      className={`bg-primary-blue-light object-cover ${className}`}
      {...rest}
    />
  );
}
