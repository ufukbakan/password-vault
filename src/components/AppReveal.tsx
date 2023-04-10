import { Button } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { Hstack, Vstack } from "../utils/layout-utils";
import { AppPasswordRecord } from "./AppPassword";
import * as Clipboard from 'expo-clipboard';


type AppRevealProps = {
    app: AppPasswordRecord,
    onClose: VoidFunction,
    onDelete: VoidFunction
}

export default function (props: AppRevealProps) {
    const app = props.app;

    async function copyPassword() {
        await Clipboard.setStringAsync(app.password);
        alert("Şifre kopyalandı.");
    }

    return (
        <Vstack style={{ gap: 15 }}>
            <View style={styles.deleteButton}>
                <Button title="Sil" color="error" onPress={() => { props.onDelete(); props.onClose(); }} />
            </View>
            <Hstack>
                <Text style={styles.appName}>Uygulama:</Text>
                <Text style={styles.appName}>{app.app}</Text>
            </Hstack>
            <Hstack>
                <Text style={styles.appName}>Şifre:</Text>
                <Text style={styles.password}>{app.password}</Text>
            </Hstack>
            <Hstack style={{ gap: 15 }}>
                <Button title="Şifreyi Kopyala" onPress={copyPassword} />
                <Button title="Kapat" onPress={props.onClose} />
            </Hstack>
        </Vstack>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    appName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    password: {
        fontSize: 20,
        fontWeight: "bold"
    },
    deleteButton: {
        marginBottom: 150
    }
});