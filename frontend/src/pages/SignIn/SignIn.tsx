import { Button, Flex, Group, Text } from "@mantine/core";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <Flex direction="column" bg={"#E2D9C1"} style={{ height: "100vh" }}>
      <img
        className="sign_in_icon"
        src="./images/haguSignIn.png"
        width={"80%"}
      ></img>
      <div className="logIn" >
        <Button fullWidth size="compact-xl" color="green" radius="xs">
          Lineでログイン
        </Button>
        <text className="sign_in_text">────サインイン────</text>
        <Button fullWidth size="compact-xl" color="green" radius="xs">
          Line登録
        </Button>
      </div>
    </Flex>
  );
};
