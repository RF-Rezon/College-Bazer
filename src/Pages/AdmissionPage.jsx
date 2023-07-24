import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmissionPage = () => {
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
      });
  }, []);

  //   const {college_name, college_rating} = data;

  return (
    <div>
      <div className="overflow-x-auto text-center">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">College Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">College Rating</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Apply Column</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((individual) => (
              <tr key={individual._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{individual.college_name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{individual.college_rating}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    to={`/admission/${individual._id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    <button>Apply</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionPage;
