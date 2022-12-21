import * as React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function FeedScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate("Settings")}
            />
        </View>
    );
}

function ProfileScreen() {
    return <View />;
}

function SettingsScreen() {
    return <View />;
}

const FeedStack = createNativeStackNavigator();

function FeedStackScreen() {
    return (
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name="Feed" component={FeedScreen} />
            {/* other screens */}
        </FeedStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            {/* other screens */}
        </ProfileStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }} //* all the screens inside will not show the header because of the screenOptions
        >
            <Tab.Screen name="Feed" component={FeedStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
    );
}

const RootStack = createNativeStackNavigator();

export default function ScreenOptionsNestedNavigators() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    component={HomeTabs}
                    options={{ headerShown: false }} //* its only affect in the home screen because I only use options
                />
                <RootStack.Screen name="Settings" component={SettingsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
