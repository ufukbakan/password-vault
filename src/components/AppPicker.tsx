import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";
import { StyleSheet, Text, TextInput } from "react-native";
import { globalStyles } from "../utils/globalStyles";
import { SupportedApp, supportedApps } from "./AppPassword";

type AppPickerProps = {
    value: string,
    onChange: (value: SupportedApp) => void
}

export default function (props: AppPickerProps) {

    // const [selectedValue, setSelectedValue] = useState<SupportedApp>("binance");
    const [inputValue, setInputValue] = useState('');
    const filteredApps = inputValue.length > 0 ? supportedApps.filter(app => app.toLowerCase().replaceAll(" ", "").includes(inputValue.toLowerCase().trim().replaceAll(" ", ""))) : supportedApps;
    return (
        <>
            <Text>Uygulama Seçiniz</Text>
            <TextInput
                placeholder="Uygulama aramak için yazınız"
                style={globalStyles.input}
                value={inputValue}
                onChangeText={setInputValue}
            />
            <View style={{...globalStyles.input, display: "flex", height: 50, "alignItems": "flex-start", justifyContent: "flex-start", padding: 0}} >
                <Picker
                    style={styles.picker}
                    selectedValue={props.value}
                    onValueChange={itemValue => props.onChange(itemValue as SupportedApp)}
                >
                    {filteredApps.map(app => (
                        <Picker.Item
                            key={app}
                            label={app}
                            value={app}
                        />
                    ))}
                </Picker>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    picker: {
        borderWidth: 1,
        borderColor: "#444",
        width: 200,
        marginBottom: 20
    }
})