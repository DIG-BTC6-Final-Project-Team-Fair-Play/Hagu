import "./HomePage.css";
import { AdviceBox } from "../../components/AdviceBox";
import { MainPicture } from "../../components/MainPicture";
import { HomeBack } from "../../components/HomeBack";

export const HomePage = () => {
  return (
    <>
      <AdviceBox></AdviceBox>
      <HomeBack></HomeBack>
      <MainPicture></MainPicture>
    </>
  );
};
