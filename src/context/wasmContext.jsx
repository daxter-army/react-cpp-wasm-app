import { createContext } from "react";

export const WASMContext = createContext({
    wasm: undefined,
})

const WASMContextProvider = ({ children }) => {
    // wasm contains Notes Class Module from C++
    const store = {
        wasm: window.Module
    }

    return <WASMContext.Provider value={store}>
        {children}
    </WASMContext.Provider>
}

export default WASMContextProvider