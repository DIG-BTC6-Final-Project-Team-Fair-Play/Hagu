// import React from "react";
import { Box, Button, Group, Text, Flex, Space, Modal } from "@mantine/core";
import axios from "axios";
import { useContext } from "react";
import { selectSeedIdContext } from "../../App";
import { Seedlings } from "../../types/globals";

interface BtnProps {
  opened: boolean;
  closeModal: () => void;
  seedName: string;
  setMySeedling: React.Dispatch<React.SetStateAction<Seedlings[]>>;
}

export const DeleteSeed = ({
  opened,
  closeModal,
  seedName,
}: // setMySeedling,
BtnProps) => {
  const { selectSeedId, setSelectSeedId } = useContext(selectSeedIdContext);
  // const userID = useContext(userData);

  const deleteSeedling = async () => {
    await axios.delete(`/api/seedlings/${selectSeedId}`);
    setSelectSeedId(0);

    // const seedlings = await axios
    //   .get(`/api/seedlings/${userID}`)
    //   .then((res) => res.data);
    // setMySeedling(seedlings);
  };

  return (
    <Modal opened={opened} onClose={closeModal} title="苗の削除" centered>
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        h={"100%"}
        w={"100%"}
      >
        <Box h={"30%"} w={"80%"} bg={"white"} style={{ borderRadius: "20px" }}>
          <Box mt={30}>
            <Text ta={"center"}>{`${seedName}`}</Text>
            <Space h={"sm"} />
            <Text ta={"center"}>削除しますか？</Text>
          </Box>

          <Group justify="center" mt={30}>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"red"}
              onClick={() => {
                deleteSeedling();
                closeModal();
              }}
            >
              削除
            </Button>
            <Button
              h={50}
              w={"35%"}
              p={"10px 20px"}
              radius={50}
              bg={"#59635D"}
              ml={20}
              onClick={closeModal}
            >
              戻る
            </Button>
          </Group>
        </Box>
      </Flex>
    </Modal>
  );
};
