import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const LittleLemonFooter = () =>{
    return(
        <View>
            <Text style={styles.footerComponent}>
                All rights reserved by LittleLemon, 2024
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    footerComponent:{
        flex: 0.1,
        backgroundColor:'#F4CE14',
        textAlign: 'center',
        color: 'black',
    }
})

export default LittleLemonFooter;