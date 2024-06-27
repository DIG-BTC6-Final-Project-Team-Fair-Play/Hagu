import { Carousel } from "@mantine/carousel";
import { StageChange } from "../StageChange";

export const SeedChange = () => {
  const sample = [
    [
      "./images/n_01.png",
      "./images/n_02.png",
      "./images/n_03.png",
      "./images/n_04.png",
      "./images/n_05.png",
    ],
    [
      "./images/t_01.png",
      "./images/t_02.png",
      "./images/t_03.png",
      "./images/t_04.png",
      "./images/t_05.png",
    ],
  ];

  const seeds = sample.map((stages) => (
    <Carousel.Slide>
      <StageChange stages={stages}></StageChange>
    </Carousel.Slide>
  ));
  return (
    <Carousel  orientation="vertical" height={"65vh"} withIndicators>
      {seeds}
    </Carousel>
  );
};
