import React from "react";
import { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div>
      <h2 className="text-4xl text-center my-10">HOT Jobs of the Day!!!</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
