import React from "react";
import JobPostCard from "./JobPostCard";
import TopTalentCard from "./TopTalentCard";
import InterviewCard from "./InterviewCard";
import TalentCard from "./TalentCard";
import CVCreatorCard from "./CVCreatorCard";
import WorkHistory from "./WorkHistory";

const Cards = () => {
  return (
    <>
      <JobPostCard />
      <TopTalentCard />
      <InterviewCard />
      <TalentCard />
      <CVCreatorCard />
      <WorkHistory />
    </>
  );
};

export default Cards;
