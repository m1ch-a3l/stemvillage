"use client";

import { useActionState } from "react";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { subscribeToNewsletter, type NewsletterState } from "@/lib/newsletter";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  return (
    <form className="flex flex-col gap-2 pt-2" aria-label="Newsletter signup" action={formAction}>
      <label htmlFor="newsletter-email" className="text-xs font-medium text-white/70">
        Subscribe to our newsletter
      </label>
      <div className="relative">
        <Mail
          className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-white/40"
          aria-hidden
        />
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="h-11 rounded-full border-white/15 bg-white/10 pr-[88px] pl-10 text-sm text-white placeholder:text-white/40 focus-visible:border-brand-gold focus-visible:ring-brand-gold/30"
        />
        <Button
          type="submit"
          size="sm"
          disabled={isPending}
          className="absolute top-1 right-1 h-9 shrink-0 rounded-full bg-brand-gold px-4 text-xs font-semibold text-brand-indigo-dark hover:bg-brand-gold/90"
        >
          {isPending ? "Joining…" : "Join"}
        </Button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={cn(
          "flex items-center gap-1.5 text-xs",
          state.status === "error"
            ? "text-red-300"
            : state.status === "success"
              ? "text-brand-gold"
              : "sr-only"
        )}
      >
        {state.status === "success" ? <CheckCircle2 className="size-3.5 shrink-0" aria-hidden /> : null}
        {state.status === "error" ? <AlertCircle className="size-3.5 shrink-0" aria-hidden /> : null}
        {state.message}
      </p>
    </form>
  );
}
