import React, { useState } from "react";
import InputPeople from "../components/InputPeople";
import NumberOfGroup from "../components/NumberOfGroup";
import Group from "../components/Group";

const HomePage = () => {
  const [participants, setParticipants] = useState([]);
  const [groupCount, setGroupCount] = useState(0);
  const [groups, setGroups] = useState([]);

  const shuffleParticipants = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateGroups = () => {
    if (participants.length === 0) return;
    const shuffledParticipants = shuffleParticipants([...participants]);

    const groupSize = Math.ceil(shuffledParticipants.length / groupCount);
    const generatedGroups = [];

    for (let i = 0; i < groupCount; i++) {
      generatedGroups.push(shuffledParticipants.splice(0, groupSize));
    }

    setGroups(generatedGroups);
  };

  return (
    <>
      <div className="h-[60vh] bg-gradient-to-tr from-indigo-500 to-purple-500 md:h-screen lg:h-[55vh]">
        <div className="container pt-5">
          <h1 className="text-center text-2xl font-bold text-white lg:text-3xl">
            Random Group Generator
          </h1>
          <InputPeople setParticipants={setParticipants} />

          <NumberOfGroup amount={groupCount} setAmount={setGroupCount} />

          <button
            className="mx-auto mt-3 block rounded-md border p-2 text-sm text-white hover:bg-blue-500 lg:mt-5 lg:text-base"
            onClick={generateGroups}
          >
            Generate
          </button>
        </div>
      </div>
      <Group groupMembers={groups} />
    </>
  );
};

export default HomePage;
