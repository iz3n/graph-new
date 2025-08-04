"use client";

import {
  Burger,
  Center,
  Container,
  Flex,
  Group,
  Image,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/portfolio", label: "Portfolio" },
  { link: "/about-us", label: "About US" },
  { link: "/contact-us", label: "Contact us" },
  { link: "/blog", label: "Blog" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header>
      <Container fluid w="100%" px={64} py={17}>
        <Flex>
          <Image src="/Logo.svg" alt="logo" w={40} />
          <Flex ms={32} gap={32} direction="row" visibleFrom="sm">
            {items}
          </Flex>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Flex>
      </Container>
    </header>
  );
}
