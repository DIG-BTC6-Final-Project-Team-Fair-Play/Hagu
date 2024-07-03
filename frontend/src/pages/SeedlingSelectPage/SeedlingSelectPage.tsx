import { FooterIcons } from "../../components/FooterIcons";
// import { Header } from "../../components/Header";
import { SeedlingSelect } from "../../components/SeedSelect";
import { Box, Flex } from "@mantine/core";

export const SeedlingSelectPage = () => {
  return (
    <>
      <Flex direction="column" style={{ height: "100vh" }}>
        <Box h={60}>育てている苗</Box>
        <hr style={{ margin: 0 }}></hr>
        <Box flex={1}>
          {/* <Header /> */}
          <SeedlingSelect />
        </Box>
        <Box h={60}>
          <FooterIcons />
        </Box>
      </Flex>
    </>
  );
};
