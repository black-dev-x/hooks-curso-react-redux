import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = props => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Controlled Component')
  return (
    <div className='UseState'>
      <PageTitle title='Hook UseState' subtitle='State in functional components' />
      <SectionTitle title='Exercise #01' />
      <div className='center'>
        <span className='text'>{counter}</span>
        <div>
          <button className='btn' onClick={() => setCounter(counter - 1)}>
            -1
          </button>
          <button className='btn' onClick={() => setCounter(_ => 0)}>
            Reset
          </button>
          <button className='btn' onClick={() => setCounter(counter + 1)}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title='Exercise #02' />
      <div className='center'>
        <input type='text' className='input' value={name} onChange={e => setName(e.target.value)} />
      </div>
    </div>
  )
}

export default UseState
