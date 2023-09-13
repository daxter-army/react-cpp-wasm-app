import styles from "./Input.module.css";

const Input = ({value, setValue, placeholder}) => {
  return (
    <input
      className={styles.inputWpr}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default Input