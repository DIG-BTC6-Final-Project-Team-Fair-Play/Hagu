import { useContext } from "react";
import { CameraOn } from "../../components/CameraOn";
import { selectSeedIdContext } from "../../App";

export const CameraPage = () => {
  const { selectSeedId } = useContext(selectSeedIdContext);
  return (
    <div>
      <CameraOn seedlingId={selectSeedId}></CameraOn>
    </div>
  );
};
