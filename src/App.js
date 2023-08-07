import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Scaledrone from "scaledrone-react-native";
import { Messages } from "./components/Chat/Messages";
import { Header } from "./components/Chat/Header";
import { Input } from "./components/Chat/Input";

export const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const randomUsername = "user" + uuidv4().substring(0, 8);
    setCurrentUser(randomUsername);

    const scaledrone = new Scaledrone("PxJBgQZcZTv6UNgd");
    setDrone(scaledrone);
    const room = scaledrone.subscribe("room_3");

    room.on("error", (error) => console.error(error));

    scaledrone.on(`open`, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Scaledrone povezan");
      }
    });

    room.on("data", (data, member) => {
      const message = `${member.clientData.username}: ${data}`;
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleSend = (message) => {
    drone.publish({ room: "room_3", message: { message } });
  };

  return (
    <div>
      <Header currentUser={currentUser} />
      <Messages messages={messages} />
      <Input onSend={handleSend} />
    </div>
  );
};
