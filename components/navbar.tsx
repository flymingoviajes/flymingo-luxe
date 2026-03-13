import Image from "next/image";
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
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { link as linkStyles } from "@heroui/theme";
import { InstagramIcon, FacebookIcon, WhatsappIcon } from "@/components/icons";

const navItems = [
  { label: "Home", href: "/" },
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
      className="border-b border-divider/60 bg-background/70 backdrop-blur-md"
    >
      {/* Left: Brand + Desktop nav */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="div" className="gap-2 max-w-fit">
          <NextLink className="flex items-center gap-2" href="/">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border border-divider/70 bg-content1">
              <Image
                src="/favicon.ico"
                alt="Flymingo Viajes"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>

            <div className="leading-tight">
              <p className="text-xs font-semibold tracking-[0.28em] text-foreground/80">
                FLYMINGO
              </p>
              <p className="text-sm font-semibold text-foreground">Viajes</p>
            </div>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex items-center gap-6 ml-6">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm transition",
                  item.highlight
                    ? "rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 px-4 py-2 font-semibold text-white shadow-md hover:scale-[1.02] hover:text-white"
                    : item.wedding
                      ? "rounded-full border border-rose-200/70 bg-rose-50 px-4 py-2 font-medium text-rose-900 hover:bg-rose-100 hover:text-rose-950"
                      : "text-foreground/80 hover:text-foreground"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right: Social + theme */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex items-center gap-2">
          <Link isExternal aria-label="Instagram" href={social.instagram}>
            <InstagramIcon className="text-default-500 hover:text-foreground transition" />
          </Link>
          <Link isExternal aria-label="Facebook" href={social.facebook}>
            <FacebookIcon className="text-default-500 hover:text-foreground transition" />
          </Link>
          <Link isExternal aria-label="WhatsApp" href={social.whatsapp}>
            <WhatsappIcon className="text-default-500 hover:text-foreground transition" />
          </Link>

          <div className="ml-1">
            <ThemeSwitch />
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile: Social + theme + toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="WhatsApp" href={social.whatsapp}>
          <WhatsappIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="pt-6">
        <div className="mx-4 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                as={NextLink}
                color="foreground"
                href={item.href}
                size="lg"
                className={clsx(
                  "py-2",
                  item.highlight &&
                    "rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 px-4 py-3 font-semibold text-white",
                  item.wedding &&
                    "rounded-full border border-rose-200 bg-rose-50 px-4 py-3 font-medium text-rose-900"
                )}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="mt-6 flex items-center gap-3">
            <Link isExternal aria-label="Instagram" href={social.instagram}>
              <InstagramIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Facebook" href={social.facebook}>
              <FacebookIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="WhatsApp" href={social.whatsapp}>
              <WhatsappIcon className="text-default-500" />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};