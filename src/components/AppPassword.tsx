import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { appLogos } from "../utils/logos";
import { Hstack } from "../utils/layout-utils";

const socialMediaApps = ['Facebook', 'Google', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Snapchat', 'Pinterest', 'YouTube'] as const;
const mailProviderApps = ['Gmail', 'Yahoo! Mail', 'Outlook', 'ProtonMail', 'Zoho Mail', 'Mail.com', 'AOL Mail', 'GMX Mail'] as const;
const cryptoTradingApps = ['Binance', 'Coinbase', 'Kraken', 'Gemini', 'Bitfinex', 'Bitstamp', 'Bittrex', 'Poloniex'] as const;
const turkeyBankApps = [
    'Akbank',
    'Garanti BBVA',
    'Yapı Kredi',
    'İşbank',
    'Ziraat Bankası',
    'Finansbank',
    'HSBC Turkey',
    'TEB',
    'Denizbank',
    'Kuveyt Türk',
    'Vakıfbank',
    'ING Turkey',
    'Alternatifbank',
    'Şekerbank',
    'Abank',
    'QNB Finansbank',
    'Odea Bank',
    'Halkbank',
    'Türkiye Finans',
    'AnadoluBank',
    'ICBC Turkey',
    'Aktifbank',
    'TurkishBank',
    'Fibabanka',
    'PttBank',
    'Citibank Turkey',
    'Enpara',
    'Papara',
    'Paycell',
    'Paytr',
    'PayU',
    'PayPal',
] as const;
const shoppingApps = ['Hepsiburada', 'n11', 'Gittigidiyor', 'Trendyol', 'Getir', 'Banabi', 'Migros Sanal Market', 'CarrefourSA Hemen', 'Glovo', 'Yemeksepeti', 'Domino\'s Pizza Turkey', 'Burger King Türkiye', 'McDonald\'s Türkiye'] as const;


export const supportedApps = [...socialMediaApps, ...mailProviderApps, ...cryptoTradingApps, ...turkeyBankApps, ...shoppingApps] as const;
export type SupportedApp = typeof supportedApps[number];

export type AppPasswordRecord = {
    app: SupportedApp;
    name: string;
    password: string;
}

type AppPasswordProps = {
    data: AppPasswordRecord,
    onClick: VoidFunction
}


export default function (props: AppPasswordProps) {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <Hstack style={style.appPassRow}>
                <Hstack style={{gap: 10}}>
                    <Image source={{uri: appLogos.get(props.data.app)}} style={{width: 32, height: 32}} />
                    <Text>{props.data.name}</Text>
                </Hstack>
                <Ionicons name="eye" size={24} color="black" />
            </Hstack>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    appPassRow: {
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#efefef",
        marginBottom: 5
    }
});