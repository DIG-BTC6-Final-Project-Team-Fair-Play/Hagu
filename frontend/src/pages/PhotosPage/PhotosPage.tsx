import { Button, Center, Flex, Box } from "@mantine/core";

import { TimeLapsePhotos } from "../../components/TimeLapsePhotos";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
// import { useState } from "react";

export const PhotosPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectSeedId: { seedlingId: number } = location.state;
  return (
    <Flex direction={"column"} h={"100vh"} bg={"#F2EBD9"}>
      <Box>
        <Flex direction={"column"}>
          <Header content="タイムラプス" />
          <Center>
            <TimeLapsePhotos selectSeedId={selectSeedId.seedlingId} />
          </Center>
        </Flex>
      </Box>
      <Box h={"10vh"} flex={1}>
        <Center>
          <Button
            display={"block"}
            radius={"50px"}
            bg={"#5F907B"}
            m={"10 auto"}
            w={100}
            onClick={() => {
              navigate("/photosList");
            }}
          >
            もどる
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};
