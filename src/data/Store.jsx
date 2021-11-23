import React, { useState } from 'react'

const initialState = {
  number: 1234,
  text: 'Context API + Hooks',
  setNumber: () => {},
  setText: () => {}
}
export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)
  const updateValue = (key, value) => setState({ ...state, [key]: value })
  const setNumber = number => updateValue('number', number)
  const setText = text => updateValue('text', text)
  return <AppContext.Provider value={{ ...state, setNumber, setText }}>{props.children}</AppContext.Provider>
}

export default Store
