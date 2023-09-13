import { useContext } from "react";

import { WASMContext } from "@context/wasmContext";

const useWASM = () => useContext(WASMContext);

export default useWASM