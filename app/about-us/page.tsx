import { Box, Divider, Flex, Image, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const AboutUs = () => {
  return (
    <>
      <Flex
        h={{ base: "80vh", md: "99vh" }}
        w={"100%"}
        align={"center"}
        justify={"center"}
        gap={100}
        direction={{ base: "column-reverse", md: "row" }}
        px={16}
      >
        <Box>
          <Text fz={39} fw={600} component="h1">
            About Us
          </Text>
          <Text fz={16} fw={400} component="h2" maw={400}>
            Graph is a specialized team designing innovative and scalable web
            platforms to empower businesses and create digital value.
          </Text>
        </Box>
        <Box>
          <Image src="/about-image.png" alt="about-us" />
        </Box>
      </Flex>
      <Text component="h1" c={"#000"} fz={39} fw={600} ta={"center"} my={40}>
        Our Team
      </Text>
      <Flex
        wrap={"wrap"}
        gap={80}
        maw={1660}
        m={"auto"}
        px={16}
        direction={{ base: "column", md: "row" }}
        pb={120}
      >
        <Box ta={"center"} w={{ base: "100%", md: "calc(33.3% - 80px)" }}>
          <Image src="/profiles/mohammadreza.webp" alt="team-1" />
          <Text component="h1" fz={20} fw={600} mt={24} mb={8}>
          Mohammadreza Naeimi
          </Text>
          <Text fz={16} fw={400} mb={24}>
          Co-Founder and CEO
          </Text>
          <Flex w={"100%"} justify={"center"} align={"center"} gap={18}>
            <a href="https://x.com/mr_naeimi/">
              <IconBrandInstagram stroke={1} />
            </a>
            <a href="https://www.figma.com/design/BKeR3YkLRVKhEUiQ6nxzOc/Graph-s-Website?node-id=267-444&t=S0XpzclVOjDfvET1-0">
              <IconBrandTwitter stroke={1} />
            </a>
            <a href="https://linkedin.com/in/mrnaeimi">
              <IconBrandLinkedin stroke={1} />
            </a>
          </Flex>
        </Box>
        <Box ta={"center"} w={{ base: "100%", md: "calc(33.3% - 80px)" }}>
          <Image src="/profiles/mehrdad.webp" alt="team-1" />
          <Text component="h1" fz={20} fw={600} mt={24} mb={8}>
          Mehrad Radfar
          </Text>
          <Text fz={16} fw={400} mb={24}>
          Lead Product Designer
          </Text>
          <Flex w={"100%"} justify={"center"} align={"center"} gap={18}>
            <a href="https://linkedin.com/in/mehrad-radfar-14b845180/">
              <IconBrandLinkedin stroke={1} />
            </a>
          </Flex>
        </Box>
        <Box ta={"center"} w={{ base: "100%", md: "calc(33.3% - 80px)" }}>
          <Image src="/profiles/sina.webp" alt="team-1" />
          <Text component="h1" fz={20} fw={600} mt={24} mb={8}>
          Sina Hoonarmand
          </Text>
          <Text fz={16} fw={400} mb={24}>
          Senior Product Designer

          </Text>
          <Flex w={"100%"} justify={"center"} align={"center"} gap={18}>
            <a href="https://linkedin.com/in/sina-honarmand-javan-134620260/">
              <IconBrandLinkedin stroke={1} />
            </a>
          </Flex>
        </Box>
        <Box ta={"center"} w={{ base: "100%", md: "calc(33.3% - 80px)" }}>
          <Image src="/profiles/behrad.webp" alt="team-1" />
          <Text component="h1" fz={20} fw={600} mt={24} mb={8}>
          Behrad Khizab

          </Text>
          <Text fz={16} fw={400} mb={24}>
          Co-Founder and Technical Manager

          </Text>
          
          <Flex w={"100%"} justify={"center"} align={"center"} gap={18}>
            <a href="https://linkedin.com/in/behrad-khizab/">
              <IconBrandLinkedin stroke={1} />
            </a>
          </Flex>
        </Box>
      </Flex>
      <Flex
        w={"100%"}
        align={"center"}
        justify={"center"}
        gap={100}
        bg={"#E6E6E6"}
        direction={"column"}
        px={{ base: 16, md: 100 }}
        py={80}
      >
        <Box w={"100%"} maw={1660} m={"auto"}>
          <Text fz={39} fw={600} component="h1">
            Our Vision
          </Text>
          <Divider h={2} bg={"#999"} w={"100%"} my={24} />
          <Flex>
            <Divider
              me={24}
              size={"xl"}
              orientation="vertical"
              color="#4A1D56"
              style={{
                borderRadius: 999,
              }}
            />
            <Text>
              To become a leading force in innovative web platform design by
              creating scalable, user-centered digital solutions. At Graph, we
              envision empowering businesses through seamless SaaS platforms,
              intuitive dashboards, and custom web development that drives
              long-term growth and digital transformation.
            </Text>
          </Flex>
        </Box>
        <Box w={"100%"} maw={1660} m={"auto"}>
          <Text fz={39} fw={600} component="h1">
            Our Mission
          </Text>
          <Divider h={2} bg={"#999"} w={"100%"} my={24} />
          <Flex>
            <Divider
              me={24}
              size={"xl"}
              orientation="vertical"
              color="#4A1D56"
              style={{
                borderRadius: 999,
              }}
            />
            <Text>
              Our mission is to design and deliver powerful, tailored web
              platforms that align with your business goals. We focus on
              UX-driven development, SaaS scalability, and efficient web
              technologies to build digital products that create impact, solve
              problems, and elevate user experience.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AboutUs;
