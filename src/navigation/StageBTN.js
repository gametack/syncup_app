import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import StageScreen from '../screens/Stage'
import MusicScreen from '../screens/Music'
import RequestScreen from '../screens/Request'

const Tab = createBottomTabNavigator();

export default function StageBTN() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Stage"
                component={StageScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            name="spotlight"
                            size={30}
                            type="material-community"
                        />
                    )
                }} />
            <Tab.Screen
                name="Music"
                component={MusicScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            name="playlist-play"
                            size={30}
                            type="material"
                        />
                    )
                }} />
            <Tab.Screen
                name="Request"
                component={RequestScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            name="playlist-add"
                            size={30}
                            type="material"
                        />
                    )
                }} />
        </Tab.Navigator>
    );
}

// <Image
//           style={{width: 50, height: 50}}
//           source={require('@expo/snack-static/react-native-logo.png')}
//         />