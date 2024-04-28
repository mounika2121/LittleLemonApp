import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-web';


const  WelcomeScreen = () =>{
    return(
        <View style={styles.homeComponent}>
            <ScrollView style={{flex: 1}} indicatorStyle={"white"} >
                <Text style={styles.homeHeading}>Welcome to Little Lemon</Text>
                <Text style={styles.homePara}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    homeComponent: {
        flex: 1
    },
    homeHeading: {
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center',
        padding: 40,
    },
    homePara:{
        color: '#EDEFEE',
        fontSize: 38,
        padding:20,
        marginVertical: 8,
        textAlign: 'center',
    }
    
})

export default WelcomeScreen
