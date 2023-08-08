import React, { useState } from "react";
import Login from "./Login/Login";
import Chat from "./Chat/Chat";
import UserContext from "./context/UserContext";
import Scaledrone from "scaledrone-react-native";

const CHANNEL_ID = "PxJBgQZcZTv6UNgd";

function ChatApp() {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);

  function onUserLogin(username) {
    if (username) {
      const drone = new Scaledrone(CHANNEL_ID, {
        data: { username },
      });
      drone.on("open", () => {
        setDrone(drone);
        setUser({ id: drone.clientId, username });
      });
    }
  }

  function userLogout() {
    drone.close();
    setDrone(null);
    setUser(null);
  }

  return (
    <div>
      <UserContext.Provider value={{ user, drone, onUserLogin, userLogout }}>
        {!user && <Login />}
        {user && <Chat />}
      </UserContext.Provider>
    </div>
  );
}

export default ChatApp;
