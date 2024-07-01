import "./HomePage.css";
import { Box, Flex, Space } from "@mantine/core";
import { StageChange } from "../../components/StageChange";
import { FooterIcons } from "../../components/FooterIcons";

export const HomePage = () => {
  return (
    <>
      <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
        <Box h={`calc(100vh - 60px - 48px -60px)`}>
          <Space h={"xl"}></Space>
          <StageChange></StageChange>
        </Box>
        <Box
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <FooterIcons></FooterIcons>
        </Box>
      </Flex>
    </>
  );
};
