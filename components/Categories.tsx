import CategoryCard from "./CategoryCard";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
  },
  {
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export default function Categories() {
  return (
    <section
      id="courses"
      className="bg-background-white scroll-mt-4 py-16 lg:py-24"
    >
      <Container>
        <Reveal>
          <Eyebrow>Find your next skill</Eyebrow>
          <h2 className="mt-4 max-w-md text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            Learn something worth knowing.
          </h2>
          <p className="text-text-secondary mt-4 max-w-md text-base leading-relaxed">
            Short, practical courses designed around skills you can put to work
            immediately.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 80}>
              <CategoryCard
                number={String(index + 1).padStart(2, "0")}
                title={category.title}
                description={category.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
