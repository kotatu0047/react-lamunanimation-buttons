import React from "react"
import {css} from '@emotion/core'
import {font, shape, primaryColors} from 'config/styles'

const style = css(
  font,
  shape,
  primaryColors
)

const Button = ({text}) => {
  return (<button css={style}>{text}</button>)
}

export default Button
