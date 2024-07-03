import { Center, Group, Image, Box, Space } from "@mantine/core";
import "./Watering.css";
import { useContext, useEffect, useState } from "react";
import { selectSeedIdContext, userData } from "../../App";
import axios from "axios";
import { Seedlings } from "../../types/globals";

export const Watering = () => {
  const userId = useContext(userData);
  console.log("userId: ", userId);
  const { selectSeedId } = useContext(selectSeedIdContext);
  console.log("selectSeedId: ", selectSeedId);

  const [seedData, setSeedData] = useState<Seedlings[]>([]);
  const [index, setIndex] = useState<number>(0);
  console.log("seedData: ", seedData);
  // 仮テスト用
  // const [count, setCount] = useState<boolean>(true);

  useEffect(() => {
    console.log("a");
    (async () => {
      // [{},{}]
      const userSeedling: Seedlings[] = await axios
        .get(`/api/seedlings/${userId}`)
        .then((res) => res.data);

      console.log("userSeedling: ", userSeedling);
      setSeedData(userSeedling);
      const findIndex = userSeedling.findIndex(
        (obj) => obj.id === selectSeedId
      );
      setIndex(findIndex);
      console.log("findIndex: ", findIndex);
    })();
    // }, [userId, count]);
  }, [userId]);
  // テスト用
  // const handle = () => {
  //   setCount(!count);
  // };

  return (
    <>
      {seedData.length !== 0 && index !== -1 && (
        <Box my={"20%"}>
          <Image
            // src={`./images/0${vegetableId}_icon.png`}
            // src={`./images/02_before.png`}
            src={`./images/0${seedData[index].vegetable_id}_before.png`}
            h={"40vh"}
            fit="contain"
            alt="Norway"
            style={{ filter: "grayscale(100%)" }}
          />
          <Space h={"xl"}></Space>
          <Center>
            <Group justify="space-between">
              <Image
                // src={`./images/0${vegetableId}_icon.png`}
                mx={"auto"}
                src={`./images/Watering.png`}
                w={"30%"}
                fit="contain"
                alt="Norway"
                // テスト用
                // onClick={handle}
              />
              <Image
                // src={`./images/0${vegetableId}_icon.png`}
                mx={"auto"}
                src={`./images/Camera.png`}
                w={"30%"}
                fit="contain"
                alt="Norway"
                // seedLingIdが必要(context)
              />
            </Group>
            {/* https://mantine.dev/core/indicator/ */}
          </Center>
        </Box>
      )}
    </>
  );
};
