import React, { useState } from "react";

export const Input = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    onSend(message);
    setMessage("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
