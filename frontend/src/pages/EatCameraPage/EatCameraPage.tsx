import { useContext } from "react";
import { selectSeedIdContext } from "../../App";
import { EatCameraOn } from "../../components/EatCameraOn";

export const EatCameraPage = () => {
  const { selectSeedId } = useContext(selectSeedIdContext);
  return (
    <div>
      <EatCameraOn seedlingId={selectSeedId}></EatCameraOn>
    </div>
  );
};
