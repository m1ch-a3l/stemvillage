"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  organisation: z.string().trim().optional(),
  enquiryType: z.enum(["General", "Programmes", "Partnerships", "Schools", "Volunteering", "Careers"]),
  message: z.string().trim().min(10, "Please share a few more details (10+ characters)."),
  honeypot: z.string().max(0).optional(),
});

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

// Placeholder integration point: wire this up to a real email/CRM service
// (e.g. Resend, HubSpot) when one is configured. Currently validates and
// logs the enquiry server-side rather than sending a real email.
export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  if (parsed.data.honeypot) {
    return { status: "success", message: "Thanks for reaching out — we'll be in touch soon." };
  }

  console.log("[contact-message]", parsed.data);

  return {
    status: "success",
    message: "Thank you for reaching out. We'll get back to you within 2–3 business days.",
  };
}
