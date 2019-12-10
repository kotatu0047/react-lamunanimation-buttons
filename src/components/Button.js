import React from "react"
import styles from './Button.css'

const Button = ({text, onClick}) => {
  return (
    <button className={`${styles.primaryColors} ${styles.shape} ${styles.font}`}
            onClick={onClick}>{text}</button>
  )
}

export default Button
