import Heading from 'components/Heading';
import { Color } from 'global/colors';
import { Metrics } from 'global/metrics';
import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './index.styles';

interface IPageHeader {
  changeLocation?: ((event: GestureResponderEvent) => void) | undefined;
  changeLanguage?: ((event: GestureResponderEvent) => void) | undefined;
  onProfile?: ((event: GestureResponderEvent) => void) | undefined;
  addressType: string;
  address: string;
}

const Loading = 'Loading...';

const PageHeader: React.FC<IPageHeader> = ({
  changeLanguage,
  changeLocation,
  onProfile,
  address,
  addressType
}) => {
  return (
    <View>
      <View style={Styles.row}>
        {/* Left Block */}
        <TouchableOpacity style={Styles.leftRow} onPress={changeLocation}>
          {/* Left Block */}
          <View style={Styles.icon}>
            {/* Icon */}
            <Icon
              name="map-marker"
              size={Metrics.Icon.xl}
              color={Color.primary}
            />
          </View>

          {/* Right Block */}
          <View>
            {/* Top View */}
            <View>
              {/* Place Title */}
              <Heading numberOfLines={1} variant="h4">
                {addressType ?? Loading}
              </Heading>
            </View>

            {/* Bottom View */}
            <View>
              {/* Place address */}
              <Heading numberOfLines={1} variant="h5" bold="300">
                {address ?? Loading}
              </Heading>
            </View>
          </View>
        </TouchableOpacity>

        {/* Right Block */}
        <View style={Styles.rightRow}>
          {/* Left Block */}

          <TouchableOpacity style={Styles.icon2} onPress={changeLanguage}>
            <Icon
              name="language"
              size={Metrics.Icon.large}
              color={Color.dark}
            />
          </TouchableOpacity>

          {/* Right Block */}
          <TouchableOpacity style={Styles.icon3} onPress={onProfile}>
            <Icon
              name="user-circle"
              size={Metrics.Icon.large}
              color={Color.dark}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PageHeader;
