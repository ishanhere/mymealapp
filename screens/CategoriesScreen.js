import React from 'react';
import {View,StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import CategoryGridTile from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data';
import {AdMobBanner} from 'expo-ads-admob'

enableScreens();
const bannerError = () => {
    alert('ad banner error')
}
const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
           <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onSelect={()=> {
                    props.navigation.navigate({
                        routeName:'CategoryMeals',
                        params:{
                            CategoryId:itemData.item.id,
                        }
                    })
                }} />
        );
    };
    return(
        <View style={styles.screen}>
            <AdMobBanner
                bannerSize="banner"
                testDeviceID="EMULATOR"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                // servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={bannerError} 
            />
            <FlatList
                data={CATEGORIES} 
                renderItem={renderGridItem} 
                numColumns={2}>
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})
export default CategoriesScreen;


// Invariant Violation: "main" has not been registered. This can happen if:
// * Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
// * A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.

// invariant
//     browser.js:38:14
// runApplication
//     AppRegistry.js:193:13
// __callFunction
//     MessageQueue.js:425:19
// __guard$argument_0
//     MessageQueue.js:112:6
// __guard
//     MessageQueue.js:373:10
// callFunctionReturnFlushedQueue
//     MessageQueue.js:111:4
// callFunctionReturnFlushedQueue
//     [native code]:0
