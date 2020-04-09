import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Block, Typography, Button } from '../Components';
import Theme from '../Theme/Theme';
import ProfiPict from '../Assets/Images/Profile.png';

export default function ProfilePage() {
  const MenuItems = [
    { name: 'Notifications', icon: 'notifications-active' },
    { name: 'My Bookings', icon: 'perm-contact-calendar' },
    { name: 'My Plan', icon: 'check-circle' },
    { name: 'Addresses', icon: 'map' },
  ];
  const ShareItems = [
    { name: 'Facebook', icon: 'facebook', color: 'blue' },
    { name: 'Twitter', icon: 'twitter', color: 'teal' },
    { name: 'Gmail', icon: 'gmail', color: Theme.colors.DANGER.hex() },
  ];
  return (
    <Block block primary bottom>
      <Block center middle style={{ marginBottom: 20 }}>
        <Image
          source={ProfiPict}
          style={{ height: Theme.device.x / 3, width: Theme.device.x / 3 }}
        />
      </Block>
      <Block
        white
        padding={25}
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          maxHeight: Theme.device.y * 0.6,
        }}
      >
        <ScrollView>
          <Typography margin={[10, 20]} bold grey>
            Account
          </Typography>
          <Block column>
            {MenuItems.map(item => (
              <Block
                left
                row
                margin={[1, 0]}
                style={{ backgroundColor: 'white' }}
              >
                <Button
                  margin={0}
                  padding={[5, 20]}
                  block
                  style={{ justifyContent: 'flex-start' }}
                >
                  <Icons
                    name={item.icon}
                    color={Theme.colors.PRIMARY.hex()}
                    size={35}
                  />
                  <Typography caption margin={[0, 20]}>
                    {item.name}
                  </Typography>
                </Button>
              </Block>
            ))}
          </Block>

          <Typography margin={[10, 20]} bold grey>
            Share
          </Typography>
          <Block column>
            {ShareItems.map(item => (
              <Block row margin={[1, 0]} style={{ backgroundColor: 'white' }}>
                <Button
                  margin={0}
                  padding={[5, 20]}
                  block
                  style={{ justifyContent: 'flex-start' }}
                >
                  <Icons2 name={item.icon} color={item.color} size={30} />
                  <Typography caption margin={[0, 20]}>
                    {item.name}
                  </Typography>
                </Button>
              </Block>
            ))}
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
}
