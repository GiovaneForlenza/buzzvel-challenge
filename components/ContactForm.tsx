"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import FormField from "./FormField";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send the data to your backend / email service.
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="border-line-1 bg-background-white rounded-2xl border p-6 shadow-sm sm:p-8">
      <h3 className="text-base font-bold">Contact us</h3>
      <p className="text-text-secondary mt-1 text-xs">
        Fill out the fields and we will get in touch.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <FormField id="name" label="Full name" placeholder="Your name" />
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="youremail@example.com"
        />
        <FormField
          id="question"
          label="Your question"
          placeholder="Tell us how we can help..."
          multiline
        />
        <Button type="submit" className="w-full">
          Send message
        </Button>
        <p
          role="status"
          aria-live="polite"
          className="text-primary-blue text-center text-xs"
        >
          {sent ? "Message sent. We will reply within 24 business hours." : ""}
        </p>
      </form>
    </div>
  );
}
