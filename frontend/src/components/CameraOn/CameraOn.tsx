import { Container, Image, Box, Text, Flex, Slider } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import { Refresh, CameraPlus } from "tabler-icons-react";
import storage from "../../firebase/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface cameraProps {
  seedlingId: number;
}

export const CameraOn = ({ seedlingId }: cameraProps) => {
  const navigate = useNavigate();
  const camera = useRef<CameraType | null>(null);
  const [image, setImage] = useState<string | ImageData | null>(null);
  const [lastPhoto, setLastPhoto] = useState<string>("");
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0.5);
  useEffect(() => {
    axios.get(`/api/lastPhotos/${seedlingId}`).then((res) => {
      if (res.data.photo_data) setLastPhoto(res.data.photo_data);
    });
  }, []);
  const takePhoto = () => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      console.log(photo);
      setImage(photo);
    } else {
      console.error("Camera not available");
    }
  };

  const createJpegFile4Base64 = function (
    base64Data: string,
    fileName: string
  ) {
    const bin = atob(base64Data.replace(/^.*,/, ""));
    const buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    return new File([buffer.buffer], fileName, { type: "image/png" });
  };

  const onFileUPloadToFirebase = () => {
    // 現在の日時をUTCで取得し、ファイル名として使用
    const now = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `photo_${now}.png`;
    if (typeof image === "string") {
      const file = createJpegFile4Base64(image, fileName);
      const storageRef = ref(storage, `image/${fileName}`);
      const uploadImage = uploadBytesResumable(storageRef, file);
      uploadImage.on(
        "state_changed",
        () => {
          setLoading(true);
        },
        (err) => {
          console.error(err);
        },
        () => {
          setLoading(false);
          axios.post("/api/photos", {
            seedling_id: seedlingId,
            photo_data: "gs://hagu-882e3.appspot.com/image/" + fileName,
          });
          console.log("sent to server", loading);
          // ナビゲート
          navigate("/watering");
        }
      );
    } else {
      console.log("No image available");
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
          <Box pos={"relative"} h={"75vh"} w={"90vw"} mt={"5vh"} ml={"5vw"}>
            <Image src={image}></Image>
          </Box>
          <Box h={"5vh"}></Box>
          <Flex h={"15vh"} justify={"space-between"} align={"center"}>
            <Box w={"100px"} ta={"center"}>
              <Text c="#AAB787" onClick={onFileUPloadToFirebase}>
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
          <Box pos={"relative"} h={"75vh"} w={"90vw"} mt={"5vh"} ml={"5vw"}>
            <Camera
              ref={camera}
              errorMessages={errorMessages}
              facingMode="environment"
              numberOfCamerasCallback={setNumberOfCameras}
            />
            {lastPhoto.length === 0 ? (
              <Image
                src={
                  "https://booth.pximg.net/fde8b078-d39f-4221-8463-1050ba7db401/i/2143735/b4faf31b-e93d-4542-a2d7-427959d3130f_base_resized.jpg"
                }
                style={{
                  height: "75vh",
                  position: "absolute",
                  zIndex: 100,
                  opacity: opacity,
                }}
              ></Image>
            ) : (
              <Image
                src={lastPhoto}
                style={{
                  height: "75vh",
                  position: "absolute",
                  zIndex: 100,
                  opacity: opacity,
                }}
              ></Image>
            )}
          </Box>
          <Box h={"5vh"} w={"80vw"} m={"0 auto"}>
            <Slider
              color="#AAB787"
              mt={"35px"}
              showLabelOnHover={false}
              label={(value) => `${Math.trunc(value * 100)} %`}
              onChange={(value) => setOpacity(value)}
              min={0}
              max={0.8}
              step={0.04}
              defaultValue={0.4}
              thumbSize={26}
            ></Slider>
          </Box>
          <Flex h={"15vh"} justify={"space-between"} align={"center"}>
            <Box w={"100px"} ta={"start"} pl={10}>
              <Text
                c="#AAB787"
                onClick={() => {
                  navigate("/watering");
                }}
              >
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
