import { FooterIcons } from "../../components/FooterIcons";
// import { Header } from "../../components/Header";
import { SeedlingSelect } from "../../components/SeedSelect";
import { Box, Flex } from "@mantine/core";

export const SeedlingSelectPage = () => {
  return (
    <>
      <Flex direction="column" style={{ height: "100vh" }}>
        <Box h={`calc(100vh - 60px)`}>
          {/* <Header /> */}
          <SeedlingSelect />
        </Box>
        <Box
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <FooterIcons />
        </Box>
      </Flex>
    </>
  );
};
