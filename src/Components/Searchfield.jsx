import React, { useState } from "react";
import { Link } from "react-router-dom";

const Searchfield = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    if(query){
      const filteredItems = data.filter((item) => item.college_name.toLowerCase().includes(query.toLowerCase()));
      setFilteredData(filteredItems);
      setSearchQuery(query);
    }else{
      setSearchQuery("")
    }
  };

  return (
    <div className="p-20 w-1/2 mx-auto space-y-10">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto border-white text-white"
          value={searchQuery}
          onChange={(e) => handleSearch(e?.target?.value)}
        />
      </div>
      <div>
        {filteredData.map((item, index) => (
          <div key={index}>
            <div className=" rounded-lg bg-gray-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="h-96">
                <img className="h-full w-full object-cover" src={item.college_image} alt="" />
              </div>

              <div className="p-6">
                <h5 className="text-2xl font-medium text-gray-900 py-3">{item.college_name}</h5>
                <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                  Admission Date: <span>{item.admission_date}</span>
                </p>
                <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                  Event Details: <span>{item.events_details}</span>
                </p>
                <div className="mb-4">
                  <p className=" text-base text-neutral-600 dark:text-neutral-200">Research Papers:</p>
                  {item.research_papers.map((single, index) => {
                    <p key={index}>{single}</p>;
                  })}
                </div>
                <div className="mb-4">
                  <p className="text-base text-neutral-600 dark:text-neutral-200">Sports:</p>
                  {item.college_sports.map((e, index) => (
                    <p key={index}>{e}</p>
                  ))}
                </div>
                <Link to={`/all/${item._id}`}>
                  <button
                    type="button"
                    className="inline-block rounded bg-zinc-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-zinc-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-zinc-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-zinc-900 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mb-2"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchfield;
