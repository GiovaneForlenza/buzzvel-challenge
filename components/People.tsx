import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

/** Each column is a list of aspect ratios, to get a staggered collage. */
const columns = [
  { offset: "mt-8", ratios: ["aspect-[4/5]", "aspect-square", "aspect-[4/5]"] },
  {
    offset: "mt-0",
    ratios: ["aspect-square", "aspect-[3/4]", "aspect-square"],
  },
  { offset: "mt-6", ratios: ["aspect-[3/4]", "aspect-square", "aspect-[4/5]"] },
  { offset: "mt-2", ratios: ["aspect-[4/5]", "aspect-[4/5]", "aspect-square"] },
];

export default function People() {
  return (
    <section
      id="people"
      className="bg-background-light-yellow scroll-mt-4 overflow-hidden py-16 lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>The people</Eyebrow>
          <h2 className="mt-4 max-w-md text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            Meet international students &amp; teachers
          </h2>
          <p className="text-text-secondary mt-5 max-w-md text-sm leading-relaxed">
            Morbi et egestas dignissim pharetra, sed amet. Tempus justo senectus
            risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
            facilisi nec magna hendrerit. Placerat ipsum sit tellus urna,
            faucibus aenean lorem faucibus integer.
          </p>
          <Button href="#contact" variant="secondary" className="mt-7">
            Explore teachers and students
          </Button>
        </Reveal>

        <Reveal
          delay={100}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="bg-primary-blue-light absolute inset-x-6 -top-6 -bottom-6 rounded-full lg:inset-x-10"
          />
          <div className="relative grid grid-cols-4 gap-2 px-6 sm:gap-3 lg:px-10">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col gap-2 sm:gap-3 ${column.offset}`}
              >
                {column.ratios.map((ratio, imageIndex) => (
                  <PlaceholderImage
                    key={imageIndex}
                    alt="Student or teacher"
                    className={`${ratio} w-full rounded-lg`}
                  />
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
