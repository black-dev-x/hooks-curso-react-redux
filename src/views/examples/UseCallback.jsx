import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = _ => {
  const [count, setCount] = useState(0)
  const inc = useCallback(delta => setCount(count => count + delta), [setCount])
  return (
    <div className='UseCallback'>
      <PageTitle title='Hook UseCallback' subtitle='Returns a memoized function!' />
      <div className='center'>
        <span className='text'>{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  )
}

export default UseCallback
