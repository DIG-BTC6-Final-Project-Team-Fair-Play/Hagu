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
import { IconPlant, IconPlayerPlay } from "@tabler/icons-react";
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
  const [playFlag, setPlayFag] = useState<boolean>(true);

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

  function sleepSetInterval(ms: number, count: number) {
    let i = 0;
    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
      // console.log({ value });

      i++;
      if (i >= count) {
        setPlayFag(true);
        clearInterval(interval);
      }
    }, ms);
  }

  function timelapsePlay() {
    setValue(0);
    const maxValue: number = photos.length - 1;
    const perSecond: number = 3000 / maxValue;
    setPlayFag(false);
    // const perSecond: number = 500;
    sleepSetInterval(perSecond, maxValue);
  }
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
              draggable={playFlag}
            />
            <Center>
              <IconPlayerPlay
                size={30}
                onClick={() => {
                  if (playFlag) {
                    timelapsePlay();
                  }
                }}
              />

              <Space h={"xl"} />
            </Center>
          </Box>
        </Flex>
      )}
    </Box>
  );
};
