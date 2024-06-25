// import React from "react";
import { Box, Flex } from "@mantine/core";
import {
  HomeEco,
  BucketDroplet,
  Camera,
  HeartHandshake,
} from "tabler-icons-react";

export const FooterIcons = () => {
  const footerH = 80;
  const iconSize = 50;

  return (
    <Box h={footerH}>
      <Flex
        direction="row"
        align="center"
        justify={"space-evenly"}
        bg={"#CEB48C"}
      >
        <HomeEco
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></HomeEco>
        <BucketDroplet
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></BucketDroplet>
        <Camera
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></Camera>
        <HeartHandshake
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></HeartHandshake>
      </Flex>
    </Box>
  );
};
