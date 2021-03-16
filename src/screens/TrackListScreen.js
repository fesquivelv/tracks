import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const TrackListScreen = ({ navigation}) => {
    return <>
        <Text>Account Screen</Text>
        <Button 
            title="Go to track detail"
            onPress={() => {
                navigation.navigate('TrackDetail')
            }} />
    </>;
};

const styles = StyleSheet.create({});

export default TrackListScreen;