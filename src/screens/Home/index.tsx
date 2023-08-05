import Banner from 'components/Banner';
import Button from 'components/Button';
import Container from 'components/Container';
import Divider from 'components/Divider';
import PageHeader from 'components/PageHeader';
import RecommendCard from 'components/RecommendCard';
import SearchInput from 'components/SearchInput';
import Images from 'global/images';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { noop } from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { StatusBar, View } from 'react-native';
import { logOut } from 'store/shared/app.slice';
import Styles from './index.styles';

const Home = () => {
  const dispatch = useAppDispatch();

  const { userLocation } = useAppSelector((state) => state.AppState);

  const logOutAction = async () => {
    dispatch(logOut());
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const userAddress = useMemo(() => {
    return userLocation ? userLocation.address[0].formattedAddress ?? '' : '';
  }, [userLocation?.address]);

  return (
    <Container safeArea style={{ flex: 1, paddingHorizontal: 11 }}>
      {/* Header */}
      <PageHeader addressType="Home" address={userAddress} />
      {/* Search */}
      <View style={Styles.defaultPadding}>
        <SearchInput onPress={noop} />
      </View>

      {/* Banner */}
      <View style={Styles.defaultPadding}>
        <Banner source={Images.homeBanner} onPress={noop} />
      </View>

      {/* Recommended */}
      <View style={Styles.defaultPadding}>
        <Divider textVariant="h5" fontWeight="normal">
          RECOMMENDED FOR YOU
        </Divider>

        <View style={Styles.topPadding}>
          <RecommendCard />
        </View>

        <View style={Styles.topPadding}>
          <RecommendCard />
        </View>

        <View style={Styles.topPadding}>
          <RecommendCard />
        </View>
      </View>

      {/* All Restaurents */}

      {/* Filters */}

      {/* Restaurents Cards */}
      <View style={Styles.defaultPadding}>
        <Button title="Click" onPress={logOutAction} />
      </View>
    </Container>
  );
};

export default Home;
