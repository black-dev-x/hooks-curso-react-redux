import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = props => {
  const data = useContext(DataContext)
  const app = useContext(AppContext)
  const setNumber = n => data.setState({ ...data, number: n })
  return (
    <div className='UseContext'>
      <SectionTitle title='Exercise #01' />
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
      <SectionTitle title='Exercise #02' />
      <div className='center'>
        <span className='text'>{app.text}</span>
        <span className='text'>{app.number}</span>
        <div>
          <button className='btn' onClick={() => app.setNumber(app.number - 1)}>
            -1
          </button>
        </div>
        <div>
          <button className='btn' onClick={() => app.setNumber(app.number + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseContext
