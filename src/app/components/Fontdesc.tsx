import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../services/counter/counter.selector';

const Fontdesc: React.FC = () => {
  const count = useRecoilValue(charCountState);

  return (
    <>
      <h4>Font size of my emoji is: {count}px</h4>
      <p style={{ fontSize: count }}>😎</p>
    </>
  )
}

export default Fontdesc