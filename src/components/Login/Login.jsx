import React from "react";

function Login() {
  return (
    <div className="w-60 h-96 bg-blue-400 flex flex-col items-center justify-center rounded-xl border-2">
      <h1 className="font-bold text-xl relative bottom-20">Welcome to Chat</h1>
      <p className="text-sm relative bottom-2">Enter your username</p>
      <input type="text" placeholder="Username" />
    </div>
  );
}

export default Login;
