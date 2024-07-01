// import React from "react";
import { Box, Flex } from "@mantine/core";
import {
  IconHomeEco,
  IconBellHeart,
  IconPhotoSearch,
} from "@tabler/icons-react";

export const FooterIcons = () => {
  const footerH = 60;
  const iconSize = 30;

  return (
    <Box h={footerH}>
      <Flex
        direction="row"
        align="center"
        justify={"space-evenly"}
        bg={"#5CB697"}
      >
        <IconHomeEco
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></IconHomeEco>
        <IconBellHeart
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></IconBellHeart>
        <IconPhotoSearch
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
        ></IconPhotoSearch>
      </Flex>
    </Box>
  );
};
