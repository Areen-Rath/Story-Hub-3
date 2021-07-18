import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Read a Book</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
