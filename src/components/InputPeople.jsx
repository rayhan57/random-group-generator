import React, { useState } from "react";

const InputPeople = ({ setParticipants }) => {
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (e) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      const participants = e.target.value.split("\n");
      setParticipants(participants);
    }, 500);

    setTypingTimeout(newTimeout);
  };

  return (
    <div>
      <textarea
        id="participants"
        cols="40"
        rows={window.innerHeight > 400 ? "10" : "6"}
        className="mx-auto mt-5 block resize-none rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 lg:text-base"
        placeholder="John Doe
Jane Doe
Adam Smith
Bob Smith"
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
};

export default InputPeople;
