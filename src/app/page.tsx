'use client';
import { RecoilRoot } from 'recoil';

import style from './page.module.css';
import Countershow from './components/Countershow';
import Fontdesc from './components/Fontdesc';
import Sizecontroller from './components/Sizecontroller';

export default function Home() {
  return (
    <RecoilRoot>
      <div className={style.section}>
        <Countershow />
        <Fontdesc />
        <Sizecontroller />
      </div>
    </RecoilRoot>
  );
}
