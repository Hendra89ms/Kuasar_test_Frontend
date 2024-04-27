import React from "react";
import DataComp from "./DataComp";

function DetailCountry({ item, setShowDetail }) {
  const handleClickX = () => {
    setShowDetail(false);
  };

  return (
    <div className=" bg-black bg-opacity-25 fixed inset-0 flex justify-center items-center px-3 md:px-0">
      <div className="w-full md:w-[500px] bg-white h-[450px] md:absolute block rounded-md ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Detail Country
          </h3>
          <button
            type="button"
            onClick={handleClickX}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 roundedLg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="w-full p-3 flex justify-center items-center md:text-[14px] text-[12px]">
          <div className="flex flex-col gap-3 w-full md:px-5 px-1">
            <DataComp name={"Name"} item={item.name} />
            <DataComp name={"Emoji"} item={item.emoji} />
            <DataComp name={"Capital"} item={item.capital} />
            <DataComp name={"Currentcy"} item={item.currency} />
            <DataComp name={"Aws Region"} item={item.awsRegion} />
            <DataComp name={"Currencies"} item={item.currencies[0]} />
            <DataComp name={"EmojiU"} item={item.emojiU} />
            <DataComp name={"Native"} item={item.native} />
            <DataComp name={"Phone"} item={item.phone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCountry;
