import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  number: string;
  title: string;
  description: string;
  href?: string;
};

export default function CategoryCard({
  number,
  title,
  description,
  href = "#featured",
}: CategoryCardProps) {
  return (
    <article className="border-line-1 bg-background-white flex h-full flex-col rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1">
      <span className="bg-primary-blue-light text-primary-blue w-fit rounded px-2 py-1 text-[10px] font-semibold">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="text-text-secondary mt-2 flex-1 text-sm leading-relaxed">
        {description}
      </p>
      <a
        href={href}
        className="text-text-primary hover:text-primary-blue mt-6 inline-flex items-center gap-2 text-sm font-semibold"
      >
        Explore <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}
