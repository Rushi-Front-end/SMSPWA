import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const ThemeChanger = (value) => async (dispatch) => {
  dispatch({
      type: "ThemeChanger",
      payload: value
  });
};

export const saveUser = createAsyncThunk(
    "saveUser",
    async (userdata, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `https://66bcb9c524da2de7ff6ba282.mockapi.io/student`,
                userdata
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getUsers = createAsyncThunk(
    "getUsers",
    async(args, {rejectWithValue}) =>{
        try {
            const { data } = await axios.get(
                `https://66bcb9c524da2de7ff6ba282.mockapi.io/student`
            );
            console.log(data,'data')
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
