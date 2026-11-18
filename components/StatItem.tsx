type StatItemProps = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <p className="font-heading text-primary-blue text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {value}
      </p>
      <p className="text-text-tertiary mt-1 text-xs">{label}</p>
    </div>
  );
}
