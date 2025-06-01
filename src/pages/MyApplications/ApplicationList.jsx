import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h2 className="text-4xl">Jobs Applied so far : {applications.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
