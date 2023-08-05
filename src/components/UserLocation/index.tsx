import { API_KEY } from '@env';
import Geocoder from '@timwangdev/react-native-geocoder';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { updateUserLocation } from 'store/shared/app.slice';

const UserLocation: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userLocation } = useAppSelector((state) => state.AppState);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position: Geolocation.GeoPosition) => {
        if (!userLocation || userLocation?.coordinate !== position) {
          getAddressFromLocation(position);
        }
      },
      (error: Geolocation.GeoError) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const getAddressFromLocation = (location: Geolocation.GeoPosition) => {
    if (location) {
      Geocoder.geocodePosition(
        {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        },
        {
          apiKey: API_KEY
        }
      )
        .then((geocodingResults) => {
          const userObject = {
            coordinate: location,
            address: geocodingResults
          };
          dispatch(updateUserLocation(userObject));
        })
        .catch((error) => console.log(error.message));
    }
  };

  useEffect(() => {
    // Request location permission and get the location when the component mounts
    Geolocation.requestAuthorization('whenInUse').then((granted) => {
      if (granted === 'granted') {
        getCurrentLocation();
      } else {
        console.log('Location permission denied.');
      }
    });
  }, []);

  return null;
};

export default UserLocation;
