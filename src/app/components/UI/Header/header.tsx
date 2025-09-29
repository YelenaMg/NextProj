"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { MenuItem, menuItems } from "@/app/config/menu";
import { useTranslations } from "next-intl";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="eye logo" width={50} height={50} priority />
    </Link>
  );
};

export default function Header() {
  const t = useTranslations();
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item: MenuItem) => (
          <li key={item.title}>
            <Link href={item.href}>
              {item.title} {t("home")}
            </Link>
          </li>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarBrand>
          <Link href="en">En</Link>
          <Link href="ru">Ru</Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}
