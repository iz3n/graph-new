"use client";

import { AppShell, Burger, Flex, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/portfolio", label: "Portfolio" },
  { link: "/about-us", label: "About US" },
];

export default function Header({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
        style={{
          textDecoration: "none",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: "28px",
        }}
        onClick={() => toggle()}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Link href="/">
              <Image src="/Logo.svg" alt="logo" w={40} me={20} />
            </Link>
            <Flex me="auto" visibleFrom="sm" direction={"row"} gap={20}>
              {items}
            </Flex>
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={16}>
        <Flex direction={"column"} gap={16}>
          {items}
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main p={0}>{children}</AppShell.Main>
    </AppShell>
  );
}
