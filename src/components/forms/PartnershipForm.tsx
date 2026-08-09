"use client";

import { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitPartnershipEnquiry, type PartnershipFormState } from "@/lib/partnership";

const initialState: PartnershipFormState = { status: "idle" };

const organisationTypes = ["School", "Corporate", "NGO", "Government", "Other"];

export function PartnershipForm() {
  const [state, formAction, isPending] = useActionState(submitPartnershipEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-brand-emerald/30 bg-brand-emerald/5 p-8 text-center">
        <h3 className="font-heading text-lg font-semibold text-foreground">Enquiry received</h3>
        <p className="mt-2 text-sm text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="organisationName">Organisation / School Name</Label>
          <Input id="organisationName" name="organisationName" required />
          {state.fieldErrors?.organisationName ? (
            <p className="text-xs text-destructive">{state.fieldErrors.organisationName}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="organisationType">Organisation Type</Label>
          <Select name="organisationType" defaultValue="School">
            <SelectTrigger id="organisationType" className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {organisationTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contactName">Contact Person</Label>
          <Input id="contactName" name="contactName" required />
          {state.fieldErrors?.contactName ? (
            <p className="text-xs text-destructive">{state.fieldErrors.contactName}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
          {state.fieldErrors?.email ? (
            <p className="text-xs text-destructive">{state.fieldErrors.email}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="interest">What are you interested in?</Label>
          <Input id="interest" name="interest" placeholder="e.g. School STEM Programme" required />
          {state.fieldErrors?.interest ? (
            <p className="text-xs text-destructive">{state.fieldErrors.interest}</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
        {state.fieldErrors?.message ? (
          <p className="text-xs text-destructive">{state.fieldErrors.message}</p>
        ) : null}
      </div>
      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      ) : null}
      <Button type="submit" disabled={isPending} className="h-11 w-fit bg-brand-indigo px-6 text-white hover:bg-brand-indigo/90">
        {isPending ? "Submitting…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
