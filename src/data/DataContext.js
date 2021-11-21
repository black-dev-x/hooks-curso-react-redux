import React from 'react'

export const initialState = {
  text: 'Context API...',
  number: 0,
  setState: () => {}
}

const dataContext = React.createContext(initialState)

export default dataContext
