import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { Hstack } from "../utils/layout-utils";

export default function () {
    return (
        <Hstack style={styles.header}>
            <Ionicons name="key" size={48} color="black" />
            <Text style={styles.headerText}>Şifre Cüzdanım</Text>
        </Hstack>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold"
    }
});