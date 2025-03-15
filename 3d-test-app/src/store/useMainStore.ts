import { MainStatus } from "@/models/mainModel";
import { create } from "zustand";

interface MainState {
  isButtonPressed: MainStatus["isButtonPressed"];
  isFinished: MainStatus["isFinished"];
}

type Actions = {
  setButtonPressed: (pressed: boolean) => void;
  setFinished: (finished: boolean) => void;
};

const initialState: MainState = {
  isButtonPressed: false,
  isFinished: false,
};

export const useMainStore = create<MainState & Actions>((set) => ({
  ...initialState,
  setButtonPressed: (pressed) => set({ isButtonPressed: pressed }),
  setFinished: (finished) => set({ isFinished: finished }),
}));
