"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Image, Text, Flex, List } from "@mantine/core";
import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";

const Lannest = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="LanNest.Academy"
        style={{ zIndex: 1329 }}
        className="portfolio-drawer"
        size={"55%"}
        styles={{
          title: {
            fontSize: 20,
            fontWeight: 600,
          },
        }}
      >
        <Image src="/portfolio-lannest.webp" w={"100%"} h={"auto"}  radius={12} my={32}/>
        <Flex w={"100%"} align={"center"} mb={16}>
          <Text component="h2" fz={20} fw={600}>About the Project</Text>
          <a href="https://lannest.academy" target="_blank" style={{ marginLeft: "auto" }} className="see-website-btn">
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
          LanNest is an intelligent, cloud-based platform that helps users
          master English through tailored learning paths. Learners take a
          placement test, choose their preferred course, and progress under the
          guidance of top-tier instructors.
        </Text>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Graph's Role
        </Text>
        <List>
          <List.Item fz={16} fw={400}>Ideation and instructional flow design</List.Item>
          <List.Item fz={16} fw={400}>Branding-aligned custom UI/UX design</List.Item>
          <List.Item fz={16} fw={400}>
            Full-stack development (Python backend, Bootstrap frontend)
          </List.Item>
          <List.Item fz={16} fw={400}>
            Design and implementation of a custom reward and loyalty system
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Challenges Tackled
        </Text>
        <List>
          <List.Item fz={16} fw={400}>
            Crafting a personalized, non-linear learning experience
          </List.Item>
          <List.Item fz={16} fw={400}>
            Building a system that keeps students motivated and engaged
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Outcome
        </Text>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>50,000+ monthly users in the first year</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>Delivered in 6 months using Scrum methodology</Text>
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

export default Lannest;


