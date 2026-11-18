type FooterColumnProps = {
  title: string;
  links: string[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-text-white text-[10px] font-semibold tracking-widest uppercase">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#top"
              className="text-primary-blue-light/70 hover:text-text-white text-xs transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
