import styles from './Checkbox.module.css';

const Checkbox = ({ isChecked, onChange, ariaLabel = "checkbox" }) => {
  return (
    <input
      aria-label={ariaLabel}
      type='checkbox'
      checked={isChecked}
      onChange={onChange}
      className={styles.checkboxWpr}
    />
  )
}

export default Checkbox