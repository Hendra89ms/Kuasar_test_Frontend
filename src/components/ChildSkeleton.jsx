import React from "react";

function ChildSkeleton() {
  return (
    <div className="w-[300px] h-[200px] border-[1px] shadow-sm shadow-gray-200 rounded-md p-3 flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-3">
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
      </div>

      <div className="flex gap-3">
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
      </div>

      <div className="flex gap-3">
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
      </div>
      <div className="flex gap-3">
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
        <div className="w-[130px] bg-gray-200 h-[20px]"></div>
      </div>
    </div>
  );
}

export default ChildSkeleton;
