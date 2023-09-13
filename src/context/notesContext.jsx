import { createContext, useCallback, useEffect, useRef, useState } from "react";

import useWASM from '@hooks/useWASM';

export const NotesContext = createContext({
    allNotes: undefined,
    setAllNotes: () => {},
    updateStore: () => {}
})

const NotesContextProvider = ({children}) => {
    const { wasm } = useWASM();
    const wasmRef = useRef(null);
    const [allNotes, setAllNotes] = useState(undefined);

    // React Store Update Handler
    const updateUIStore = useCallback(() => {
        if(wasmRef.current) {
            const notesArr = JSON.parse(wasmRef.current.getAllNotesAsString());
            setAllNotes(notesArr);
        }
    }, [])

    // Add Note Handler
    const addNoteHandler = useCallback(desc => {
        if(desc) {
            wasmRef.current.addNote(desc);
            updateUIStore();
        }
    }, [updateUIStore])

    // Remove Note Handler
    const removeNoteHandler = useCallback((idx) => {
      wasmRef.current.removeNote(idx + 1);
      updateUIStore();
    }, [updateUIStore])

    // Toggle Note Handler
    const toggleNoteHandler = useCallback((idx, status) => {
        wasmRef.current.toggleNote(idx + 1, status);
        updateUIStore();
    }, [updateUIStore])

    useEffect(() => {
        // Notes's Class Constructor() is called
        // And storing the instance inside a ref
        wasmRef.current = new wasm.Notes();

        // Dummy Tasks
        // wasmRef.current.addNote("Create a react-wasm app");
        // wasmRef.current.addNote("Learn WASM");
        // wasmRef.current.addNote("Get a Job, Again !!!");
        // wasmRef.current.addNote("Drink enough water");

        // Calling Class's member function()
        updateUIStore();
    }, [updateUIStore])

    const store = {
        allNotes,
        addNoteHandler,
        removeNoteHandler,
        toggleNoteHandler,
    }

    return <NotesContext.Provider value={store}>
        {children}
    </NotesContext.Provider>
}

export default NotesContextProvider