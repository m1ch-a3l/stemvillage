import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { cn } from "@/lib/utils";

const activities = [
  {
    image: "/images/photos/gallery-activities/469717204_555974400685162_6541074027306864709_n.jpg",
    alt: "Learners at a hands-on computing session",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    image: "/images/photos/gallery-activities/475528451_594315403517728_2407485001173510194_n.jpg",
    alt: "A group coding session around a table",
    span: "",
  },
  {
    image: "/images/photos/gallery-activities/469453128_555974410685161_4131591071462763136_n.jpg",
    alt: "Learners setting up hardware during training",
    span: "",
  },
  {
    image: "/images/photos/gallery-activities/469477605_555974744018461_6866936589855080471_n.jpg",
    alt: "A facilitator leading a session",
    span: "",
  },
  {
    image: "/images/photos/gallery-activities/475386634_594315696851032_6012668746520625730_n.jpg",
    alt: "Learners collaborating in a peer learning session",
    span: "",
  },
  {
    image: "/images/photos/gallery-activities/469748197_555974397351829_7760446269280654864_n.jpg",
    alt: "A tech talk in progress",
    span: "sm:col-span-2",
  },
  {
    image: "/images/photos/gallery-activities/469448902_555974464018489_1738310757996980196_n.jpg",
    alt: "Learners in a classroom setting",
    span: "sm:col-span-2",
  },
] as const;

export function ActivitiesGallery() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="Our Activities"
            title="Training and engagement, out in the field."
            description="A look at our workshops, bootcamps, school visits and community sessions — real people, hands-on learning."
          />
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[160px]">
          {activities.map((activity, index) => (
            <Reveal
              key={activity.image}
              delay={(index % 4) * 0.06}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-lg sm:aspect-auto",
                activity.span
              )}
            >
              <Image
                src={activity.image}
                alt={activity.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
