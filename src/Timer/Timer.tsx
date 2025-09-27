import { useState, useEffect } from "react";
import axios from "axios";
import css from "./Timer.module.css";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      console.log(id);
      clearInterval(id);
    };
  }, []);
  return <p className={css.timer}>{time.toLocaleTimeString()}</p>;
}
