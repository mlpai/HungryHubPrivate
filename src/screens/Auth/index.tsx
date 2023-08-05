import Button from 'components/Button';
import Container from 'components/Container';
import Divider from 'components/Divider';
import Header from 'components/Heading';
import Link from 'components/Link';
import NumberInput from 'components/NumberInput';
import { useAppDispatch } from 'hooks/redux';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { signIn } from 'store/shared/app.slice';
import Styles from './index.styles';

const TAG_LINE = "India's #1 Food Delivery and Dining App ";
const DIVIDER_ROW = 'Log in or sign up';
const OR = 'or';

const Auth = () => {
  const [number, setNumber] = useState<string | undefined>();

  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(signIn());
    console.log('Auth performed successfully');
  };

  const socialLogin = () => {
    console.log('Social login');
  };

  return (
    <Container enableBG blurRadius={0}>
      <ScrollView
        scrollEnabled={false}
        style={Styles.scroll}
        contentContainerStyle={Styles.container}
        keyboardShouldPersistTaps={'handled'}
        automaticallyAdjustKeyboardInsets>
        <View style={{ flexGrow: 1 }} />
        <View style={Styles.box}>
          <View style={Styles.main}>
            {/* Tag Line */}
            <Header align="center" variant="h2">
              {TAG_LINE}
            </Header>

            {/* Divider */}
            <View style={Styles.divider}>
              <Divider children={DIVIDER_ROW} />
            </View>

            {/* Mobile Login  */}
            <NumberInput
              countryCode="+91"
              onChange={setNumber}
              value={number}
            />
            <View style={Styles.divider}>
              <Button
                title="Continue"
                onPress={login}
                disabled={number?.length !== 10}
              />
            </View>
            {/* Social Login */}

            <View>
              <Divider children={OR} />
              <View style={Styles.social}>
                <Button inverse icon="google-plus-square" />
                <Button inverse icon="apple" />
                <Button inverse icon="ellipsis-h" />
              </View>
            </View>

            {/* terms & Conditions */}

            <View style={Styles.divider}>
              <Header align="center">
                By Continue, you agree to the <Link>terms</Link> and{' '}
                <Link>conditions</Link>
              </Header>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Auth;
