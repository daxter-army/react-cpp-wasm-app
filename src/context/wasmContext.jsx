import { createContext, useEffect, useState } from "react";

import Spinner from "@components/Spinner/Spinner";

import { ENUMS } from '@/enums';

const initialWasmStore = { wasm: undefined }

export const WASMContext = createContext(initialWasmStore)

const WASMContextProvider = ({ children }) => {
    const [store, setStore] = useState(initialWasmStore);

    useEffect(() => {
        // Checking if Wasm module has loaded,
        // and if it is, then updating it in the store
        const interval = setInterval(() => {
            if(window.Module) {
                setStore({ wasm: window.Module })
                console.log("Loaded WASM Module!")
                
                clearInterval(interval)
                return
            }

            console.log("Loading WASM Module...")

        }, ENUMS.IS_WASM_LOADED_INTERVAL_TIME)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <WASMContext.Provider value={store}>
        {store.wasm ? children : <Spinner />}
    </WASMContext.Provider>
}

export default WASMContextProvider