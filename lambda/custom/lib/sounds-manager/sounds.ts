import { AudioType } from "../interfaces";
import { SoundTokens } from "./interfaces";

const getPauses = (token): AudioType[] => [
  {
    token: `${token}_pause1`,
    url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/pause-45s.mp3'
  },
  {
    token: `${token}_pause2`,
    url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/pause-1m.mp3'
  },
  {
    token: `${token}_pause3`,
    url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/pause-2m30s.mp3'
  },
  {
    token: `${token}_pause4`,
    url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/pause-5m.mp3'
  },
]

export const sounds = {
  initial: [
    {
      token: `${SoundTokens.BARKS}_initial_1`,
      url: ''
    }
  ] as AudioType[],
  barks: {
    labrador: [
      {
        token: `${SoundTokens.BARKS}_labrador_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/dog-whining.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_labrador_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/labrador-barking.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_labrador_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/growling-snarling.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_labrador_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/devil-dog-crazy.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_labrador_5`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/dog-growling.mp3'
      },
    ] as AudioType[],

    doberman: [
      {
        token: `${SoundTokens.BARKS}_doberman_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/dog-whining.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_doberman_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/growling-snarling.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_doberman_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/devil-dog-crazy.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_doberman_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/dog-growling.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_doberman_5`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/doberman-bark.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_doberman_6`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/doberman-bark2.mp3'
      },
    ] as AudioType[],

    small: [
      {
        token: `${SoundTokens.BARKS}_small-dog_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/small-dog-bark1.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_small-dog_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/small-dog-bark2.mp3'
      },
    ] as AudioType[],

    germanShepard: [
      {
        token: `${SoundTokens.BARKS}_german-shepard_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/dog-whining.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_german-shepard_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/growling-snarling.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_german-shepard_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/devil-dog-crazy.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_german-shepard_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/dog-growling.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_german-shepard_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/german-shephard-bark1.mp3'
      },
      {
        token: `${SoundTokens.BARKS}_german-shepard_5`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/german-shepard-bark2.mp3'
      },
    ] as AudioType[],
  },
  profiles: {
    default: [
      {
        token: `${SoundTokens.BARKS}_default_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/profile-tv1.mp3'
      }
    ] as AudioType[],

    bedroom: [
      {
        token: `${SoundTokens.BARKS}_labrador_42`,
        url: ''
      }
    ] as AudioType[],

    kitchen: [
      {
        token: `${SoundTokens.BARKS}_labrador_46`,
        url: ''
      }
    ] as AudioType[],

    living: [
      {
        token: `${SoundTokens.BARKS}_living_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/profile-tv1.mp3'
      }
    ] as AudioType[],
  },
  pauses: {
    initial: [
      {
        token: `${SoundTokens.BARKS}_silent_initial`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/pause-5s.mp3'
      }
    ] as AudioType[],

    generalBarks: getPauses(SoundTokens.PAUSE_GENERAL_BARKS),
    generalProfiles: getPauses(SoundTokens.PAUSE_GENERAL_PROFILES),

  }
}
