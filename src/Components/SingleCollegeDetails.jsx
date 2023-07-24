import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCollegeDetails = () => {
    const allinfoCollege =  useLoaderData();

   const { _id, college_image, college_name, admission_process, events_details, research_works , sports_categories} = allinfoCollege;
    return (
      <div>
        <div className="py-16">
          <div className="bg-cover bg-center relative">
            <div className="h-screen">
              <img className="w-full h-full rounded-lg object-cover" src={college_image} alt="Chef" />
            </div>
            <div className="absolute space-y-7 w-full h-full bottom-0">
              <div className="bg-black bg-opacity-60 h-full md:flex items-center justify-between gap-x-14 md:gap-x-10 p-10 rounded-lg">
                <div className="md:ml-16 ml-8 md:space-y-8 space-y-3">
                  <p className="text-white md:text-4xl text-2xl text-left font-medium">{college_name}</p>
                  <p className="text-white md:text-xl text-base text-left font-medium">{admission_process}</p>
                    <p className="text-white md:text-xl text-base text-left font-normal">
                      Event Details: <span>{events_details}</span>
                    </p>
                    <p className="text-white md:text-xl text-base text-left font-normal">
                      Research Works: <span>{research_works}</span>
                    </p>
                    <p className="text-white md:text-xl text-base text-left font-normal">
                      Sports Categories: <span>{sports_categories}</span>
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

export default SingleCollegeDetails;