import React from 'react';
import {View} from 'react-native';
import Utilities from '../../Utility/UtilityMethods';

const Space = ({hp = null, pixel = 0}) => {
  return <View style={{height: hp ? Utilities.hp(hp) : pixel}} />;
};

export {Space};
