import { Color } from 'global/colors';
import { getTransparentColor } from 'global/helpers';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, TextStyle, View } from 'react-native';

interface IBouncyText {
  textStyle?: TextStyle;
  textArray: string[];
}

const BouncyText: React.FC<IBouncyText> = ({ textStyle, textArray = [] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);

      // Bounce animation
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 0.4, // Adjust this value based on the desired bounce scale
          duration: 75,
          useNativeDriver: true
        }),
        Animated.spring(bounceAnim, {
          toValue: 1,
          friction: 4, // Adjust the friction for the desired bounce effect
          tension: 40, // Adjust the tension for the desired bounce effect
          useNativeDriver: true
        })
      ]).start();
    }, 4000); // Change the text every 4 seconds (bounce + spring duration)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [bounceAnim, textArray.length]);

  return (
    <View>
      <Animated.Text
        style={[
          {
            height: 40,
            lineHeight: 40,
            color: getTransparentColor(Color.dark, 0.7)
          },
          { ...textStyle },
          { transform: [{ scaleY: bounceAnim }] }
        ]}>
        Search "{textArray[currentTextIndex]}"
      </Animated.Text>
    </View>
  );
};

export default BouncyText;
