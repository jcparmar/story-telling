import React, {Component} from "react"
import{View} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateStory from "../screens/CreateStory";
import Feed from "../screens/Feed";


const Tab = createBottomTabNavigator()
export default function BottomTabNav (){
return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name= "Feed" component={Feed} options = {{headerShown:false}}/>
            <Tab.Screen name="CreateStory" component={CreateStory} options={{headerShown:false}}/>
        </Tab.Navigator>
    </NavigationContainer>
)
}