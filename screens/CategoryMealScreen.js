import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import {CATEGORIES,MEALS} from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
    const CategoryId = props.navigation.getParam('CategoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(CategoryId) >= 0)
    const renderMealItems=(itemData)=>{
        return(
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity}
                affrdability={itemData.item.affrdability}
                imageUrl={itemData.item.imageUrl}
                onSelectedMeal={()=> {
                    props.navigation.navigate({
                        routeName:'MealDetails',
                        params:{
                            Meal:itemData.item
                        }
                    })
                }}
            ></MealItem>
        )
    }
    return(
        <View style={styles.screen}>
            {/* <Text>hihihi</Text> */}
            <FlatList 
                data={displayedMeals}  
                style={{width:'100%'}} 
                renderItem={renderMealItems}>
            </FlatList>
        </View>
    )
}
CategoryMealScreen.navigationOptions = (navigationData) =>{
    const CategoryId = navigationData.navigation.getParam('CategoryId');
    const selectedCategory = CATEGORIES.find(item => item.id == CategoryId);
    return {
        headerTitle:selectedCategory.title,
    };
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    }
})

export default CategoryMealScreen;