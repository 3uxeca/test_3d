import { create } from 'zustand';

import { MainStatus } from '@/models/mainModel';

interface MainState {
  isButtonPressed: MainStatus['isButtonPressed'];
  isFinished: MainStatus['isFinished'];
  isReset: MainStatus['isReset'];
}

type Actions = {
  setButtonPressed: (pressed: boolean) => void;
  setFinished: (finished: boolean) => void;
  setReset: (reset: boolean) => void;
};

const initialState: MainState = {
  isButtonPressed: false,
  isFinished: false,
  isReset: false,
};

export const useMainStore = create<MainState & Actions>((set) => ({
  ...initialState,
  setButtonPressed: (pressed) => set({ isButtonPressed: pressed }),
  setFinished: (finished) => set({ isFinished: finished }),
  setReset: (reset) => set({ isReset: reset }),
}));
