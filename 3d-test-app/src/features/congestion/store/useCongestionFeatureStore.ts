import { create } from 'zustand';

import {
  CongestionFeatureActions,
  CongestionFeatureState,
} from '../model/congestionFeatureModel';

const initialState: CongestionFeatureState = {
  selectedZone: '신분 검색장',
};

const useCongestionFeatureStore = create<
  CongestionFeatureState & CongestionFeatureActions
>((set) => ({
  ...initialState,
  setSelectedZone: (zone: string) => set({ selectedZone: zone }),
}));

export default useCongestionFeatureStore;
