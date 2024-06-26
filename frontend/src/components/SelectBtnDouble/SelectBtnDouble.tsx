// import React from "react";
import { Box, Button, Group } from "@mantine/core";
import axios from "axios";
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

  const postSeedling = async () => {
    await axios.post("/api/seedlings", {
      user_id: 1, //Lineログインができたらここを変えて
      vegetable_id: active,
      growing_stage_no: 1, //スタートは０からでいい？
      seedling_name: seedlingName,
    });
    navigate("/home");
  };

  return (
    <Box h={"80px"}>
      {/* <Text>選択中の野菜：{`${seedlingName}`}</Text> */}
      <Group justify="center">
        <Button
          h={50}
          p={"10px 30px"}
          radius={50}
          bg={"#47BB01"}
          onClick={postSeedling}
        >
          選択する
        </Button>
        <Button
          h={50}
          p={"10px 30px"}
          radius={50}
          bg={"#59635D"}
          ml={20}
          onClick={() => {
            navigate("/home");
          }}
        >
          戻る
        </Button>
      </Group>
    </Box>
  );
};
