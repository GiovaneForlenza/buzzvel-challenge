import Container from "./Container";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

const columns = [
  {
    title: "Explore",
    links: ["Courses", "Categories", "Instructors", "For Teams"],
  },
  { title: "Company", links: ["About", "Careers", "Journal"] },
  { title: "Support", links: ["Help Center", "Contact", "Terms", "Privacy"] },
];

export default function Footer() {
  return (
    <footer className="bg-background-darkblue text-text-white pt-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Logo light />
            <p className="text-primary-blue-light/70 mt-2 max-w-[14rem] text-xs">
              Practical learning for curious people.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <div className="border-text-white/10 mt-12 border-t py-6">
          <p className="text-primary-blue-light/70 text-xs">
            &copy; 2026 Luma Learning
          </p>
        </div>
      </Container>
    </footer>
  );
}
