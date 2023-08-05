import Heading from 'components/Heading';
import Images from 'global/images';
import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Octicons';
import Styles from './index.styles';

const RecommendCard = () => {
  return (
    <View style={Styles.shadowContainer}>
      <View style={Styles.row}>
        {/* Left */}
        <View>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={Images.homeBanner}
            style={Styles.image}
          />
        </View>
        {/* Right */}
        <View style={Styles.textContainer}>
          <View>
            <Heading numberOfLines={2}>New York Pizzeria</Heading>
            <Heading
              variant="h5"
              numberOfLines={1}
              containerStyle={{
                paddingTop: 2
              }}>
              Pizza
            </Heading>
          </View>
          <View style={Styles.row}>
            <View style={Styles.icon}>
              <Icon name="clock" />
            </View>
            <Text>25-30 min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecommendCard;
