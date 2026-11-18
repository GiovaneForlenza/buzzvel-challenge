import Container from "./Container";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import StatItem from "./StatItem";

const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export default function TestimonialStats() {
  return (
    <section className="bg-background-white py-16 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <Reveal>
          <figure>
            <span
              aria-hidden="true"
              className="font-heading text-primary-blue text-6xl leading-none font-extrabold"
            >
              &ldquo;
            </span>
            <blockquote className="font-heading mt-2 max-w-xl text-xl leading-snug font-medium sm:text-2xl">
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <PlaceholderImage
                alt="Alex Morgan"
                className="size-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Alex Morgan</p>
                <p className="text-text-tertiary text-xs">Product Manager</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <div className="lg:border-line-1 grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-8 lg:border-l lg:pl-12">
            {stats.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
