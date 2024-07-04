import { Avatar, Box, Center, Grid, GridCol, Space, Text } from "@mantine/core";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Seedlings } from "../../types/globals";
import { useNavigate } from "react-router-dom";
import { selectSeedIdContext, userData } from "../../App";

export const SeedlingSelect = () => {
  //-------------UserIDが入る！--------

  const userID = useContext(userData);
  // const id = 1;
  //----------------------------------
  // ================================
  const { setSelectSeedId } = useContext(selectSeedIdContext);
  //
  const [mySeedling, setMySeedling] = useState<Seedlings[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const seedlings = await axios
        .get(`/api/seedlings/${userID}`)
        .then((res) => res.data);
      setMySeedling(seedlings);
    })();
  }, []);
  return (
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
              src={"./images/plus_icon_152556.png"}
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
                <Avatar
                  m={"auto"}
                  size={"xl"}
                  radius={"100"}
                  bg={"#CAD6C5"}
                  src={`./images/0${obj.vegetable_id}_icon.png`}
                  style={{filter:"drop-shadow(1px 1px 2px black"}}
                  onClick={() => {
                    setSelectSeedId(obj.id);
                    // navigate("/home", { state: { id: obj.id } });
                    navigate("/home");
                  }}
                />
                <Space h={"xs"} />
                <Center>
                  <Text size="m">{mySeedling[index].seedling_name}</Text>
                </Center>
              </Box>
            </Center>
          </GridCol>
        );
      })}
    </Grid>
  );
};
