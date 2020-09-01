import React from 'react';
import {ScrollView,View,Text,Image,StyleSheet} from 'react-native';

const ListItem = props => {
    return (<View style={styles.listItem}>
        <Text> {props.children} </Text>
    </View>)
}

const MealDetailsScreen = props => {
    const Meal = props.navigation.getParam('Meal');
    return(
        <ScrollView>
            <Image source={{uri:Meal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text>{Meal.duration} mins</Text>
                <Text>{Meal.complexity.toUpperCase()}</Text>
                    
                <Text>{Meal.affrdability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>INGREDIENTS</Text>
                {Meal.ingredients.map(ingredient => (
                        <ListItem key={ingredient}>{ingredient}</ListItem>
                    ))}
            <Text style={styles.title}>STEPS</Text>
            {Meal.steps.map(step => (
                        <ListItem key={step}>{step}</ListItem>
                    ))}
        </ScrollView>
    )
}
MealDetailsScreen.navigationOptions = (navigationData) =>{
    const Meal = navigationData.navigation.getParam('Meal');
    return {
        headerTitle:Meal.title,
    };
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontSize:22,
        textAlign:'center',
        fontFamily:'open-sans-bold',
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around',
    },
    listItem:{
        marginHorizontal:20,
        marginVertical:10,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10,

    }
})
export default MealDetailsScreen;
