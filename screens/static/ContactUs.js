import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactUs = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Text>Welcome to my Contact Us Screen</Text>
            <Button title="About us" onPress={() => {
                navigation.navigate('AboutUs');
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

export default ContactUs
