import { Avatar, Box, Center, Grid, GridCol, Space, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Seedlings } from "../../types/globals";

export const SeedlingSelect = () => {
  //-------------UserIDが入る！--------
  const id = 1;
  //----------------------------------
  const [mySeedling, setMySeedling] = useState<Seedlings[]>([]);
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
                    bg={"gray"}
                    src={
                      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghPf6kdy8bQqZLyblv9JcqcLZ9fZsV1uJhAZx0ADUVrYOCOMIxBrIP0dmohPg_YDdhPfsTcXDAIGvCKkQhC96g8CHxDK3XWTQnUIcN8K7jRNzziWjcQSmTPMG4p3v_Yp-MQWMNzVHyzzH8/s800/vegetable_white_piiman.png"
                    }
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
                // bg={"gray"}
                src={""}
              />
              <Space h={"xs"} />
              <Text size="m">新しい苗</Text>
            </Box>
          </Center>
        </GridCol>
      </Grid>
    </Box>
  );
};
