"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#featured" },
  { label: "Community", href: "#people" },
  { label: "About", href: "#how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="bg-background-light-yellow">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#contact"
            className="text-text-primary hover:text-primary-blue text-sm font-medium transition-colors"
          >
            Log in
          </a>
          <Button href="#courses" size="sm">
            Start learning
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="text-text-primary rounded-md p-2 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="animate-fade-up border-line-1 border-t md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text-primary rounded-md px-2 py-2.5 text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <Button href="#contact" variant="secondary" className="flex-1">
                Log in
              </Button>
              <Button href="#courses" className="flex-1">
                Start learning
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
