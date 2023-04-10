import React, { useEffect, useState } from "react";
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RecordAdder from "../components/RecordAdder";
import AppPassword, { AppPasswordRecord } from "../components/AppPassword";
import Dialog from "../components/Dialog";
import MyHeader from "../components/MyHeader";
import { getData } from "../utils/storage-utils";
import { useMyContext } from "../utils/hooks";
import AppReveal from "../components/AppReveal";

export default function Home() {

    const context = useMyContext();
    const [isDialogVisible, setDialogVisible] = useState(false);

    const recordAdderDialog = <RecordAdder onAdd={addApp} visible={isDialogVisible} close={() => setDialogVisible(false)} />;
    const [dialogContent, setDialogContent] = useState<JSX.Element>(recordAdderDialog);

    useEffect(() => {
        getData('storedPasswords').then(data => {
            data && context.set({ records: JSON.parse(data) as AppPasswordRecord[] });
        });
    }, []);

    function revealApp(app: AppPasswordRecord) {
        return () => {
            setDialogContent(<AppReveal app={app} onClose={() => setDialogVisible(false)} onDelete={deleteApp(app)} />);
            setDialogVisible(p => !p);
        }
    }

    function addApp(app: AppPasswordRecord) {
        context.set({
            ...context.get(),
            records: [...context.get().records, app]
        });
    }

    function deleteApp(app: AppPasswordRecord) {
        return () => {
            context.set({
                ...context.get(),
                records: context.get().records.filter(x => x.name !== app.name)
            });
        }
    }

    function renderPassword(o: { item: AppPasswordRecord, index: number }) {
        return <AppPassword onClick={revealApp(o.item)} data={o.item} />
    }

    function onAddClick() {
        setDialogContent(recordAdderDialog);
        setDialogVisible(p => !p);

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <MyHeader />
                <Dialog visible={isDialogVisible} close={() => setDialogVisible(false)}>
                    {dialogContent}
                </Dialog>
                <FlatList
                    data={context.get().records}
                    renderItem={renderPassword}
                />
                <TouchableOpacity style={styles.button} onPress={onAddClick}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        flex: 1
    },
    content: {
        flex: 1
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgb(83, 209, 66)',
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 39,
    }
});