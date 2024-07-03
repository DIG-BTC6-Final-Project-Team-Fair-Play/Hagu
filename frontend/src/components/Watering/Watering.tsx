import { Center, Group, Image } from "@mantine/core";

export const Watering = () => {
  return (
    <>
      <Image
        // src={`./images/0${vegetableId}_icon.png`}
        src={`./images/01_before.png`}
        h={"50%"}
        fit="contain"
        alt="Norway"
        bg={"#F2EBD9"}
        style={{ filter: "grayscale(100%)" }}
      />
      <Center>
        <Group justify="space-between">
          <Image
            // src={`./images/0${vegetableId}_icon.png`}
            mx={"auto"}
            src={`./images/Watering.png`}
            w={"30%"}
            fit="contain"
            alt="Norway"
            bg={"#F2EBD9"}
          />
          <Image
            // src={`./images/0${vegetableId}_icon.png`}
            mx={"auto"}
            src={`./images/Camera.png`}
            w={"30%"}
            fit="contain"
            alt="Norway"
            bg={"#F2EBD9"}
          />
        </Group>
        {/* https://mantine.dev/core/indicator/ */}
      </Center>
    </>
  );
};
