import { createContext, useCallback, useEffect, useRef, useState } from "react";

import useWASM from '@hooks/useWASM';

export const NotesContext = createContext({
    allTodos: undefined,
    setAllTodos: () => {},
    updateStore: () => {}
})

const NotesContextProvider = ({children}) => {
    const { wasm } = useWASM();
    const wasmRef = useRef(null);
    const [allTodos, setAllTodos] = useState(undefined);

    // React Store Update Handler
    const updateUIStore = useCallback(() => {
        if(wasmRef.current) {
            const notesArr = JSON.parse(wasmRef.current.getAllNotesAsString());
            setAllTodos(notesArr);
        }
    }, []);

    // Add Note Handler
    const addTodoHandler = useCallback(desc => {
        if(desc) {
            wasmRef.current.addNote(desc);
            updateUIStore();
        }
    }, [updateUIStore]);

    // Remove Note Handler
    const removeTodoHandler = useCallback((idx) => {
      wasmRef.current.removeNote(idx + 1);
      updateUIStore();
    }, [updateUIStore]);

    // Toggle Note Handler
    const toggleTodoHandler = useCallback((idx, status) => {
        wasmRef.current.toggleNote(idx + 1, status);
        updateUIStore();
    }, [updateUIStore]);

    useEffect(() => {
        // If wasm is undefined, then return 
        if(!wasm) return

        // Notes's Class Constructor() is called
        // And storing the instance inside a ref
        wasmRef.current = new wasm.Notes();

        // Dummy Tasks
        addTodoHandler("Create a React and WASM app");
        toggleTodoHandler(0, true);
        addTodoHandler("Learn more about WebAssembly");
        
        // wasmRef.current.addNote("Create a react-wasm app");
        // wasmRef.current.addNote("Drink enough water");

        // Calling Class's member function()
        // updateUIStore();
    }, [wasm, updateUIStore])

    const store = {
        allTodos,
        addTodoHandler,
        removeTodoHandler,
        toggleTodoHandler,
    }

    return <NotesContext.Provider value={store}>
        {children}
    </NotesContext.Provider>
}

export default NotesContextProvider