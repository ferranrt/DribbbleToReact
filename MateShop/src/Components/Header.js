import React, { useState } from 'react';
import Block from './Block';
import Button from './Button';
import IconProvider from '../Theme/IconProvider';
import Theme from '../Theme/Theme';
import Input from './Input';

export default function Header(props) {
  const { color } = props;
  const [searching, setSearching] = useState(false);
  return (
    <Block row>
      <Button>
        <IconProvider pack="ant" name="left" color={color} size={25} />
      </Button>
      <Block block>
        {searching && (
          <Input
            radius={50}
            bgcolor={Theme.colors.WHITE.hex()}
            shadow
            bordered={Theme.colors.GRAY.hex()}
          />
        )}
      </Block>

      <Button onPress={() => setSearching(!searching)}>
        <IconProvider pack="ant" name="search1" color={color} size={25} />
      </Button>
      <Button>
        <IconProvider
          pack="ent"
          name="dots-two-vertical"
          color={color}
          size={25}
        />
      </Button>
    </Block>
  );
}
