import React, { use } from "react";
import { Link } from "react-router";

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className="text-4xl">Jobs created by you : {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>
                  <Link to={`/applications/${job._id}`}>View Application</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;
