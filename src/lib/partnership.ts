"use server";

import { z } from "zod";

const partnershipSchema = z.object({
  organisationName: z.string().trim().min(2, "Organisation name is required."),
  contactName: z.string().trim().min(2, "Contact name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  organisationType: z.enum(["School", "Corporate", "NGO", "Government", "Other"]),
  interest: z.string().trim().min(2, "Let us know what you're interested in."),
  message: z.string().trim().min(10, "Please share a few more details (10+ characters)."),
  honeypot: z.string().max(0).optional(),
});

export interface PartnershipFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

// Placeholder integration point: route submissions to a real CRM/email inbox
// (e.g. partnerships@stemaide.org) once an email provider is configured.
export async function submitPartnershipEnquiry(
  _prevState: PartnershipFormState,
  formData: FormData
): Promise<PartnershipFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = partnershipSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  if (parsed.data.honeypot) {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  console.log("[partnership-enquiry]", parsed.data);

  return {
    status: "success",
    message: "Thank you. Our partnerships team will be in touch within 2–3 business days.",
  };
}
