import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignInScreen = ({ navigation }) => {
    return <>
        <Button 
            title="Go to SignIn"
            onPress={() => navigation.navigate('SignIn')} />
    </>;
};

const styles = StyleSheet.create({});

export default SignInScreen;