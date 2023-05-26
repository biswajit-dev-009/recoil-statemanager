import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { counterState } from '../services/counter/counter.atom';

const Sizecontroller: React.FC = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const resetCounter = useResetRecoilState(counterState);

  return (
    <>
      <button onClick={()=> setCounter(counter+1)}>Increase Size</button>
      <button onClick={resetCounter}>Reset Size</button>
    </>
  )
}

export default Sizecontroller