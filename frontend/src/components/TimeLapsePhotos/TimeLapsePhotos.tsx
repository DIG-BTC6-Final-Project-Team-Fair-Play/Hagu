import {
  Box,
  Flex,
  Image,
  Loader,
  Slider,
  Space,
  Center,
  Text,
} from "@mantine/core";
import { IconPlant } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";

export const TimeLapsePhotos = (selectSeedId: { selectSeedId: number }) => {
  const [value, setValue] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const photos: string[] = await axios
        .get(`/api/seedlings/${selectSeedId.selectSeedId}/timelapse`)
        .then((res) => {
          console.log(res.data);
          return res.data;
        });
      setPhotos(photos);
    })();
  }, []);

  return (
    <Box>
      {photos.length === 0 ? (
        <Box h={"80vh"}>
          <Box h={"40vh"}>
            <Text
              pt={"30vh"}
              className="zen-maru-gothic-regular"
              size="xl"
              fw={900}
              c={"#5F907B"}
              m={"auto"}
            >
              タイムラプス作成中だよ
            </Text>
          </Box>
          <Box h="40vh">
            <Center>
              <Loader color={"#5F907B"} h={"45vh"} m={"auto"} />
            </Center>
          </Box>
        </Box>
      ) : (
        <Flex direction={"column"}>
          <Box h={"80vh"}>
            <Image
              h={"70vh"}
              radius="30px"
              p={15}
              fit="cover"
              src={`data:image/png;base64,${photos[value]}`}
            />
            <Box>
              <Space h={"xl"} />
              <Slider
                thumbChildren={<IconPlant size={"1rem"} />}
                thumbSize={36}
                m={"auto"}
                size={"md"}
                color="#5F907B"
                w={"85%"}
                value={value}
                onChange={setValue}
                max={photos.length - 1}
              />
              <Space h={"xl"} />
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};
