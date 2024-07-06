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

interface TimeLapsePhotosProps {
  selectSeedId: number;
  selectSeedName: string;
  selectVegeLabel: string;
}

export const TimeLapsePhotos: React.FC<TimeLapsePhotosProps> = ({
  selectSeedId,
  selectSeedName,
  selectVegeLabel,
}) => {
  const [value, setValue] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>([]);
  let vegeLabel = "";
  switch (selectVegeLabel) {
    case "ピーマン":
      vegeLabel = "🫑";
      break;
    case "トマト":
      vegeLabel = "🍅";
      break;
    case "なす":
      vegeLabel = "🍆";
      break;
  }
  useEffect(() => {
    (async () => {
      const photos: string[] = await axios
        .get(`/api/seedlings/${selectSeedId}/timelapse`)
        .then((res) => {
          return res.data;
        });
      setPhotos(photos);
    })();
  }, []);

  return (
    <Box>
      {photos.length === 0 ? (
        <Box h={"70vh"}>
          <Box h={"40vh"}>
            <Text
              pt={"23vh"}
              className="zen-maru-gothic-regular"
              size="xl"
              fw={900}
              c={"#5F907B"}
              m={"auto"}
              ta={"center"}
            >
              {`${selectSeedName}の`}
              <br></br>せいちょうきろく作成中だよ
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
          <Box h={"70vh"}>
            <Image
              h={"65vh"}
              radius="30px"
              p={15}
              fit="cover"
              src={`data:image/png;base64,${photos[value]}`}
            />
            <Box>
              <Space h={"xs"} />
              <Slider
                thumbChildren={<IconPlant size={"1rem"} />}
                thumbSize={36}
                m={"auto"}
                size={"md"}
                color="#5F907B"
                w={"85%"}
                marks={[
                  { value: 0, label: "🌱" },
                  { value: photos.length + 1, label: vegeLabel },
                ]}
                styles={{ markLabel: { fontSize: 25 } }}
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
