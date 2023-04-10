import React from "react";
import { View, ViewStyle } from "react-native";

type ChildrenAndStyleRecevier = {
    children: React.ReactNode;
    style?: ViewStyle;
}

export function Vstack(props: ChildrenAndStyleRecevier) {
    const defaultStyles : ViewStyle = { flexDirection: 'column', display: "flex" };
    const mergedStyles : ViewStyle = { ...defaultStyles, ...props.style };
    return (
        <View style={mergedStyles}>
            {props.children}
        </View>
    )
}

export function Hstack(props: ChildrenAndStyleRecevier) {
    const defaultStyles : ViewStyle = { flexDirection: 'row', display: "flex" };
    const mergedStyles : ViewStyle = { ...defaultStyles, ...props.style };
    return (
        <View style={mergedStyles}>
            {props.children}
        </View>
    )
}