import { Button, Center, Space, Stack } from "@mantine/core";
import { HeaderSeedling } from "../../components/HeaderSeedling";

import { TimeLapsePhotos } from "../../components/TimeLapsePhotos";
import { useNavigate } from "react-router-dom";

export const PhotosPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderSeedling />
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
