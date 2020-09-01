import React from 'react';
import {View,StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import CategoryGridTile from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data';

enableScreens();
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