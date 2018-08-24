// @flow

import Ink from 'modules/ink';
import path from 'path';
import { resourcesPath } from 'process';

// Use svgs for original inks
const inksResourceDir = process.env.NODE_ENV === 'production' ?
  `${resourcesPath}/procedures/print/inks` :
  'features/procedures/print/settings/inks'
;

export default new Ink({
  type: 'Flexible Conductive Ink',
  name: 'OriginalFlex',
  organization: 'Voltera',

  lot: 'N/A',
  useBy: '2018-03-09',
  storage: '4°C – 10°C',

  description: `
    Use this lot for all flexible conductive ink (Flex Conductor) shipped
    before October 2017.
    Solder joints will be brittle, use adhesive or epoxy to secure components.
  `,

  label: {
    imgPath: path.join(inksResourceDir, 'fiOriginalFlex.svg')
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
      passSpacing: { min: 0.1, max: 1, precision: 2, defaultValue: 0.18 },
      antiString: { min: 0.1, max: 5, precision: 1, defaultValue: 2 },
      kick: { min: 0.05, max: 2, precision: 2, defaultValue: 0.4 },
      softStart: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      softStop: { min: 0, max: 1, precision: 2, defaultValue: 0.05 },
      rheologicalSetpoint: { min: 0, max: 1, precision: 2, defaultValue: 0.18 },
    }
  },

  heatingProfile: [
    { temperature: 160, duration: 15 * 60 },
    { temperature: 60, duration: 1 },
  ],
});
