import { Box } from "@mantine/core";
import { FriendsList } from "../../components/FriendsList";
import { FooterIcons } from "../../components/FooterIcons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userData } from "../../App";
import { Header } from "../../components/Header";

export const FriendsPage = () => {
  const [usersList, setUsersList] = useState<any>([]);
  const [friendsList, setFriendsList] = useState<any>([]);
  const [refresh, setRefresh] = useState(false);
  const userId = useContext(userData);

  useEffect(() => {
    axios.get(`/api/users/list`).then((res) => {
      setUsersList(res.data.filter((elem: any) => elem.user_id !== userId));
    });
  }, []);
  useEffect(() => {
    axios.get(`/api/friends/${userId}`).then((res) => {
      setFriendsList(res.data);
    });
  }, [refresh]);
  return (
    <>
      <Header content="フォロワー"></Header>
      <FriendsList
        usersList={usersList}
        friendsList={friendsList}
        setRefresh={setRefresh}
      ></FriendsList>
      <Box pos={"absolute"} w={"100%"} bottom={0}>
        <FooterIcons />
      </Box>
    </>
  );
};
