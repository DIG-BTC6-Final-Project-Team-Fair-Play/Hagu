import "@mantine/carousel/styles.css";
import { Carousel, Embla } from "@mantine/carousel";
import { Image, Progress } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";

interface Props{
  stages:string[]
}

export const StageChange:React.FC<Props>= ({stages}) => {
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
    console.log(progress * 100);
    setScrollProgress(progress * 100);
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
    <>
      <Carousel
        slideSize="60%"
        slideGap="lg"
        getEmblaApi={setEmbla}
        initialSlide={0}
        withIndicators
        className="control"
      >
        {slides}
      </Carousel>
      <Progress
        color="green"
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
      {/* <CurrentStage slideNo ={slideNo}></CurrentStage> */}
    </>
  );
};
