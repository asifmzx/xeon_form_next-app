// import { MouseEvent } from "react";
"use client";
import { useState } from "react";

interface Tempu {
  ara: string[];
}

export default function Test({ ara }: Tempu) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // ara = [];

  //EventHandler
  //const handleEvent = (event: MouseEvent) => console.log(event);
  const msg = "hasina khaleda";
  const getMessage = () => {
    return ara.length === 0 ? <p>{msg}</p> : null;
  };

  return (
    <>
      {getMessage()}
      {ara.map((item, index) => (
        <li
          className={selectedIndex === index ? "text-red-500" : "text-blue-500"}
          key={item}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {item}
        </li>
      ))}
      <p>Helloads</p>
      <h1>List Group</h1>
    </>
  );
}

export function Greetings() {
  return (
    <>
      <p>Ohe Botso??</p>
    </>
  );
}
