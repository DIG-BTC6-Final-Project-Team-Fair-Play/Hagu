import "@mantine/carousel/styles.css";
import { Carousel, Embla } from "@mantine/carousel";
import { Avatar, Box, Flex, Image, Slider, Space, Text } from "@mantine/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { AdviceBox } from "../AdviceBox";
import { HomeBack } from "../HomeBack";
import { HomeNext } from "../HomeNext";
import { Seedlings } from "../../types/globals";
import { selectSeedIdContext } from "../../App";
import { Leaf } from "tabler-icons-react";
import { useLocation, useNavigate } from "react-router-dom";

interface StageChangeProps {
  seed: Seedlings[];
  setSeed: React.Dispatch<React.SetStateAction<Seedlings[]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StageChange = ({
  seed,
  setSeed,
  flag,
  setFlag,
}: StageChangeProps) => {
  const location = useLocation();
  const { selectSeedId } = useContext(selectSeedIdContext);
  let seedIndex =
    selectSeedId === 0 ? 0 : seed.findIndex((ele) => ele.id === selectSeedId);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [slideId, setSlideId] = useState<number>(0);
  const [newComer, setNewComer] = useState<boolean>(false);
  const [vegetableId, setVegetableId] = useState<number>(0);
  const [nextOn, setNextOn] = useState<boolean>(false);
  const [backOn, setBackOn] = useState<boolean>(false);
  const navigate = useNavigate();
  const [eatPhoto, setEatPhoto] = useState<string>("");

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
      setVegetableId(seed[seedIndex].vegetable_id);
      setNewComer(true);
      setSlideId(seed[seedIndex].growing_stage_no - 1);
      if (seed[seedIndex].eat_photo_url) {
        setEatPhoto(seed[seedIndex].eat_photo_url);
      } else {
        console.log("hogehoge");

        console.log("location?.state?.downLoadUrl: ", location?.state);
        setEatPhoto(location?.state?.downLoadUrl);
      }
    }
  }, [seed]);

  useEffect(() => {
    setFlag((prev) => {
      return !prev;
    });
    console.log("flag: ", flag);
  }, []);

  const slides = stages.map((url, index) => (
    <Carousel.Slide key={url}>
      {stages.length - 1 === index ? (
        <Box style={{ position: "relative" }}>
          <Image
            h={110}
            src={url}
            style={{
              filter: "drop-shadow(1px 1px 2px black",
              // position: "absolute",
              top: 110,
            }}
          />
          <Box h={"calc(30vh - 50px)"} style={{ borderRadius: 10 }} bg={"gray"}>
            <Flex h={"calc(30vh - 50px)"} justify="center" align="center">
              {eatPhoto ? (
                <Image src={eatPhoto} w={"98%"} />
              ) : (
                <Image
                  w={100}
                  src={"./images/Camera.png"}
                  onClick={() => {
                    navigate("/eat_camera");
                  }}
                />
              )}
            </Flex>
            {/* {seed[seedIndex] && console.log(seed[seedIndex].last_watering)} */}
          </Box>
        </Box>
      ) : (
        <Image src={url} style={{ filter: "drop-shadow(1px 1px 2px black" }} />
      )}
    </Carousel.Slide>
  ));

  //カルーセルのスクロール状態を取得
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = parseFloat(
      Math.max(0, Math.min(1, embla.scrollProgress())).toFixed(3)
    );
    setScrollProgress(progress);
  }, [embla, setScrollProgress]);

  //現ステージとカルーセル位置からNext/Backを判断それぞれのコンポーネントを呼び出し
  useEffect(() => {
    if (slideId === 0) {
      if (scrollProgress > 0.2) {
        setNextOn(true);
      }
    } else if (slideId === 1) {
      if (scrollProgress < 0.05) {
        setBackOn(true);
      } else if (scrollProgress > 0.45) {
        setNextOn(true);
      }
    } else if (slideId === 2) {
      if (scrollProgress < 0.3) {
        setBackOn(true);
      } else if (scrollProgress > 0.7) {
        setNextOn(true);
      }
    } else if (slideId === 3) {
      if (scrollProgress < 0.55) {
        setBackOn(true);
      } else if (scrollProgress > 0.95) {
        setNextOn(true);
      }
    } else if (slideId === 4) {
      if (scrollProgress < 0.8) {
        setBackOn(true);
      }
    }
  }, [scrollProgress]);

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
            prev={(jump) => embla?.scrollNext(jump)}
            setSlideId={setSlideId}
            setBackOn={setBackOn}
            growingStage={seed[seedIndex].growing_stage_no}
            seedIndex={seed[seedIndex].id}
            setSeed={setSeed}
          ></HomeBack>
        )}
        {nextOn && (
          <HomeNext
            nextMessage={message[slideId]}
            prev={(jump) => embla?.scrollPrev(jump)}
            setSlideId={setSlideId}
            setNextOn={setNextOn}
            growingStage={seed[seedIndex].growing_stage_no}
            seedIndex={seed[seedIndex].id}
            setSeed={setSeed}
          ></HomeNext>
        )}

        <Space h={"xs"}></Space>
        <Flex gap={"sm"} justify={"center"}>
          <AdviceBox slideId={slideId} vegetableId={vegetableId}></AdviceBox>
          <Box>
            <Avatar
              m={"auto"}
              size={"70"}
              src={`./images/0${vegetableId}_icon2.png`}
            />
            <Text size="xs" ta={"center"} w={60}>
              {seed[seedIndex].seedling_name}
            </Text>
          </Box>
        </Flex>
        <Box w={"100%"} h={"55%"} pos={"fixed"} bottom={"90px"}>
          <Carousel
            slideSize="30vh"
            slideGap="lg"
            getEmblaApi={setEmbla}
            initialSlide={slideId}
            withIndicators={false}
            withControls={false}
          >
            {slides}
          </Carousel>
          <Space h={"xs"}></Space>
          <Slider
            thumbChildren={<Leaf size="1rem" />}
            label={null}
            color="#5F907B"
            m={"auto"}
            w={"90%"}
            size={"xl"}
            value={slideId * 25}
            draggable={false}
            thumbSize={26}
            marks={[
              { value: 0, label: "定植" },
              { value: 25, label: "開花" },
              { value: 50, label: "着実" },
              { value: 75, label: "色付" },
              { value: 100, label: "収穫" },
            ]}
          ></Slider>
        </Box>
      </>
    )
  );
};
