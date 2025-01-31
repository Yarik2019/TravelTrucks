import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
  campers: [],
  total: 0,
  page: 1,
  params: "",
  oneCamper: {},
  isLoading: false,
  isError: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    setParams: (state, action) => {
      state.page = initialState.page;
      state.params = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.page > 1) {
          state.campers = [...state.campers, ...action.payload.items];
        } else {
          state.campers = action.payload.items;
        }

        state.total = action.payload.total;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.oneCamper = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchCampers.pending, fetchCamperById.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.fulfilled, fetchCamperById.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.rejected, fetchCamperById.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const { incrementPage, setParams } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
