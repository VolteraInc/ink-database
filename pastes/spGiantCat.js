// @flow

import Ink from 'modules/ink';

export default new Ink({
  type: 'Solder Paste',
  name: 'GiantCat',
  organization: 'Voltera',

  lot: 'Paste - 4002326808',
  useBy: '2019-03-22',
  storage: '4°C – 10°C',

  description: `
    Standard solder paste for use with both pre­fabbed and V­-One-printed PCBs
  `,

  label: {
    type: 'SOLDER PASTE',
    color: '#ff770b'
  },

  settings: {
    probing: {
      probePitch: { min: 0.1, max: 10, precision: 1, defaultValue: 5 }
    },
    dispensing: {
      trimLength: { min: 1, max: 9999, precision: 0, defaultValue: 45 },
      tracePadPenetration: { min: -5, max: 5, precision: 2, defaultValue: 0.15 },
      dispenseHeight: { min: 0.01, max: 1, precision: 2, defaultValue: 0.14 },
      feedrate: { min: 0, max: 900, precision: 0, defaultValue: 600 },
      passSpacing: { min: 0.1, max: 1, precision: 2, defaultValue: 0.15 },
      antiString: { min: 0.1, max: 5, precision: 1, defaultValue: 0.1 },
      kick: { min: 0.05, max: 2, precision: 2, defaultValue: 0.3 },
      softStart: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      softStop: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      rheologicalSetpoint: { min: 0, max: 1, precision: 2, defaultValue: 0.16 },
    }
  },

  heatingProfile: [
    { temperature: 140, duration: 45 },
    { temperature: 190, duration: 30 },
    { temperature: 60, duration: 1 },
  ],
});
