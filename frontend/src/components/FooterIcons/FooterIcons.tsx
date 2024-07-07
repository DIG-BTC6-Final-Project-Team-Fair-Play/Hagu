// import React from "react";
import { Box, Flex, Indicator, Tooltip } from "@mantine/core";
import {
  IconHomeEco,
  IconBellHeart,
  IconPhotoSearch,
  IconPlant,
} from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectSeedIdContext, userData } from "../../App";
import axios from "axios";
import { Seedlings } from "../../types/globals";

export const FooterIcons = () => {
  const footerH = 60;
  const iconSize = 30;
  const navigate = useNavigate();
  const [seedView, setSeedView] = useState<boolean>(false);
  const [seedIndicator, setSeedIndicator] = useState<boolean>(true);
  const userID = useContext(userData);
  const { selectSeedId } = useContext(selectSeedIdContext);

  useEffect(() => {
    (async () => {
      const seedlings: Seedlings[] = await axios
        .get(`/api/seedlings/${userID}`)
        .then((res) => res.data);
      const index = seedlings.findIndex((obj) => obj.id === selectSeedId);
      const today = new Date();
      const compare =
        today.getDate() === new Date(seedlings[index]?.last_watering).getDate();
      setSeedIndicator(compare);
      setSeedView(seedlings.length === 0);
    })();
  }, [selectSeedId]);

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
        <Tooltip
          arrowOffset={10}
          arrowSize={10}
          label="苗をつくろう！"
          withArrow
          opened
          position="top-start"
          offset={{ mainAxis: 20, crossAxis: 0 }}
          color={"white"}
          style={{ color: "black" }}
          disabled={!seedView}
        >
          <IconPlant
            size={iconSize}
            color="white"
            style={{ margin: (footerH - iconSize) / 2 }}
            onClick={() => navigate("/seedling")}
          ></IconPlant>
        </Tooltip>
        <Indicator
          inline
          size={16}
          offset={13}
          position="top-end"
          color="red"
          withBorder
          disabled={seedIndicator}
        >
          <IconBellHeart
            size={iconSize}
            color="white"
            style={{ margin: (footerH - iconSize) / 2 }}
            onClick={() => navigate("/watering")}
          ></IconBellHeart>
        </Indicator>
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
