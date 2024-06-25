import { Carousel, Embla } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Image, Progress } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
];

export const MainPicture = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [slideNo, setSlideNo] = useState(0);
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    console.log(progress);
    if (progress < 0.2) {
      console.log("slideは1です");
      setSlideNo(0)
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
        slideSize="80%"
        slideGap="lg"
        draggable={false}
        withControls={false}
        getEmblaApi={setEmbla}
        initialSlide={0}
      >
        {slides}
      </Carousel>
      <p>{slideNo + 1}</p>
    </>
  );
};
