import { Button, Dimensions,StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate("Details")}
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
        backgroundColor: "#fafafa", // Fundo neutro e moderno
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#6A5ACD", // Roxo elegante
        marginBottom: 30,
        textAlign: "center",
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.6,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: "#DDA0DD", // Roxo claro para os botões
    },
});