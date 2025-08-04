import {
  BackgroundImage,
  Box,
  Card,
  Divider,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import Lannest from "@/components/projects/lannest";
import Peyvandi from "@/components/projects/peyvandi";
import Sinamed from "@/components/projects/sinamed";
import Bartarkhodro from "@/components/projects/bartarkhodro";

const Portfolio = () => {
  return (
    <Flex
      className="portfolio-bg"
      w={"100%"}
      m={"auto"}
      align={"center"}
      p={0}
      direction={"column"}
      pb={130}
    >
      <Box w={"80%"} h={200} mt={130} mb={130}>
        <Text fz={39} w={600}>
          Our Portfolio
        </Text>
        <Text fz={16} w={"100%"} maw={600}>
          Lorem ipsum dolor sit amet consectetur. Vitae sed venenatis id
          condimentum nulla duis maecenas magna.
        </Text>
      </Box>
      <BackgroundImage
        src="/lannest-bg.png"
        w={"80%"}
        h={{base: 210, md: 400}}
        radius={16}
        mb={32}
      >
        <Card
          p={{base: 16, md: 42}}
          w={"100%"}
          h={"100%"}
          bg={
            "linear-gradient(259deg, rgba(102, 102, 102, 0.20) -30.25%, rgba(0, 0, 0, 0.80) 74.59%)"
          }
          radius={16}
        >
          <Flex direction={"column"} h={"100%"}>
            <Flex align={"center"} w={"100%"}>
              <Image src="/lannest.svg" w={{base: 38, md: 90}} h={{base: "auto", md: 100}} />
              <Divider
                mx={{base: 8, md: 48}}
                h={"70%"}
                my={"auto"}
                orientation="vertical"
                size={"sm"}
              />
              <Box>
                <Text c={"white"} fz={{base: 16, md: 25}} fw={600}>
                  LanNest.Academy
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 20}} fw={400}>
                  SaaS Language Learning Platform
                </Text>
              </Box>
            </Flex>
            <Flex mt={"auto"} align={"center"} justify={"center"} direction={{base: "column", md: "row"}}>
              <Box>
                <Text c={"white"} fz={{base: 12, md: 20}} fw={600}>
                  A Personalized Path to Language Mastery
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 16}} fw={400}>
                  An AI-powered SaaS product redefining English learning through
                  smart progress tracking and gamified engagement.
                </Text>
              </Box>
              <Lannest />
            </Flex>
          </Flex>
        </Card>
      </BackgroundImage>
      <BackgroundImage
        src="/drpeyvandi-bg.png"
        w={"80%"}
        h={{base: 210, md: 400}}
        radius={16}
        mb={32}
      >
        <Card
          p={{base: 16, md: 42}}
          w={"100%"}
          h={"100%"}
          bg={
            "linear-gradient(259deg, rgba(102, 102, 102, 0.20) -30.25%, rgba(0, 0, 0, 0.80) 74.59%)"
          }
          radius={16}
        >
          <Flex direction={"column"} h={"100%"}>
            <Flex align={"center"} w={"100%"}>
              <Image src="/drpeyvandi.png" w={{base: 38, md: 90}} h={{base: "auto", md: 100}} />
              <Divider
                mx={{base: 8, md: 48}}
                h={"70%"}
                my={"auto"}
                orientation="vertical"
                size={"sm"}
              />
              <Box>
                <Text c={"white"} fz={{base: 16, md: 25}} fw={600}>
                  Dr. Peyvandi Aesthetic Clinic
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 20}} fw={400}>
                  Reservation System & CRM Panel
                </Text>
              </Box>
            </Flex>
            <Flex mt={"auto"} align={"center"} justify={"center"} direction={{base: "column", md: "row"}}>
              <Box>
                <Text c={"white"} fz={{base: 12, md: 20}} fw={600}>
                  Where Beauty Meets Smart Technology
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 16}} fw={400}>
                  A patient-centric CRM and reservation system designed for
                  seamless client interaction and long-term engagement.
                </Text>
              </Box>
              <Peyvandi />
            </Flex>
          </Flex>
        </Card>
      </BackgroundImage>
      <BackgroundImage
        src="/sinamed-bg.png"
        w={"80%"}
        h={{base: 210, md: 400}}
        radius={16}
        mb={32}
      >
        <Card
          p={{base: 16, md: 42}}
          w={"100%"}
          h={"100%"}
          bg={
            "linear-gradient(259deg, rgba(102, 102, 102, 0.20) -30.25%, rgba(0, 0, 0, 0.80) 74.59%)"
          }
          radius={16}
        >
          <Flex direction={"column"} h={"100%"}>
            <Flex align={"center"} w={"100%"}>
              <Image src="/sinamed.svg" w={{base: 38, md: 140}} h={{base: "auto", md: 60}} />
              <Divider
                mx={{base: 8, md: 48}}
                h={"70%"}
                my={"auto"}
                orientation="vertical"
                size={"sm"}
              />
              <Box>
                <Text c={"white"} fz={{base: 16, md: 25}} fw={600}>
                  Sinamed.shop
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 20}} fw={400}>
                  E-commerce & Dropshipping Platform
                </Text>
              </Box>
            </Flex>
            <Flex mt={"auto"} align={"center"} justify={"center"} direction={{base: "column", md: "row"}}>
              <Box>
                <Text c={"white"} fz={{base: 12, md: 20}} fw={600}>
                  Scalable Medical Commerce Reimagined
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 16}} fw={400}>
                  A full-featured e-commerce and dropshipping platform tailored
                  for 3,000+ medical products with advanced inventory logic.
                </Text>
              </Box>
              <Sinamed />
            </Flex>
          </Flex>
        </Card>
      </BackgroundImage>
      <BackgroundImage
        src="/bartarkhodro-bg.png"
        w={"80%"}
        h={{base: 210, md: 400}}
        radius={16}
        mb={32}
      >
        <Card
          p={{base: 16, md: 42}}
          w={"100%"}
          h={"100%"}
          bg={
            "linear-gradient(259deg, rgba(102, 102, 102, 0.20) -30.25%, rgba(0, 0, 0, 0.80) 74.59%)"
          }
          radius={16}
        >
          <Flex direction={"column"} h={"100%"}>
            <Flex align={"center"} w={"100%"}>
              <Image src="/bartarkhodro.svg" w={{base: 38, md: 140}} h={{base: "auto", md: 40}} />
              <Divider
                mx={{base: 8, md: 48}}
                h={"70%"}
                my={"auto"}
                orientation="vertical"
                size={"sm"}
              />
              <Box>
                <Text c={"white"} fz={{base: 16, md: 25}} fw={600}>
                  Bartarkhodro
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 20}} fw={400}>
                  Intelligent Search Engine
                </Text>
              </Box>
            </Flex>
            <Flex mt={"auto"} align={"center"} justify={"space-evenly"} h={"100%"} direction={{base: "column", md: "row"}}>
              <Box>
                <Text c={"white"} fz={{base: 12, md: 20}} fw={600}>
                  Precision in Parts: One OEM Code at a Time
                </Text>
                <Text c={"#CCC"} fz={{base: 12, md: 16}} fw={400}>
                  A high-performance search engine eliminating human error in
                  the identification of over 35,000 truck parts
                </Text>
              </Box>
              <Bartarkhodro />
            </Flex>
          </Flex>
        </Card>
      </BackgroundImage>
    </Flex>
  );
};

export default Portfolio;
