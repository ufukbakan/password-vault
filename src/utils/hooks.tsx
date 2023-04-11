import React, { useEffect } from "react";
import { useContext } from "react";
import { AppPasswordRecord } from "../components/AppPassword";
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

    return (
        <MyContext.Provider value={{
            get: () => value, set: (c: ContextValue) => {
                setValue(c);
                saveData("storedPasswords", c.records);
            }
        }}>
            {children}
        </MyContext.Provider>
    );
}

export function useMyContext() {
    return useContext(MyContext);
}