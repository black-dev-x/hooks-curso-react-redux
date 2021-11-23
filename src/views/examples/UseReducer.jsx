import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  number: 0,
  user: null,
  cart: [],
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add2ToNumber':
      return { ...state, number: state.number + 2 }
    default:
      return state
  }
}
const UseReducer = props => {
  return (
    <div className='UseReducer'>
      <PageTitle title='Hook UseReducer' subtitle='Another way to use state in functional components!' />
    </div>
  )
}

export default UseReducer
