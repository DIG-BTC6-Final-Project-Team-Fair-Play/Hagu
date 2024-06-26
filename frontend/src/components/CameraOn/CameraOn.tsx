import { Button, Container, Image, Stack, Box } from "@mantine/core";
import React, { useRef, useState } from "react";
import { Camera, CameraProps, CameraType } from "react-camera-pro";

export const CameraOn = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const takePhoto = () => {
    const photo = camera.current.takePhoto();
    console.log(photo);
    setImage(photo);
  };
  const errorMessages = {
    noCameraAccessible: "使用可能なカメラがありません",
    permissionDenied: "カメラが許可されていません",
    switchCamera: "カメラ切り替え",
    canvas: "キャンバス",
  };

  return (
    <Container h={"100vh"} w={"100vw"} bg={"Gray"} p={0}>
      {image ? (
        <Stack>
          <Image src={image}></Image>
          <Button bg={"white"} variant="outline" onClick={() => setImage(null)}>
            キャンセル
          </Button>
        </Stack>
      ) : (
        <Stack>
          <Box style={{ position: "relative", width: "100vw", height: "90vh" }}>
            <Camera ref={camera} errorMessages={errorMessages} />
          </Box>
          <Button bg={"white"} variant="outline" onClick={takePhoto}>
            写真を撮る
          </Button>
        </Stack>
      )}
    </Container>
  );
};
