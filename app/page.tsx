"use client";

import { Box, Button, Card, Flex, Image, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
  IconBracketsAngle,
  IconBrandFigma,
  IconHeartHandshake,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Flex h={{ base: "100%", md: "93vh" }} w={"100%"} direction={"column"}>
        <Flex
          h={{ base: "100%", md: 270 }}
          align={"center"}
          w={"100%"}
          m={"auto"}
          justify={"center"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: 459 }}
            px={{ base: 16, md: 0 }}
            my={{ base: 40, md: 0 }}
          >
            <Text
              component={"h1"}
              size={"39px"}
              fw={400}
              maw={{ base: 300, md: "100%" }}
              lh={1.2}
            >
              This is where everything <strong>begins</strong>
            </Text>
            <Text
              component={"h5"}
              size={"16px"}
              fw={400}
              c={"#777"}
              mt={8}
              lh={1.5}
            >
              We craft UI/UX, websites, apps, and business solutions for
              seamless, high-performing digital experiences.
            </Text>
            <Button
              w={170}
              mt={32}
              fz={16}
              fw={400}
              h={48}
              bg="#000"
              px={16}
              py={8}
              c={"#fff"}
              radius={8}
              bd={0}
            >
              Explore our works
            </Button>
          </Box>
          <Box w={{ base: "100%", md: 459 }}>
            <Image src="/graph.png" alt="Graph" />
          </Box>
        </Flex>
        <Box hiddenFrom="md" mb={54}>
          <Carousel
            height={"auto"}
            slideSize={"25%"}
            align="start"
            slideGap="xl"
            loop
            w={"100%"}
            withControls={false}
            withIndicators={false}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            dragFree
          >
            <Carousel.Slide>
              <Image src="/carousel/KTC.svg" alt="Sinamed" w={"auto"} h={43} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/Vector.svg"
                alt="Sinamed"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/intrasensors.be.svg"
                alt="intrasensors"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/lannest.academy.svg"
                alt="lannest"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/aksablue.svg"
                alt="aksablue"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/Sinamed.svg"
                alt="Sinamed"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/bartarkhodro.svg"
                alt="bartarkhodro"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="/carousel/drpeyvandi.svg"
                alt="drpeyvandi"
                w={"auto"}
                h={43}
              />
            </Carousel.Slide>
          </Carousel>
        </Box>
        <Flex
          direction={"row"}
          justify={"space-between"}
          align={"center"}
          w={"100%"}
          h={"67px"}
          px={"100"}
          mb={54}
          visibleFrom="md"
        >
          <Image src="/carousel/KTC.svg" alt="Sinamed" />
          <Image src="/carousel/Vector.svg" alt="Sinamed" />
          <Image src="/carousel/intrasensors.be.svg" alt="Sinamed" />
          <Image src="/carousel/lannest.academy.svg" alt="Sinamed" />
          <Image src="/carousel/aksablue.svg" alt="Sinamed" />
          <Image src="/carousel/Sinamed.svg" alt="Sinamed" />
          <Image src="/carousel/bartarkhodro.svg" alt="Sinamed" />
          <Image src="/carousel/drpeyvandi.svg" alt="Sinamed" />
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        p={{base: 32, md: 40}}
        bg={"#f5f5f5"}
        direction={"column"}
        align={"center"}
      >
        <Text component={"h1"} fz={{base: 25, md: 39}} fw={{base: 600, md: 400}}>
          Our works crossed
        </Text>
        <Flex mt={32} gap={64} direction={{base: "column", md: "row"}}>
          <Image src="/work-locations.png" alt="Graph works locations" w={{base: "100%", md: "auto"}} h={{base: "auto", md: 260}}/>
          <Flex direction={"column"} gap={16}>
            <Text component="h2" fz={20}>
              <Text component="span" fz={31} fw={600}>
                +1M
              </Text>{" "}
              Used
            </Text>
            <Text component="h2" fz={20}>
              <Text component="span" fz={31} fw={600}>
                +10
              </Text>{" "}
              projects
            </Text>
            <Text component="h2" fz={20}>
              <Text component="span" fz={31} fw={600}>
                4
              </Text>{" "}
              Countries
            </Text>
            <Text component="h2" fz={20}>
              <Text component="span" fz={31} fw={600}>
                3
              </Text>{" "}
              Continents
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={"100%"} justify={"center"} gap={48} h={{base: "auto", md: "80vh"}} p={{base: 32, md: 0}} align={"center"} direction={{base: "column", md: "row"}}>
        <Flex direction={"column"} gap={16}>
          <Card w={309} bg={"#E6E6E6"} p={16} radius={12} h={96}>
            <Flex gap={16}>
              <IconHeartHandshake width="24" height="24" />
              <Box>
                <Text fz={16} fw={600} component="h2">
                  Business solution
                </Text>
                <Text fz={13} component="p">
                  optimize operations with smart digital tools for growth.
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card ms={58} w={309} bg={"#E6E6E6"} p={16} radius={12} h={96}>
            <Flex gap={16}>
              <IconBrandFigma size={24} />
              <Box>
                <Text fz={16} fw={600} component="h2">
                  Design Solutions
                </Text>
                <Text fz={13} component="p">
                  create seamless UI/UX and stunning digital experiences.
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card ms={29} w={309} bg={"#E6E6E6"} p={16} radius={12} h={96}>
            <Flex gap={16}>
              <IconBracketsAngle width={24} height={24} />
              <Box>
                <Text fz={16} fw={600} component="h2">
                  Business solution
                </Text>
                <Text fz={13} component="p">
                  optimize operations with smart digital tools for growth.
                </Text>
              </Box>
            </Flex>
          </Card>
        </Flex>
        <Flex direction={"column"} w={328} h={320} justify={"center"}>
          <Text component="h1" mb={8} fz={25} fw={400}>
            Our Services
          </Text>
          <Text component="h2" fz={16}>
            Transform your vision with our expert UI/UX design, custom web
            development, and data-driven dashboards. Let’s build something
            amazing together!
          </Text>
          <Button
            bg={"#000"}
            w={"fit-content"}
            mt={32}
            c={"#fff"}
            radius={8}
            bd={0}
          >
            Services
          </Button>
        </Flex>
      </Flex>
      <Image w={"100%"} src={"/howto.png"} alt="How to" />
    </>
  );
}
