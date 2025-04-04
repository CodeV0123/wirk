import React from "react";
import JobPostCard from "./Cards/JobPostCard";
import TopTalentCard from "./Cards/TopTalentCard";
import InterviewCard from "./Cards/InterviewCard";
import TalentCard from "./Cards/TalentCard";
import CVCreatorCard from "./Cards/CVCreatorCard";
import WorkHistory from "./Cards/WorkHistory";

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
