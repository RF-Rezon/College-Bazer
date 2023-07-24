import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserPage = () => {
    const fetchedData = useLoaderData();
    const navigate = useNavigate();
    const {address, candidate_email, candidate_name, college_id, date_of_birth, image, phone_number, subject} = fetchedData;

    const submit =()=>{
        navigate(`/updateUser/${candidate_email}`)
    }
    return (
        <div className='p-10 text-center h-screen'>
            <p className="text-white text-3xl font-bold cursor-pointer py-5">User Information</p>
            <p className="text-white text-xl font-semibold cursor-default">User Name: {candidate_name}</p>
            <p className="text-white text-xl font-semibold cursor-default">Subject: {subject}</p>
            <p className="text-white text-xl font-semibold cursor-default">Email: {candidate_email}</p>
            <p className="text-white text-xl font-semibold cursor-default">Phone Number: {phone_number}</p>
            <p className="text-white text-xl font-semibold cursor-default">College Id: {college_id}</p>
            <p className="text-white text-xl font-semibold cursor-default">Date Of Bath: {date_of_birth} </p>
            <p className="text-white text-xl font-semibold cursor-default">Address: {address} </p>
            <img className='w-1/2 h-1/2 mb-6 mx-auto p-8 object-cover'  src={image} alt="user image" />
            <button
                          onClick={submit}
                          type="button"
                          className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                        >
                          Edit Profile
                        </button>
        </div>
    );
};

export default UserPage;