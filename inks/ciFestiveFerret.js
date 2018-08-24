// @flow

import Ink from 'modules/ink';

export default new Ink({
  type: 'Conductive Ink',
  name: 'FestiveFerret',
  organization: 'Voltera',

  lot: 'Conductor - 9002737695',
  useBy: '2018-06-03',
  storage: '4°C – 10°C',

  description: `
   Conductive silver ink for printing PCB traces and pads.
   When soldering to this ink, use flux and the supplied Voltera solder.
   Other solder alloys may cause silver scavenging.
  `,

  label: {
    type: 'CONDUCTOR',
    color: '#79ce00'
  },

  settings: {
    probing: {
      probePitch: { min: 0.1, max: 10, precision: 1, defaultValue: 5 }
    },
    dispensing: {
      trimLength: { min: 1, max: 9999, precision: 0, defaultValue: 45 },
      tracePadPenetration: { min: -5, max: 5, precision: 2, defaultValue: 0.15 },
      dispenseHeight: { min: 0.01, max: 1, precision: 2, defaultValue: 0.08 },
      feedrate: { min: 0, max: 600, precision: 0, defaultValue: 500 },
      passSpacing: { min: 0.1, max: 1, precision: 2, defaultValue: 0.15 },
      antiString: { min: 0.1, max: 5, precision: 1, defaultValue: 2 },
      kick: { min: 0.05, max: 2, precision: 2, defaultValue: 0.4 },
      softStart: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      softStop: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      rheologicalSetpoint: { min: 0, max: 1, precision: 2, defaultValue: 0.18 },
    }
  },

  heatingProfile: [
    { temperature: 210, duration: 27 * 60 },
    { temperature: 60, duration: 1 },
  ],

});
