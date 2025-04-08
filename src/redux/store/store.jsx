import { configureStore } from "@reduxjs/toolkit";
import generateInterviewQuestionsReducer from "../slice/GenerateInterviewQuestions";

export const store = configureStore({
  reducer: {
    interview: generateInterviewQuestionsReducer,
  },
});
