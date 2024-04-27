import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import client from "./client";
import DetailCountry from "./components/DetailCountry";
import DataComp from "./components/DataComp";
import Skeleton from "./components/Skeleton";

function App() {
  const COUNTRY_QUERY = gql`
    query {
      countries {
        name
        emoji
        capital
        currency
        awsRegion
        code
        emojiU
        native
        phone
        currencies
      }
    }
  `;

  const { loading, error, data } = useQuery(COUNTRY_QUERY, { client });
  const [searchInput, setSearchInput] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [itemVal, setItemVal] = useState([]);

  if (error) return <p>Error: {error.message}</p>;

  // Filter countries based on search input
  const filteredCountries =
    !loading &&
    data.countries.filter((country) =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );

  const handleDetail = (item) => {
    setItemVal(item);
    setShowDetail(!showDetail);
  };

  return (
    <div className="w-full md:w-screen p-3 ">
      <div className="w-full flex justify-center items-center my-5">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="w-[300px] border-[1px] border-black rounded-md h-[50px] pl-3 outline-none"
          placeholder="Search Name"
        />
      </div>
      <div className=" flex flex-wrap justify-center items-center w-full md:gap-3 gap-5 px-3 ">
        {loading && <Skeleton />}
        {!loading &&
          filteredCountries.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-1 shadow-md p-3 md:w-[300px] "
            >
              <DataComp name={"Name"} item={item.name} />
              <DataComp name={"Emoji"} item={item.emoji} />
              <DataComp name={"Capital"} item={item.capital} />
              <DataComp name={"Currentcy"} item={item.currency} />

              <button
                onClick={() => handleDetail(item)}
                className="bg-blue-500 hover:bg-blue-600 hover:duration-300 hover:transition-all text-white h-[50px] w-full mt-3 rounded-md"
              >
                Detail
              </button>
            </div>
          ))}

        {showDetail && (
          <DetailCountry item={itemVal} setShowDetail={setShowDetail} />
        )}
      </div>
    </div>
  );
}

export default App;
