import { title } from "motion/react-client";
import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <div>
      <h2 className="text-6xl">Job details of : {title}</h2>
      <p className="text-2xl font-bold">Company : {company}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
