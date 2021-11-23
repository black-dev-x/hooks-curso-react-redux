import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  number: 0,
  user: null,
  cart: [],
  products: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add2ToNumber':
      return { ...state, number: state.number + 2 }
    case 'login':
      return { ...state, user: { name: action.payload } }
    default:
      return state
  }
}
const UseReducer = _ => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='UseReducer'>
      <PageTitle title='Hook UseReducer' subtitle='Another way to use state in functional components!' />
      <div className='center'>
        <span className='text'>{state.user ? state.user.name : 'No user logged in'}</span>
        <span className='text'></span>
        <span className='text'>{state.number}</span>
        <button className='btn' onClick={() => dispatch({ type: 'login', payload: 'Black Devx' })}>
          Login
        </button>
        <button className='btn' onClick={() => dispatch({ type: 'add2ToNumber' })}>
          +2
        </button>
      </div>
    </div>
  )
}

export default UseReducer
