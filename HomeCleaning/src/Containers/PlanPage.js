import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Block, Typography, Button } from '../Components';
import Theme from '../Theme/Theme';

const EXTRAS_INITIAL = [
  { name: 'Inside Fridge', icon: 'fridge', status: false },
  { name: 'Organizing', icon: 'buffer', status: false },
  { name: 'Small Blinds', icon: 'fridge', status: false },
  { name: 'Patio', icon: 'cactus', status: false },
  { name: 'Big Blinds', icon: 'window-closed', status: false },
  { name: 'Kitchen', icon: 'fridge', status: false },
];

export default function PlanPage() {
  const [extras, setExtras] = useState(EXTRAS_INITIAL);
  const toggleItem = index => {
    const aux = JSON.parse(JSON.stringify(extras));
    aux[index].status = !aux[index].status;
    setExtras(aux);
  };
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
            {extras.map((item, index) => (
              <Block key={item.name} margin={[5, 10]}>
                <Button onPress={() => toggleItem(index)}>
                  <Icons
                    name={item.icon}
                    color="white"
                    size={45}
                    style={[
                      {
                        borderRadius: 60,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        padding: 20,
                      },
                      item.status
                        ? { backgroundColor: Theme.colors.INFO }
                        : { backgroundColor: Theme.colors.PRIMARY },
                    ]}
                  />
                </Button>
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
