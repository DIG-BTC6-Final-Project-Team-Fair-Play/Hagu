// import React, { useState } from "react";
import { Box, Checkbox, Stack } from "@mantine/core";

//NOTE:DBからの設備リストの戻り型確認要
interface ItemsProps {
  id: number;
  vegetable_name: string;
  equipment_list: string[];
}

export const ItemsList = ({
  // id,
  // vegetable_name: vegetableName,
  equipment_list: equipmentList,
}: ItemsProps) => {
  const items = equipmentList.map((item, index) => (
    <Checkbox
      key={index}
      label={item}
      color="lime.4"
      iconColor="dark.8"
      size="lg"
    />
  ));
  return (
    <Box mt={30} h={"100%"}>
      <Stack ml={80}>{items}</Stack>
    </Box>
  );
};
