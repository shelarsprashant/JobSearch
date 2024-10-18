import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4, py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Search Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#007BFF]">Dream Jobs</span>
        </h1>
        <p className="text-lg">
          "Unlock Your Future: Discover Exciting Job Opportunities Tailored Just
          for You! Find Your Dream Career Today!"
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-none outline-none"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#007BFF] hover:bg-[#66b3ff]"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
