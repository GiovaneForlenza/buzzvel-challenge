import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

const details = ["8 lessons", "2h 40min", "Intermediate"];

export default function FeaturedCourse() {
  return (
    <section
      id="featured"
      className="bg-primary-blue scroll-mt-4 py-14 lg:py-20"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <PlaceholderImage
            alt="Product design workshop"
            className="aspect-[4/3] w-full rounded-2xl"
          />
          <span className="bg-secondary-yellow text-text-primary absolute -top-3 left-4 rounded px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase">
            Featured course
          </span>
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow light>Most popular this month</Eyebrow>
          <h2 className="text-text-white mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            Designing products people understand.
          </h2>
          <p className="text-primary-blue-light mt-4 max-w-lg text-sm leading-relaxed">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="text-text-white mt-5 text-sm">
            with Maya Chen - Senior Product Designer
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {details.map((detail) => (
              <li
                key={detail}
                className="border-primary-blue-light/50 text-text-white rounded-md border px-3 py-1.5 text-xs"
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Button href="#courses" variant="accent">
              View course
            </Button>
            <a
              href="#courses"
              className="text-text-white inline-flex items-center gap-2 text-xs font-semibold hover:underline"
            >
              Browse all courses <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
