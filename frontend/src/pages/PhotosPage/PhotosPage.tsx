import { Button, Center, Space, Stack } from "@mantine/core";

import { TimeLapsePhotos } from "../../components/TimeLapsePhotos";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useState } from "react";

export const PhotosPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectSeedId, setSelectSeedId] = useState<{ seedlingId: number }>(
    location.state as { seedlingId: number }
  );
  return (
    <>
      <Header />
      <Stack>
        <Center>
          <TimeLapsePhotos selectSeedId={selectSeedId.seedlingId} />
          <Space h={"xl"} />
        </Center>
        <Center>
          <Button
            w={"100"}
            onClick={() => {
              navigate("/photosList");
            }}
          >
            戻る
          </Button>
        </Center>
      </Stack>
    </>
  );
};
