import { Button, Flex, Image } from "@mantine/core";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <Flex direction="column"  style={{ height: "100vh" }}>
      <img
        className="sign_in_icon"
        src="./images/haguSignIn.png"
        width={"400vw"}
      ></img>
      <div className="logIn">
          <a href="/api/auth">
          <img  src={"./images/btn_base.png"}/>
          </a>
      </div>
    </Flex>
  );
};
