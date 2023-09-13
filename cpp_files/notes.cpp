#include <string>
#include <vector>
#include "note.cpp"
#include <emscripten/bind.h>
#include <emscripten/emscripten.h>

using namespace std;
using namespace emscripten;

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

class Notes {
    private:
        vector<Note*> notes;

        string createNoteString(Note* note) {
            string noteString = "";

            noteString.append("{");
            noteString.append("\"description\":");
            noteString.append("\"");
            noteString.append(note -> getDescription());
            noteString.append("\"");
            noteString.append(",\"status\":");
            noteString.append(note -> getStatus() ? "true" : "false");
            noteString.append("}");

            return noteString;
        }
    
    public:
        Notes() {
            cout << "Notes Class Constructor run successfully!" << endl;
        }

        string addNote(string title) {
            Note* newNote = new Note(title);
            notes.push_back(newNote);

            return createNoteString(newNote);
        };

        void removeNote(int position) {
            if(notes.size() == 0) return;

            if(position == -1) {
                Note* targetNote = notes.back();
                notes.pop_back();

                // return targetNote;
            }

            // Delete the desired note
            Note* targetNote = notes.at(position - 1);
            notes.erase(notes.begin() + position - 1);
        
            // return targetNote;
        };

        void toggleNote(int position, bool status) {
            notes.at(position - 1) -> toggleNote(status);
        }

        string getAllNotesAsString() {
            string allNotes = "[";

            for(int i = 0 ; i < notes.size(); i++) {
                string noteItemString = createNoteString(notes.at(i));
                allNotes.append(noteItemString);

                if(i < notes.size() - 1) {
                    allNotes.append(",");
                }
            }

            allNotes.append("]");

            return allNotes;
        }

        int totalNotes() {
            return notes.size();
        };
};

EMSCRIPTEN_BINDINGS(notes_class) {
    class_<Notes>("Notes")
        .constructor()
        .function("addNote", &Notes::addNote)
        .function("totalNotes", &Notes::totalNotes)
        .function("toggleNote", &Notes::toggleNote)
        .function("removeNote", &Notes::removeNote)
        .function("getAllNotesAsString", &Notes::getAllNotesAsString);
}