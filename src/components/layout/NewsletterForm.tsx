"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter, type NewsletterState } from "@/lib/newsletter";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  return (
    <form className="flex flex-col gap-2 pt-2" aria-label="Newsletter signup" action={formAction}>
      <label htmlFor="newsletter-email" className="text-xs font-medium text-white/70">
        Subscribe to our newsletter
      </label>
      <div className="flex gap-2">
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="h-9 border-white/20 bg-white/10 text-sm text-white placeholder:text-white/40"
        />
        <Button
          type="submit"
          size="sm"
          disabled={isPending}
          className="h-9 shrink-0 bg-brand-gold text-brand-indigo-dark hover:bg-brand-gold/90"
        >
          {isPending ? "Joining…" : "Join"}
        </Button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={
          state.status === "error"
            ? "text-xs text-red-300"
            : state.status === "success"
              ? "text-xs text-brand-gold"
              : "sr-only"
        }
      >
        {state.message}
      </p>
    </form>
  );
}
