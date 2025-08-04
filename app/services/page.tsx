"use client";

import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import {
  IconActivityHeartbeat,
  IconArrowRight,
  IconBracketsAngle,
  IconBrandFigma,
  IconHeartHandshake,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";

const Services = () => {
  const [active, setActive] = useState(0);

  const services = [
    [
      {
        title: "Personal Branding Websites",
        description:
          "Tailored websites that reflect your personality and goals — ideal for consultants, coaches, or creators.",
      },
      {
        title: "Corporate Websites",
        description:
          "Clean, professional sites that showcase your business and build trust with your audience.",
      },
      {
        title: "Event & Campaign Pages",
        description:
          "Dynamic landing pages for launches, campaigns, and special events — made to convert.",
      },
      {
        title: "Portfolio Websites",
        description:
          "Sleek, interactive portfolios to present your work in style and attract new opportunities.",
      },
    ],
    [
      {
        title: "Online Stores",
        description:
          "From product pages to payment gateways, we build stores that are fast, scalable, and user-friendly.",
      },
      {
        title: "Multi-vendor Marketplaces",
        description:
          "Connect buyers and sellers in a smooth, intuitive experience that grows with your business.",
      },
      {
        title: "SaaS Applications",
        description:
          "We bring your SaaS idea to life — from MVP to fully operational, cloud-ready products.",
      },
      {
        title: "Subscription Models",
        description:
          "Custom features to manage recurring payments, trials, and customer access — all seamlessly integrated.",
      },
    ],
    [
      {
        title: "Startup MVP Development",
        description:
          "Get your idea off the ground fast with a lean, functional MVP tailored to your needs.",
      },
      {
        title: "Pitch-ready Prototypes",
        description:
          "Clickable, real-looking prototypes that help you pitch with confidence.",
      },
      {
        title: "Product-Market Fit Optimization",
        description:
          "We iterate fast, using feedback to align your product with real user needs.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Build a solid foundation to grow your product without worrying about tech limitations.",
      },
    ],
    [
      {
        title: "Wireframing & User Flows",
        description:
          "Visualize user journeys and interaction logic with smooth, thoughtful flow design.",
      },
      {
        title: "UI Design Systems",
        description:
          "We create consistent, scalable design systems to speed up future growth.",
      },
      {
        title: "UX Research & Testing",
        description:
          "Understand your users, improve usability, and create delightful digital experiences.",
      },
      {
        title: "Mobile-first Design",
        description:
          "Designs that look and feel amazing on every screen — from mobile to desktop.",
      },
    ],
    [
      {
        title: "Custom Admin Dashboards",
        description:
          "Manage your business with intuitive dashboards customized to your workflows.",
      },
      {
        title: "Real-time Data Monitoring",
        description:
          "Get up-to-the-second insights with fast, secure data visualizations.",
      },
      {
        title: "KPI Tracking Systems",
        description:
          "We help you track the numbers that matter most — in a clean, digestible format.",
      },
      {
        title: "User Behavior Analytics",
        description:
          "See how users interact with your product, and make smarter decisions based on real data.",
      },
    ],
  ];

  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <>
      <Flex
        h={{ base: "auto", md: "93vh" }}
        w={"100%"}
        justify={"center"}
        align={"center"}
        gap={73}
        direction={{ base: "column-reverse", md: "row" }}
        py={{ base: 40, md: 0 }}
        px={{ base: 16, md: 0 }}
      >
        <Box maw={511}>
          <Text component="h1" fz={39} fw={400}>
            We have the <strong>best solution</strong> for your successful.
          </Text>
          <Text component="h5" fz={16} fw={400} c={"#333"}>
            Envision the future, and we’ll bring it to life with top-tier
            performance and precision.
          </Text>
        </Box>
        <Image src="/world.svg" alt="services" w={{ base: "80%", md: "50%" }} />
      </Flex>
      <Flex bg={"#E6E6E6"} py={80} px={{ base: 16, md: "10%" }} wrap={"wrap"}>
        <Text ta={"center"} w={"100%"} component="h1" fz={39} fw={400} mb={64}>
          Our Services
        </Text>
        <Flex w={{ base: "100%", md: "49%" }} wrap={"wrap"} gap={48}>
          <Flex
            maw={397}
            onClick={() => handleClick(0)}
            style={{ cursor: "pointer" }}
          >
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color={active === 0 ? "#4A1D56" : "#A48EAA"}
              me={48}
            />
            <IconSearch
              size={active === 0 ? 38 : 30}
              color={active === 0 ? "#000" : "#666"}
            />
            <Box ms={16}>
              <Text fz={20} fw={600} c={active === 0 ? "#000" : "#666"}>
                Custom Website Design
              </Text>
            </Box>
          </Flex>
          <Flex
            direction={"column"}
            gap={16}
            hiddenFrom={"md"}
            display={active === 0 ? "flex" : "none"}
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            {services[0].map((service, index) => (
              <Card key={index} radius={"16"} h={"fit-content"}>
                <Flex gap={16}>
                  <Text fz={16} fw={600}>
                    {index + 1}.
                  </Text>
                  <Box>
                    <Text fz={16} fw={600}>
                      {service.title}
                    </Text>
                    <Text fz={13} fw={400} c={"#333"}>
                      {service.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Flex>
          <Flex
            w={"100%"}
            onClick={() => handleClick(1)}
            style={{ cursor: "pointer" }}
          >
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color={active === 1 ? "#4A1D56" : "#A48EAA"}
              me={48}
            />
            <IconHeartHandshake
              size={active === 1 ? 38 : 30}
              color={active === 1 ? "#000" : "#666"}
            />
            <Box ms={16}>
              <Text fz={20} fw={600} c={active === 1 ? "#000" : "#666"}>
                E-commerce & SaaS Platforms
              </Text>
            </Box>
          </Flex>
          <Flex
            direction={"column"}
            gap={16}
            hiddenFrom={"md"}
            display={active === 1 ? "flex" : "none"}
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            {services[1].map((service, index) => (
              <Card key={index} radius={"16"} h={"fit-content"}>
                <Flex gap={16}>
                  <Text fz={16} fw={600}>
                    {index + 1}.
                  </Text>
                  <Box>
                    <Text fz={16} fw={600}>
                      {service.title}
                    </Text>
                    <Text fz={13} fw={400} c={"#333"}>
                      {service.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Flex>
          <Flex
            w={"100%"}
            onClick={() => handleClick(2)}
            style={{ cursor: "pointer" }}
          >
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color={active === 2 ? "#4A1D56" : "#A48EAA"}
              me={48}
            />
            <IconBracketsAngle
              size={active === 2 ? 38 : 30}
              color={active === 2 ? "#000" : "#666"}
            />
            <Box ms={16}>
              <Text fz={20} fw={600} c={active === 2 ? "#000" : "#666"}>
                Web-based Startup Projects
              </Text>
            </Box>
          </Flex>
          <Flex
            direction={"column"}
            gap={16}
            hiddenFrom={"md"}
            display={active === 2 ? "flex" : "none"}
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            {services[2].map((service, index) => (
              <Card key={index} radius={"16"} h={"fit-content"}>
                <Flex gap={16}>
                  <Text fz={16} fw={600}>
                    {index + 1}.
                  </Text>
                  <Box>
                    <Text fz={16} fw={600}>
                      {service.title}
                    </Text>
                    <Text fz={13} fw={400} c={"#333"}>
                      {service.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Flex>
          <Flex
            w={"100%"}
            onClick={() => handleClick(3)}
            style={{ cursor: "pointer" }}
          >
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color={active === 3 ? "#4A1D56" : "#A48EAA"}
              me={48}
            />
            <IconBrandFigma
              size={active === 3 ? 38 : 30}
              color={active === 3 ? "#000" : "#666"}
            />
            <Box ms={16}>
              <Text fz={20} fw={600} c={active === 3 ? "#000" : "#666"}>
                Custom Website Design
              </Text>
            </Box>
          </Flex>
          <Flex
            direction={"column"}
            gap={16}
            hiddenFrom={"md"}
            display={active === 3 ? "flex" : "none"}
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            {services[3].map((service, index) => (
              <Card key={index} radius={"16"} h={"fit-content"}>
                <Flex gap={16}>
                  <Text fz={16} fw={600}>
                    {index + 1}.
                  </Text>
                  <Box>
                    <Text fz={16} fw={600}>
                      {service.title}
                    </Text>
                    <Text fz={13} fw={400} c={"#333"}>
                      {service.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Flex>
          <Flex
            w={"100%"}
            onClick={() => handleClick(4)}
            style={{ cursor: "pointer" }}
          >
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color={active === 4 ? "#4A1D56" : "#A48EAA"}
              me={48}
            />
            <IconActivityHeartbeat
              size={active === 4 ? 38 : 30}
              color={active === 4 ? "#000" : "#666"}
            />
            <Box ms={16}>
              <Text fz={20} fw={600} c={active === 4 ? "#000" : "#666"}>
                Custom Website Design
              </Text>
            </Box>
          </Flex>
          <Flex
            direction={"column"}
            gap={16}
            hiddenFrom={"md"}
            display={active === 4 ? "flex" : "none"}
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            {services[4].map((service, index) => (
              <Card key={index} radius={"16"} h={"fit-content"}>
                <Flex gap={16}>
                  <Text fz={16} fw={600}>
                    {index + 1}.
                  </Text>
                  <Box>
                    <Text fz={16} fw={600}>
                      {service.title}
                    </Text>
                    <Text fz={13} fw={400} c={"#333"}>
                      {service.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        <Flex
          w={"50%"}
          direction={"column"}
          gap={16}
          justify={"space-around"}
          visibleFrom={"md"}
        >
          {services[active].map((service, index) => (
            <Card key={index} radius={"16"} h={"fit-content"}>
              <Flex gap={16}>
                <Text fz={16} fw={600}>
                  {index + 1}.
                </Text>
                <Box>
                  <Text fz={16} fw={600}>
                    {service.title}
                  </Text>
                  <Text fz={13} fw={400} c={"#333"}>
                    {service.description}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Flex>
      <BackgroundImage src="/Rectangle.png" w={"100%"} h={"100%"}>
        <Flex
          h={"80vh"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          direction={{ base: "column-reverse", md: "row" }}
          gap={{ base: 48, md: 0 }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={16}
            ms={16}
            me={16}
          >
            <Card
              bg={"#E6E6E6"}
              w={{ base: "100%", md: 151 }}
              p={16}
              h={232}
              radius={"16"}
              ta={"center"}
              style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <Image src="/KTC.png" w={119} h={119} mb={16} m={"auto"} />
              <Text
                fz={{ base: 13, md: 10 }}
                ta={"center"}
                fw={400}
                lh={"150%"}
                c={"#333"}
                maw={{ base: 112, md: "100%" }}
                m={"auto"}
              >
                Official holding company of Sinamed Company
              </Text>
            </Card>
            <Flex direction={"column"} gap={8} ms={{ base: 0, md: 16 }}>
              <Card
                bg={"#12565B"}
                p={16}
                w={{ base: "100%", md: 262 }}
                radius={"16"}
                style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Flex w={"100%"}>
                  <Image src="/sinamed.svg" w={100} h={28} my={"auto"} />
                  <Text
                    fz={{ base: 13, md: 10 }}
                    ms={{ base: 16, md: "auto" }}
                    fw={400}
                    lh={"150%"}
                    c={"#fff"}
                    w={{ base: "100%", md: 112 }}
                  >
                    E-Commerce and Drophipping Medical Equipment
                  </Text>
                </Flex>
              </Card>
              <Card
                bg={"#05609A"}
                p={16}
                w={{ base: "100%", md: 359 }}
                radius={"16"}
                h={62}
                style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Flex w={"100%"}>
                  <Image src="/aksablue.svg" w={100} h={28} my={"auto"} />
                  <Text
                    fz={{ base: 13, md: 10 }}
                    ms={16}
                    fw={400}
                    lh={"150%"}
                    c={"#fff"}
                  >
                    Website for product showcases and a company dashboard for
                    national auctions.
                  </Text>
                </Flex>
              </Card>
              <Card
                bg={"#CCC"}
                p={16}
                w={{ base: "100%", md: 359 }}
                radius={"16"}
                style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Flex w={"100%"}>
                  <Image src="/bartarkhodro.svg" w={100} h={28} my={"auto"} />
                  <Text
                    fz={{ base: 13, md: 10 }}
                    ms={16}
                    fw={400}
                    lh={"150%"}
                    c={"#fff"}
                  >
                    Website for service introductions and a search engine for
                    spare parts of heavy and semi-heavy vehicles.
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Flex>

          <Box
            ms={{ base: 0, md: 80 }}
            w={{ base: "100%", md: 328 }}
            px={{ base: 16, md: 0 }}
            ta={{ base: "center", md: "left" }}
          >
            <Text fz={24} fw={600}>
              Our Portfolio
            </Text>
            <Text fz={16} fw={400} c={"#333"}>
              Lorem ipsum dolor sit amet consectetur. Vitae sed venenatis id
              condimentum nulla duis maecenas magna.
            </Text>
            <Button
              mt={32}
              rightSection={<IconArrowRight size={16} />}
              w={{ base: "50%", md: "fit-content" }}
              radius={8}
              bg={"#000"}
              h={{ base: 48, md: 40 }}
            >
              Portfolio
            </Button>
          </Box>
        </Flex>
      </BackgroundImage>
    </>
  );
};

export default Services;
