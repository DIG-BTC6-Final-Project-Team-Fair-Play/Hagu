// import React from "react";
import { Box, Button, Group } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

interface BtnProps {
  seedlingName?: string;
  active: string | null;
}

export const SelectBtnDouble: React.FC<BtnProps> = ({
  seedlingName,
  active,
}) => {
  const navigate = useNavigate();

  const navigateFirstExplain = async () => {
    if (active && seedlingName && seedlingName.length <= 10) {
      navigate("/first", {
        state: { vegetableId: active, seedlingName: seedlingName },
      });
    }
  };

  return (
    <Box h={"80px"}>
      {/* <Text>選択中の野菜：{`${seedlingName}`}</Text> */}
      <Group justify="center">
        <Button
          h={50}
          p={"10px 30px"}
          radius={50}
          bg={
            active && seedlingName && seedlingName.length <= 10
              ? "#5F907B"
              : "gray"
          }
          onClick={navigateFirstExplain}
        >
          選択する
        </Button>
        <Button
          h={50}
          p={"10px 30px"}
          radius={50}
          bg={"gray"}
          ml={20}
          onClick={() => {
            navigate("/home");
          }}
        >
          もどる
        </Button>
      </Group>
    </Box>
  );
};
