import React, {Component} from 'react';
import {
    Svg,
    Path,
} from 'react-native-svg';

export default ({height = 35, width = 35}) => (
    <Svg width={width} height={height} viewBox={'0 0 24 24'}>
        <Path d='M0 0h24v24H0z' fill='none' />
        <Path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
    </Svg>
);