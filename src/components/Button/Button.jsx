import { ENUMS } from '@/enums';

import styles from './Button.module.css';

const Button = ({ variant, children, onClick, isDisabled = false, ariaLabel = "button" }) => {
  const buttonStyles = {
    [ENUMS.ADD_NOTE]: styles.addBtn,
    [ENUMS.DISABLED]: styles.disabledBtn,
    [ENUMS.DELETE_NOTE]: styles.deleteBtn,
  }
  
  return (
    <button
      ariaLabel={ariaLabel}
      disabled={isDisabled}
      className={`${styles.buttonWpr} ${isDisabled ? buttonStyles.DISABLED : buttonStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button