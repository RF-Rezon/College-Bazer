import React from "react";
import { Link } from "react-router-dom";

const SingleCollege2 = ({ eachCollegeData }) => {
  const { _id, college_image, college_name, admission_date, research_papers , college_rating} = eachCollegeData;
  return (
    <div>
      <div className=" rounded-lg bg-gray-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="h-96">
          <img className="h-full w-full object-cover" src={college_image} alt="" />
        </div>

        <div className="p-6">
          <h5 className="text-2xl font-medium text-gray-900 py-3">{college_name}</h5>
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
            Admission Date: <span>{admission_date}</span>
          </p>
          <div className="mb-4">
            <p className="text-base text-neutral-600 dark:text-neutral-200">College Rating:</p> <p>{college_rating}</p>
          </div>
          <div className="mb-4">
            <p className="text-base text-neutral-600 dark:text-neutral-200">Research Papers:</p> <p>{research_papers.length}</p>
          </div>

          <Link to={`/all2/${_id}`}>
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
  );
};

export default SingleCollege2;
