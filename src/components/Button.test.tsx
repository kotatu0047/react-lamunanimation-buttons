import React from "react"
import {render, getByText, fireEvent} from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
  test("should display text", () => {
    const {container} = render(<Button text="We Salute You!"/>)

    getByText(container, "We Salute You!")
  })

  test("should handle click events", () => {
    const onClickMock = jest.fn()
    const {container} = render(
      <Button text="Click me, maybe?" onClick={onClickMock}/>
    )
    const component = getByText(container, "Click me, maybe?")

    fireEvent.click(component)

    expect(onClickMock).toBeCalled()
  })

  test("has css classNames", () => {
    const {container} = render(<Button text="We Salute You!"/>)
    const component = getByText(container, "We Salute You!")

    expect(component.classList.contains('primaryColors')).toBe(true)
    expect(component.classList.contains('shape')).toBe(true)
    expect(component.classList.contains('font')).toBe(true)
  })
})
