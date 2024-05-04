import React from "react";

const Group = ({ groupMembers }) => {
  const randomColor = () => Math.floor(Math.random() * 256);

  return (
    <div className="container my-5 grid grid-cols-2 gap-2 md:grid-cols-4 lg:gap-4">
      {groupMembers.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="rounded-md border-2 border-t-4 border-black/30 p-2"
          style={{
            borderTopColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
          }}
        >
          <p className="mb-1 text-center text-lg font-semibold lg:mb-3 lg:text-xl">
            Group {groupIndex + 1}
          </p>
          {group.map((member, memberIndex) => (
            <p key={memberIndex} className="text-sm lg:text-base">
              {member}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Group;
