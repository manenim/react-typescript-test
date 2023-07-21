import React from 'react'
import {Child} from './Child'

const Parent = () => {
  return (
      <div>
          <Child color="green" onClick={() => console.log('clicked')}> lkjhfgjhg </Child>
    </div>
  )
}

export default Parent