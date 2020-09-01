import React from 'react';
import {View,Text,FlatList,StyleSheet, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectedMeal}>
                <View>
                    <View style={{...styles.mealHeader ,...styles.mealRow}}>
                        <ImageBackground source={{uri:props.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealDeatils ,...styles.mealRow}}>
                        <Text>{props.duration} mins</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affrdability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',  
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'85%'
    },
    mealDeatils:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage:{
        height:'100%',
        width:'100%',  
        justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:"rgba(0,0,0,0.5)",
        paddingVertical:5,
        paddingHorizontal:12
    },
    title:{
        fontSize:22,
        textAlign:'center',
        fontFamily:'open-sans-bold',
        color:'white',
    }
});
export default MealItem;