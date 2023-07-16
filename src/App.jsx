import { useEffect, useState } from "react";
import "./App.css";
import CookiesCard from "./components/CookiesCard";
import phrases from "./data/phrases.json";

function App() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const [aleatorPhrase, setAleatorPhrase] = useState(phrases[randomIndex]);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const background = [
      "/images/fortuna1/fondo1.jpg",
      "/images/fortuna1/fondo2.jpg",
      "/images/fortuna1/fondo3.jpg",
      "/images/fortuna1/fondo4.jpg",
    ];

    const index = Math.floor(Math.random() * background.length);
    const randomBackground = background[index];

    setBackgroundImage(`url("${randomBackground}")`);
  }, [randomIndex]);

  const changeCookie = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setAleatorPhrase(phrases[randomIndex]);
  };

  const colors = ["rgb(0, 0, 0)"];

  
  return (
    <article className="app" style={{ backgroundImage }}>
      <CookiesCard
        className="cookies-card"
        phrase={aleatorPhrase}
        textColor={colors[0]}
      ></CookiesCard>
      <button className="button1" onClick={changeCookie}>
        {" "}
        PROBAR SUERTE{" "}
      </button>
    </article>
  );
}

export default App;