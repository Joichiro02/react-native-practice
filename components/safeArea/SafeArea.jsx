import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

function Demo() {
    const insets = useSafeAreaInsets();
    return (
        // <SafeAreaView
        //     style={{
        //         flex: 1,
        //         justifyContent: "space-between",
        //         alignItems: "center",
        //     }}
        //     edges={["top", "left", "right"]}
        // >
        //     <Text>This is top text.</Text>
        //     <Text>This is bottom text.</Text>
        // </SafeAreaView>

        //instead using SafeAreaView just apply the insets in padding
        <View
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,

                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Text>This is top text.</Text>
            <Text>This is bottom text.</Text>
        </View>
    );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function SafeArea() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Home">
                        {() => (
                            <Tab.Navigator
                                initialRouteName="Analitics"
                                tabBar={() => null}
                                screenOptions={{ headerShown: false }}
                            >
                                <Tab.Screen name="Analitics" component={Demo} />
                                <Tab.Screen name="Profile" component={Demo} />
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>

                    <Stack.Screen name="Settings" component={Demo} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

//! Summary​
//* Use react-native-safe-area-context instead of SafeAreaView from react-native
//* Don't wrap your whole app in SafeAreaView, instead wrap content inside your screens
//* Use the edges prop to apply safe area to specific sides
//* Use the useSafeAreaInsets hook for more control over where the insets are applied
