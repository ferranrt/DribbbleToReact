import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { Block, Typography, Divider } from '../Components';
import Theme from '../Theme/Theme';
import { ScrollView } from 'react-native-gesture-handler';

export default function CalendarPage() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const events = [
    {
      name: 'Michael Hamilton',
      task: 'Upkeep Cleaning',
      timeStart: '10AM',
      timeEnd: '11AM',
      rating: 3,
      money: 100,
    },
    {
      name: 'Alexandra Johnson',
      task: 'Upkeep Cleaning',
      timeStart: '12AM',
      timeEnd: '1PM',
      rating: 3,
      money: 245,
    },
    {
      name: 'Alexandra Johnson',
      task: 'Upkeep Cleaning',
      timeStart: '12AM',
      timeEnd: '1PM',
      rating: 3,
      money: 245,
    },
  ];
  const renderDays = offset => {
    const output = [];
    const ndays = 7;
    for (let i = 0; i < ndays; i += 1) {
      output.push(
        <Block>
          <Typography white center>
            {days[(i + offset) % 7]}
          </Typography>
          {i === 3 ? (
            <Typography
              solid={Theme.colors.WARNING}
              white
              bold
              margin={[10, 20]}
              padding={[5, 7]}
              style={{ borderRadius: 30 }}
            >
              {i + offset}
            </Typography>
          ) : (
            <Typography white margin={[10, 20]}>
              {i + offset}
            </Typography>
          )}
        </Block>
      );
    }
    return output;
  };
  return (
    <Block block primary bottom>
      <Typography margin={[15, 0]} h4 white bold center>
        Cleaner Calendar
      </Typography>
      <Block center middle row>
        <Icons name="ios-arrow-back" color={Theme.colors.WHITE} size={20} />
        <Typography margin={[0, 30]} white light>
          15-21 April 2019
        </Typography>
        <Icons name="ios-arrow-forward" color={Theme.colors.WHITE} size={20} />
      </Block>
      <Block margin={[10, 0]} row center middle>
        {renderDays(11)}
      </Block>
      <Block
        white
        padding={20}
        style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35 }}
      >
        <Typography bold grey caption>
          18 April 2019
        </Typography>

        {/* Events */}
        <Block column style={{ maxHeight: Theme.device.y * 0.5 }}>
          <ScrollView>
            {events.map(item => (
              <Block row margin={[10, 0]}>
                <Block block>
                  <Typography bold dark center>
                    {item.timeStart}
                  </Typography>
                </Block>
                <Block card shadow padding={10} secondary flex={4}>
                  <Typography normal bold primary>
                    {item.name}
                  </Typography>
                  <Typography small>{item.task}</Typography>
                  <Block row margin={[5, 0]}>
                    <Icons
                      name="md-time"
                      color={Theme.colors.PRIMARY}
                      size={30}
                      style={{ marginHorizontal: 10 }}
                    />
                    <Typography bold small primary>
                      {item.timeStart} - {item.timeEnd}
                    </Typography>
                  </Block>
                  <Block row margin={[5, 0]}>
                    <Typography small margin={[0, 10]}>
                      Client rating
                    </Typography>
                    <Icons
                      name="ios-star"
                      color={Theme.colors.DARKGREY}
                      size={20}
                    />
                    <Icons
                      name="ios-star"
                      color={Theme.colors.DARKGREY}
                      size={20}
                    />
                    <Icons
                      name="ios-star"
                      color={Theme.colors.DARKGREY}
                      size={20}
                    />
                  </Block>
                  <Divider hor={10} />
                  <Block row>
                    <Block row block>
                      <Icons
                        name="ios-call"
                        color={Theme.colors.PRIMARY}
                        size={35}
                        style={{ marginHorizontal: 10 }}
                      />
                      <Icons
                        name="ios-mail"
                        color={Theme.colors.PRIMARY}
                        size={35}
                        style={{ marginHorizontal: 10 }}
                      />
                    </Block>
                    <Block row block bottom>
                      <Typography bold primary>
                        {item.money} €
                      </Typography>
                    </Block>
                  </Block>
                </Block>
              </Block>
            ))}
          </ScrollView>
        </Block>
      </Block>
    </Block>
  );
}
