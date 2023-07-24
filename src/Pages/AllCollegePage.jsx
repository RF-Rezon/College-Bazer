import React, { useEffect, useState } from "react";
import SingleCollege2 from "../Components/SingleCollege2";

const AllCollegePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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
      <div className="m-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {data.map((eachCollegeData) => (
          <SingleCollege2 key={eachCollegeData._id} eachCollegeData={eachCollegeData} />
        ))}
      </div>
    </div>
  );
};

export default AllCollegePage;
