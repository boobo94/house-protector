import { RequestHandler } from "ask-sdk";
import { AudioPlayerPlaybackRequestTypes } from "../../../lib/types";
import {
  GetPersistentAttributes,
  IsType,
  GetToken,
} from "../../../lib/helpers";

export const AudioPlayerPlaybackStartedHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsType(handlerInput, AudioPlayerPlaybackRequestTypes.Started);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    // prepare the audio token
    persistentAttributes.playbackInfo.token = GetToken(handlerInput);

    return handlerInput.responseBuilder.getResponse();
  }
}
