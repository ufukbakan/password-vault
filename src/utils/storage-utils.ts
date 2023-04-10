import AsyncStorage from "@react-native-async-storage/async-storage"
import { decrypt, encrypt } from "./crypto";

export function saveData(key: string, value: any) {
    if (typeof value === "string") {
        return AsyncStorage.setItem(key, encrypt(value));
    }
    return AsyncStorage.setItem(key, encrypt(JSON.stringify(value)));
}

export async function getData(key: string) {
    return decrypt(await AsyncStorage.getItem(key) || "");
}