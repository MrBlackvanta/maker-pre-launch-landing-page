"use client";

import { useEffect, useId, useRef, useState, type SubmitEvent } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONFIRMATION_MS = 3000;

export default function NewsletterForm() {
  const emailId = useId();
  const errorId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [errorKey, setErrorKey] = useState(0);
  const [sentKey, setSentKey] = useState(0);
  const [sent, setSent] = useState(false);

  const valid = EMAIL.test(email.trim());
  const invalid = showErrors && !valid;

  useEffect(() => {
    if (!sentKey) return;
    const timer = setTimeout(() => setSent(false), CONFIRMATION_MS);
    return () => clearTimeout(timer);
  }, [sentKey]);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!valid) {
      setMessage(
        email.trim()
          ? "Oops! That doesn’t look like an email address"
          : "Oops! Please add your email",
      );
      setShowErrors(true);
      setErrorKey((key) => key + 1);
      setSent(false);
      inputRef.current?.focus();
      return;
    }

    setShowErrors(false);
    setEmail("");
    setSentKey((key) => key + 1);
    setSent(true);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative mx-auto mt-8 flex max-w-119 flex-col gap-6 md:mt-7 md:flex-row md:gap-4 lg:mt-10"
    >
      <label htmlFor={emailId} className="sr-only">
        Email address
      </label>
      <input
        ref={inputRef}
        id={emailId}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email address"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
        className="bg-panel caret-brand inset-ring-brand/30 focus-visible:bg-panel-lift focus-visible:inset-ring-brand aria-invalid:inset-ring-danger h-12 w-full rounded-full px-4.5 font-extrabold text-white inset-ring-1 placeholder:text-white/60 focus-visible:inset-ring-2 focus-visible:outline-hidden aria-invalid:inset-ring-2 motion-safe:transition-[background-color,box-shadow] motion-safe:duration-200 md:w-80 md:shrink-0"
      />
      <button type="submit" className="v-btn v-focus-ring md:w-35">
        Get notified
      </button>
      <div className="text-note absolute top-full left-4.5 mt-1 grid text-left">
        <div role="status" className="col-start-1 row-start-1">
          <p
            key={sentKey}
            data-show={sent || undefined}
            className="v-note text-brand"
          >
            Thanks! We’ll email you the moment maker launches.
          </p>
        </div>
        <p
          key={errorKey}
          id={errorId}
          role="alert"
          data-show={invalid || undefined}
          className="v-note text-danger col-start-1 row-start-1"
        >
          {message}
        </p>
      </div>
    </form>
  );
}
