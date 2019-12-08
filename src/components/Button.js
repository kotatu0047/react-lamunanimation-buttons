/** @jsx jsx */
import React from "react"
import {jsx, css} from '@emotion/core'
import {font, shape, primaryColors} from '../config/styles'

const style = css(
  font,
  shape,
  primaryColors
)

const Button = ({text, onClick}) => {
  return (<button css={style} onClick={onClick}>{text}</button>)
}

export default Button
