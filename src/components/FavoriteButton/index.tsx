import React from 'react'
import BorderFavIconPath from './parts/BorderFavIconPath'
import FillFavIconPath from './parts/FillFavIconPath'
import Fireworks from './parts/Fireworks'
import { black, blue, deepPink, pink } from '../../common/themes'
import { IconComponentProps } from '../../common/types/shared'
import commonStyles from '../../common/style.css'
import styles from './FavoriteButton.css'

const IconComponent: React.FC<IconComponentProps> = ({ isHover, toggle }) => {
  return (
    <svg
      className={commonStyles.svgRoot}
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
            className={styles.ripple}
            strokeWidth={5}
            stroke={blue}
            fill="none"
            cx={12}
            cy={10}
            r={7}
          />
          <circle
            className={styles.ripple}
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

export default IconComponent
