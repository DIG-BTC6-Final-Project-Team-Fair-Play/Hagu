import "./HomePage.css";
import { Box, Flex } from "@mantine/core";
import { StageChange } from "../../components/StageChange";
import { FooterIcons } from "../../components/FooterIcons";
import { useContext, useEffect, useState } from "react";
import { Seedlings } from "../../types/globals";
import axios from "axios";
import { userData } from "../../App";
import { Header } from "../../components/Header";

export const HomePage = () => {
  const user = useContext(userData);
  const [seed, setSeed] = useState<Seedlings[]>([]);

  useEffect(() => {
    (async () => {
      const seedlings: Seedlings[] = await axios
        .get(`/api/seedlings/${user}`)
        .then((res) => {
          return res.data;
        });
      setSeed(seedlings);
    })();
  }, [user]);

  return (
    <>
      <Flex className="zen-maru-gothic-regular" direction="column" bg={"#F2EBD9"} style={{ height: "100vh" }}>
        <Header content={"Home"}></Header>
        <Box h={`calc(100vh - 60px - 48px -60px)`}>
          <StageChange seed={seed} setSeed={setSeed}></StageChange>
        </Box>
        <Box
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <FooterIcons></FooterIcons>
        </Box>
      </Flex>
    </>
  );
};
