import { Center, Group, Image, Box, Space } from "@mantine/core";
import "./Watering.css";

export const Watering = () => {
  return (
    <>
      <Box my={"20%"}>
        <Image
          // src={`./images/0${vegetableId}_icon.png`}
          src={`./images/01_before.png`}
          h={"40vh"}
          fit="contain"
          alt="Norway"
          style={{ filter: "grayscale(100%)" }}
        />
        <Space h={"xl"}></Space>
        <Center>
          <Group justify="space-between">
            <Image
              // src={`./images/0${vegetableId}_icon.png`}
              mx={"auto"}
              src={`./images/Watering.png`}
              w={"30%"}
              fit="contain"
              alt="Norway"
            />
            <Image
              // src={`./images/0${vegetableId}_icon.png`}
              mx={"auto"}
              src={`./images/Camera.png`}
              w={"30%"}
              fit="contain"
              alt="Norway"
            />
          </Group>
          {/* https://mantine.dev/core/indicator/ */}
        </Center>
      </Box>
    </>
  );
};
