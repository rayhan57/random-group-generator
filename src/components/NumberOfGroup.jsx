import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const NumberOfGroup = ({ amount, setAmount }) => {
  const decreaseAmount = () => {
    if (amount <= 0) return;
    setAmount(amount - 1);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="mx-auto mt-3 flex w-max items-center gap-4 lg:mt-5">
      <button
        className="rounded-md bg-white p-2 active:scale-95"
        onClick={decreaseAmount}
      >
        <FaMinus />
      </button>

      <div className="rounded-md bg-white p-2 text-center">
        <p className="text-sm text-indigo-500 lg:text-base">Number of group</p>
        <p className="text-xl lg:text-2xl">{amount}</p>
      </div>

      <button
        className="rounded-md bg-white p-2 active:scale-95"
        onClick={increaseAmount}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default NumberOfGroup;
