// import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  ScrollArea,
  Button,
  Center,
} from "@mantine/core";
// import { useNavigate } from "react-router-dom";

interface UsersListProps {
  id: number;
  user_id: number;
  seedling_count: number;
  user_name: string;
  picture: string | null;
}
interface FriendsListProps {
  id: number;
  user_id: number;
  friend_id: number;
  user_name: string;
}

interface DisplayListProps {
  usersList: UsersListProps[];
  friendsList: FriendsListProps[];
}

export const FriendsList: React.FC<DisplayListProps> = ({
  usersList,
  friendsList,
}) => {
  // const navigate = useNavigate();
  // const handleOnClick = (seedlingId: number) => {
  //   navigate("/photos", { state: { seedlingId }, replace: true });
  // };
  const items = usersList.map((item, index) => (
    <Box key={index} w={"100%"} h={80}>
      <Flex
        h={"100%"}
        direction={"row"}
        justify={"space-evenly"}
        align={"center"}
      >
        <Image src={item.picture} radius={100} h={60} w={60}></Image>
        <Box w={"40vw"}>
          <Text size="lg">{item.user_name}</Text>
          <Text size="xs" c="gray">
            育てている苗の数：{item.seedling_count}
          </Text>
          <Text size="xs" c="gray">
            userId:{item.user_id}
          </Text>
        </Box>
        <Box w={"30vw"} ml={10}>
          <Center>
            {friendsList
              .map((elem) => elem.friend_id)
              .includes(item.user_id) ? (
              <Button radius={100} size="xs">
                フォロー解除
              </Button>
            ) : (
              <Button radius={100} size="xs">
                フォローする
              </Button>
            )}
          </Center>
        </Box>
      </Flex>
      <hr
        style={{ margin: 0, border: "none", borderTop: "1px solid lightgray" }}
      ></hr>
    </Box>
  ));
  return <ScrollArea h={"300"}>{items}</ScrollArea>;
};
