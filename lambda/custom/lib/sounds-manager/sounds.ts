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
        token: `${SoundTokens.PROFILES}_default_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/profile-tv1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/footsteps1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/keys1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/keys2.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_5`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/talking1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_6`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/tv2.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_7`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/keys3.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_8`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/phone-ringing1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_9`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/creaking-door-spooky.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_10`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/talking2.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_default_11`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/ductape1.mp3'
      },
    ] as AudioType[],

    bedroom: [
      {
        token: `${SoundTokens.PROFILES}_bedroom_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/footsteps1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_bedroom_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/creaking-door-spooky.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_bedroom_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/toilet-in-the-bathroom.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_bedroom_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/snoring1.mp3'
      },
    ] as AudioType[],

    kitchen: [
      {
        token: `${SoundTokens.PROFILES}_kitchen_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/footsteps1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/scratching-dishes1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/creaking-door-spooky.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/ductape1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_5`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/cooking-steak-on-a-grill.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_6`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/plastic-bag-crinkling.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_7`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/metal-nails-falling.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_8`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/glass-breaking.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_9`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/chair-scraping-on-tiles.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_10`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/metal-cup-dropping.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_11`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/rubbing-plastic.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_kitchen_12`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/toothpicks-being-shaken.mp3'
      },
    ] as AudioType[],

    living: [
      {
        token: `${SoundTokens.PROFILES}_living_1`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/profile-tv1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_2`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/footsteps1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_3`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/keys1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_4`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/keys2.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_5`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/talking1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_6`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/tv2.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_7`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/keys3.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_8`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/phone-ringing1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_9`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/creaking-door-spooky.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_10`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/talking2.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_11`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/ductape1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_12`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/ball-against-wall.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_13`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/typing-computer1.mp3'
      },
      {
        token: `${SoundTokens.PROFILES}_living_14`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/paper-thrown-in-the-air.mp3'
      },
    ] as AudioType[],
  },
  pauses: {
    initial: [
      {
        token: `${SoundTokens.PAUSE_INITIAL}_silent_initial`,
        url: 'https://house-protector-alexa-skill.s3-eu-west-1.amazonaws.com/pause-5s.mp3'
      }
    ] as AudioType[],

    generalBarks: getPauses(SoundTokens.PAUSE_GENERAL_BARKS),
    generalProfiles: getPauses(SoundTokens.PAUSE_GENERAL_PROFILES),

  }
}
