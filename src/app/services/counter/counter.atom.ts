import { atom } from 'recoil';

export const counterState = atom({
  key: 'counter-state',
  default: 10,
});
