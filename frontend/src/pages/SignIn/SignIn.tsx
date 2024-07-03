import { Flex } from "@mantine/core";
import "./SignIn.css";
import { useState } from "react";

export const SignIn = () => {
  const [signInIcon, setSignInIcon] = useState(
    "./images/LINE_Login_Button_01.png"
  );

  return (
    <Flex
      direction="column"
      bg={"#F2EBD990"}
      style={{ height: "100vh" }}
      justify={"center"}
    >
      <img
        className="sign_in_icon"
        src="./images/haguSignIn.png"
        height={"350px"}
        style={{ objectFit: "cover" }}
      ></img>
      <div
        style={{ height: "7%" }}
        className="logIn"
        onMouseOver={() => {
          setSignInIcon("./images/LINE_Login_Button_02.png");
        }}
        onMouseLeave={() => {
          setSignInIcon("./images/LINE_Login_Button_01.png");
        }}
      >
        <a href="/api/auth">
          <img src={signInIcon} style={{ height: "100%" }} />
        </a>
      </div>
    </Flex>
  );
};
