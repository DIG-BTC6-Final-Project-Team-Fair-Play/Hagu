import { Box } from "@mantine/core";
import { FriendsList } from "../../components/FriendsList";
import { FooterIcons } from "../../components/FooterIcons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userData } from "../../App";

export const FriendsPage = () => {
  const [usersList, setUsersList] = useState<any>([]);
  const [friendsList, setFriendsList] = useState<any>([]);
  const userId = useContext(userData);

  useEffect(() => {
    axios.get(`/api/users/list`).then((res) => {
      setUsersList(res.data.filter((elem: any) => elem.user_id !== userId));
    });
  }, []);
  useEffect(() => {
    axios.get(`/api/friends/${userId}`).then((res) => {
      console.log(res.data);
      setFriendsList(res.data);
    });
  }, []);
  return (
    <>
      <Box h={60}>友達候補</Box>
      <hr style={{ margin: 0 }}></hr>
      <FriendsList
        usersList={usersList}
        friendsList={friendsList}
      ></FriendsList>
      <Box pos={"absolute"} w={"100%"} bottom={0}>
        <FooterIcons />
      </Box>
    </>
  );
};
