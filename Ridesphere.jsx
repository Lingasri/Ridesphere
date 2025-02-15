AuthNavigator.jsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;

BottomTabNavigator.jsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeStackNavigator from "./HomeStackNavigator";
import MyRidesScreen from "../screens/MyRidesScreen";
import MyBookingsScreen from "../screens/MyBookingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Home" 
            component={HomeStackNavigator} 
            options={{ 
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
            }} 
        />
        <Tab.Screen 
            name="My Rides" 
            component={MyRidesScreen} 
            options={{ 
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="directions-car" size={size} color={color} />
                ),
            }} 
        />
        <Tab.Screen 
            name="My Bookings" 
            component={MyBookingsScreen} 
            options={{ 
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="receipt" size={size} color={color} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ 
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="person" size={size} color={color} />
                ),
            }} 
        />
    </Tab.Navigator>
);

export default BottomTabNavigator;

HomeStackNavigator.jsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BookRideScreen from "../screens/BookRideScreen";
import LocationSelectionScreen from "../screens/LocationSelectionScreen";
import RideDetailsScreen from "../screens/RideDetailsScreen";
import BookingConfirmationScreen from "../screens/BookingConfirmationScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookRide" component={BookRideScreen} />
        <Stack.Screen name="LocationSelection" component={LocationSelectionScreen} />
        <Stack.Screen name="RideDetails" component={RideDetailsScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
    </Stack.Navigator>
);

export default HomeStackNavigator;
