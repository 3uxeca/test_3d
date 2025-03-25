export type BarrierInfo = {
  pos: [number, number, number];
  rotY: number;
  color: string;
};

export const barrierData: Record<string, BarrierInfo[]> = {
  entranceQueue: [
    { pos: [26, -6, 3], rotY: Math.PI / 2, color: 'red' },
    { pos: [29, -6, 3], rotY: Math.PI / 2, color: 'red' },
    { pos: [32, -6, 3], rotY: Math.PI / 2, color: 'red' },
    { pos: [32, -6, 6], rotY: 0, color: 'red' },
    { pos: [32, -6, 9], rotY: 0, color: 'red' },
    { pos: [32, -6, 12], rotY: 0, color: 'red' },
    { pos: [35, -6, 12], rotY: Math.PI / 2, color: 'red' },
    { pos: [38, -6, 12], rotY: Math.PI / 2, color: 'red' },
  ],
  idCheckQueue: [
    { pos: [-37, -6, 0], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-34, -6, 0], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-37, -6, -11], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-34, -6, -11], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-37, -6, -22], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-34, -6, -22], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-37, -6, -32.5], rotY: Math.PI / 2, color: 'blue' },
    { pos: [-34, -6, -32.5], rotY: Math.PI / 2, color: 'blue' },
  ],
};
