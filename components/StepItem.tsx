import type { ReactNode } from "react";

type StepItemProps = {
  icon: ReactNode;
  step: string;
  title: string;
  description: string;
};

export default function StepItem({
  icon,
  step,
  title,
  description,
}: StepItemProps) {
  return (
    <div>
      {icon}
      <p className="text-text-tertiary mt-6 text-[10px] font-semibold tracking-widest uppercase">
        Step {step}
      </p>
      <h3 className="mt-2 text-base font-bold">{title}</h3>
      <p className="text-text-secondary mt-2 max-w-xs text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
