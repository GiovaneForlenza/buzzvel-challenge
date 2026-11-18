import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import StepItem from "./StepItem";

const iconBase = "relative z-10 grid size-10 place-items-center";

const steps = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: (
      <span className={`${iconBase} bg-primary-blue-light rounded-full`}>
        <span className="bg-primary-blue size-3.5 rounded-[3px]" />
      </span>
    ),
  },
  {
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    icon: (
      <span className={`${iconBase} bg-background-orange rounded-xl`}>
        <span className="bg-primary-orange size-4 rounded-full" />
      </span>
    ),
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: (
      <span className={`${iconBase} bg-background-yellow rounded-full`}>
        <span className="bg-primary-yellow size-2.5 rounded-full" />
      </span>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-background-light-yellow scroll-mt-4 py-16 lg:py-24"
    >
      <Container>
        <Reveal className="text-center">
          <Eyebrow>How Luma works</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Less browsing. More learning.
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="bg-line-1 absolute top-5 right-0 left-0 hidden h-px md:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <StepItem
                icon={step.icon}
                step={String(index + 1).padStart(2, "0")}
                title={step.title}
                description={step.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
