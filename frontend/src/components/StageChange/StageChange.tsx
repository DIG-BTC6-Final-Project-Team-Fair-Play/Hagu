import "@mantine/carousel/styles.css";
import { Carousel, Embla } from "@mantine/carousel";
import { Avatar, Group, Image, Slider, Space } from "@mantine/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { seedLings } from "../../App";
import { AdviceBox } from "../AdviceBox";
import { HomeBack } from "../HomeBack";
import { HomeNext } from "../HomeNext";


export const StageChange = () => {
  // const [seedId, setSeedId] = useState<number>(0);
  let seedId = 0
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [slideId, setSlideId] = useState<number>(0);
  const [newComer, setNewComer] = useState<boolean>(false);
  const [vegetableId, setVegetableId] = useState<number>(0);
  const [nextOn, setNextOn] = useState<boolean>(false);
  const [backOn, setBackOn] = useState<boolean>(false);


  const seed = useContext(seedLings);

  const stages = [
    `./images/0${vegetableId}_stage_01.png`,
    `./images/0${vegetableId}_stage_02.png`,
    `./images/0${vegetableId}_stage_03.png`,
    `./images/0${vegetableId}_stage_04.png`,
    `./images/0${vegetableId}_stage_05.png`,
  ];

  const message = [
    `花が咲いたら`,
    `実がついたら`,
    `実が大きくなったら`,
    `収穫できるようになったら`,
  ];

  //seedファイルの有/無で初期値を設定
  useEffect(() => {
    if (seed.length !== 0) {
      setVegetableId(seed[seedId].vegetable_id);
      setNewComer(true);
      setSlideId(seed[seedId].growing_stage_no-1);
    }
  }, [seed]);
  
  const slides = stages.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  //カルーセルのスクロール状態を取得
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = parseFloat(Math.max(0, Math.min(1, embla.scrollProgress())).toFixed(3));
    setScrollProgress(progress);
  }, [embla,setScrollProgress]);

  //現ステージとカルーセル位置からNext/Backを判断それぞれのコンポーネントを呼び出し
 useEffect(()=> {
   if (slideId=== 0) {
     if (scrollProgress > 0.2) {
       setNextOn(true);
     }
   } else if (slideId === 1) {
     if (scrollProgress < 0.05) {
       setBackOn(true)
     } else if (scrollProgress > 0.45) {
       setNextOn(true);
     }
   } else if (slideId === 2) {
     if (scrollProgress < 0.3) {
       setBackOn(true)
     } else if (scrollProgress > 0.7) {
       setNextOn(true);
     }
   } else if (slideId === 3) {
     if (scrollProgress < 0.55) {
       setBackOn(true)
     } else if (scrollProgress > 0.95) {
      setNextOn(true);
     }
   } else if (slideId === 4) {
     if (scrollProgress < 0.8) {
       setBackOn(true)
     }
   }
 },[scrollProgress])
  
//カルーセルの移動でhandleScrollを実行
  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    newComer && (
      <>
        {backOn && (
          <HomeBack
          prev={(jump)=> embla?.scrollNext(jump)}
          setSlideId={setSlideId}
          setBackOn={setBackOn}
          ></HomeBack>)}
        {nextOn && (
          <HomeNext
            nextMessage={message[slideId]}
            prev={(jump) => embla?.scrollPrev(jump)}
            setSlideId={setSlideId}
            setNextOn={setNextOn}
          ></HomeNext>
        )}

        <Space h={"xl"}></Space>
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
          initialSlide={slideId}
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
          value={slideId * 25}
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
