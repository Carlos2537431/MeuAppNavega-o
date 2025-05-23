import { Button, Dimensions,StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function DetailScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9", // Fundo claro e moderno
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#4A4A4A", // Cor neutra e elegante
        marginBottom: 40,
        textAlign: "center",
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.7, // Botões mais largos
        borderRadius: 12,
        overflow: "hidden",
        elevation: 5, // Sombra para Android
        shadowColor: "#000", // Sombra para iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: "#ffffff", // Fundo branco para destacar os botões
    },
});