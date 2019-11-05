import { RequestHandler } from "ask-sdk";
import { AudioPlayerPlaybackRequestTypes } from "../../../lib/types";
import {
  GetPersistentAttributes,
  IsType,
  GetOffset,
  GetToken,
} from "../../../lib/helpers";

export const AudioPlayerPlaybackStoppedHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsType(handlerInput, AudioPlayerPlaybackRequestTypes.Stopped);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    persistentAttributes.playbackInfo.token = GetToken(handlerInput);
    persistentAttributes.playbackInfo.offsetInMilliseconds = GetOffset(handlerInput);

    return handlerInput.responseBuilder.getResponse();
  }
}
