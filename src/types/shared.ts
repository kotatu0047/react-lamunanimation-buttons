import React from 'react'

export interface CommonProps {
  className?: string
  style?: React.CSSProperties
}

export interface OverridableTypeMap {
  props: {}
}

export type OverrideProps<M extends OverridableTypeMap> = M['props'] &
  CommonProps

// TODO 大きさ指定 small madame leary  (任意のfontsize)
export type IconComponentProps = {
  isHover: boolean
  toggle: boolean
}
