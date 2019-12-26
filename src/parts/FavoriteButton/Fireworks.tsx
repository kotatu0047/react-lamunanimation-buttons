import React from 'react'
import { animated, useSpring } from 'react-spring'
import { getRadian, range } from '../../utilities/commonUtility'
import {
  blue,
  deepPink,
  deepPurple,
  deepTeal,
  pink,
  purple,
  teal,
} from '../../styles/themes'
import styles from '../../styles/FavoriteButton/FavoriteButton.css'

const getColor = (angle: number) => {
  switch (angle) {
    case 0:
      return pink
    case 50:
      return blue
    case 100:
      return purple
    case 150:
      return teal
    case 200:
      return deepPurple
    case 250:
      return deepPink
    case 300:
      return deepTeal
    default:
      return pink
  }
}

const lineLength = 2
const fireworksAngles = range(0, 6).map(v => v * 50)
const fire1CenterX = 0
const fire1CenterY = 0
const fire2CenterX = 22
const fire2CenterY = 17
const fire3CenterX = 5
const fire3CenterY = 22

const useFireworksSpring = (delay: number) => {
  return useSpring<{
    inner: number
    outer: number
  }>({
    inner: 10,
    outer: 10,
    delay,
    from: {
      inner: 0,
      outer: 2,
    },
    // to: {
    //   inner: 10,
    //   outer: 10,
    // },
    config: {
      mass: 10,
      tension: 1000,
      friction: 20,
      clamp: true,
    },
  })
}

const Fireworks: React.FC = () => {
  const spring1 = useFireworksSpring(600)
  const spring2 = useFireworksSpring(800)
  const spring3 = useFireworksSpring(1000)

  return (
    <>
      {fireworksAngles.map(angle => {
        const radian = getRadian(angle)

        return (
          <React.Fragment key={angle}>
            <animated.line
              className={styles.firework1}
              x1={spring1.inner.interpolate(
                (v: number): number =>
                  fire1CenterX + (v + lineLength) * Math.cos(radian),
              )}
              y1={spring1.inner.interpolate(
                (v: number): number =>
                  fire1CenterY + (v + lineLength) * Math.sin(radian),
              )}
              x2={spring1.outer.interpolate(
                (v: number): number =>
                  fire1CenterX + (v + lineLength) * Math.cos(radian),
              )}
              y2={spring1.outer.interpolate(
                (v: number): number =>
                  fire1CenterY + (v + lineLength) * Math.sin(radian),
              )}
              stroke={getColor(angle)}
              strokeWidth="1"
            />
            <animated.line
              className={styles.firework2}
              x1={spring2.inner.interpolate(
                (v: number): number =>
                  fire2CenterX + (v + lineLength) * Math.cos(radian),
              )}
              y1={spring2.inner.interpolate(
                (v: number): number =>
                  fire2CenterY + (v + lineLength) * Math.sin(radian),
              )}
              x2={spring2.outer.interpolate(
                (v: number): number =>
                  fire2CenterX + (v + lineLength) * Math.cos(radian),
              )}
              y2={spring2.outer.interpolate(
                (v: number): number =>
                  fire2CenterY + (v + lineLength) * Math.sin(radian),
              )}
              stroke={getColor(angle)}
              strokeWidth="1"
            />
            <animated.line
              className={styles.firework3}
              x1={spring3.inner.interpolate(
                (v: number): number =>
                  fire3CenterX + (v + lineLength) * Math.cos(radian),
              )}
              y1={spring3.inner.interpolate(
                (v: number): number =>
                  fire3CenterY + (v + lineLength) * Math.sin(radian),
              )}
              x2={spring3.outer.interpolate(
                (v: number): number =>
                  fire3CenterX + (v + lineLength) * Math.cos(radian),
              )}
              y2={spring3.outer.interpolate(
                (v: number): number =>
                  fire3CenterY + (v + lineLength) * Math.sin(radian),
              )}
              stroke={getColor(angle)}
              strokeWidth="1"
            />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Fireworks
