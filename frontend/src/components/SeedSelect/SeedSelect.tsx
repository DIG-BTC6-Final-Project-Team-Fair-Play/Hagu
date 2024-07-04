import {
  Avatar,
  Box,
  Center,
  Grid,
  GridCol,
  Indicator,
  Space,
  Text,
} from "@mantine/core";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Seedlings } from "../../types/globals";
import { useNavigate } from "react-router-dom";
import { selectSeedIdContext, userData } from "../../App";
import { DeleteSeed } from "../DeleteSeed";
import { useDisclosure } from "@mantine/hooks";

export const SeedlingSelect = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteSeedName, setDeleteSeedName] = useState("");
  const navigate = useNavigate();
  const userID = useContext(userData);
  const { selectSeedId, setSelectSeedId } = useContext(selectSeedIdContext);
  const [mySeedling, setMySeedling] = useState<Seedlings[]>([]);
  const [deletePreparation, setDeletePreparation] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const seedlings = await axios
        .get(`/api/seedlings/${userID}`)
        .then((res) => res.data);
      setMySeedling(seedlings);
      console.log("sss");
    })();
  }, [selectSeedId]);
  return (

    <>
      <Grid h={"100%"} w={"90vw"} m={"0 auto"}>
        <GridCol span={6}>
          <Center h={"100%"}>
            <Box h={"70%"}>
              <Space h={"md"} />
              <Avatar
                m={"auto"}
                size={"xl"}
                radius={"100"}
                bg={"lightgray"}
                bd={"2px dashed #4D4D4D"}
                src={"./images/plus.png"}
                onClick={() => {
                  navigate("/create");
                }}
              />
              <Space h={"xs"} />
              <Center>
                <Text size="md">新しい苗</Text>
              </Center>
            </Box>
          </Center>
        </GridCol>
        {mySeedling.map((obj, index) => {
          return (
            <GridCol span={6} key={index} p={0}>
              <Center h={"100%"}>
                <Box h={"70%"}>
                  <Space h={"md"} />
                  <Indicator
                    size={24}
                    disabled={deletePreparation}
                    color="red"
                    inline
                    label="削除"
                  >
                    <Avatar
                      m={"auto"}
                      size={"xl"}
                      radius={"100"}
                      bg={"#CAD6C5"}
                      src={`./images/0${obj.vegetable_id}_icon.png`}
                      style={{ filter: "drop-shadow(1px 1px 2px black" }}
                      onClick={() => {
                        if (!deletePreparation) {
                          setDeleteSeedName(obj.seedling_name);
                          setSelectSeedId(obj.id);
                          open();
                        } else {
                          setSelectSeedId(obj.id);
                          navigate("/home");
                        }
                      }}
                    />
                  </Indicator>
                  <Space h={"xs"} />
                  <Center>
                    <Text size="m">{mySeedling[index].seedling_name}</Text>
                  </Center>
                </Box>
              </Center>
            </GridCol>
          );
        })}
        {mySeedling.length !== 0 ? (
          <GridCol span={6}>
            <Center h={"100%"}>
              <Box h={"70%"}>
                <Space h={"md"} />
                <Avatar
                  m={"auto"}
                  size={"xl"}
                  radius={"100"}
                  bg={"lightgray"}
                  bd={"2px dashed #4D4D4D"}
                  src={"./images/minus.png"}
                  onClick={() => {
                    setDeletePreparation(!deletePreparation);
                    console.log({ deletePreparation });
                  }}
                />
                <Space h={"xs"} />
                <Center>
                  <Text size="md">苗を削除</Text>
                </Center>
              </Box>
            </Center>
          </GridCol>
        ) : (
          ""
        )}

      </Grid>
      <DeleteSeed
        opened={opened}
        closeModal={close}
        seedName={deleteSeedName}
        setMySeedling={setMySeedling}
      />
    </>

  );
};
