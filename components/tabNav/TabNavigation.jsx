// import * as React from "react";
// import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// function HomeScreen() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Home!</Text>
//         </View>
//     );
// }

// function SettingsScreen() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Settings!</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// export default function TabNavigation() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === "Home") {
//                             iconName = focused
//                                 ? "ios-information-circle"
//                                 : "ios-information-circle-outline";
//                         } else if (route.name === "Settings") {
//                             iconName = focused
//                                 ? "ios-list"
//                                 : "ios-list-outline";
//                         }

//                         // You can return any component that you like here!
//                         return (
//                             <Ionicons
//                                 name={iconName}
//                                 size={size}
//                                 color={color}
//                             />
//                         );
//                     },
//                     tabBarActiveTintColor: "tomato",
//                     tabBarInactiveTintColor: "gray",
//                 })}
//             >
//                 <Tab.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{ tabBarBadge: 12 }}
//                 />
//                 <Tab.Screen name="Settings" component={SettingsScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function DetailsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Details!</Text>
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused
                                ? "ios-information-circle"
                                : "ios-information-circle-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused
                                ? "ios-list"
                                : "ios-list-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{ tabBarBadge: 12 }}
                />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
