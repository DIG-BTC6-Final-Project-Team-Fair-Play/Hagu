import { Card, Image } from "@mantine/core";
import "./CurrentStage.css";

const images = [
  {
    id: 0,
    name: "定植",
    url: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  },
  {
    id: 1,
    name: "開花",
    url: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  },
  {
    id: 2,
    name: "着果",
    url: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
  },
  {
    id: 3,
    name: "色付",
    url: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
  },
  {
    id: 4,
    name: "収穫",
    url: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
  },
];

// const color = ["#862d2d", "#e6b3b3"];

interface slideNoProps {
  slideNo?: number;
}

export const CurrentStage = ({ slideNo }: slideNoProps) => {
  const stages = images.map((obj) => (
    <Card
      className="stage_contents"
      padding="lg"
      radius="md"
      withBorder
      style={{ height: "12vh", width: "5vw" }}
    >
      <Card.Section key={obj.id} color="red">
        <Image src={obj.url} style={{ height: "5vh" }} />
      </Card.Section>

      <text className="stage_text">{obj.name}</text>
    </Card>
  ));
  return (
    <>
      <div>スライドNoは{slideNo}だよ</div>
      <div className="stage">{stages}</div>
    </>
  );
};
