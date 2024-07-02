import { useState } from "react";
import { Box, Group, Avatar, Text, Accordion, TextInput } from "@mantine/core";
import { SelectBtnDouble } from "../SelectBtnDouble";
import { Vegetables } from "../../types/globals";

// const seedlingList = [
//   {
//     id: "1",
//     image:
//       "https://media.istockphoto.com/id/495070436/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%B7%91%E8%83%A1%E6%A4%92%E7%99%BD%E3%81%A7%E5%88%86%E9%9B%A2.jpg?s=612x612&w=0&k=20&c=myz8RseDzJKR8hJiyI35ef7M5ziOM5K1_2_3Da1n7HQ=",
//     label: "ピーマン",
//     description: "種植え時期５月くらい",
//     content: "ピーマンのコツ",
//   },

//   {
//     id: "2",
//     image:
//       "https://hagi-gochi.jp/wp/wp-content/themes/hagigochi/images/food/nasu/img_lead.jpg",
//     label: "なす",
//     description: "種植え時期４月くらい",
//     content: "なすのコツ",
//   },

//   {
//     id: "トマト",
//     image:
//       "https://t4.ftcdn.net/jpg/04/58/75/79/360_F_458757982_MefO01wxlEef901gpO4Z8ISN0EEK0su3.jpg",
//     label: "トマト",
//     description: "種植え時期５月くらい",
//     content: "トマトのコツ",
//   },
// ];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

interface Props {
  vegetableData: Vegetables[];
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export const SelectSeedling: React.FC<Props> = ({ vegetableData }) => {
  const [seedlingName, setSeedlingName] = useState<string>("");
  const [active, setActive] = useState<string | null>(null);
  const handleAccordionChange = (value: string | null) => {
    console.log({ value });
    setActive(value);
  };

  // const items = seedlingList.map((item) => (
  //   <Accordion.Item value={item.id} key={item.label}>
  //     <Accordion.Control>
  //       <AccordionLabel {...item} />
  //     </Accordion.Control>
  //     <Accordion.Panel>
  //       <Text size="sm">{item.content}</Text>
  //     </Accordion.Panel>
  //   </Accordion.Item>
  // ));

  const items = vegetableData.map((item) => (
    <Accordion.Item value={`${item.id}`} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Box h={"100%"}>
      <Accordion
        h={"400px"}
        onChange={handleAccordionChange}
        chevronPosition="right"
        variant="contained"
        style={{ overflow: "hidden" }}
      >
        {items}
      </Accordion>
      <TextInput
        placeholder="選んだ苗になまえをつけてあげよう！"
        mt={"auto"}
        ml={"auto"}
        mr={"auto"}
        mb={10}
        w={"80%"}
        onChange={(e) => {
          setSeedlingName(e.target.value);
        }}
      ></TextInput>
      <Box>
        <SelectBtnDouble
          active={active}
          seedlingName={seedlingName}
        ></SelectBtnDouble>
      </Box>
    </Box>
  );
};
