import React, { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <input value={username} onInput={(e) => setUsername(e.target.value)} />
      {username}
    </div>
  );
}
