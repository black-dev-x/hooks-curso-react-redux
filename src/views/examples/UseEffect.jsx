import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'

const factorialOf = number => {
  if (number < 0) return 'Invalid'
  if (number === 0) return 1
  return number * factorialOf(number - 1)
}
const isEven = number => !number % 2
const UseEffect = _ => {
  const [number, setNumber] = useState(1)
  const [factorial, setFactorial] = useState(1)
  const [even, setEven] = useState(false)
  useEffect(() => {
    setFactorial(factorialOf(number))
    setEven(isEven(number))
  }, [number])

  return (
    <div className='UseEffect'>
      <PageTitle title='Hook UseEffect' subtitle='Collateral Effects!' />
      <div className='center'>
        <SectionTitle title='Exercise #01' />
        <div>
          <span className='text'>Factorial: </span>
          <span className='text red'>{factorial}</span>
        </div>
        <input type='number' className='input' value={number} onChange={e => setNumber(+e.target.value)} />
        <SectionTitle title='Exercise #02' />
        <div>
          <span className='text'>The number is: </span>
          <span className='text red'>{even ? 'Even' : 'Odd'}</span>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
