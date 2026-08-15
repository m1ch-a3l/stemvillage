"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-border/70 shadow-sm" : "border-transparent"
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-4 transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-heading text-lg font-bold text-brand-indigo dark:text-primary"
        >
          <Image
            src="/images/logo.png"
            alt="Thanksgiving Place Chapel and Ministries"
            width={535}
            height={190}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav
          className="relative hidden items-center gap-1 lg:flex"
          aria-label="Primary"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            if ("children" in link && link.children) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    setOpenDropdown(link.label);
                    setHoveredLink(link.label);
                  }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "relative z-10 flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-brand-indigo dark:text-primary" : "text-foreground/80 hover:text-foreground"
                    )}
                    aria-expanded={openDropdown === link.label}
                    onFocus={() => {
                      setOpenDropdown(link.label);
                      setHoveredLink(link.label);
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("size-3.5 transition-transform", openDropdown === link.label && "rotate-180")}
                      aria-hidden
                    />
                  </button>
                  {hoveredLink === link.label ? (
                    <motion.div
                      layoutId="nav-highlight"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  ) : null}
                  <AnimatePresence>
                    {openDropdown === link.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-56 rounded-xl border border-border bg-popover p-2 shadow-lg">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                className={cn(
                  "relative z-10 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-brand-indigo dark:text-primary" : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
                {hoveredLink === link.label ? (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 -z-10 rounded-full bg-muted"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink variant="outline" className="h-9 px-4 text-sm" href="/schools-partnerships">
            Partner With Us
          </ButtonLink>
          <ButtonLink
            className="group h-9 bg-brand-indigo px-4 text-sm text-white hover:bg-brand-indigo/90"
            href="/programmes"
          >
            Get Started
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="relative inline-flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
              </motion.span>
            </AnimatePresence>
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
                          key={child.href}
                          nativeButton={false}
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
