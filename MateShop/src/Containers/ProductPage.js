import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Theme from '../Theme/Theme';
import { Block, Typography, Button } from '../Components';
import Header from '../Components/Header';
import Image1 from '../Assets/Images/GreenMate.png';
import Image2 from '../Assets/Images/RedMate.png';
import IconProvider from '../Theme/IconProvider';

const variants = [
  { color: Theme.colors.PRIMARY },
  { color: Theme.colors.DANGER },
  { color: Theme.colors.WARNING },
];

const kgs = [
  { amount: 0.2, unit: 'Kg' },
  { amount: 0.4, unit: 'Kg' },
  { amount: 0.6, unit: 'Kg' },
  { amount: 0.8, unit: 'Kg' },
];

export default function ProductPage(props) {
  // eslint-disable-next-line no-unused-vars
  const [mainColor, setMainColor] = useState(0);
  const [mainAmount, setMainAmount] = useState(0);

  return (
    <Block
      block
      padding={Theme.sizes.BASE}
      style={{ backgroundColor: variants[mainColor].color }}>
      <Header color={Theme.colors.WHITE.hex()} />
      <Typography bold h2 center white>
        Verde Mate
      </Typography>
      <Typography center h3 white>
        Green Cactus
      </Typography>
      <Block
        row
        center
        middle
        margin={[Theme.sizes.PADDING, Theme.sizes.BASE * -5]}>
        <Image source={Image2} height={150} />
        <Image source={Image1} height={200} />
        <Image source={Image2} height={150} />
      </Block>
      <Typography white center>
        Traditional stem-free mate tea from a small, family-owned plantation in
        Southern Brazil. Grown in a varied forest ecosystem to ensure the best
        quality.
      </Typography>
      <Block debug row middle margin={[15, 0]}>
        {variants.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setMainColor(index);
            }}
            style={[
              {
                height: 30,
                width: 30,
                borderWidth: 3,
                borderColor: Theme.colors.WHITE,
                borderRadius: 50,
                backgroundColor: item.color,
                marginHorizontal: Theme.sizes.BASE,
              },
              index === mainColor ? { borderWidth: 5, width: 45 } : null,
            ]}
          />
        ))}
      </Block>
      <Block row middle>
        {kgs.map((item, index) => (
          <Button
            key={index.toString()}
            onPress={() => setMainAmount(index)}
            radius={40}
            white={index === mainAmount}
            shadow={index === mainAmount}
            padding={[10, 25]}>
            <Typography
              style={{
                color:
                  index === mainAmount
                    ? variants[mainColor].color
                    : Theme.colors.WHITE,
              }}>
              {`${item.amount} ${item.unit}`}
            </Typography>
          </Button>
        ))}
      </Block>
      <Block margin={[15, 0]} center>
        <Button width={70} white shadow radius={50} padding={[10, 0]}>
          <IconProvider
            pack="feather"
            name="shopping-cart"
            color={variants[mainColor].color.hex()}
            size={25}
          />
          <Typography
            margin={[0, 15]}
            style={{ color: variants[mainColor].color }}>
            Add to Cart
          </Typography>
        </Button>
      </Block>
    </Block>
  );
}
