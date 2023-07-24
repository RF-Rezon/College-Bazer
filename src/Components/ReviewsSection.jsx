import React from 'react';

const ReviewsSection = ({eachCollege_Data}) => {
    const { college_reviews, college_name } = eachCollege_Data;
    return (
        <div>
                <p className='font-bold text-white'>{college_name}</p>
            {college_reviews.map(individual => <div key={individual.rating} className='space-y-2'>
                <div className='py-5'>
                    <p><span className='font-semibold text-white mr-2'>Rating:</span> {individual.rating}</p>
                    <p><span className='font-semibold text-white mr-2'>FeedBack:</span>{individual.feedback}</p>
                </div>
            </div>)}
        </div>
    );
};
 
export default ReviewsSection; 