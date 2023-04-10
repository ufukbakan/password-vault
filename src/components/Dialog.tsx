import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export type DialogProps = {
    visible: boolean;
    close: () => void;
    children: ReactNode;
}

export default function (props: DialogProps) {


    return (
        <View style={{
            ...styles.wrapper,
            display: props.visible ? "flex" : "none"
        }} key={"dialog" + props.visible}>
            <View style={{ ...styles.dialogContainer }}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    dialogContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});