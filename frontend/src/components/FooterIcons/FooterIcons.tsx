// import React from "react";
import { Box, Flex } from "@mantine/core";
import {
  IconHomeEco,
  IconBellHeart,
  IconPhotoSearch,
  IconPlant,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const FooterIcons = () => {
  const footerH = 60;
  const iconSize = 30;
  const navigate = useNavigate();

  //  <Route path="seedling" element={<SeedlingSelectPage />} />
  // <Route path="create" element={<CreatePage />} />
  // <Route path="home" element={<HomePage />} />
  // <Route path="camera" element={<CameraPage />} />
  // <Route path="photos" element={<PhotosPage />} />
  // <Route path="photosList" element={<PhotosListPage />} />
  // <Route path="friends" element={<FriendsPage />} />
  // <Route path="/" element={<SignIn />} />
  // <Route path="*" element={<h1>Not Found Page</h1>} />

  return (
    <Box h={footerH}>
      <Flex
        direction="row"
        align="center"
        justify={"space-evenly"}
        bg={"#5CB697"}
      >
        <IconHomeEco
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/home")}
        ></IconHomeEco>
        <IconPlant
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/seedling")}
        ></IconPlant>
        <IconBellHeart
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/watering")}
        ></IconBellHeart>
        <IconPhotoSearch
          size={iconSize}
          color="white"
          style={{ margin: (footerH - iconSize) / 2 }}
          onClick={() => navigate("/photosList")}
        ></IconPhotoSearch>
      </Flex>
    </Box>
  );
};
