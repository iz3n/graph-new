"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Image, Text, Flex, List } from "@mantine/core";
import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";

const Bartarkhodro = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Bartarkhodro"
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
        <Image src="/portfolio-bartarkhodro.webp" w={"100%"} h={"auto"}  radius={12} my={32}/>
        <Flex w={"100%"} align={"center"} mb={16}>
          <Text component="h2" fz={20} fw={600}>About the Project</Text>
          <a href="https://bartarkhodro.com" target="_blank" style={{ marginLeft: "auto" }} className="see-website-btn" >
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
        Bartarkhodro is a search-focused platform designed for importers of truck spare parts, helping them locate the exact part using OEM codes, minimizing costly order mistakes.
        </Text>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Graph&rsquo;s Role
        </Text>
        <List>
          <List.Item fz={16} fw={400}>End-to-end solution from idea to delivery</List.Item>
          <List.Item fz={16} fw={400}>Backend development using Python</List.Item>
          <List.Item fz={16} fw={400}>
          Frontend design with Bootstrap
          </List.Item>
          <List.Item fz={16} fw={400}>
          Search engine optimized for fast, high-volume queries
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Challenges Tackled
        </Text>
        <List>
          <List.Item fz={16} fw={400}>
          Managing massive product datasets with high-speed search requirements
          </List.Item>
          <List.Item fz={16} fw={400}>
          Eliminating ordering errors caused by miscommunication of OEM codes
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Outcome
        </Text>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>Search system with over 35,000 indexed OEM items</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>Delivered in 6 months using Scrum methodologyStreamlined import logistics and reduced human error</Text>
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

export default Bartarkhodro;
