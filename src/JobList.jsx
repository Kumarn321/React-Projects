import React from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Develop user interfaces using React.',
  },
  {
    title: 'Backend Developer',
    company: 'CodeBase',
    location: 'Bangalore',
    description: 'Work on server-side technologies and APIs.',
  },
  {
    title: 'Data Analyst',
    company: 'DataCorp',
    location: 'Chennai',
    description: 'Analyze and visualize business data.',
  },
  {
    title: 'Fullstack Developer',
    company: 'Innovate Inc.',
    location: 'Hyderabad',
    description: 'Work on both front and backend systems.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'Mumbai',
    description: 'Design user-friendly interfaces and experiences.',
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloudify',
    location: 'Pune',
    description: 'Manage and optimize CI/CD pipelines.',
  },
  {
    title: 'Mobile App Developer',
    company: 'AppSphere',
    location: 'Delhi',
    description: 'Build cross-platform mobile applications.',
  },
  {
    title: 'Data Scientist',
    company: 'Insight Labs',
    location: 'Kolkata',
    description: 'Perform predictive modeling and data analysis.',
  },
  {
    title: 'Software Tester',
    company: 'QualityWorks',
    location: 'Remote',
    description: 'Test software and ensure quality assurance.',
  },
  {
    title: 'Project Manager',
    company: 'ManageIt',
    location: 'Chennai',
    description: 'Oversee and manage project lifecycles.',
  },
];

const JobList = ({ filter }) => {
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="job-list">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
          />
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
