import { createAsyncThunk } from "@reduxjs/toolkit";
import { travelTrucksApi } from "../service/configApi";
import { errToast, successfullyToast } from "../../utils/toast";

export const fetchCampers = createAsyncThunk(
  "catalog/catalogAll",
  async ({ params, page, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await travelTrucksApi.get(
        `/campers?${params}&limit=${limit}&page=${page}`
      );
      successfullyToast("Successfully loaded!");
      console.log(data);
      return data;
    } catch (error) {
      errToast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "catalog/catalogById",
  async (catalogId, thunkAPI) => {
    try {
      const { data } = await travelTrucksApi.get(`/campers/${catalogId}`);
      successfullyToast("Successfully loaded ID!");
      return data;
    } catch (error) {
      errToast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
