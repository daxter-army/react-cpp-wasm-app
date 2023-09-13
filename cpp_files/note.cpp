#include <string>

using namespace std;

class Note {
    private:
        string description;
        bool isDone;

    public:
        Note(string description) {
            this -> description = description;
            this -> isDone = false;
        }

        void toggleNote(bool status) {
            this -> isDone = status;
        };

        string getDescription() {
            return this -> description;
        };

        bool getStatus() {
            return this -> isDone;
        };
};