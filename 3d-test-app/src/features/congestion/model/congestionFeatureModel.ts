export interface CongestionFeatureState {
  selectedZone: string;
}

export interface CongestionFeatureActions {
  setSelectedZone: (zone: string) => void;
}
