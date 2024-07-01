// import React from "react";
import { Box, Text, Avatar, Flex } from "@mantine/core";

interface UserProps {
  name?: string;
  avatarUrl?: string;
  avatarH?: string;
  avatarW?: string;
}

export const LineAvatar = ({
  name = "未設定",
  avatarH = "30px",
  avatarW = "80vw",
  avatarUrl,
}: UserProps) => {
  return (
    <Box h={avatarH} w={avatarW}>
      <Flex direction="row" align="center">
        <Avatar src={avatarUrl} ml={"5px"} size={"sm"}></Avatar>
        <Text h={avatarH} lh={avatarH} ml={10} size="sm">
          {name}
        </Text>
      </Flex>
    </Box>
  );
};
