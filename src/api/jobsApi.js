export const jobsCreatedByPromise = (email) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
