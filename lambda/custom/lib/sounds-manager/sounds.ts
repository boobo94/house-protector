import { AudioType } from "../interfaces";

const pauses: AudioType[] = [

];

export const sounds = {
  initial: [

  ] as AudioType[],
  barks: {
    labrador: [

    ] as AudioType[],

    doberman: [

    ] as AudioType[],

    small: [

    ] as AudioType[],

    germanShepard: [

    ] as AudioType[],
  },
  profiles: {
    default: [] as AudioType[],

    bathroom: [] as AudioType[],

    kitchen: [] as AudioType[],

    livingroom: [] as AudioType[],
  },
  pauses: {
    initial: [] as AudioType[],

    generalBarks: pauses,
    generalProfiles: pauses,

  }
}