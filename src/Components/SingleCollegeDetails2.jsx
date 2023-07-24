import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCollegeDetails2 = () => {
  const allinfoCollege = useLoaderData();

  const {
    _id,
    college_image,
    college_name,
    college_rating,
    admission_date,
    research_papers,
    events_details,
    college_sports,
  } = allinfoCollege;
  return (
    <div>
      <div className="py-16">
        <div className="bg-cover bg-center relative">
          <div className="h-screen">
            <img className="w-full h-full rounded-lg object-cover" src={college_image} alt="Chef" />
          </div>
          <div className="absolute space-y-7 w-full h-full bottom-0">
            <div className="bg-white bg-opacity-60 h-full md:flex items-center justify-between gap-x-14 md:gap-x-10 p-10 rounded-lg">
              <div className="md:ml-16 ml-8 md:space-y-8 space-y-3">
                <p className="text-black font-semibold md:text-4xl text-2xl text-left">{college_name}</p>
                <p className="text-black font-semibold md:text-xl text-base text-left">{events_details}</p>
                <p className="text-black font-semibold md:text-xl text-base text-left">
                  No. of researches: <span>{research_papers.length}</span>
                </p>
                <div>
                  <p className="text-black font-semibold md:text-xl text-base text-left">College Sports:</p>
                  {college_sports.map((individual, index) => (
                    <p key={index}>{individual}</p>
                  ))}
                </div>
                <p className="text-black font-semibold md:text-xl text-base text-left">
                  College Rating: <span>{college_rating}</span>
                </p>
                <p className="text-black font-semibold md:text-xl text-base text-left">
                  Admission Date: <span>{admission_date}</span>
                </p>
              </div>
              <div className="mr-10 hidden md:block">
                <div className="md:h-60 md:w-60 h-48 w-48">
                  <img className="w-full h-full rounded-lg object-cover" src={college_image} alt="College" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollegeDetails2;
