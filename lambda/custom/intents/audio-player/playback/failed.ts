import { RequestHandler } from "ask-sdk";
import { IsType } from "../../../lib/helpers";
import { AudioPlayerPlaybackRequestTypes } from "../../../lib/types";

export const AudioPlayerFailedHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsType(handlerInput, AudioPlayerPlaybackRequestTypes.Failed);
  },
  handle(handlerInput) {
    console.log('playback failed')

    return handlerInput.responseBuilder.getResponse();
  }
}
