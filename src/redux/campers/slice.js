import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
  campers: [],
  isLoading: false,
  isError: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.campers = action.payload;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.campers = action.payload;
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

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectedNameFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase().trim();
//     return contacts.filter(
//       ({ name, number }) =>
//         name.toLowerCase().trim().includes(normalizedFilter) ||
//         number.includes(normalizedFilter)
//     );
//   }
// );

export const campersReducer = campersSlice.reducer;
