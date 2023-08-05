import { createSlice } from '@reduxjs/toolkit';
import { GeocodingObject } from '@timwangdev/react-native-geocoder';
import Storage from 'global/user';
import { GeoPosition } from 'react-native-geolocation-service';
import { reduxState } from 'store/constant';

interface UserLocation {
  coordinate: GeoPosition;
  address: GeocodingObject[];
}

interface AppState {
  theme: string;
  isLoggedIn: boolean;
  state: keyof typeof reduxState;
  userLocation: UserLocation | null;
}

const initialState: AppState = {
  theme: 'dark',
  isLoggedIn: Storage.getValue('isLoggedIn') ?? false,
  state: reduxState.initial,
  userLocation: null
};

export const themeSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    signIn: (state) => {
      Storage.setValue('isLoggedIn', true);
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      Storage.clearAll();
      state.isLoggedIn = false;
    },
    updateUserLocation: (state, action) => {
      state.userLocation = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleTheme, signIn, logOut, updateUserLocation } =
  themeSlice.actions;

export default themeSlice.reducer;
