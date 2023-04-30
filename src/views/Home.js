import React, { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("home");
  return (
    <div>
      {title}
      <button onClick={() => setTitle("首页")}>设置</button>
    </div>
  );
}
