import React from "react";

function DataComp({ name, item }) {
  return (
    <div className="w-full flex justify-between md:text-[14px] text-[12px]">
      <div className="flex justify-between w-[35%] ">
        <h1>{name}</h1>
        <p>:</p>
      </div>
      <p className="w-[50%] font-semibold">{item}</p>
    </div>
  );
}

export default DataComp;
