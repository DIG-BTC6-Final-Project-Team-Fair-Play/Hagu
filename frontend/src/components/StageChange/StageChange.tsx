import "@mantine/carousel/styles.css";
import { Carousel, Embla } from "@mantine/carousel";
import { Avatar, Group, Image, Slider, Space } from "@mantine/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { userData, seedLings } from "../../App";
import { AdviceBox } from "../AdviceBox";

// const testSeed = [
//   {
//     id: 1,
//     user_id: 1,
//     vegetable_id: 3,
//     growing_stage_no: 1,
//     last_watering: "2024-06-25T01:00:00.000Z",
//     seedling_name: "苗ろう",
//   },
//   {
//     id: 2,
//     user_id: 1,
//     vegetable_id: 2,
//     growing_stage_no: 2,
//     last_watering: "2024-06-25T02:00:00.000Z",
//     seedling_name: "苗る",
//   },
// ];

export const StageChange = () => {
  const [seedId, setSeedId] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [slideNo, setSlideNo] = useState<number>(0);
  const [newComer, setNewComer] = useState<boolean>(false);
  const [vegetableId,setVegetableId] = useState<number>(0)
  
  const user = useContext(userData);
  console.log("userは:", user);
  
  const seed= useContext(seedLings);
  // const seed= testSeed; //test用
  console.log("seedLingsは:", seed);
  console.log("vegetableId",vegetableId)
  
  
  const stages = [
    `./images/0${vegetableId}_stage_01.png`,
    `./images/0${vegetableId}_stage_02.png`,
    `./images/0${vegetableId}_stage_03.png`,
    `./images/0${vegetableId}_stage_04.png`,
    `./images/0${vegetableId}_stage_05.png`,
  ];

  
  useEffect(() => {
    if (seed.length !== 0) {
      setVegetableId(seed[seedId].vegetable_id)
      setNewComer(true);
    }
    setSeedId(0)
  }, [seed]);
  
  const slides = stages.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress);
    console.log("slideNo", slideNo);
    console.log(scrollProgress);
    if (progress < 0.2) {
      console.log("slideは1です");
      setSlideNo(0);
    } else if (progress >= 0.2 && progress < 0.45) {
      console.log("slideは2です");
      setSlideNo(1);
    } else if (progress >= 0.45 && progress < 0.7) {
      console.log("slideは3です");
      setSlideNo(2);
    } else if (progress >= 0.7 && progress < 0.95) {
      console.log("slideは4です");
      setSlideNo(3);
    } else if (progress >= 0.95) {
      console.log("slideは5です");
      setSlideNo(4);
    }
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    newComer && (
      <>
        <Group>
          <AdviceBox></AdviceBox>
          <Avatar
            m={"auto"}
            size={"xl"}
            radius={"xl"}
            bg={"#cdd1d1"}
            src={`./images/0${vegetableId}_icon.png`}
          />
        </Group>
          <Space h={"xl"}></Space>
        <Carousel
          slideSize="60%"
          slideGap="lg"
          getEmblaApi={setEmbla}
          initialSlide={seed[seedId].growing_stage_no - 1}
          withIndicators={false}
          withControls={false}
        >
          {slides}
        </Carousel>
        <Slider
          color="green"
          m={"auto"}
          w={"90%"}
          size={"xl"}
          value={slideNo * 25}
          draggable={false}
          marks={[
            { value: 0, label: "定植" },
            { value: 25, label: "開花" },
            { value: 50, label: "着実" },
            { value: 75, label: "色付" },
            { value: 100, label: "収穫" },
          ]}
        ></Slider>
      </>
    )
  );
};
