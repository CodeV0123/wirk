import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://image-job.assemblr.ai/generate-interview-questions";

export const generateInterviewQuestions = createAsyncThunk(
  "interview/generateInterviewQuestions",
  async (File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", File);
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const generateInterviewQuestionsSlice = createSlice({
  name: "interview",
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetInterviewQuestions: (state) => {
      state.questions = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateInterviewQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateInterviewQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(generateInterviewQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetInterviewQuestions } =
  generateInterviewQuestionsSlice.actions;
export default generateInterviewQuestionsSlice.reducer;
