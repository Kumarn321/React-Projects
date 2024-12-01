import React from "react";

const JobCard = ({ title, company, location, description }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <button>Share</button>
      <button>Apply Now</button>
      
    </div>
  );
};

export default JobCard;