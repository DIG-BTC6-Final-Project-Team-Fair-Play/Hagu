import { Button, Center, Space, Stack } from "@mantine/core";

import { TimeLapsePhotos } from "../../components/TimeLapsePhotos";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const PhotosPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Stack>
        <Center>
          <TimeLapsePhotos />
          <Space h={"xl"} />
        </Center>
        <Center>
          <Button
            w={"100"}
            onClick={() => {
              navigate("/home");
            }}
          >
            戻る
          </Button>
        </Center>
      </Stack>
    </>
  );
};
