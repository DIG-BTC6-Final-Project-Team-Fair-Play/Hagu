import { Box, Image, Slider, Space } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";

export const TimeLapsePhotos = () => {
  const [id, setId] = useState<number>(1); //USERID来たらそれに変える
  const [value, setValue] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>([]);
  console.log("value: ", value);

  useEffect(() => {
    (async () => {
      const photos: string[] = await axios
        .get(`/api/seedlings/${id}/timelapse`)
        .then((res) => res.data);
      setPhotos(photos);
      setId(1); //ここは後で消す！！！！！ESLint回避用
    })();
  }, []);

  return (
    <Box>
      <Image
        radius="md"
        h={"70vh"}
        p={10}
        // w={"80%"}
        fit="contain"
        src={photos[value]}
        // src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fuser-images.githubusercontent.com%2F45844502%2F128852448-bf822291-ce21-4f3c-854e-02070f5086e8.gif?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=0706cee6abcc5de7cc5959459cfd6d11"
      />
      <Space h="xl" />
      <Slider
        m={"auto"}
        color="blue"
        // labelAlwaysOn
        w={"90%"}
        marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
        value={value}
        onChange={setValue}
        max={photos.length - 1}
      />
    </Box>
  );
};
