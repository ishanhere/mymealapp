import React from 'react';
import {View,Text,StyleSheet, Platform} from 'react-native';
import {TouchableOpacity, TouchableNativeFeedback} from 'react-native-gesture-handler';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor:props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:10,
        width:150,
        height:150,
        borderRadius:10,
        // overflow :'hidden'
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontSize:18,
        textAlign:'right',
        fontFamily:'open-sans-bold'
    }
})
export default CategoryGridTile;