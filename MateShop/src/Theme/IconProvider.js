/* eslint-disable react/prop-types */
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fa from 'react-native-vector-icons/FontAwesome';
import Fa5 from 'react-native-vector-icons/FontAwesome5';
import Fa5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontsito from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

export default function IconProvider(props) {
  const { pack, name, size, color, style } = props;
  const relation = {
    ant: AntDesign,
    ent: Entypo,
    evil: EvilIcons,
    feather: Feather,
    fa: Fa,
    fa5: Fa5,
    fa5Pro: Fa5Pro,
    fontsito: Fontsito,
    foundation: Foundation,
    ion: Ionicons,
    mat: Material,
    matCom: MaterialCommunity,
    oct: Octicons,
    zoc: Zocial,
    simp: SimpleLine,
  };
  const node = React.createElement(relation[pack], {
    name,
    size,
    color,
    style,
  });
  return node;
}
IconProvider.defaultProps = { size: 25 };
