import Image from "next/image";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { cn } from "@/lib/utils";

interface CardMediaProps {
  photo?: string;
  seed: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function CardMedia({ photo, seed, alt, className, sizes, priority }: CardMediaProps) {
  if (photo) {
    return (
      <div className={cn("relative h-full w-full", className)}>
        <Image
          src={photo}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
    );
  }
  return <PlaceholderArt seed={seed} className={className} />;
}
