import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { login } from './user.action';
import { AuthStore, IUser } from './user.model';

const initialState: AuthStore = {
  token: '',
  user: {} as IUser,
  loading: false,
  mode: 'dark',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.token = '';
      state.user = {} as IUser;
    },
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
    });
  },
});

export const UserState = (state: RootState) => state.user;
export const { logout, setMode } = userSlice.actions;
export default userSlice.reducer;
