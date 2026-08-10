"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold text-brand-indigo dark:text-primary"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-indigo text-white">
            <span className="text-sm font-bold">G</span>
          </span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            if ("children" in link && link.children) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                      isActive && "text-brand-indigo dark:text-primary"
                    )}
                    aria-expanded={openDropdown === link.label}
                    onFocus={() => setOpenDropdown(link.label)}
                  >
                    {link.label}
                    <ChevronDown className="size-3.5" aria-hidden />
                  </button>
                  {openDropdown === link.label ? (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-56 rounded-lg border border-border bg-popover p-2 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
                  isActive && "text-brand-indigo dark:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink variant="outline" className="h-9 px-4 text-sm" href="/schools-partnerships">
            Partner With Us
          </ButtonLink>
          <ButtonLink
            className="h-9 bg-brand-indigo px-4 text-sm text-white hover:bg-brand-indigo/90"
            href="/programmes"
          >
            Get Started
            <ArrowRight className="size-3.5" />
          </ButtonLink>
        </div>

        <Sheet>
          <SheetTrigger
            className="inline-flex size-9 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden />
          </SheetTrigger>
          <SheetContent side="right" className="w-4/5 gap-0 p-0">
            <SheetHeader className="border-b border-border">
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    }
                  />
                  {"children" in link && link.children ? (
                    <div className="ml-3 flex flex-col border-l border-border pl-3">
                      {link.children.map((child) => (
                        <SheetClose
                    nativeButton={false}
                          key={child.href}
                          render={
                            <Link
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          }
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="flex flex-col gap-2 border-t border-border p-4">
              <SheetClose
                    nativeButton={false}
                render={
                  <Link
                    href="/schools-partnerships"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-border text-sm font-medium"
                  >
                    Partner With Us
                  </Link>
                }
              />
              <SheetClose
                    nativeButton={false}
                render={
                  <Link
                    href="/programmes"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-brand-indigo text-sm font-medium text-white"
                  >
                    Get Started
                  </Link>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
