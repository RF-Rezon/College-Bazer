import React, { useEffect, useState } from "react";
import ImageGallery from "../Components/ImageGallery";
import ResearchPaperSection from "../Components/ResearchPaperSection";
import ReviewsSection from "../Components/ReviewsSection";
import Searchfield from "../Components/Searchfield";
import SingleCollege from "../Components/SingelCollegeData";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const threeCards = data.slice(0,3);

    useEffect(() => {
      setLoading(true);
      fetch("https://college-bazar-server.vercel.app/all")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);

  return (
    <div>
      <Searchfield data={data}/>
      <div className="m-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {threeCards.map((eachCollegeData) => (
          <SingleCollege key={eachCollegeData._id} eachCollegeData={eachCollegeData} />
        ))}
      </div>
      <div className="py-20">
          <p className="text-white md:text-4xl text-2xl my-10 font-medium text-center">Gallery Section</p>
            <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                {data.map(eachCollege_Data=> <ImageGallery key={eachCollege_Data._id} eachCollege_Data={eachCollege_Data}/>
                )}
            </div>
      </div>
      <div className="py-20">
          <p className="text-white md:text-4xl text-2xl my-10 font-medium text-center">Recomannded Colleges Research Papers</p>
            <div className="py-20 grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:mx-auto sm:text-center">
                {data.map(eachCollege_Data=> <ResearchPaperSection key={eachCollege_Data._id} eachCollege_Data={eachCollege_Data}/>
                )}
            </div>
      </div>
      <div className="py-20">
          <p className="text-white md:text-4xl text-2xl my-10 font-medium text-center">Reviews And FeedBack Section</p>
            <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto sm:text-left space-y-8">
                {data.map(eachCollege_Data=> <ReviewsSection key={eachCollege_Data._id} eachCollege_Data={eachCollege_Data}/>
                )}
            </div>
      </div>
    </div>
  );
};

export default HomePage;
