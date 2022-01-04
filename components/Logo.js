import React from 'react';
import { Image } from 'react-native';
import defaultStyles from '../GeneralStyles';

const Logo = () => (
    <Image source = {require('../assets/logo.png')}
    style = {{ width: 100, height: 100 }}
    />
)

export default Logo;