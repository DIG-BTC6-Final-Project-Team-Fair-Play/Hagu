import { FooterIcons } from "../../components/FooterIcons";
import { Header } from "../../components/Header";
// import { Header } from "../../components/Header";
import { SeedlingSelect } from "../../components/SeedSelect";
import { Box, Flex, ScrollArea } from "@mantine/core";

export const SeedlingSelectPage = () => {
  return (
    <>
      <Flex className="zen-maru-gothic-regular"direction="column" bg={"#F2EBD9"} style={{ height: "100vh" }}>
        <Header content="育てている苗"></Header>
        <Box flex={1}>
          <ScrollArea h={"calc(100vh - 60px - 60px)"}>
            {/* <Header /> */}
            <SeedlingSelect />
          </ScrollArea>
        </Box>
        <Box h={60} pos={"fixed"} bottom={0} w={"100%"}>
          <FooterIcons />
        </Box>
      </Flex>
    </>
  );
};
