import { Box, Flex } from "@mantine/core";
import { Watering } from "../../components/Watering";
import { FooterIcons } from "../../components/FooterIcons";

export const WateringPage = () => {
  // 現在の苗の写真
  // 水やりのアイコンボタン（遷移はどうする？）
  // 水やりをしていないと通知部分が赤く光る
  // 写真記録のアイコンボタん（カメラ起動 navigate）
  return (
    <>
      <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
        <Box h={`calc(100vh - 60px - 48px -60px)`}>
        <Watering></Watering>
        </Box>
        <Box
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <FooterIcons></FooterIcons>
        </Box>
      </Flex>
    </>
  )
};
