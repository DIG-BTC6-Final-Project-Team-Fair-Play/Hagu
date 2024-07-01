// import React, { useState } from "react";
import { Box, Paper, Stack, Image, Text, ScrollArea } from "@mantine/core";
import { LineAvatar } from "../LineAvatar";

//NOTE:上流のタブ選択により本人orフレンドの情報が含まれたpropsを渡す
interface DisplayListProps {
  userId: number;
  seedlingName: string;
  userName: string;
  vegetableName: string;
  lastPhoto: string;
}
interface PhotosListProps {
  displayList: DisplayListProps[];
}

export const PhotosList: React.FC<PhotosListProps> = ({ displayList }) => {
  const items = displayList.map((item, index) => (
    <Box key={index} m={"0 auto"}>
      <LineAvatar name={item.userName} avatarW="90vw"></LineAvatar>
      <Paper
        shadow="xs"
        radius={"lg"}
        w={"90vw"}
        bg={"#EBF6F6"}
        bd={"1px solid gray"}
        p={10}
      >
        <Image
          src={item.lastPhoto}
          h={200}
          alt="lastUPloaded"
          radius={"sm"}
        ></Image>
        <Text>
          {item.vegetableName}
          {"   " + item.seedlingName}
          {"   userId:" + item.userId}
        </Text>
      </Paper>
    </Box>
  ));
  return (
    <ScrollArea h={"100%"} pt={5} pb={5}>
      <Stack gap={"xs"}>{items}</Stack>
    </ScrollArea>
  );
};
