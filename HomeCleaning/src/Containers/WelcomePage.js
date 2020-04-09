import React from 'react';
import { Image } from 'react-native';
import { Block, Typography, Button } from '../Components';
import WelcomeImage from '../Assets/Images/Welcome.png';

export default function WelcomePage(props) {
  const { navigation } = props;
  return (
    <Block primary block bottom padding={0} margin={0}>
      <Typography margin={[5, 0]} bold h2 center white>
        Clean Home
      </Typography>
      <Typography margin={[5, 0]} bold h2 center white>
        Clean Life.
      </Typography>
      <Typography padding={[10, 40]} h4 center white>
        Book Cleaners at the Comfort of your home.
      </Typography>
      <Block center>
        <Image
          source={WelcomeImage}
          style={{
            borderColor: 'white',
            width: '100%',
            height: undefined,
            resizeMode: 'center',
            aspectRatio: 1,
          }}
        />
      </Block>
      <Block row>
        <Block block primary />
        <Block block>
          <Button
            onPress={() => navigation.navigate('Demand')}
            padding={10}
            white
            style={{
              borderRadius: 0,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
            }}
          >
            <Typography primary bold>
              Get Started!
            </Typography>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
