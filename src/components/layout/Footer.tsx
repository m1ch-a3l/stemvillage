import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/layout/SocialIcons";
import { siteConfig, footerLinks } from "@/lib/site";

const socialIcons = [
  { href: siteConfig.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-indigo-dark text-white">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold text-white">
            <Image
              src="/images/logo_white.png"
              alt="Thanksgiving Place Chapel and Ministries"
              width={535}
              height={190}
              className="h-14 w-auto object-contain"
              priority
            />
            </Link>
            <p className="max-w-sm text-sm text-white/65">{siteConfig.description}</p>
            <ul className="flex flex-col gap-2 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
                <span aria-hidden>/</span>
                <a href={`tel:${siteConfig.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phoneSecondary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" aria-hidden />
                {siteConfig.location}
              </li>
            </ul>
            <div className="flex items-center gap-2 pt-1">
              {socialIcons.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Organisation" links={footerLinks.organisation} />
          <FooterColumn title="Programmes" links={footerLinks.programmes} />
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.connect.slice(0, 1).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
            <Link href="/privacy-policy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white/80">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
