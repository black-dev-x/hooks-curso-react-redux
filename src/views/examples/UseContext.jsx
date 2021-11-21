import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = props => {
  const data = useContext(DataContext)
  const setNumber = n => data.setState({ ...data, number: n })
  return (
    <div className='UseContext'>
      <PageTitle title='Hook UseContext' subtitle='Acepts a context object and returns the current value from that context!' />
      <div className='center'>
        <span className='text'>{data.text}</span>
        <div>
          <button className='btn' onClick={() => setNumber(data.number - 1)}>
            -
          </button>
          <span className='text'>{data.number}</span>
          <button className='btn' onClick={() => setNumber(data.number + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseContext
