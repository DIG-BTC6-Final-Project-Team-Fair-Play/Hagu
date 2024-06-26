import { Image } from "@mantine/core";
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

export const CurrentStage: React.FC = ({ slideNo }: slideNoProps) => {
  const stages = images.map((obj) => (
    <div
      key={obj.id}
      className="stage_contents"
      style={{ backgroundColor: "#e4bfbe", height: "11vh", width: "10vw" }}
    >
      <Image src={obj.url} style={{ height: "5vh" }} />

      <text
        className="stage_text"
        style={{ fontSize: "4vw", writingMode: "vertical-rl" }}
      >
        {obj.name}
      </text>
    </div>
  ));
  return (
    <>
      <div>スライドNoは{slideNo}だよ</div>
      <div className="stage">{stages}</div>
    </>
  );
};
