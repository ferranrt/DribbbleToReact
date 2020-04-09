import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Block, Typography, Button } from '../Components';
import Theme from '../Theme/Theme';

export default function PlanPage() {
  const extras = [
    { name: 'Inside Fridge', icon: 'fridge' },
    { name: 'Organizing', icon: 'buffer' },
    { name: 'Small Blinds', icon: 'fridge' },
    { name: 'Patio', icon: 'cactus' },
    { name: 'Big Blinds', icon: 'window-closed' },
    { name: 'Kitchen', icon: 'fridge' },
  ];
  return (
    <Block primary block bottom>
      <Typography margin={[10, 0]} white center bold h4>
        Your Plan
      </Typography>
      <Block
        padding={30}
        white
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <Typography bold grey>
          Selected Cleaning
        </Typography>
        <Typography bold grey>
          Selected Frequency
        </Typography>

        <Block margin={[10, 0]} row>
          <Block block margin={[0, 10]}>
            <Button padding={15} color={Theme.colors.GREY}>
              <Typography small>Weekly</Typography>
            </Button>
          </Block>
          <Block block margin={[0, 10]}>
            <Button padding={15} color={Theme.colors.GREY}>
              <Typography small>Bi-weekly</Typography>
            </Button>
          </Block>
          <Block block margin={[0, 10]}>
            <Button info padding={15}>
              <Typography bold small white>
                Monthly
              </Typography>
            </Button>
          </Block>
        </Block>

        <Block>
          <Typography margin={[10, 0]} bold grey>
            Selected Extras
          </Typography>
          <Block center middle row wrap space="around">
            {extras.map(item => (
              <Block margin={[5, 10]}>
                <Block>
                  <Icons
                    name={item.icon}
                    color="white"
                    size={45}
                    style={{
                      backgroundColor: Theme.colors.PRIMARY,
                      borderRadius: 60,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      padding: 20,
                    }}
                  />
                </Block>
                <Typography center small bold>
                  {item.name}
                </Typography>
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
