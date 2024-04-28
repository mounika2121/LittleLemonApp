import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

export default function LittleLemonHeader(){
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText} numberOfLines= {2}> 
            <Text style={{fontWeight: 'bold'}}> Little Lemon</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        headerContainer:{
            flex: 0.12,
            backgroundColor: '#F4CE14',
        },
        headerText:{
            padding: 20, 
            fontSize: 35, 
            color: 'black',
            textAlign: 'center',
        }
    }
)