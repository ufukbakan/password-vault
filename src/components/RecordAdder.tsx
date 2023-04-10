import { Ionicons } from "@expo/vector-icons";
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { globalStyles } from '../utils/globalStyles';
import { Hstack, Vstack } from '../utils/layout-utils';
import { AppPasswordRecord } from "./AppPassword";
import AppPicker from './AppPicker';
import { DialogProps } from './Dialog';

interface RecordAdderProps extends Partial<DialogProps>{
    onAdd: (app: AppPasswordRecord) => void
}

export default function (props: RecordAdderProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedApp, setSelectedApp] = useState<AppPasswordRecord["app"]>("Binance");

    return (
        <>
            <AppPicker value={selectedApp} onChange={(d) => setSelectedApp(d)} />
            <Vstack style={{ marginBottom: 50 }}>
                <TextInput style={globalStyles.input} placeholder='Kayıt ismi giriniz' />
                <Hstack style={{ alignItems: "center", gap: 10 }}>
                    <TextInput style={globalStyles.input} placeholder='Şifre giriniz' secureTextEntry={!showPassword} />
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#444" onPress={() => setShowPassword(p => !p)} />
                </Hstack>
            </Vstack>
            <Hstack style={{ width: "100%", justifyContent: "space-around" }}>
                <Button title="Kapat" type='solid' color="error" onPress={props.close} />
                <Button title="Ekle" type='solid' color="success" onPress={() => props.onAdd({
                    app: selectedApp,
                    name: "Kayıt ismi",
                    password: "Şifre"
                })} />
            </Hstack>
        </>
    )
}