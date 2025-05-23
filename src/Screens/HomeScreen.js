import React from "react"; 
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate("Details")}
                />
        </View>
        <View style={styles.buttonContainer}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate("Profile")}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff", // Fundo azul claro
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#0DA9CA", // Titulo Azul claro
        marginBottom: 30,
        textAlign: "center",
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.6,
        borderRadius: 15,
        overflow: "hidden",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        backgroundColor: "#87CEEB", // Azul claro para os botões
    },
});