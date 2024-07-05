import { useState } from "react";
import {
  Box,
  Group,
  Avatar,
  Text,
  Accordion,
  TextInput,
  RangeSlider,
  Space,
  Slider,
} from "@mantine/core";
import { SelectBtnDouble } from "../SelectBtnDouble";
import { Vegetables } from "../../types/globals";
import "./SelectSeedling.css";

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
    setActive(value);
  };
  const items = vegetableData.map((item) => (
    <Accordion.Item value={`${item.id}`} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Group >
          <Text>{item.content}</Text>
          <Text fw={700} size="sm"c={"#8E5E75"}>ー 植付</Text>
          <Text fw={700} size="sm" c={"#5F907B"}>ー 収穫</Text>
        </Group>
        <Space h={3}></Space>
        <Slider
          disabled
          draggable={false}
          size={"xs"}
          showLabelOnHover={false}
          marks={[
            { value: 0, label: "1月" },
            { value: 100 / 11, label: "2月" },
            { value: (100 / 11) * 2, label: "3月" },
            { value: (100 / 11) * 3, label: "4月" },
            { value: (100 / 11) * 4, label: "5月" },
            { value: (100 / 11) * 5, label: "6月" },
            { value: (100 / 11) * 6, label: "7月" },
            { value: (100 / 11) * 7, label: "8月" },
            { value: (100 / 11) * 8, label: "9月" },
            { value: (100 / 11) * 9, label: "10月" },
            { value: (100 / 11) * 10, label: "11月" },
            { value: (100 / 11) * 11, label: "12月" },
          ]}
        ></Slider>
        <RangeSlider
          top={-8}
          draggable={false}
          color="#8E5E75"
          size={"xs"}
          showLabelOnHover={false}
          defaultValue={[(100 / 11) * (item.planting_start -1), (100 / 11) * (item.planting_end -1)]}
        ></RangeSlider>
        <RangeSlider
          top={-16}
          draggable={false}
          color="#5F907B"
          size={"xs"}
          showLabelOnHover={false}
          defaultValue={[(100 / 11) * (item.harvest_start -1), (100 / 11) * (item.harvest_end -1)]}
        ></RangeSlider>

        <Space></Space>
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
        placeholder="苗になまえをつけてあげよう！"
        size={"lg"}
        mt={"auto"}
        ml={"auto"}
        mr={"auto"}
        mb={10}
        w={"80%"}
        error={seedlingName.length > 10 ? "10文字いないで書いてね" : ""}
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
