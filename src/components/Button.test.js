import React from "react"
import {render, getByText, fireEvent} from "@testing-library/react"
import Button from "components/Button"

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
    const component = container.firstChild

    fireEvent.click(component)

    expect(onClickMock).toBeCalled()
  })

  test("should make text uppercase", () => {
    const {container} = render(<Button text="We Salute You!"/>)
    const component = getByText(container, "We Salute You!")

    expect(component).toHaveStyleRule("text-transform", "uppercase")
    expect(component).toHaveStyleRule("font-size", "1.5em")
    expect(component).toHaveStyleRule("font-weight", "bold")
    expect(component).toHaveStyleRule("letter-spacing", '4px')
    expect(component).toHaveStyleRule("border", "none")
    expect(component).toHaveStyleRule("border-radius", '5px')
    expect(component).toHaveStyleRule("padding", "10px 20px")
    expect(component).toHaveStyleRule("background", "#5cdb95")
    expect(component).toHaveStyleRule("color", "#05385b")
  })
})
