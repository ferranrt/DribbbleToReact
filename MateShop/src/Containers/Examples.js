import React from 'react';
import { Block, Button, Typography, Input } from '../Components';
import IconProvider from '../Theme/IconProvider';
import Theme from '../Theme/Theme';

export default function Examples() {
  return (
    <Block block padding={15}>
      <Button accent>
        <IconProvider pack="ion" name="ios-add" color="white" />
        <Typography margin={[0, 5]} transform="uppercase" bold white>
          ACCENT
        </Typography>
      </Button>

      <Block row>
        <Button primary block>
          <IconProvider pack="ion" name="ios-add" color="white" />
          <Typography margin={[0, 5]} transform="uppercase" bold white>
            PRIMARY
          </Typography>
        </Button>
        <Button secondary block>
          <IconProvider pack="ion" name="ios-add" color="white" />
          <Typography margin={[0, 5]} transform="uppercase" bold white>
            SECONDARY
          </Typography>
        </Button>
      </Block>
      <Block row>
        <Button success block>
          <Typography margin={[0, 5]} white>
            Success
          </Typography>
        </Button>
        <Button warning block>
          <Typography margin={[0, 5]} white>
            Warning
          </Typography>
        </Button>
        <Button danger block>
          <Typography margin={[0, 5]} white>
            Danger
          </Typography>
        </Button>
      </Block>

      <Block row center middle>
        <Button accent fab fabSize={40}>
          <IconProvider pack="ion" name="ios-clock" color="white" />
        </Button>
        <Button primary fab fabSize={40}>
          <IconProvider pack="ion" name="ios-exit" color="white" />
        </Button>
        <Button secondary fab fabSize={40}>
          <IconProvider pack="ion" name="ios-search" color="white" />
        </Button>
        <Button tertiary fab fabSize={40}>
          <IconProvider pack="ion" name="ios-add" color="white" />
        </Button>
        <Button success fab fabSize={40}>
          <IconProvider pack="ion" name="ios-person" color="white" />
        </Button>
        <Button warning fab fabSize={40}>
          <IconProvider pack="ion" name="ios-rainy" color="white" />
        </Button>
        <Button danger fab fabSize={40}>
          <IconProvider pack="ion" name="ios-resize" color="white" />
        </Button>
      </Block>

      <Block margin={[20, 0]}>
        <Input
          margins={[10, 0]}
          label="Email"
          placeholder="example@mydomain.com"
          bordered
          radius={25}
          leftIcon={
            <IconProvider
              pack="ion"
              name="ios-mail"
              color={Theme.colors.DARKGRAY.lighten(0.5).hex()}
            />
          }
        />
        <Input
          margins={[10, 0]}
          label="Password"
          placeholder="***"
          underline
          leftIcon={
            <IconProvider
              pack="ion"
              name="ios-key"
              color={Theme.colors.DARKGRAY.lighten(0.5).hex()}
            />
          }
          rightIcon={
            <IconProvider
              pack="ion"
              name="ios-eye"
              color={Theme.colors.GRAY.hex()}
            />
          }
        />
        <Input
          bordered
          radius={254}
          margins={[10, 0]}
          placeholder="example@mydomain.com"
          leftIcon={
            <IconProvider
              pack="ion"
              name="ios-mail"
              color={Theme.colors.DARKGRAY.hex()}
            />
          }
        />
        <Text>{labeled}</Text>
      </Block>
    </Block>
  );
}
