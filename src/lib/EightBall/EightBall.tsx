import { useState } from "react";
import { variations } from "../eightBallEntity.ts";

export function EightBall() {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const idx = Math.floor(Math.random() * variations.length);
    const random = variations[idx];
    setMessage(random.msg);
    setColor(random.color);
  };

  return (
    <div
      onClick={handleClick}
      className={`${color} eight-ball flex justify-center content-center`}
    >
      <p>{message}</p>
    </div>
  );
}