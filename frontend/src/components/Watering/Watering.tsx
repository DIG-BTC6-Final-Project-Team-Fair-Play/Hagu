import { Center, Group, Image, Box, Space, Text, Stack } from "@mantine/core";
import "./Watering.css";
import { useContext, useEffect, useState } from "react";
import { selectSeedIdContext, userData } from "../../App";
import axios from "axios";
import { Seedlings } from "../../types/globals";
import { useNavigate } from "react-router-dom";
import { useReward } from "react-rewards";

export const Watering = () => {
  const navigate = useNavigate();
  const userId = useContext(userData);
  const { selectSeedId } = useContext(selectSeedIdContext);
  const [seedData, setSeedData] = useState<Seedlings[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const { reward: balloonsReward } = useReward("balloonsReward", "balloons");
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
      await getUserSeedlings();
    })();
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
  // 通常メッセージ
  // useEffect(() => {
  //   console.log(seedData.length);
  //   console.log(index);
  //   if (seedData.length !== 0 && index !== -1) {
  //     console.log("通過");
  //     compareDate()
  //       ? setComment("ありがとぅぅぅぅス")
  //       : setComment("水が欲しいよぉおぉぉ");
  //   }
  // }, [seedData, index]);

  // ====OpenAIメッセージ処理====
  // const [aiMessage, setAiMessage] = useState<string>("");
  // 2回処理を防ぐ
  const [isInitialRender, setIsInitialRender] = useState(true);
  // AI の送信先を水やり状態により変更する関数
  const getAiMessage = async () => {

    // selectSeedId　で苗ID指定が可能
    const URL = compareDate() ? "/api/aiMessageAfter" : "/api/aiMessageBefore";

    await axios.get(URL).then((res) => {
      console.log("res.data(): ", res.data);
      // setAiMessage(res.data.content);
      setComment(res.data.content);
    });
  };
  // AI メッセージ取得処理
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    if (seedData.length !== 0 && index !== -1) {
      getAiMessage();
      // setComment(aiMessage);
    }
  }, [seedData, index]);

  return (
    <>
      {seedData.length !== 0 && index !== -1 && (
        <>
          <Stack align={"center"}>
            <Space />
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
          {/* <Rewards></Rewards> */}
          <Box w={"100%"} pos={"fixed"} bottom={"60px"}>
            <Group justify="space-between">
              <Image
                mx={"auto"}
                src={`./images/Watering.png`}
                w={"30%"}
                fit="contain"
                alt="Norway"
                onClick={
                  compareDate()
                    ? () => {}
                    : () => {
                        balloonsReward();
                        putWatering();
                      }
                }
                style={compareDate() ? { filter: "grayscale(100%)" } : {}}
              />
              <div id={"balloonsReward"}></div>
              <Image
                mx={"auto"}
                src={`./images/Camera.png`}
                w={"30%"}
                fit="contain"
                alt="Norway"
                onClick={() => {
                  navigate("/camera");
                }}
              />
            </Group>
          </Box>
        </>
      )}
    </>
  );
};
