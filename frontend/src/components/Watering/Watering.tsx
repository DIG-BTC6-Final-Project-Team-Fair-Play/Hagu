import { Center, Group, Image, Box, Space, Tooltip } from "@mantine/core";
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
      last_watering: new Date().toLocaleString(),
    });
    await getUserSeedlings();
  };

  const compareDate = () => {
    const today = new Date();
    const compare =
      today.getDate() === new Date(seedData[index].last_watering).getDate();
    return compare;
  };

  return (
    <>
      {seedData.length !== 0 && index !== -1 && (
        <Box my={"30%"}>
          <Tooltip
            arrowOffset={100}
            arrowSize={40}
            label={
              compareDate() ? "ありがとぅぅぅぅス" : "水が欲しいよぉおぉぉ"
            }
            withArrow
            opened
            position="top-end"
            w={"80%"}
            h={"15%"}
            mt={"10%"}
            p={"1.5rem"}
            bg={"white"}
            bd={"black 1px solid"}
            radius={"30px"}
            c="black"
            className="zen-maru-gothic-regular"
            style={{ fontSize: 30 }}
          >
            <Image
              className={compareDate() ? "after-watering" : "before-watering"}
              // src={`./images/0${vegetableId}_icon.png`}
              // src={`./images/02_before.png`}
              src={`./images/0${seedData[index].vegetable_id}_${
                compareDate() ? "after" : "before"
              }.png`}
              h={"40vh"}
              fit="contain"
              alt="Norway"
              // style={{ filter: "grayscale(100%)" }}
            />
          </Tooltip>
          <Space h={"xl"}></Space>
          <div>{new Date().toString()}</div>
          <div>{new Date(seedData[index].last_watering).toString()}</div>
          <div>{new Date(seedData[index].last_watering).getDate()}</div>
          <Center>
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
          </Center>
        </Box>
      )}
    </>
  );
};
