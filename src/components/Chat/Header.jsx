import React from "react";

export const Header = ({ currentUser }) => {
  return (
    <div>
      <h2>Bok, {currentUser}!</h2>
    </div>
  );
};
