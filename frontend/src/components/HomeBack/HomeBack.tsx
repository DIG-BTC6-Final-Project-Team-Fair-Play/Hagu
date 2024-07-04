// import React from "react";
import { Box, Button, Group, Text, Flex } from "@mantine/core";
import axios from "axios";
import { useContext } from "react";
import { userData } from "../../App";
import { Seedlings } from "../../types/globals";

interface BtnProps {
  setSlideId: React.Dispatch<React.SetStateAction<number>>;
  setBackOn: React.Dispatch<React.SetStateAction<boolean>>;
  prev: (jump: boolean) => void;
  growingStage: number;
  seedIndex: number;
  setSeed: React.Dispatch<React.SetStateAction<Seedlings[]>>;
}

export const HomeBack = ({
  setSlideId,
  setBackOn,
  prev,
  growingStage,
  seedIndex,
  setSeed,
}: BtnProps) => {
  const user = useContext(userData);
  const growingStagePost = async () => {
    await axios.put(`/api/seedlings/${seedIndex}/growth`, {
      growing_stage_no: growingStage - 1,
    });
    await new Promise((resolve) => setTimeout(resolve,500))
    await axios.get(`/api/seedlings/${user}`).then((res) => {
      setSeed(res.data);
    });
    setSlideId((prev) => {
      return prev - 1;
    });
    setBackOn(false);
  };
  return (
    <Box
      h={"100vh"}
      w={"100vw"}
      bg={"#00000080"}
      style={{ position: "absolute", zIndex: 10 }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        h={"100%"}
        w={"100%"}
      >
        <Box h={"30%"} w={"80%"} bg={"white"} style={{ borderRadius: "20px" }}>
          <Box mt={60}>
            <Text ta={"center"}>一つ前のステージに戻りますか？</Text>
          </Box>

          <Group justify="center" mt={30}>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#47BB01"}
              onClick={() => {
                growingStagePost();
              }}
            >
              もどる
            </Button>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#59635D"}
              ml={20}
              onClick={() => {
                setBackOn(false);
                prev(true);
              }}
            >
              もどらない
            </Button>
          </Group>
        </Box>
      </Flex>
    </Box>
  );
};
