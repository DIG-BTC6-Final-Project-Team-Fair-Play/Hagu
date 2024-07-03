import { Box, Flex } from "@mantine/core";
// import React from "react";
import { Header } from "../../components/Header";
// import { HeaderSeedling } from "../../components/HeaderSeedling";

import { SelectSeedling } from "../../components/SelectSeedling";
// import { SelectBtnDouble } from "../../components/SelectBtnDouble";

import { ItemsList } from "../../components/ItemsList";
import { useEffect, useState } from "react";
import { Vegetables } from "../../types/globals";
import axios from "axios";

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
  const [vegetableData, setVegetableData] = useState<Vegetables[]>([]);
  useEffect(() => {
    (async () => {
      const data: Vegetables[] = await axios
        .get("/api/vegetables")
        .then((res) => res.data);

      // console.log("data: ", data);
      setVegetableData(data);
    })();
  }, []);

  return (
    <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
      <Box>
        <Header content="" />
        {/* <HeaderSeedling /> */}
      </Box>
      {/* NOTE:Routeで表示するコンポーネントを切り替える予定 */}
      <Box style={{ flex: 1 }}>
        <SelectSeedling vegetableData={vegetableData} />
        <ItemsList {...dummyItems} />
      </Box>
    </Flex>
  );
};
