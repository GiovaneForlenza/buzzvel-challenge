import AvatarStack from "./AvatarStack";
import Button from "./Button";
import Container from "./Container";
import Reveal from "./Reveal";

/** Decorative shapes, purely visual. */
function Shapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="border-background-orange absolute -top-8 left-6 size-24 rounded-full border" />
      <span className="animate-float border-background-orange absolute top-24 left-[14%] hidden size-8 rounded-lg border md:block" />
      <span className="border-background-orange absolute top-6 right-[22%] size-4 rounded-full border" />
      <span className="bg-background-orange absolute -top-6 right-6 size-24 rotate-12 rounded-2xl" />
      <span className="bg-primary-orange absolute bottom-24 left-[10%] size-3 rounded-full" />
      <span className="bg-background-orange absolute -bottom-6 left-4 size-20 rounded-full" />
      <span className="animate-float border-background-orange absolute right-[18%] bottom-16 hidden size-12 rounded-lg border md:block" />
      <span className="border-background-orange absolute right-6 bottom-6 size-5 rounded-full border" />
    </div>
  );
}

export default function CallToAction() {
  return (
    <section className="bg-background-yellow relative overflow-hidden py-20 lg:py-28">
      <Shapes />
      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <AvatarStack size="md" />
          <h2 className="mt-6 max-w-xl text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            What will you learn next?
          </h2>
          <p className="text-text-secondary mt-4 text-sm">
            Start with one course. Build from there.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#courses">Explore all courses</Button>
            <Button href="#contact" variant="secondary">
              Join Luma
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
