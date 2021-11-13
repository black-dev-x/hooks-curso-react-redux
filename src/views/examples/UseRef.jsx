import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (value1, value2) => {
  if (value1.length === 0) return value2
  if (value2.length === 0) return value1
  return value1[0] + value2[0] + merge(value1.substring(1), value2.substring(1))
}
const UseRef = props => {
  const [mergedValue, setMergedValue] = useState('')
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const input1 = useRef(null)
  const input2 = useRef(null)
  const counter = useRef(0)
  useEffect(() => {
    counter.current++
    setMergedValue(merge(value1, value2))
  }, [value1, value2])
  useEffect(() => {
    input1.current.focus()
  }, [value2])
  useEffect(() => {
    input2.current.focus()
  }, [value1])
  return (
    <div className='UseRef'>
      <PageTitle title='Hook UseRef' subtitle='Returns a mutable object with the .current property!' />
      <SectionTitle title='Exercise #01' />
      <div className='center'>
        <div>
          <span className='text'>Value: </span>
          <span className='text'>{mergedValue} </span>
          <span className='text'>[</span>
          <span className='text red'>{counter.current}</span>
          <span className='text'>]</span>
        </div>
        <input ref={input1} type='text' className='input' value={value1} onChange={e => setValue1(e.target.value)} />
      </div>
      <SectionTitle title='Exercise - #02' />
      <div className='center'>
        <input ref={input2} type='text' className='input' value={value2} onChange={e => setValue2(e.target.value)} />
      </div>
    </div>
  )
}

export default UseRef
