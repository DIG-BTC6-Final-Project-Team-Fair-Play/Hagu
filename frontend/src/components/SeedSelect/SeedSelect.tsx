import {
  Avatar,
  Box,
  Center,
  Grid,
  GridCol,
  ScrollArea,
  Space,
  Text,
} from "@mantine/core";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Seedlings } from "../../types/globals";
import { useNavigate } from "react-router-dom";
import { userData } from "../../App";

export const SeedlingSelect = () => {
  //-------------UserIDが入る！--------

  const userID = useContext(userData);
  // const id = 1;
  //----------------------------------
  const [mySeedling, setMySeedling] = useState<Seedlings[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const seedlings = await axios
        .get(`/api/seedlings/${userID}`)
        .then((res) => res.data);
      setMySeedling(seedlings);
      console.log("seedlings : ", seedlings);
    })();
  }, []);
  return (
    <ScrollArea h={"calc(100vh - 60px - 60px)"}>
      <Grid h={"100%"}>
        {mySeedling.map((obj, index) => {
          return (
            <GridCol span={6} key={index}>
              <Center h={"100%"}>
                <Box h={"70%"}>
                  <Space h={"md"} />
                  <Avatar
                    m={"auto"}
                    size={"xl"}
                    radius={"xl"}
                    bg={"#cdd1d1"}
                    src={`./images/0${obj.vegetable_id}_icon.png`}
                    onClick={() => {
                      navigate("/home", { state: { id: obj.id } });
                      console.log(obj.id, "をクリック");
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
        <GridCol span={6}>
          <Center h={"100%"}>
            <Box h={"70%"}>
              <Space h={"md"} />
              <Avatar
                m={"auto"}
                size={"xl"}
                radius={"xl"}
                bg={"#cdd1d1"}
                src={"./images/plus_icon_152556.png"}
                onClick={() => {
                  navigate("/create");
                }}
              />
              <Space h={"xs"} />
              <Center>
                <Text size="m" m={"auto"}>
                  新しい苗
                </Text>
              </Center>
            </Box>
          </Center>
        </GridCol>
      </Grid>
    </ScrollArea>
  );
};
