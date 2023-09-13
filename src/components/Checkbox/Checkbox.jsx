import styles from './Checkbox.module.css';

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={onChange}
      className={styles.checkboxWpr}
    />
  )
}

export default Checkbox