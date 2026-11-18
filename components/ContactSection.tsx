import { Clock, MessageCircleMore } from "lucide-react";
import Container from "./Container";
import ContactForm from "./ContactForm";
import Eyebrow from "./Eyebrow";
import InfoCard from "./InfoCard";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-background-white scroll-mt-4 py-16 lg:py-24"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get in touch
          </h2>
          <p className="text-text-secondary mt-4 max-w-md text-sm leading-relaxed">
            Have a question? We&apos;re here to help. Whether you&apos;re
            looking for the right course, learning with your team or interested
            in teaching with Luma, we&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-3">
            <InfoCard
              icon={<MessageCircleMore size={18} aria-hidden="true" />}
              label="Email"
              value="contact@luma.com"
              href="mailto:contact@luma.com"
            />
            <InfoCard
              icon={<Clock size={18} aria-hidden="true" />}
              label="Response Time"
              value="Up to 24 hours on business days"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
