import { HandlerInput } from "ask-sdk-core";
import { Response } from 'ask-sdk-model';
import { sounds } from "./sounds";
import { SoundTokens } from "./interfaces";
import {
  AudioType,
  PersistentAttributes,
} from "../interfaces";

export class AudioController {

  /**
   * Play the sound
   * @param {HandlerInput} handlerInput
   * @param {AudioFile} sound Sound which will be played
   */
  public play(handlerInput: HandlerInput, sound: AudioType): Response {
    const playBehavior = "REPLACE_ALL";

    return handlerInput.responseBuilder
      .addAudioPlayerPlayDirective(playBehavior, sound.url, sound.token, 0)
      .getResponse();
  }

  /**
   * Enqueues will play the next song
   * It's used to keep the skill into a infinite loop
   * @param {HandlerInput} handlerInput
   * @param {AudioType} sound
   * @param {string} expectedPreviousToken
   */
  public enqueue(handlerInput: HandlerInput, sound: AudioType, expectedPreviousToken: string): Response {
    const playBehavior = "ENQUEUE";

    return handlerInput.responseBuilder
      .addAudioPlayerPlayDirective(playBehavior, sound.url, sound.token, 0, expectedPreviousToken)
      .getResponse();
  }

  /**
   * Stops playing sounds
   * @param {HandlerInput} handlerInput
   */
  public stop(handlerInput: HandlerInput): Response {
    return handlerInput.responseBuilder
      .addAudioPlayerStopDirective()
      .getResponse();
  }

  public playNext(handlerInput: HandlerInput, persistentAttributes: PersistentAttributes): Response {
    const { favoriteProfile, favoriteDog, playbackInfo } = persistentAttributes;
    const soundToken = playbackInfo.token;
    const nextSound = this.findNextSound(soundToken, favoriteProfile, favoriteDog);

    // if the token is undefined, means the skill just started
    if (!soundToken) {
      // play an initial sound
      return this.play(handlerInput, nextSound);
    }

    return this.enqueue(handlerInput, nextSound, soundToken)
  }

  /**
   * Play previous sound will actually play the next one
   * The user must see an interaction, but doesn't care which is the next one
   * The skill is not an audio player
   * @param handlerInput
   * @param persistentAttributes
   */
  public playPrevious(handlerInput: HandlerInput, persistentAttributes: PersistentAttributes): Response {
    return this.playNext(handlerInput, persistentAttributes);
  }

  /**
   * Resume will actually play the next one
   * The user must see an interaction, but doesn't care which is the next one
   * The skill is not an audio player
   * @param handlerInput
   * @param persistentAttributes
   */
  public resume(handlerInput: HandlerInput, persistentAttributes: PersistentAttributes): Response {
    return this.playNext(handlerInput, persistentAttributes);
  }

  /**
   * Get the next sound to be played based on user preferences
   * @param token The previous token of played sound
   * @param favoriteProfile The profile type of user
   * @param favoriteDog The favorite dog selected by user
   */
  private findNextSound(token: string, favoriteProfile: string, favoriteDog: string): AudioType {
    const currentSoundTokenType = token.split('_')[0];

    switch (currentSoundTokenType) {
      case SoundTokens.BARKS:
        return this.getOneSoundRandomly(sounds.pauses.generalBarks);
      case SoundTokens.PAUSE_GENERAL_BARKS:
        return this.getOneSoundRandomly(sounds.profiles[favoriteProfile]);
      case SoundTokens.PROFILES:
        return this.getOneSoundRandomly(sounds.pauses.generalProfiles);
      case SoundTokens.PAUSE_GENERAL_PROFILES:
      case SoundTokens.PAUSE_INITIAL:
        return this.getOneSoundRandomly(sounds.barks[favoriteDog]);
      case SoundTokens.INITIAL:
        return this.getOneSoundRandomly(sounds.pauses.initial);
      default:
        return this.getOneSoundRandomly(sounds.initial);
    }

  }

  /**
   * Get one sound from an array passed
   * @param items Array of sounds
   */
  private getOneSoundRandomly(items: AudioType[]): AudioType {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
  }

}

