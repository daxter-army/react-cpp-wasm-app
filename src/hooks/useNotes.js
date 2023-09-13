import { useContext } from "react";

import { NotesContext } from "@context/notesContext";

const useNotes = () => useContext(NotesContext);

export default useNotes;