type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={`font-heading text-xl font-bold tracking-tight ${
        light ? "text-text-white" : "text-text-primary"
      }`}
    >
      luma.
    </a>
  );
}
