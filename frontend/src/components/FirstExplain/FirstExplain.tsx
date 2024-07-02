import { useLocation, useNavigate } from "react-router-dom";
import "./FirstExplain";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Vegetable_advice } from "../../types/globals";
import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import { userData } from "../../App";

export const FirstExplain = () => {
  const location = useLocation();
  const vegetableId = location.state.vegetableId;
  const seedlingName = location.state.seedlingName;
  const userID = useContext(userData);
  const navigate = useNavigate();

  const [advice, setAdvice] = useState<Vegetable_advice>({
    vegetable_id: 0,
    growing_stage_no: 0,
    advice: "string",
  });
  console.log("advice: ", advice);

  useEffect(() => {
    (async () => {
      const vegetableData = await axios
        .get(`/api/advice/${vegetableId}`)
        .then((res) =>
          res.data.filter((obj: Vegetable_advice) => obj.growing_stage_no === 0)
        );
      setAdvice(vegetableData[0]);
    })();
  }, []);

  const postSeedling = async () => {
    const seedlingId = await axios
      .post("/api/seedlings", {
        user_id: userID, //Lineログインができたらここを変えて
        vegetable_id: vegetableId,
        growing_stage_no: 1, //スタートは０からでいい？
        seedling_name: seedlingName,
      })
      .then((res) => res.data);
    console.log("seedlingId.id: ", seedlingId.id);
    navigate("/home", { state: { seedlingId: seedlingId.id } });
  };
  return (
    <>
      <Center>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          my={"5%"}
          w={"90%"}
        >
          <Card.Section>
            <Image
              src={`./images/0${vegetableId}_icon.png`}
              height={"200"}
              fit="contain"
              alt="Norway"
              bg={"#F2EBD9"}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>苗を植える手順</Text>
            <Badge color="#5F907B">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed" h={"35vh"}>
            {advice.advice}
          </Text>

          <Group justify="space-between">
            <Button
              color="#5F907B"
              w={"35%"}
              mt="md"
              radius="md"
              mx={"5%"}
              onClick={postSeedling}
            >
              準備OK！
            </Button>
            <Button
              color="#5F907B"
              w={"35%"}
              fullWidth
              mt="md"
              radius="md"
              mx={"5%"}
              onClick={() => {
                navigate("/create");
              }}
            >
              もどる
            </Button>
          </Group>
        </Card>
      </Center>
    </>
  );
};
