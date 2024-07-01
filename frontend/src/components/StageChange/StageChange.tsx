import "@mantine/carousel/styles.css";
import { Carousel, Embla } from "@mantine/carousel";
import { Image, Slider } from "@mantine/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { userData,seedLings } from "../../App";

const stages = [
  "./images/01_stage_01.png",
  "./images/01_stage_02.png",
  "./images/01_stage_03.png",
  "./images/01_stage_04.png",
  "./images/01_stage_05.png",
];

export const StageChange = () => {

  const user = useContext(userData);
  console.log("userは:",user);

  const seed = useContext(seedLings);
  console.log("seedLingsは:",seed);


  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [slideNo, setSlideNo] = useState<number>(0);
  const slides = stages.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
    console.log(scrollProgress)
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
    <>
      <Carousel
        slideSize="60%"
        slideGap="lg"
        getEmblaApi={setEmbla}
        initialSlide={0}
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
  );
};
