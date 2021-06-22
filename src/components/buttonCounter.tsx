import { useState } from "react";

type ButtonProps = {
  text?: string,
  children?: string
}

export function Button(props: ButtonProps) {
  return (
    <button>{props.text || props.children || 'Default Value'}</button>
  )
}

export function ButtonCount() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <button onClick={increment}>{counter}</button>
  )
}
