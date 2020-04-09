import React from 'react';
import { Image } from 'react-native';
import { Block, Typography, Button } from '../Components';
import Cod from '../Assets/Images/Cod.png';
import Theme from '../Theme/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OnDemandPage(props) {
  const { navigation } = props;
  const NEXT_SIZE = 30;
  return (
    <Block block bottom style={{ backgroundColor: 'white' }}>
      <Image
        source={Cod}
        style={{
          width: Theme.device.x,
          height: 450,
        }}
      />
      <Block
        primary
        padding={25}
        style={{ borderTopLeftRadius: 65, borderTopRightRadius: 65 }}
      >
        <Typography center bold white>
          Cleaning on Demand
        </Typography>
        <Typography white center middle padding={30}>
          Book an appointment in less than 60 seconds and get on the schedule as
          early as tomorrow.
        </Typography>
        <Block row>
          <Block center middle block>
            <Button onPress={() => navigation.goBack()}>
              <Typography bold small white>
                Skip
              </Typography>
            </Button>
          </Block>
          <Block block>
            <Button onPress={() => navigation.navigate('Profile')}>
              <Typography margin={[0, 10]} small bold white>
                Next
              </Typography>
              <Ionicons
                name="ios-arrow-round-forward"
                color="white"
                size={NEXT_SIZE}
                style={{
                  backgroundColor: Theme.colors.INFO,
                  paddingVertical: NEXT_SIZE / 5,
                  paddingHorizontal: (NEXT_SIZE / 5) * 2,
                  borderRadius: 50,
                }}
              />
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
