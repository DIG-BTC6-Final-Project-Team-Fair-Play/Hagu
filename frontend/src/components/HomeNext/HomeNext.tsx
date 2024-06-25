// import React from "react";
import { Box, Button, Group, Text, Flex, Space } from "@mantine/core";

//例:nextMessage : "実が大きくなったら、"
interface BtnProps {
  nextMessage: string;
}

export const HomeNext = ({ nextMessage }: BtnProps) => {
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
            <Button h={50} w={"35%"} p={"10px 20px"} radius={50} bg={"#47BB01"}>
              すすむ
            </Button>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#59635D"}
              ml={20}
            >
              すすまない
            </Button>
          </Group>
        </Box>
      </Flex>
    </Box>
  );
};
