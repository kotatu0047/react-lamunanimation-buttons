import React, { useCallback, useState } from 'react'
import { IconComponentProps, OverrideProps } from '../common/types/shared'
import styles from './ButtonBase.css'

type buttonType = 'submit' | 'button' | 'reset'

export interface ButtonBaseTypeMap {
  props: {
    disabled?: boolean
    type?: buttonType
    children?: never
  }
}

export type ButtonBaseComponentType = (
  props: OverrideProps<ButtonBaseTypeMap>,
) => React.FC<IconComponentProps>

interface Props extends OverrideProps<ButtonBaseTypeMap> {
  IconComponent: React.FC<IconComponentProps>
}

const ButtonBase = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    IconComponent,
    type = 'button',
    disabled = false,
    className = '',
    style = {},
  } = props

  const [isHover] = useState<boolean>(false)
  // const handleMouseOver = useCallback(() => setIsHover(true), [setIsHover])
  // const handleMouseOut = useCallback(() => setIsHover(false), [setIsHover])
  const [toggle, setToggle] = useState<boolean>(false)
  const handleClick = useCallback(() => setToggle(v => !v), [setToggle])

  return (
    <button
      className={className}
      style={style}
      ref={ref}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className={styles.label}>
        <IconComponent isHover={isHover} toggle={toggle} />
      </span>
    </button>
  )
})

export default ButtonBase
