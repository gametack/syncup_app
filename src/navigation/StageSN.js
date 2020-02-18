import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import StageBTN from './StageBTN'

const Stack = createStackNavigator();

export default function StageSN() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name="StageBTN"
                component={StageBTN}
            />
        </Stack.Navigator>)
}