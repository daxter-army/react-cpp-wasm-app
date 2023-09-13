import { PiLadderLight } from 'react-icons/pi';

import Note from '@components/Note/Note';

import useNotes from '@hooks/useNotes';

import { ENUMS } from '@/enums';

import styles from './Notes.module.css';

const Notes = () => {
  const { allNotes } = useNotes();

  return (
    <div className={styles.notesWpr}>
      {
        allNotes && allNotes.length > 0
          ? allNotes.map((note, idx) => <Note key={idx} idx={idx} note={note} />)
          : <div className={styles.noTasks}><PiLadderLight size={24} />
              <span>{ENUMS.NO_PENDING_TASKS}</span>
          </div>
      }
    </div>
  )
}

export default Notes