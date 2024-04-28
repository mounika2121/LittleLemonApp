import React from 'react';
import {Text, View,ScrollView,StyleSheet} from 'react-native';
// import WelcomeScreen from './WelcomeScreen';

const menuItemsToDisplay = [
    'Hummus \nMoutabal \nFalafel \nMarinated Olives \nKofta \nEggplant Salad \nLentil Burger \nSmoked Salmon \nKofta Burger \nTurkish Kebab \nFries \nButtered Rice \nBread Sticks \nPita Pocket \nLentil Soup \nGreek Salad \nRice Pilaf \nBaklava \nTartufo \nTiramisu \nPanna Cotta',
  ];

const MenuItems = () => {
    return(
        <View style={{flex:0.75}}>
            {/* <WelcomeScreen /> */}
            <ScrollView style={style.scrollViewContainer} 
            indicatorStyle='white'
             >
                <Text style={style.menuHeading}>View Menu</Text>
                <Text style={style.listOfItems}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
}

const style= StyleSheet.create({
    menuHeading:{
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
    },
    scrollViewContainer:{
        paddingHorizontal: 40,
        paddingVertical: 40,
    },
    listOfItems:{
        color: '#F4CE14',
        fontSize: 30,
    }
})

export default MenuItems;
