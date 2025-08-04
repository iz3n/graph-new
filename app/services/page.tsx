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
  IconHeartbeat,
  IconHeartHandshake,
  IconSearch,
} from "@tabler/icons-react";

const Services = () => {
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
      <Flex bg={"#E6E6E6"} py={80} px={"10%"} wrap={"wrap"}>
        <Text ta={"center"} w={"100%"} component="h1" fz={39} fw={400} mb={64}>
          Our Services
        </Text>
        <Flex w={"49%"} wrap={"wrap"} gap={48}>
          <Flex maw={397}>
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color="#A48EAA"
              me={48}
            />
            <IconSearch size={38} />
            <Box ms={16}>
              <Text fz={20} fw={600}>
                Custom Website Design
              </Text>
              <Text fz={13} fw={400} c={"#333"}>
                The discovery level identifies your business needs to ensure
                solutions align with your goals.
              </Text>
            </Box>
          </Flex>
          <Flex w={"100%"}>
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color="#A48EAA"
              me={48}
            />
            <IconHeartHandshake size={30} />
            <Box ms={16}>
              <Text fz={20} fw={600}>
                E-commerce & SaaS Platforms
              </Text>
            </Box>
          </Flex>
          <Flex w={"100%"}>
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color="#A48EAA"
              me={48}
            />
            <IconBracketsAngle size={30} />
            <Box ms={16}>
              <Text fz={20} fw={600}>
                Web-based Startup Projects
              </Text>
            </Box>
          </Flex>
          <Flex w={"100%"}>
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color="#A48EAA"
              me={48}
            />
            <IconBrandFigma size={30} />
            <Box ms={16}>
              <Text fz={20} fw={600}>
                Custom Website Design
              </Text>
            </Box>
          </Flex>
          <Flex w={"100%"}>
            <Divider
              size={4}
              style={{ borderRadius: 8 }}
              orientation="vertical"
              color="#A48EAA"
              me={48}
            />
            <IconActivityHeartbeat size={30} />
            <Box ms={16}>
              <Text fz={20} fw={600}>
                Custom Website Design
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex w={"50%"} direction={"column"} gap={16} justify={"space-around"}>
          <Card radius={"16"} h={"fit-content"}>
            <Flex gap={16}>
              <Text fz={16} fw={600}>
                1.
              </Text>
              <Box>
                <Text fz={16} fw={600}>
                  Benchmark
                </Text>
                <Text fz={13} fw={400} c={"#333"}>
                  Benchmark your business and gain deeper insights into your
                  audience, so we can provide a solution tailored just for you.
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card radius={"16"} h={"fit-content"}>
            <Flex gap={16}>
              <Text fz={16} fw={600}>
                2.
              </Text>
              <Box>
                <Text fz={16} fw={600}>
                  Benchmark
                </Text>
                <Text fz={13} fw={400} c={"#333"}>
                  Benchmark your business and gain deeper insights into your
                  audience, so we can provide a solution tailored just for you.
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card radius={"16"} h={"fit-content"}>
            <Flex gap={16}>
              <Text fz={16} fw={600}>
                3.
              </Text>
              <Box>
                <Text fz={16} fw={600}>
                  Benchmark
                </Text>
                <Text fz={13} fw={400} c={"#333"}>
                  Benchmark your business and gain deeper insights into your
                  audience, so we can provide a solution tailored just for you.
                </Text>
              </Box>
            </Flex>
          </Card>
        </Flex>
      </Flex>
      <BackgroundImage src="/Rectangle.png" w={"100%"} h={"100%"}>
        <Flex
          h={"80vh"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          direction={{ base: "column-reverse", md: "row" }}
          gap={{base: 48, md: 0}}
        >
          <Flex direction={{base: "column", md: "row"}} gap={16} ms={16} me={16}>
            <Card bg={"#E6E6E6"} w={{base: "100%", md: 151}} p={16} h={232} radius={"16"} ta={"center"} style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}>
              <Image src="/KTC.png" w={119} h={119} mb={16} m={"auto"}/>
              <Text fz={{base: 13, md: 10}} ta={"center"} fw={400} lh={"150%"} c={"#333"} maw={{base: 112, md: "100%"}} m={"auto"}>
                Official holding company of Sinamed Company
              </Text>
            </Card>
            <Flex direction={"column"} gap={8} ms={{base: 0, md: 16}}>
              <Card
                bg={"#12565B"}
                p={16}
                w={{base: "100%", md: 262}}
                radius={"16"}
                style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Flex w={"100%"}>
                  <Image src="/sinamed.svg" w={100} h={28} my={"auto"} />
                  <Text
                    fz={{base: 13, md: 10}}
                    ms={{base: 16, md: "auto"}}
                    fw={400}
                    lh={"150%"}
                    c={"#fff"}
                    w={{base: "100%", md: 112}}
                  >
                    E-Commerce and Drophipping Medical Equipment
                  </Text>
                </Flex>
              </Card>
              <Card
                bg={"#05609A"}
                p={16}
                w={{base: "100%", md: 359}}
                radius={"16"}
                h={62}
                style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Flex w={"100%"}>
                  <Image src="/aksablue.svg" w={100} h={28} my={"auto"} />
                  <Text fz={{base: 13, md: 10}} ms={16} fw={400} lh={"150%"} c={"#fff"}>
                    Website for product showcases and a company dashboard for
                    national auctions.
                  </Text>
                </Flex>
              </Card>
              <Card
                bg={"#CCC"}
                p={16}
                w={{base: "100%", md: 359}}
                radius={"16"}
                style={{ boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Flex w={"100%"}>
                  <Image src="/bartarkhodro.svg" w={100} h={28} my={"auto"} />
                  <Text fz={{base: 13, md: 10}} ms={16} fw={400} lh={"150%"} c={"#fff"}>
                    Website for service introductions and a search engine for
                    spare parts of heavy and semi-heavy vehicles.
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Flex>

          <Box ms={{base: 0, md: 80}} w={{base: "100%", md: 328}} px={{base: 16, md: 0}} ta={{base: "center", md: "left"}}>
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
              w={{base: "50%", md: "fit-content"}}
              radius={8}
              bg={"#000"}
              h={{base: 48, md: 40}}
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
