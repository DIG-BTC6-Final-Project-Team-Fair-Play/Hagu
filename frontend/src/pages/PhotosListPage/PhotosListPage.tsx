import "./PhotosListPage.css";
import { Box, Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconHeartHandshake,
  IconCirclePlusFilled,
} from "@tabler/icons-react";
import { PhotosList } from "../../components/PhotosList";
import { FooterIcons } from "../../components/FooterIcons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userData } from "../../App";
import { useNavigate } from "react-router-dom";

interface PhotosList {
  id: number; //seedlingId
  user_id: number;
  seedling_name: string;
  user_name: string;
  picture: string | null;
  label: string;
  photo_data: string | null;
}

export const PhotosListPage = () => {
  const userId = useContext(userData);
  const [currentTab, setCurrentTab] = useState<string>("myPlants"); // 初期値として'myPlants'を設定
  const [displayData, setDisplayData] = useState<any>([]);
  const navigate = useNavigate();
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    axios.get(`/api/photos/${userId}`).then((res) => {
      setDisplayData(res.data);
    });
  }, []);

  const selectedDisplayList = displayData
    .filter((elem: PhotosList) =>
      currentTab === "myPlants"
        ? elem.user_id === userId
        : elem.user_id !== userId
    )
    .filter((elem: PhotosList) => (elem.photo_data ? elem.user_id : null)); //写真がない苗は非表示

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
        radius={"xl"}
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
        pos={"absolute"}
        bottom={"2vh"}
        right={"5vw"}
        c={"#5F907B"}
        display={currentTab === "myPlants" ? "none" : "block"}
      >
        <IconCirclePlusFilled onClick={() => navigate("/friends")} size={50} />
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
