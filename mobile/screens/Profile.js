import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Profile({ navigation }) {


    const redirectLogin = () => {
        navigation.navigate(Login)
    }
    const redirectSignUp = () => {
        navigation.navigate(SignUp)
    }

    const getProfile = () => {
        return <View className="flex flex-row h-screen space-x-6 self-center items-center">
            <TouchableOpacity style={styles.button} onPress={redirectLogin} title="Login" ><Text style={styles.textStyle}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={redirectSignUp} title="Sign Up" ><Text style={styles.textStyle}>Sign Up</Text></TouchableOpacity >
        </View>
    }

    return (
        <View >
            {getProfile()}
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#0000FF",
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    textStyle: {
        color: "#FFFFFF",
        fontWeight: 'bold'
    }
});