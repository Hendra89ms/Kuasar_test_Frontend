import React from "react";
import ChildSkeleton from "./ChildSkeleton";

function Skeleton() {
  return (
    <div className="w-full md:w-screen p-3 ">
      <div className="w-full flex flex-wrap justify-center items-center gap-3 animate-pulse">
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
        <ChildSkeleton />
      </div>
    </div>
  );
}

export default Skeleton;
