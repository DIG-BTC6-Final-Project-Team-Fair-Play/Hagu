// import React from "react";
import { Box, BackgroundImage, Text, Avatar, Flex } from "@mantine/core";

interface UserProps {
  name?: string;
  avatarUrl?: string;
}

export const Header = ({ name = "未設定", avatarUrl }: UserProps) => {
  const headerH = "80px";
  const textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
  return (
    <BackgroundImage src="https://th.bing.com/th/id/R.b906be825ecb0e63b4ac928c466bb30d?rik=wPjtUe2O3ZF9vA&riu=http%3a%2f%2fgahag.net%2fimg%2f201510%2f30s%2fgahag-0019952550-1.jpg&ehk=d5WpkAlaTiQ%2bUIAjSrVzDqkOci1dBaEcW88arzqKnW8%3d&risl=&pid=ImgRaw&r=0">
      <Box h={headerH}>
        <Flex direction="row" align="center">
          <Avatar src={avatarUrl} ml={"5px"}></Avatar>
          <Text
            c="white"
            h={headerH}
            lh={headerH}
            ml={10}
            style={{ textShadow }}
          >
            {name}
          </Text>
        </Flex>
      </Box>
    </BackgroundImage>
  );
};
