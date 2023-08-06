import React from "react";

function Chat() {
  const users = [{ id: 1, name: "John" }];

  return (
    <div className=" min-h-screen min-w-full bg-slate-600">
      <header className="bg-red-950 h-full w-1/4 flex justify-center">
        <p className="text-white">Korisnici</p>
      </header>
      <div className=" h-full w-1/4 bg-yellow-500 flex justify-center">
        {users.map((user) => (
          <p key={user.id} className="text-white">
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Chat;
