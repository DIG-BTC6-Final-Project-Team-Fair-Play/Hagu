import { Box, Flex } from "@mantine/core";
import React from "react";
import { Header } from "../../components/Header";
import { HeaderSeedling } from "../../components/HeaderSeedling";
import { SelectSeedling } from "../../components/SelectSeedling";
import { SelectBtnDouble } from "../../components/SelectBtnDouble";

export const CreatePage = () => {
  return (
    <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
      <Box>
        <Header></Header>
        <HeaderSeedling></HeaderSeedling>
      </Box>
      <Box style={{ flex: 1 }}>
        <SelectSeedling></SelectSeedling>
      </Box>
      <Box>
        <SelectBtnDouble></SelectBtnDouble>
      </Box>
    </Flex>
  );
};
