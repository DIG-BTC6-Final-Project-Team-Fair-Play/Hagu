// import React from "react";
import { Box, Button, Group, Text, Flex, Space } from "@mantine/core";
import axios from "axios";

//例:nextMessage : "実が大きくなったら、"
interface BtnProps {
  nextMessage: string;
  setSlideId: React.Dispatch<React.SetStateAction<number>>;
  setNextOn: React.Dispatch<React.SetStateAction<boolean>>;
  prev: (jump: boolean) => void;
  growingStage: number;
  seedId: number;
}

export const HomeNext = ({
  nextMessage,
  setSlideId,
  setNextOn,
  prev,
  growingStage,
  seedId,
}: BtnProps) => {
  const growingStagePost = async () => {
    await axios.put(`/api/seedlings/${seedId}/growth`, {
      growing_stage_no: growingStage + 1,
    });
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
          <Box mt={30}>
            <Text ta={"center"}>{`${nextMessage}`}</Text>
            <Space h={"sm"} />
            <Text ta={"center"}>次のステージに進みましょう！</Text>
          </Box>

          <Group justify="center" mt={30}>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#47BB01"}
              onClick={() => {
                setSlideId((prev) => {
                  return prev + 1;
                });
                setNextOn(false);
                growingStagePost();
              }}
            >
              すすむ
            </Button>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#59635D"}
              ml={20}
              onClick={() => {
                setNextOn(false);
                prev(true);
              }}
            >
              すすまない
            </Button>
          </Group>
        </Box>
      </Flex>
    </Box>
  );
};
