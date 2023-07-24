import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaperSection = ({eachCollege_Data}) => {
    const {research_papers, college_name } = eachCollege_Data;
    return (
        <div>
        {research_papers.map((individual, index) => (
          <Link key={index} to={individual}>
            Research link by <span className='font-semibold text-white'>{college_name}</span> <br />
          </Link>
        ))}
      </div>
    );
};

export default ResearchPaperSection;