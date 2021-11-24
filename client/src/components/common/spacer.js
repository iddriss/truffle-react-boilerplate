import React from "react";

function Spacer({ my, mx }) {
  return (
    <div className="spacer" style={{ padding: `${my || 0}rem ${mx || 0}` }} />
  );
}

export default Spacer;
