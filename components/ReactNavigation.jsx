// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function ReactNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Passing additional props */}
                {/* <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} extraData={someData} />}
                </Stack.Screen> */}
                <Stack.Screen
                    name="Home"
                    options={{ title: "Overview" }} //assigning title to the page
                    component={HomeScreen}
                />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ReactNavigation;
