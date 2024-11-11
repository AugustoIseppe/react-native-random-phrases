import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        fontSize: 16,
        color: "red",
    },
    img: {
        width: 250,
        height: 250,
    },
    botao: {
        backgroundColor: "#FFDD00",
        width: 180,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        margin: 20,
    },
    textoFrase: {
        fontSize: 20,
        color: "#dd7b22",
        margin: 30,
        fontStyle: "italic",
        textAlign: "center",
    },
});

export default styles;