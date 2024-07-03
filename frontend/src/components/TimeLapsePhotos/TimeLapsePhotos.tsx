import { Box, Image, Loader, Slider, Space, Stack, Text } from "@mantine/core";
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
        <>
          <Stack>
            <Space h="xl" />
            <Space h="xl" />
            <Text
              size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
              m={"auto"}
            >
              画像読み込み中
            </Text>
            <Space h="xl" />
            <Loader color="teal" h={"45vh"} m={"auto"} />
          </Stack>
        </>
      ) : (
        <>
          <Image
            radius="md"
            h={"70vh"}
            p={10}
            fit="contain"
            src={`data:image/png;base64,${photos[value]}`}
          />
          <Space h="xl" />
          <Slider
            m={"auto"}
            color="blue"
            w={"90%"}
            marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
            value={value}
            onChange={setValue}
            max={photos.length - 1}
          />
        </>
      )}
    </Box>
  );
};
