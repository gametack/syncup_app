import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import StageSN from './StageSN'
import HomeScreen from '../screens/Home';
import MainSettingsScreen from '../screens/Settings/Main';

const HomeView = ({ navigation }) => (
	<HomeScreen navigation={navigation} />
);

const SettingsView = ({ navigation }) => (
	<MainSettingsScreen navigation={navigation} />
);

const Stack = createStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeView}
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
			<Stack.Screen
				name="Settings"
				component={SettingsView} />
			<Stack.Screen
				name="StageSN"
				component={StageSN}
				options={{
					headerLeft: () => (undefined),
					headerTitle: () => (undefined),
				}} />

		</Stack.Navigator>
	);
}

export default function HomeSN() {
	return (
		<NavigationContainer>
			<HomeStack />
		</NavigationContainer>
	);
}
