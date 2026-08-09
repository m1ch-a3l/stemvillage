import { PlaceholderArt } from "@/components/ui/placeholder-art";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  slug: string;
}

export function TeamMemberCard({ name, role, bio, slug }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="aspect-square w-full overflow-hidden">
        <PlaceholderArt seed={slug} variant="orbit" />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <h3 className="font-heading text-base font-semibold text-foreground">{name}</h3>
        <p className="text-sm font-medium text-brand-indigo dark:text-primary">{role}</p>
        <p className="mt-1 text-sm text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}
