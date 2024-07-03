// import React from "react";
import { Box, Flex } from "@mantine/core";
import {
  IconHomeEco,
  IconBellHeart,
  IconPhotoSearch,
  IconPlant,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const FooterIcons = () => {
  const footerH = 60;
  const iconSize = 30;
  const navigate = useNavigate();

  return (
    <Box h={footerH}>
      <Flex
        direction="row"
        align="center"
        justify={"space-evenly"}
        bg={"#5F907B"}
      >
        <IconHomeEco
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/home")}
        ></IconHomeEco>
        <IconPlant
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/seedling")}
        ></IconPlant>
        <IconBellHeart
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/watering")}
        ></IconBellHeart>
        <IconPhotoSearch
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/photosList")}
        ></IconPhotoSearch>
      </Flex>
    </Box>
  );
};
