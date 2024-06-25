import React from "react";
import { Box, Button, Group, Text } from "@mantine/core";

interface BtmProps {
  seedlingName?: string;
}

export const SelectBtnDouble = (seedlingName: BtmProps) => {
  return (
    <Box h={"80px"}>
      {/* <Text>選択中の野菜：{`${seedlingName}`}</Text> */}
      <Group justify="center">
        <Button h={50} p={"10px 30px"} radius={50} bg={"#47BB01"}>
          選択する
        </Button>
        <Button h={50} p={"10px 30px"} radius={50} bg={"#59635D"} ml={20}>
          戻る
        </Button>
      </Group>
    </Box>
  );
};
