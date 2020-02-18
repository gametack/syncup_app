
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class HomeScreen extends Component {
    render() {
        //TODO consolidate button creation
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <Button
                    title="CREATE STAGE"
                    icon={{
                        name: 'home',
                        type: 'material',
                        color: 'white',
                    }}
                    iconContainerStyle={{ marginRight: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(90, 154, 230, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}

                    onPress={() => this.props.navigation.navigate('StageSN') }
                />
                <Button
                    title="JOIN STAGE"
                    icon={{
                        name: 'home',
                        type: 'material',
                        color: 'white',
                    }}
                    iconContainerStyle={{ marginRight: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(90, 154, 230, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                />
            </View>
        );
    }
}

export default HomeScreen;