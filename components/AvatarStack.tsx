import PlaceholderImage from "./PlaceholderImage";

type AvatarStackProps = {
  count?: number;
  size?: "sm" | "md";
};

export default function AvatarStack({
  count = 3,
  size = "sm",
}: AvatarStackProps) {
  const dimension = size === "sm" ? "size-6" : "size-8";

  return (
    <div className="flex -space-x-2">
      {Array.from({ length: count }, (_, i) => (
        <PlaceholderImage
          key={i}
          alt=""
          aria-hidden="true"
          className={`${dimension} border-background-white rounded-full border-2`}
        />
      ))}
    </div>
  );
}
