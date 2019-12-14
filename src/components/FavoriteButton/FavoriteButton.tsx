import React from 'react'
import BorderFavIconPath from './BorderFavIconPath'
import FillFavIconPath from './FillFavIconPath'
import Fireworks from './Fireworks'
import { black, blue, deepPink, pink } from '../common/themes'
import { IconComponentProps } from '../common/types/shared'

const FavButton: React.FC<IconComponentProps> = ({ isHover, toggle }) => {
  return (
    <svg
      className="svg-root"
      focusable
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fontSize="2rem"
    >
      {!toggle && <BorderFavIconPath color={isHover ? pink : black} />}
      {toggle && <FillFavIconPath color={isHover ? deepPink : pink} />}

      {toggle && (
        <>
          <circle
            className="ripple"
            strokeWidth={5}
            stroke={blue}
            fill="none"
            cx={12}
            cy={10}
            r={7}
          />
          <circle
            className="ripple"
            strokeWidth={1}
            stroke={blue}
            fill="none"
            cx={12}
            cy={10}
            r={15}
          />
        </>
      )}

      {toggle && <Fireworks />}
    </svg>
  )
}

export default FavButton
