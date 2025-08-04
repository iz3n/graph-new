"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Image, Text, Flex, List } from "@mantine/core";
import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";

const Sinamed = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Sinamed.shop"
        style={{ zIndex: 1329 }}
        size={"55%"}
        className="portfolio-drawer"
        styles={{
          title: {
            fontSize: 20,
            fontWeight: 600,
          },
        }}
      >
        <Image
          src="/portfolio-sinamed.webp"
          w={"100%"}
          h={"auto"}
          radius={12}
          my={32}
        />
        <Flex w={"100%"} align={"center"} mb={16}>
          <Text component="h2" fz={20} fw={600}>
            About the Project
          </Text>
          <a
            href="https://sinamed.shop"
            target="_blank"
            style={{ marginLeft: "auto" }}
            className="see-website-btn"
          >
            <Button
              variant="transparent"
              rightSection={<IconArrowRight size={24} />}
              c={"#0039A4"}
              fz={16}
              fw={600}
            >
              See website
            </Button>
          </a>
        </Flex>
        <Text>
          Sinamed is a custom-built platform designed for the medical equipment
          sector in Oman. Scheduled to launch in 2026, it’s capable of managing
          thousands of SKUs, enabling streamlined product listings,
          dropshipping, and fulfillment.
        </Text>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Graph's Role
        </Text>
        <List>
          <List.Item fz={16} fw={400}>
            Full technical partnership and implementation
          </List.Item>
          <List.Item fz={16} fw={400}>
            Architecture and user flow design
          </List.Item>
          <List.Item fz={16} fw={400}>
            Backend in Python, frontend with React and Next.js
          </List.Item>
          <List.Item fz={16} fw={400}>
            Custom inventory and product management system inspired by SAP
            models
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Challenges Tackled
        </Text>
        <List>
          <List.Item fz={16} fw={400}>
            Designing a scalable inventory logic for complex product structures
          </List.Item>
          <List.Item fz={16} fw={400}>
            Enabling real-time assembly and tracking of SKU combinations
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Outcome
        </Text>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>
            Ready-to-scale infrastructure for cross-border commerce
          </Text>
        </Flex>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>
            Flexible backend for custom inventory operations
          </Text>
        </Flex>
      </Drawer>

      <Button
        ms={"auto"}
        bg={"#CCC"}
        radius={8}
        c={"#000"}
        rightSection={<IconArrowRight size={24} />}
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        onClick={open}
        fz={{base: 12, md: 16}}
        h={{base: "auto", md: 40}}
      >
        See More
      </Button>
    </>
  );
};

export default Sinamed;
