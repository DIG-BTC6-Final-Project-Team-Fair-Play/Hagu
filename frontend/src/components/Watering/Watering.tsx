import { Center, Group, Image, Box, Space, Tooltip, Text, Flex, Stack } from "@mantine/core";
import "./Watering.css";
import { useContext, useEffect, useState } from "react";
import { selectSeedIdContext, userData } from "../../App";
import axios from "axios";
import { Seedlings } from "../../types/globals";
import { useNavigate } from "react-router-dom";

export const Watering = () => {
  const navigate = useNavigate();
  const userId = useContext(userData);
  console.log("userId: ", userId);
  const { selectSeedId } = useContext(selectSeedIdContext);
  console.log("selectSeedId: ", selectSeedId);

  const [seedData, setSeedData] = useState<Seedlings[]>([]);
  const [index, setIndex] = useState<number>(0);
  console.log("seedData: ", seedData);
  const [comment, setComment] = useState<string>("ありがとう");
  console.log(comment);
  // 仮テスト用
  // const [count, setCount] = useState<boolean>(true);
  const getUserSeedlings = async () => {
    const userSeedling: Seedlings[] = await axios
      .get(`/api/seedlings/${userId}`)
      .then((res) => res.data);

    console.log("userSeedling: ", userSeedling);
    setSeedData(userSeedling);
    const findIndex = userSeedling.findIndex((obj) => obj.id === selectSeedId);
    setIndex(findIndex);
    console.log("findIndex: ", findIndex);
  };

  useEffect(() => {
    console.log("a");
    (async () => {
      // [{},{}]
      await getUserSeedlings();
    })();
    // }, [userId, count]);
  }, [userId]);
  // 水やり更新
  const putWatering = async () => {
    await axios.put(`/api/seedlings/${selectSeedId}/water`, {
      last_watering: new Date().toISOString(),
    });
    await getUserSeedlings();
  };

  const compareDate = () => {
    const today = new Date();
    const compare =
      today.getDate() === new Date(seedData[index].last_watering).getDate();
    return compare;
  };
  useEffect(() => {
    console.log(seedData.length);
    console.log(index);
    if (seedData.length !== 0 && index !== -1) {
      console.log("通過");
      compareDate()
        ? setComment("ありがとぅぅぅぅス")
        : setComment("水が欲しいよぉおぉぉ");
    }
  }, [seedData, index]);

  return (
    <>
      {seedData.length !== 0 && index !== -1 && (
        <>
        {/* <Stack align="center" justify="space-around"> */}
          <Stack align={"center"} >
            <Space/>
            <Center>
              <div className="vegetable-comment">
                <Text pt={8} pl={10} pr={10} fz={20} w={"80vw"} h={"15vh"}>
                  {comment}
                </Text>
              </div>
            </Center>
            <Image
              className={compareDate() ? "after-watering" : "before-watering"}
              src={`./images/0${seedData[index].vegetable_id}_${
                compareDate() ? "after" : "before"
              }.png`}
              w={"60vw"}
              fit="contain"
              alt="Norway"
            />
          </Stack>
          <Box w={"100%"} pos={"fixed"} bottom={"60px"}>
            <Group justify="space-between">
              <Image
                // src={`./images/0${vegetableId}_icon.png`}
                mx={"auto"}
                src={`./images/Watering.png`}
                w={"30%"}
                fit="contain"
                alt="Norway"
                onClick={putWatering}
                style={compareDate() ? { filter: "grayscale(100%)" } : {}}
              />
              <Image
                // src={`./images/0${vegetableId}_icon.png`}
                mx={"auto"}
                src={`./images/Camera.png`}
                w={"30%"}
                fit="contain"
                alt="Norway"
                onClick={() => {
                  navigate("/camera");
                }}
                // seedLingIdが必要(context)
              />
            </Group>
            {/* https://mantine.dev/core/indicator/ */}
          </Box>
        {/* </Stack> */}
        </>
      )}
    </>
  );
};
