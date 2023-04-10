import AsyncStorage from "@react-native-async-storage/async-storage"

export function saveData(key: string, value: any){
    if(typeof value === "string"){
        return AsyncStorage.setItem(key, value);
    }
    return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function getData(key: string){
    return AsyncStorage.getItem(key);
}