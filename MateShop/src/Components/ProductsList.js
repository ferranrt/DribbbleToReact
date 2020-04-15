/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Animated, Dimensions } from 'react-native';
import Typography from './Typography';
import Block from './Block';
import Button from './Button';
import IconProvider from '../Theme/IconProvider';
import Theme from '../Theme/Theme';
import Image1 from '../Assets/Images/y205.png';

const buildArray = (size, value) => {
  const output = [];
  for (let i = 0; i < size; i += 1) {
    output.push(new Animated.Value(value));
  }
  return output;
};

export default function ProductsList(props) {
  const {
    data,
    prevIndex,
    currentIndex,
    startAnimation,
    animationEnded,
  } = props;

  const DEV_WIDTH = Dimensions.get('window').width;
  const [AnimatedValues, setAnimatedValues] = useState(
    buildArray(data !== undefined ? data.length : 0, 0),
  );
  useEffect(() => {
    setAnimatedValues(buildArray(data !== undefined ? data.length : 0, 0));
  }, [data]);

  const animate = () => {
    const animations = data.map((item, index) => {
      return Animated.timing(AnimatedValues[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });
    });
    Animated.stagger(200, animations).start(() => animationEnded());
  };

  const handleAnimateOut = () => {
    if (startAnimation) {
      animate();
    }
  };
  useEffect(() => {
    handleAnimateOut();
  });

  const renderRating = (rate, size) => {
    const output = [];
    for (let index = 0; index < size; index += 1) {
      let color = Theme.colors.PRIMARY.hex();
      if (index >= rate) {
        color = Theme.colors.DARKGRAY.hex();
      }
      output.push(
        <IconProvider
          key={index}
          style={{ marginHorizontal: 5 }}
          pack="ent"
          name="star"
          color={color}
          size={Theme.sizes.BASE}
        />,
      );
    }
    return (
      <Block margin={5} row>
        {output}
      </Block>
    );
  };
  return (
    <Block block margin={[10, 0]}>
      {data !== undefined && data.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              style={
                startAnimation && {
                  transform: [
                    {
                      translateX: AnimatedValues[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          0,
                          currentIndex < prevIndex ? DEV_WIDTH * -1 : DEV_WIDTH,
                        ],
                      }),
                    },
                  ],
                }
              }>
              <Button radius={10} white shadow padding={10} margin={[10, 10]}>
                <Block center row>
                  <Image source={Image1} style={{ height: 50 }} />
                  <Block block>
                    <Typography dark title bold>
                      {item.name}
                    </Typography>
                    {item.description && (
                      <Typography>{item.description}</Typography>
                    )}
                    {item.rating && renderRating(item.rating, 5)}
                    <Typography dark bold>
                      {item.price} €
                    </Typography>
                  </Block>
                  <Button>
                    <IconProvider
                      pack="ent"
                      name="dots-three-vertical"
                      color={Theme.colors.GRAY.hex()}
                    />
                  </Button>
                </Block>
              </Button>
            </Animated.View>
          )}
        />
      ) : (
        <Typography>No products to display</Typography>
      )}
    </Block>
  );
}
ProductsList.defaultProps = { data: [] };
