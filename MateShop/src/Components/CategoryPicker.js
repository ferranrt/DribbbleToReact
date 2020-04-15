import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Block from './Block';
import Typography from './Typography';
import Button from './Button';
import Theme from '../Theme/Theme';
import GreenBlur from '../Assets/Images/BlurGreen.png';

export default function CategoryPicker(props) {
  const { onChangeSelection, data } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemSelectedRef, setItemSelectedRef] = useState(null);

  const handleItem = (item, index) => {
    itemSelectedRef.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
    setSelectedIndex(index);
    onChangeSelection(item, index);
  };
  return (
    <Block row>
      <FlatList
        style={{ overflow: 'visible' }}
        showsHorizontalScrollIndicator={false}
        ref={ref => setItemSelectedRef(ref)}
        data={data}
        horizontal
        keyExtractor={item => item.name}
        snapToAlignment="center"
        snapToInterval={Dimensions.get('window').width / 5}
        renderItem={({ item, index }) => (
          <ImageBackground
            style={{
              paddingVertical: 25,
            }}
            resizeMode="cover"
            source={index === selectedIndex ? GreenBlur : null}>
            <Button
              key={item.name}
              onPress={() => handleItem(item, index)}
              shadow={index === selectedIndex}
              primary={index === selectedIndex}
              white={index !== selectedIndex}
              radius={50}
              padding={[10, 30]}
              margin={[-5, 25]}>
              <Typography white={index === selectedIndex}>
                {item.name}
              </Typography>
            </Button>
          </ImageBackground>
        )}
      />
    </Block>
  );
}
CategoryPicker.defaultProps = { onChangeSelection: () => {} };
CategoryPicker.propTypes = {
  onChangeSelection: PropTypes.func,
};
