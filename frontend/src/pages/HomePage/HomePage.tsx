import "./HomePage.css";
import { AdviceBox } from "../../components/AdviceBox";
import { Box, Flex } from "@mantine/core";
import { Header } from "../../components/Header";
import { HeaderSeedling } from "../../components/HeaderSeedling";
import { SeedChange } from "../../components/SeedChange";

export const HomePage = () => {
  return (
    <>
      <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
        <Box>
          <Header></Header>
          <HeaderSeedling></HeaderSeedling>
          <AdviceBox></AdviceBox>
          <SeedChange></SeedChange>
        </Box>
      </Flex>
    </>
  );
};
