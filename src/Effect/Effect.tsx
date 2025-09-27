import { useState, useEffect } from "react";
import axios from "axios";
import css from "./Effects.module.css";
export default function Abb() {
  const [user, setUser] = useState(null);
  const [clicks, setClicks] = useState(1);
  useEffect(() => {
    axios
      .get(`https://swapi.info/api/people/${clicks}`)
      .then((response) => setUser(response.data));
  }, [clicks]);
  return (
    <>
      <h1>Side effects</h1>
      <button
        className={css.button}
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        Get next character
      </button>
      {user && (
        <pre className={css.name}>
          {user?.name}, {user.gender}
        </pre>
      )}
    </>
  );
}
