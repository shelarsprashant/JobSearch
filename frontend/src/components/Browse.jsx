import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector(store=>store.job);
  const dispatch = useDispatch();
  useEffect(()=>
  {
    return ()=>
    {
      dispatch(setSearchedQuery(""));
    }
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="mx-auto my-10 max-w-7xl">
        <h1 className="m-10 text-xl font-bold">Search Results ({allJobs.length})</h1>

        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <Job job={job} key={job._id}/>;
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Browse;
