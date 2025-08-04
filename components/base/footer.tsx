import { Box, Button, Flex, Text, TextInput } from "@mantine/core";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Flex
        bg={"rgba(0, 0, 0, 0.9)"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        py={{base: 32, md: 62}}
      >
        <Flex w={{base: "100%", md: "60%"}} justify={"space-between"} direction={{base: "column", md: "row"}} p={{base: 32, md: 0}} gap={{base: 32, md: 0}}>
          <Box>
            <Text fz={25} c={"white"} fw={600}>
              Big-Bang starts here!
            </Text>
            <Text fz={20} c={"white"} mt={16} fw={400}>
              Leave your Contact info and we’ll reach you.
            </Text>
          </Box>
          <TextInput
            m={"auto"}
            w={{base: "100%", md: 328}}
            placeholder="Phon No. / Email"
            size="md"
            rightSection={
              <Button me={5} p={0} c={"white"} bg={"#000000"} w={"89px"} h={30}>
                Submit
              </Button>
            }
            rightSectionWidth={89}
          />
        </Flex>
      </Flex>
      <Flex h={{base: "auto", md: "50vh"}} p={{base: 32, md: 40}} bg={"#000000"} justify={"space-around"}>
        <Flex
          align={"center"}
          justify={"center"}
          gap={80}
          w={"100%"}
          direction={"column"}
        >
          <Flex align={"center"} justify={"center"} gap={40} wrap={"wrap"}>
            <Link href={"/"}>
              <Text c={"white"} style={{ textDecoration: "underline" }}>
                Home
              </Text>
            </Link>
            <Link href={"/"}>
              <Text c={"white"} style={{ textDecoration: "underline" }}>
                Services
              </Text>
            </Link>
            <Link href={"/"}>
              <Text c={"white"} style={{ textDecoration: "underline" }}>
                Portfolio
              </Text>
            </Link>
            <Link href={"/"}>
              <Text c={"white"} style={{ textDecoration: "underline" }}>
                About US
              </Text>
            </Link>
          </Flex>
          <Flex w={{base: "100%", md: "60%"}} justify={"space-between"} h={"fit-content"} direction={{base: "column", md: "row"}} gap={{base: 32, md: 0}} align={"center"}>
            <Box ta={"left"}>
              <Text c={"white"}>
              Sharif Box Coworking - Ahmad Ghasemi St - Akbary Blvd - Tarasht - Tehran - Iran
              </Text>
              <Text c={"white"}>
              Almoj - Mosqat - Oman
              </Text>
              <Text c={"white"}>
              Simmering Haupt Straße - Vienna - Astria
              </Text>
              <Text c={"white"} mt={24}>+98 938 144 7322</Text>
              <Text c={"white"}>+43 665657 01224</Text>
              <Text c={"white"}>+968 9207 1031</Text>
            </Box>
            <Text c={"#999"} fz={10}>
              Copyright © 2025 All Rights Reserved by Graph
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
