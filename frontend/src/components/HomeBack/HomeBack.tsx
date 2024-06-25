// import React from "react";
import { Box, Button, Group, Text, Flex } from "@mantine/core";

export const HomeBack = () => {
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
            <Button h={50} w={"35%"} p={"10px 20px"} radius={50} bg={"#47BB01"}>
              もどる
            </Button>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#59635D"}
              ml={20}
            >
              もどらない
            </Button>
          </Group>
        </Box>
      </Flex>
    </Box>
  );
};
