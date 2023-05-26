import { selector } from 'recoil';
import { counterState } from './counter.atom';

export const charCountState = selector({
  key: 'counter-selector',
  get: ({get}) => {
    const counter = get(counterState) * 4;
    return counter;
  },
});