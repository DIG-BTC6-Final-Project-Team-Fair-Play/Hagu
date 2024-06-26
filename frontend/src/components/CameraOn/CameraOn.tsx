import { Container, Image, Box, Text, Flex } from "@mantine/core";
import { useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import { Refresh, CameraPlus } from "tabler-icons-react";

export const CameraOn = () => {
  const camera = useRef<CameraType | null>(null);
  const [image, setImage] = useState<string | ImageData | null>(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const takePhoto = () => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      console.log(photo);
      setImage(photo);
    } else {
      console.error("Camera not available");
    }
  };

  const errorMessages = {
    noCameraAccessible: "使用可能なカメラがありません",
    permissionDenied: "カメラが許可されていません",
    switchCamera: "接続可能なカメラが１つしか無く、切り替えができません",
    canvas: "キャンバスがサポートされていません",
  };

  return (
    <Container h={"100vh"} w={"100vw"} bg={"Black"} p={0}>
      {image ? (
        <Flex direction={"column"}>
          <Box pos={"relative"} h={"80vh"} w={"90vw"} mt={"5vh"} ml={"5vw"}>
            <Image src={image}></Image>
          </Box>
          <Flex h={"15vh"} justify={"space-between"} align={"center"}>
            <Box w={"100px"} ta={"center"}>
              <Text c="#AAB787" onClick={() => {}}>
                写真を保存
              </Text>
            </Box>
            <Box w={"100px"} ta={"center"}>
              <Text c="#AAB787" onClick={() => setImage(null)}>
                撮り直す
              </Text>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex direction={"column"}>
          <Box pos={"relative"} h={"80vh"} w={"90vw"} mt={"5vh"} ml={"5vw"}>
            <Camera
              ref={camera}
              errorMessages={errorMessages}
              facingMode="environment"
              numberOfCamerasCallback={setNumberOfCameras}
            />
            <Image
              src={
                "https://booth.pximg.net/fde8b078-d39f-4221-8463-1050ba7db401/i/2143735/b4faf31b-e93d-4542-a2d7-427959d3130f_base_resized.jpg"
              }
              style={{
                height: "80vh",
                position: "absolute",
                zIndex: 100,
                opacity: 0.5,
              }}
            ></Image>
          </Box>
          <Flex h={"15vh"} justify={"space-between"} align={"center"}>
            <Box w={"100px"} ta={"start"} pl={10}>
              <Text c="#AAB787" onClick={() => {}}>
                キャンセル
              </Text>
            </Box>
            <Box>
              <CameraPlus size={60} color="#AAB787" onClick={takePhoto}>
                写真を撮る
              </CameraPlus>
            </Box>
            <Box w={"100px"} ta={"end"} pr={30}>
              <Refresh
                color="#AAB787"
                onClick={() => {
                  camera.current ? camera.current.switchCamera() : null;
                }}
                style={{
                  visibility: numberOfCameras <= 1 ? "hidden" : "visible",
                }}
              ></Refresh>
            </Box>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};
