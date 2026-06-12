"use client";

import NextLink from "next/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { InstagramIcon, FacebookIcon, WhatsappIcon } from "@/components/icons";

declare global { interface Window { fbq?: (...a: unknown[]) => void; dataLayer?: object[] } }

function trackWA() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Contact");
  window.fbq?.("track", "Lead", { content_name: "Navbar WhatsApp" });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_lead", event_label: "Navbar WhatsApp" });
}

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/destinos" },
  { label: "Weddings", href: "/weddings", wedding: true },
  { label: "Women", href: "/women", highlight: true },
  { label: "Nosotros", href: "/nosotros" },
];

const social = {
  instagram: "https://instagram.com/flymingoviajes",
  facebook: "https://facebook.com/flymingoviajes",
  whatsapp: "https://wa.me/5218716887385",
};

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="border-b border-brand-border/60 bg-brand-canvas/75 backdrop-blur-md dark:bg-[#0D0A0E]/75 dark:border-[rgba(244,120,152,0.08)]"
    >
      {/* Left: Brand + Desktop nav */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="div" className="gap-2 max-w-fit">
          <NextLink className="flex items-center gap-2" href="/">
            {/* Logo tipográfico — rosa + verde, igual que el logo real */}
            <span
              className="text-xl leading-none select-none"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
              aria-label="Flymingo"
            >
              <span style={{ color: "var(--color-brand-accent)" }}>fly</span>
              <span style={{ color: "var(--color-brand-green)" }}>mingo</span>
            </span>
          </NextLink>
        </NavbarBrand>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5 ml-8">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                href={item.href}
                className={
                  item.highlight
                    ? "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
                    : item.wedding
                    ? "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest border"
                    : "nav-link"
                }
                style={
                  item.highlight
                    ? { background: "var(--gradient-accent)", fontFamily: "var(--font-sans)" }
                    : item.wedding
                    ? {
                        borderColor: "var(--color-brand-green)",
                        color: "var(--color-brand-green)",
                        fontFamily: "var(--font-sans)",
                      }
                    : undefined
                }
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right: Social + WA CTA */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex items-center gap-3">
          <Link isExternal aria-label="Instagram" href={social.instagram}>
            <InstagramIcon className="h-4 w-4 text-brand-muted hover:text-brand-accent transition-colors" />
          </Link>
          <Link isExternal aria-label="Facebook" href={social.facebook}>
            <FacebookIcon className="h-4 w-4 text-brand-muted hover:text-brand-accent transition-colors" />
          </Link>

          {/* WhatsApp — botón CTA en navbar */}
          <Link
            isExternal
            href={social.whatsapp}
            onClick={trackWA}
            className="ml-1 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:opacity-90"
            style={{ background: "var(--gradient-accent)", fontFamily: "var(--font-sans)" }}
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="h-3.5 w-3.5" />
            WhatsApp
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="WhatsApp" href={social.whatsapp} onClick={trackWA}>
          <WhatsappIcon className="h-5 w-5" style={{ color: "var(--color-brand-accent)" }} />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="pt-8 bg-brand-canvas/98 dark:bg-[#0D0A0E]/98 backdrop-blur-lg">
        <div className="mx-4 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <NextLink
                href={item.href}
                className={
                  item.highlight
                    ? "inline-block rounded-full px-5 py-3 text-sm font-semibold text-white"
                    : item.wedding
                    ? "inline-block rounded-full border px-5 py-3 text-sm font-semibold"
                    : "block py-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                }
                style={
                  item.highlight
                    ? { background: "var(--gradient-accent)" }
                    : item.wedding
                    ? { borderColor: "var(--color-brand-green)", color: "var(--color-brand-green)" }
                    : undefined
                }
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}

          {/* Divider */}
          <div className="mt-4 h-px bg-brand-border/50" />

          <div className="mt-4 flex items-center gap-3">
            <Link isExternal aria-label="Instagram" href={social.instagram}>
              <InstagramIcon className="h-5 w-5 text-brand-muted" />
            </Link>
            <Link isExternal aria-label="Facebook" href={social.facebook}>
              <FacebookIcon className="h-5 w-5 text-brand-muted" />
            </Link>
            <Link isExternal aria-label="WhatsApp" href={social.whatsapp} onClick={trackWA}>
              <WhatsappIcon className="h-5 w-5" style={{ color: "var(--color-brand-accent)" }} />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
