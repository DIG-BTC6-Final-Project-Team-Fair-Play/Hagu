import { FooterIcons } from "../../components/FooterIcons";
import { Header } from "../../components/Header";
import { SeedlingSelect } from "../../components/SeedSelect";
import { Box, Flex } from "@mantine/core";

export const SeedlingSelectPage = () => {
  return (
    <>
      <Flex direction="column" style={{ height: "100vh" }}>
        <Box>
          <Header />
          <SeedlingSelect />
          <FooterIcons />
        </Box>
      </Flex>
    </>
  );
};
