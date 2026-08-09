"use server";

import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
});

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message?: string;
}

// Placeholder integration point: wire this up to a real email/newsletter
// provider (e.g. Mailchimp, Resend Audiences) when one is configured.
export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const parsed = newsletterSchema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Invalid email." };
  }

  console.log("[newsletter] subscription request:", parsed.data.email);

  return { status: "success", message: "You're subscribed. Thanks for joining us!" };
}
