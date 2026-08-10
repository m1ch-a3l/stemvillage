import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { stemAreaPhotos } from "@/lib/photos";

const points = [
  {
    title: "Future careers are being redefined by technology",
    body: "From agriculture to finance, the fastest-growing roles increasingly require technical fluency — STEM literacy is no longer optional preparation, it's foundational.",
  },
  {
    title: "Problem-solving is a transferable superpower",
    body: "The debugging mindset — break a problem down, test a hypothesis, iterate — applies far beyond software, into any field that rewards structured thinking.",
  },
  {
    title: "Africa's digital transformation needs builders, not just users",
    body: "The region's economic opportunity increasingly depends on a generation that can build technology, not only consume it — that shift starts with early, hands-on exposure.",
  },
  {
    title: "Entrepreneurship increasingly starts with a technical idea",
    body: "A growing share of new ventures are built on a technical insight or product — STEM skills widen the range of problems a young person can realistically go and solve.",
  },
];

export function WhySTEMatters() {
  return (
    <section className="relative overflow-hidden bg-brand-indigo py-20 text-white sm:py-24">
      <Image
        src={stemAreaPhotos["artificial-intelligence"]}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-indigo via-brand-indigo/95 to-brand-indigo/70"
      />
      <Container className="relative flex flex-col gap-10">
        <SectionHeader
          eyebrow="Why STEM Matters"
          title="STEM education isn't just about a subject — it's about readiness."
          className="[&_h2]:text-white [&_p]:text-white/75 [&_span]:bg-white/10 [&_span]:text-brand-gold"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="flex flex-col gap-2 border-l-2 border-brand-gold pl-5">
              <h3 className="font-heading text-lg font-semibold">{point.title}</h3>
              <p className="text-sm text-white/70">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
