import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return(
        <HeaderButton
            {...props}
            IconComponent ={Ionicons}
            color={Colors.darkOrange}
        /> 
    )
};

export default CustomHeaderButton;