import { Box, Flex } from "@mantine/core";
import { Watering } from "../../components/Watering";
import { FooterIcons } from "../../components/FooterIcons";
import { ProfileSetting } from "../../components/ProfileSetting";

export const ProfilePage = () => {
  return (
    <>
      <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
        <Box h={`calc(100vh - 60px - 48px -60px)`}>
        <ProfileSetting></ProfileSetting>
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
