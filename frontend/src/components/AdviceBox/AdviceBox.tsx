import { ScrollArea, Text } from "@mantine/core";
import "./AdviceBox.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Vegetable_advice } from "../../types/globals";
import React from "react";

interface VegeAdviceProps {
  slideId: number;
  vegetableId: number;
}

const MultiLineBody = ({ body }: { body: string }) => {
  const texts = body.split("\n").map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });

  return <div>{texts}</div>;
};

export const AdviceBox = ({ slideId, vegetableId }: VegeAdviceProps) => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    (async () => {
      const advice = await axios
        .get(`/api/advice/${vegetableId}`)
        .then((res) => {
          return res.data.filter(
            (obj: Vegetable_advice) => obj.growing_stage_no === slideId + 1
          )[0].advice;
        });
      setAdvice(advice);
    })();
  }, [slideId]);

  return (
    <>
      <div className="advice">
        <Text pt={8} pl={10} pr={10} fz={"13"} w={"70vw"} h={"15Vh"}>
          {/* <ScrollArea h={"13vh"}>{advice}</ScrollArea> */}
          <ScrollArea h={"13vh"}>
            <MultiLineBody body={advice} />
          </ScrollArea>
        </Text>
      </div>
    </>
  );
};
