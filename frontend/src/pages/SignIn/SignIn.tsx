import { Flex } from "@mantine/core";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <Flex direction="column" style={{ height: "100vh" }}>
      <img
        className="sign_in_icon"
        src="./images/haguSignIn.png"
        width={"400vw"}
      ></img>
      <div style={{ height: "7%" }} className="logIn">
        <a href="/api/auth">
          <img
            src={"./images/LINE_Login_Button_01.png"}
            style={{ height: "100%" }}
          />
        </a>
      </div>
    </Flex>
  );
};
