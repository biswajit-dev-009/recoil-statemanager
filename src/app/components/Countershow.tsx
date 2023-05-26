import React from 'react'
import { useRecoilValue } from 'recoil';

import { counterState } from '../services/counter/counter.atom';

const Countershow: React.FC = () => {
  const counterVal = useRecoilValue(counterState);

  return (
    <h1>My app counter is: {counterVal}</h1>
  )
}

export default Countershow