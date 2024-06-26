import "./HomePage.css";
import { AdviceBox } from "../../components/AdviceBox";
import { MainArea } from "../../components/MainArea";
import { Box, Flex } from "@mantine/core";
import { Header } from "../../components/Header";
import { HeaderSeedling } from "../../components/HeaderSeedling";

export const HomePage = () => {
  return (
    <>
      <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
        <Box>
          <Header></Header>
          <HeaderSeedling></HeaderSeedling>
        </Box>
        <AdviceBox></AdviceBox>
        <MainArea></MainArea>
      </Flex>
    </>
  );
};
