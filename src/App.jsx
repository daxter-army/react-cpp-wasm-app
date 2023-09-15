import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { PiNotePencilLight } from 'react-icons/pi';

import Notes from '@components/Notes/Notes';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

import useNotes from '@hooks/useNotes';

import { ENUMS } from './enums';

import styles from './App.module.css';

function App() {
  const { addTodoHandler } = useNotes();
  const [ value, setValue ] = useState("");

  const addTodoButtonHandler = () => {
    setValue("");
    addTodoHandler(value);
  }

  return (
    <div className={styles.appWpr}>
      <div>
        <div className={styles.creditsBar}>
          <h1>{ENUMS.APP_TITLE}</h1>
          <a href={ENUMS.GITHUB_LINK}>{ENUMS.AUTHOR_LABEL}<BsGithub size={18}/></a>
        </div>
        <div className={styles.headingWpr}>
          <Input value={value} setValue={setValue} placeholder={ENUMS.SEARCH_PLACEHOLDER} />
          <Button
            ariaLabel="Add Todo"
            variant={ENUMS.ADD_NOTE}
            onClick={addTodoButtonHandler}
            isDisabled={value.length === 0}
          >
            <PiNotePencilLight size={30} />
          </Button>
        </div>
      </div>
      <Notes />
    </div>
  )
}

export default App