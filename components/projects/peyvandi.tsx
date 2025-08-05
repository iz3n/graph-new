"use client";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Image, Text, Flex, List } from "@mantine/core";
import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";

const Peyvandi = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Dr. Peyvandi Aesthetic Clinic"
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
          src="/portfolio-peyvandi.webp"
          w={"100%"}
          h={"auto"}
          radius={12}
          my={32}
        />
        <Flex w={"100%"} align={"center"} mb={16}>
          <Text component="h2" fz={20} fw={600}>
            About the Project
          </Text>
          <a href="https://drpeyvandy.com" target="_blank" style={{ marginLeft: "auto" }} className="see-website-btn">
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
          This web platform was developed for one of Iran’s leading aesthetic
          clinics, enabling clients to explore services, book appointments, and
          maintain a consistent relationship with their medical team through
          personalized user accounts.
        </Text>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Graph&rsquo;s Role
        </Text>
        <List>
          <List.Item fz={16} fw={400}>
            Web platform design and development
          </List.Item>
          <List.Item fz={16} fw={400}>
            UI/UX design tailored to aesthetic industry standards
          </List.Item>
          <List.Item fz={16} fw={400}>
            Custom CRM and booking system integration
          </List.Item>
          <List.Item fz={16} fw={400}>
            Loyalty-focused achievement system to increase engagemen
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Challenges Tackled
        </Text>
        <List>
          <List.Item fz={16} fw={400}>
            Creating a personalized experience to build patient loyalty
          </List.Item>
          <List.Item fz={16} fw={400}>
            Streamlining service access and communication between clinic and
            patients
          </List.Item>
        </List>
        <Text component="h3" mb={16} fz={20} fw={600} mt={32}>
          Outcome
        </Text>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>
            Enhanced patient satisfaction and retention
          </Text>
        </Flex>
        <Flex align="center" gap={4}>
          <IconCircleCheck size={28} fill="#66a80f" color="white" />
          <Text fz={16} fw={400}>
            Efficient client data and service cycle management
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

export default Peyvandi;
