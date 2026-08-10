import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";

const activities = [
  {
    image: "/images/photos/gallery-activities/469717204_555974400685162_6541074027306864709_n.jpg",
    label: "Hands-On Computing",
  },
  {
    image: "/images/photos/gallery-activities/475528451_594315403517728_2407485001173510194_n.jpg",
    label: "Group Coding Sessions",
  },
  {
    image: "/images/photos/gallery-activities/469453128_555974410685161_4131591071462763136_n.jpg",
    label: "Hardware Training",
  },
  {
    image: "/images/photos/gallery-activities/469477605_555974744018461_6866936589855080471_n.jpg",
    label: "Facilitator-Led Sessions",
  },
  {
    image: "/images/photos/gallery-activities/475386634_594315696851032_6012668746520625730_n.jpg",
    label: "Peer Learning",
  },
  {
    image: "/images/photos/gallery-activities/469748197_555974397351829_7760446269280654864_n.jpg",
    label: "Tech Talks",
  },
  {
    image: "/images/photos/gallery-activities/469448902_555974464018489_1738310757996980196_n.jpg",
    label: "Classroom Learning",
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal
              key={activity.label}
              delay={(index % 3) * 0.08}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={activity.image}
                alt={activity.label}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="pointer-events-none absolute bottom-3 left-3 text-sm font-semibold text-white sm:text-base">
                {activity.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
