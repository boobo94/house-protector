import { RequestHandler } from "ask-sdk";
import { AudioPlayerPlaybackRequestTypes } from "../../../lib/types";
import {
  GetPersistentAttributes,
  IsType,
} from "../../../lib/helpers";

export const AudioPlayerPlaybackFinishedHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsType(handlerInput, AudioPlayerPlaybackRequestTypes.Finished);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    persistentAttributes.playbackInfo.nextStreamEnqueued = false;
    persistentAttributes.playbackInfo.offsetInMilliseconds = 0;

    return handlerInput.responseBuilder.getResponse();
  }
}
