import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const MyCollegePage = () => {
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]);
  const { dynamicId } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://college-bazar-server.vercel.app/datababe_to_myCollegePage/${dynamicId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(dynamicId)
  console.log(data)

  return (
    <div className="h-screen">
      <div>
        <p className="text-2xl font-semibold text-white">Colleges you have applied: </p>
        <div className="overflow-x-auto text-center">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">College Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">College Rating</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                <tr key={data._id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.college_name}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.college_rating}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Rating style={{ maxWidth: 180 }} value={rating} onChange={setRating} isRequired />
        <p className="text-2xl font-semibold text-white">You rated: {rating} star!</p>
      </div>
    </div>
  );
};

export default MyCollegePage;