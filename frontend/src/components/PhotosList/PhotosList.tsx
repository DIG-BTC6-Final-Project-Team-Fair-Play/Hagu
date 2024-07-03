// import React, { useState } from "react";
import { Box, Paper, Stack, Image, Text, ScrollArea } from "@mantine/core";
import { LineAvatar } from "../LineAvatar";
import { useNavigate } from "react-router-dom";

//NOTE:上流のタブ選択により本人orフレンドの情報が含まれたpropsを渡す
interface DisplayListProps {
  id: number;
  user_id: number;
  seedling_name: string;
  user_name: string;
  picture: string | null;
  label: string;
  photo_data: string | null;
}

interface PhotosListProps {
  displayList: DisplayListProps[];
}

export const PhotosList: React.FC<PhotosListProps> = ({ displayList }) => {
  const navigate = useNavigate();
  const handleOnClick = (seedlingId: number) => {
    navigate("/photos", { state: { seedlingId }, replace: true });
  };
  const items = displayList.map((item, index) => (
    <Box key={index} m={"0 auto"}>
      <LineAvatar
        name={item.user_name}
        avatarUrl={item.picture}
        avatarW="90vw"
      ></LineAvatar>
      <Paper
        shadow="xs"
        radius={"lg"}
        w={"90vw"}
        bg={"#EBF6F6"}
        bd={"1px solid lightgray"}
        p={10}
        onClick={() => handleOnClick(item.id)}
      >
        <Box pos={"relative"}>
          <Image
            src={item.photo_data}
            h={200}
            alt="lastUPloaded"
            radius={"sm"}
          ></Image>
        </Box>
        <Text className="zen-maru-gothic-regular">
          {item.label} <br></br>
          {item.seedling_name}
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
