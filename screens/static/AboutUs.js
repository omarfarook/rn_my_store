import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutUs = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Text>Welcome to my About Us Screen</Text>
            <Button title="Contact us" onPress={() => {
                navigation.navigate('ContactUs');
            }} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AboutUs
