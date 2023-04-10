import React, { useEffect } from "react";
import { useContext } from "react";
import { AppPasswordRecord } from "src/components/AppPassword";
import { saveData } from "./storage-utils";

export type ContextValue = {
    records: AppPasswordRecord[];
}

const initialValues: { get(): ContextValue, set(x: ContextValue): void } = {
    get: () => ({
        records: []
    }),
    set: (x) => { },
}

var MyContext = React.createContext(initialValues);

export function ContextProvider({ children }: { children: React.ReactNode }) {
    var [value, setValue] = React.useState(initialValues.get());

    useEffect(() => {
        saveData("storedPasswords", value.records);
    }, [value.records]);

    return (
        <MyContext.Provider value={{ get: () => value, set: setValue }}>
            {children}
        </MyContext.Provider>
    );
}

export function useMyContext() {
    return useContext(MyContext);
}