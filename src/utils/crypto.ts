import CryptoJS from 'react-native-crypto-js';
import { encode, decode } from 'base-64';
import * as device from 'expo-device';

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

const key = `bakan.ufuk.${device.osBuildId || "x"}.${device.osInternalBuildId || "x"}.${device.osName}`;

export function encrypt(text: string) {
    const ciphertext = CryptoJS.AES.encrypt(text, key);
    return ciphertext.toString();
}

export function decrypt(encryptedText: string) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
