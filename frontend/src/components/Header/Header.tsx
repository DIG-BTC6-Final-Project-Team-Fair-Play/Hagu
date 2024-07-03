// import React from "react";
import { Box, Text, Avatar, Flex, Center } from "@mantine/core";

interface HeaderProps {
  content: string;
}

export const Header = ({ content }: HeaderProps) => {
  const headerH = "60px";
  const textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
  return (
    <Box h={headerH} bg="#5F907B" pos={"relative"}>
      <Box h={headerH} pos={"relative"} top={0} w={"100%"}>
        <Flex direction="row" align="center">
          <Avatar
            size={"50px"}
            src={"./images/hagu_chara.png"}
            ml={"5px"}
          ></Avatar>
          <Text
            className="darumadrop-one-regular"
            c="white"
            size="35px"
            h={headerH}
            lh={"50px"}
            ml={5}
            style={{ textShadow }}
          >
            はぐ
          </Text>
        </Flex>
        <Center
          pos="absolute"
          top="50%"
          left="50%"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Text
            c={"white"}
            h={headerH}
            lh={headerH}
            size="14px"
            className="zen-maru-gothic-regular"
          >
            {content}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
