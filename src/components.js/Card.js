import React from "react";

const Card = () => {
  return (
    <div>
      <img src="/images/peproni.png" alt="pizza" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">Navana special</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          small
        </span>
      </div>
      <div className="flex  justify-between item-centre mt-4">
        <span className="my-2">₹ 500</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold ">
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
