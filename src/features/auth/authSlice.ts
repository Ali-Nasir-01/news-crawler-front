import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axiosInterceptor";
import axios from "axios";

interface AuthState {
  user: string | null;
  token: string | null;
  isLogin: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: localStorage.getItem("user"),
  token: localStorage.getItem("token"),
  isLogin: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

// Async thunks for login, register, and logout
export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      username,
      password,
      email,
    }: { username: string; password: string; email: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        username,
        password,
        email,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/auth/logout");
      return;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: string; token: string }>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLogin = true;
          localStorage.setItem("user", action.payload.user);
          localStorage.setItem("token", action.payload.token);
        }
      )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.isLogin = false;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isLogin = false;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
