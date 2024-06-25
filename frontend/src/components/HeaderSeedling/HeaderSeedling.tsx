import { Box, Flex, Text, Stack, Center } from "@mantine/core";
import { SquarePlus } from "tabler-icons-react";

interface SeedlingProps {
  vegetableName?: string;
  seedlingName?: string;
}

export const HeaderSeedling = ({
  vegetableName = "ピーマン",
  seedlingName = "仮デフォルト",
}: SeedlingProps) => {
  const thisHeight = 80;
  const iconSize = 40;
  return (
    <Box bg={"#F2F5B1"} h={80}>
      <Flex direction="row" align="center">
        <Box ml={5}>
          <SquarePlus color="#94966E" size={iconSize} />
        </Box>
        <Stack gap={0}>
          <Center>
            <Text
              h={`${(thisHeight / 5) * 2}px`}
              lh={`${(thisHeight / 5) * 2}px`}
              size="sm"
              ml={10}
            >
              {vegetableName}
            </Text>
          </Center>
          <Center>
            <Text
              h={`${(thisHeight / 5) * 3}px`}
              lh={`${(thisHeight / 5) * 3}px`}
              ta="center"
              size="lg"
              ml={10}
            >
              {seedlingName}
            </Text>
          </Center>
        </Stack>
      </Flex>
    </Box>
  );
};
