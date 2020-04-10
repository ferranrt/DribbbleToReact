import React, { useState } from 'react';
import { ScrollView, Platform, Dimensions } from 'react-native';
import Block from './Block';
import Typography from './Typography';
import Button from './Button';
import Theme from '../Theme/Theme';

const datas = [
  { name: 'Yerba Mate' },
  { name: 'Mate Cups' },
  { name: 'Bombilla Mate' },
];
const data = [
  { name: 'Category A' },
  { name: 'Category B' },
  { name: 'Category C' },
];
export default function CategoryPicker(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSroll = (event) => {
    console.log(event.nativeEvent.contentOffset.x);
    const offset = event.nativeEvent.contentOffset.x;
    const mod = offset % Dimensions.get('screen').width;
    console.log(mod);
  };
  return (
    <Block row margin={[0, Theme.sizes.BASE * -1]}>
      <ScrollView
        onScroll={handleSroll}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {data.map((category, index) => {
          return (
            <Button
              key={category.name}
              onPress={(event) => {
                console.log('pressed');
                console.log(event.nativeEvent.locationX);
                setSelectedIndex(index);
              }}
              shadow={index === selectedIndex}
              primary={index === selectedIndex}
              white={index !== selectedIndex}
              radius={50}
              padding={[10, 25]}
              margin={[5, 25]}>
              <Typography white={index === selectedIndex}>
                {category.name}
              </Typography>
            </Button>
          );
        })}
      </ScrollView>
    </Block>
  );
}
