import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import Colors from '../constants/Colors';
import  CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';

const MealsNavigator = createStackNavigator({
    Categories : {
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:'Meal Categories',
        },
    },
    CategoryMeals : {
        screen : CategoryMealScreen,
    },
    MealDetails : MealDetailsScreen
},{
    defaultNavigationOptions:{
        // headerStyle:{
        //     backgroundColor: Platform.OS === 'android'? Colors.primaryColor : '',
        // },
        // headerTintColor: Platform.OS === 'android'?'white':Colors.primaryColor,
    }
});

export default createAppContainer(MealsNavigator);

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


