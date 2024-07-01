import "./PhotosListPage.css";
import { Box, Tabs } from "@mantine/core";
import { IconPhoto, IconHeartHandshake } from "@tabler/icons-react";
import { PhotosList } from "../../components/PhotosList";
import { FooterIcons } from "../../components/FooterIcons";
import { useState } from "react";

const dummyDisplayList = [
  {
    userId: 1,
    userName: "SAMANSA",
    seedlingName: "苗ろう",
    vegetableName: "ピーマン",
    lastPhoto:
      "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-06-27%2014.44.12.png?alt=media&token=515d6e12-a2ed-462f-8a57-110242771153",
  },
  {
    userId: 1,
    userName: "SAMANSA",
    seedlingName: "苗み",
    vegetableName: "トマト",
    lastPhoto:
      "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-06-27%2014.44.12.png?alt=media&token=515d6e12-a2ed-462f-8a57-110242771153",
  },
  {
    userId: 1,
    userName: "SAMANSA",
    seedlingName: "苗み",
    vegetableName: "トマト",
    lastPhoto:
      "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-06-27%2014.44.12.png?alt=media&token=515d6e12-a2ed-462f-8a57-110242771153",
  },
  {
    userId: 2,
    userName: "AAABBBCCC",
    seedlingName: "苗じろう",
    vegetableName: "なす",
    lastPhoto:
      "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-06-27%2014.44.12.png?alt=media&token=515d6e12-a2ed-462f-8a57-110242771153",
  },
  {
    userId: 3,
    userName: "DDDFFFRRR",
    seedlingName: "苗サップ",
    vegetableName: "トマト",
    lastPhoto:
      "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-06-27%2014.44.12.png?alt=media&token=515d6e12-a2ed-462f-8a57-110242771153",
  },
];

export const PhotosListPage = () => {
  const userId = 1; // useContextでもらうかPropsでもらうか、他の画面でもたくさん使うのでcontextのが良いかも
  const [currentTab, setCurrentTab] = useState("myPlants"); // 初期値として'myPlants'を設定
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };
  const selectedDisplayList = dummyDisplayList.filter((elem) =>
    currentTab === "myPlants" ? elem.userId === userId : elem.userId !== userId
  );
  return (
    <Box pos={"relative"}>
      <Box h={60} bg={"#5CB697"}>
        成長の記録 Header
      </Box>
      <Tabs
        w={"100vw"}
        m="0 auto"
        defaultValue={"myPlants"}
        variant="outline"
        radius={"lg"}
      >
        <Tabs.List bg={"#5CB697"} grow={true}>
          <Tabs.Tab
            value="myPlants"
            c={currentTab === "myPlants" ? "#5CB697" : "white"}
            bg={currentTab === "myPlants" ? "white" : "#5CB697"}
            onClick={() => handleTabChange("myPlants")}
          >
            <IconPhoto></IconPhoto>
          </Tabs.Tab>
          <Tabs.Tab
            value="friends"
            c={currentTab === "friends" ? "#5CB697" : "white"}
            bg={currentTab === "friends" ? "white" : "#5CB697"}
            onClick={() => handleTabChange("friends")}
          >
            <IconHeartHandshake></IconHeartHandshake>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Box h={`calc(100vh - 60px - 48px - 60px)`}>
        {/* ↑スクロールエリアの高さ指定 */}
        <PhotosList displayList={selectedDisplayList}></PhotosList>
      </Box>
      <Box
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <FooterIcons />
      </Box>
    </Box>
  );
};
