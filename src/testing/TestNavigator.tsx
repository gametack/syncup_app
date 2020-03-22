import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import { Button, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { useStores } from "../hooks/use-stores";
import { PlayerBar } from '../components/PlayerBar';


const HomeScreen = observer(() => {
    const {playerStore } = useStores();
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Go to Profile"
            onPress={() => 
                {
                    playerStore.set_play("Asd")
            }}
            color={playerStore.active?"red":"blue"}
        />
        <PlayerBar/>
    </View>)
})

const Stack = createStackNavigator();

function TestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <Icon
                            name="settings"
                            size={30}
                            type="material"
                            onPress={() => navigation.navigate('Settings')}
                        />
                    ),
                    headerTitle: ""
                })} />
            {/* <Stack.Screen
                name="Settings"
                component={SettingsView} /> */}

        </Stack.Navigator>
    );
}

export default observer( function TestNavigator() {
    return (
            <NavigationContainer>
                <TestStack />
            </NavigationContainer>
    );
})
