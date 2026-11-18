import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
};

export default function InfoCard({ icon, label, value, href }: InfoCardProps) {
  return (
    <div className="bg-background-light-yellow flex items-center gap-4 rounded-xl p-4">
      <span className="bg-primary-blue-light text-primary-blue grid size-9 shrink-0 place-items-center rounded-lg">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold">{label}</p>
        {href ? (
          <a href={href} className="text-primary-blue text-xs hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-text-secondary text-xs">{value}</p>
        )}
      </div>
    </div>
  );
}
