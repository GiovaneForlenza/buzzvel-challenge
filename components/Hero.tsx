import { Star } from "lucide-react";
import AvatarStack from "./AvatarStack";
import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="bg-background-light-yellow overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual (first on mobile, right on desktop) */}
        <div className="animate-fade-up relative order-first mx-auto w-full max-w-md pr-4 lg:order-last lg:max-w-none lg:pr-6">
          <div
            aria-hidden="true"
            className="bg-background-orange absolute top-4 right-0 h-full w-[calc(100%-1rem)] rounded-3xl lg:w-[calc(100%-1.5rem)]"
          />
          <div
            aria-hidden="true"
            className="bg-primary-blue-light absolute -bottom-6 -left-6 size-24 rounded-full"
          />
          <PlaceholderImage
            alt="Learner smiling while studying"
            className="relative aspect-[4/3.2] w-full rounded-3xl lg:aspect-4/4"
          />

          <div className="bg-background-white absolute top-5 left-4 flex items-center gap-2 rounded-lg px-3 py-2 text-xs shadow-sm">
            <span className="bg-primary-blue-light text-primary-blue rounded px-1.5 py-0.5 font-semibold">
              120+
            </span>
            <span className="text-text-primary">expert-led courses</span>
          </div>

          <div className="animate-float bg-background-white absolute right-0 -bottom-4 flex items-center gap-2 rounded-lg px-3 py-2 text-xs shadow-sm lg:right-2">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-primary-yellow text-primary-yellow"
                />
              ))}
            </span>
            <span className="text-text-primary">4.9 avg rating</span>
          </div>
        </div>

        {/* Copy */}
        <div className="animate-fade-up">
          <Eyebrow>Learn at your own pace</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build skills that actually move you forward.
          </h1>
          <p className="text-text-secondary mt-5 max-w-md text-base leading-relaxed">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses">Explore courses</Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <AvatarStack />
            <p className="text-text-secondary text-xs">
              <span className="text-text-primary font-semibold">
                Trusted by 24,000+
              </span>{" "}
              learners
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
