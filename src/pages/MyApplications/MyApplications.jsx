import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(
            user.email,
            user.accessToken
          )}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
