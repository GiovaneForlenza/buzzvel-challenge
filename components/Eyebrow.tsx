type EyebrowProps = {
  children: string;
  light?: boolean;
  className?: string;
};

export default function Eyebrow({
  children,
  light = false,
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`text-xs font-semibold tracking-widest uppercase ${
        light ? "text-primary-blue-light" : "text-primary-blue"
      } ${className}`}
    >
      {children}
    </p>
  );
}
