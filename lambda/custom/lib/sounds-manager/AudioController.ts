import { HandlerInput } from "ask-sdk-core";
import { Response } from 'ask-sdk-model';
import { AudioType } from "../interfaces";

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

  public playNext(handlerInput: HandlerInput, soundToken: string): Response {

    if (!soundToken) {
      // if the token is undefined, means the skill just started
      // play an initial sound
      // todo: implement this
      // return this.play(handlerInput, nextsound)
    }

    // todo: get the next song
    // todo: create a function which do that
    // return this.enqueue(handlerInput, sound, soundToken)

  }

  /**
   * Play previous sound will actually play the next one
   * The user must see an interaction, but doesn't care which is the next one
   * The skill is not an audio player
   * @param handlerInput
   * @param soundToken
   */
  public playPrevious(handlerInput: HandlerInput, soundToken: string): Response {
    return this.playNext(handlerInput, soundToken);
  }

  /**
   * Resume will actually play the next one
   * The user must see an interaction, but doesn't care which is the next one
   * The skill is not an audio player
   * @param handlerInput
   * @param soundToken
   */
  public resume(handlerInput: HandlerInput, soundToken: string): Response {
    return this.playNext(handlerInput, soundToken);
  }

}

