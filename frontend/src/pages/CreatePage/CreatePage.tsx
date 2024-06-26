import { Box, Flex } from "@mantine/core";
// import React from "react";
import { Header } from "../../components/Header";
import { HeaderSeedling } from "../../components/HeaderSeedling";
// import { SelectSeedling } from "../../components/SelectSeedling";
import { SelectBtnDouble } from "../../components/SelectBtnDouble";
import { ItemsList } from "../../components/ItemsList";

const dummyItems = {
  id: 1,
  vegetable_name: "ピーマン",
  equipment_list: [
    "スコップ",
    "ピーマンの種",
    "培養土",
    "鉢底石",
    "化成肥料",
    "仮支柱",
    "本支柱",
    "麻紐",
    "園芸用はさみ",
  ],
};

export const CreatePage = () => {
  return (
    <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
      <Box>
        <Header></Header>
        <HeaderSeedling></HeaderSeedling>
      </Box>
      {/* NOTE:Routeで表示するコンポーネントを切り替える予定 */}
      <Box style={{ flex: 1 }}>
        {/* <SelectSeedling></SelectSeedling> */}
        <ItemsList {...dummyItems}></ItemsList>
      </Box>
      <Box>
        <SelectBtnDouble></SelectBtnDouble>
      </Box>
    </Flex>
  );
};
