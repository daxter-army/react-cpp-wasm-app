import React from 'react';
import { PiTrashLight } from 'react-icons/pi';

import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';

import useNotes from '@hooks/useNotes';

import { ENUMS } from '../../enums';

import styles from './Note.module.css'

const Note = ({note, idx}) => {
  const { removeTodoHandler, toggleTodoHandler } = useNotes();

  const onNoteClick = (idx) => {
    toggleTodoHandler(idx, !note.status)
  }

  const deleteButtonHandler = (e, idx) => {
    e.stopPropagation();
    removeTodoHandler(idx);
  }

  return (
    <div onClick={() => onNoteClick(idx)} className={`${styles.noteWpr} ${note.status ? styles.isCompleted : ''}`}>
      <div className={styles.noteLabel}>
        <Checkbox ariaLabel={'Toggle done/undone Todo'} isChecked={note.status} onChange={() => onNoteClick(idx)} />
        <span className={note.status ? styles.isDone : ''}>{note?.description}</span>
      </div>
      <Button ariaLabel="Remove Todo" variant={ENUMS.DELETE_NOTE} onClick={(e) => deleteButtonHandler(e, idx)}>
        <PiTrashLight size={25} />
      </Button>
    </div>
  )
}

export default Note