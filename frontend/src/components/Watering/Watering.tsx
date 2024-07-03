import { Image } from "@mantine/core";

export const Watering = () => {
  return (
    <div className="watering">
      水やり画面
      <Image
        // src={`./images/0${vegetableId}_icon.png`}
        src={`./images/01_icon.png`}
        height={"200"}
        fit="contain"
        alt="Norway"
        bg={"#F2EBD9"}
      />
    </div>
  );
};
