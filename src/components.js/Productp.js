import Card from "./Card";
import { useState, useEffect } from "react";
import Products from "../Pages/Products";
const Productp = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("https://star-spark-pasta.glitch.me/")
      .then((response) => response.json())
      .then((card) => {
        console.log(Card);
      });
  }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        <Card />
      </div>
    </div>
  );
};

export default Productp;
