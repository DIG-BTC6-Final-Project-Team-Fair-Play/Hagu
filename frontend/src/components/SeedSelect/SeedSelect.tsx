import { Avatar, Box, Center, Grid, GridCol, Space, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Seedlings } from "../../types/globals";
import { useNavigate } from "react-router-dom";

export const SeedlingSelect = () => {
  //-------------UserIDが入る！--------
  const id = 1;
  //----------------------------------
  const [mySeedling, setMySeedling] = useState<Seedlings[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const seedlings = await axios
        .get(`/api/seedlings/${id}`)
        .then((res) => res.data);
      setMySeedling(seedlings);
      console.log("seedlings : ", seedlings);
    })();
  }, []);
  return (
    <Box h={"80vh"}>
      <Grid>
        {mySeedling.map((obj, index) => {
          return (
            <GridCol span={6} key={index}>
              <Center>
                <Box h={"70%"}>
                  <Space h={"md"} />
                  <Avatar
                    m={"auto"}
                    size={"xl"}
                    radius={"xl"}
                    bg={"#cdd1d1"}
                    src={`../.././public/images/0${obj.vegetable_id}_icon.png`}
                    onClick={() => {
                      navigate("/home");
                    }}
                  />
                  <Space h={"xs"} />
                  <Text size="m">{mySeedling[index].seedling_name}</Text>
                </Box>
              </Center>
            </GridCol>
          );
        })}
        <GridCol span={6}>
          <Center>
            <Box h={"70%"}>
              <Space h={"md"} />
              <Avatar
                m={"auto"}
                size={"xl"}
                radius={"xl"}
                bg={"#cdd1d1"}
                src={"../.././public/images/plus_icon_152556.png"}
                onClick={() => {
                  navigate("/create");
                }}
              />
              <Space h={"xs"} />
              <Text size="m" m={"auto"}>
                新しい苗
              </Text>
            </Box>
          </Center>
        </GridCol>
      </Grid>
    </Box>
  );
};
