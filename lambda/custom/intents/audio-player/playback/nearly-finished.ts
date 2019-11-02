import { RequestHandler } from "ask-sdk";
import { IsType, GetPersistentAttributes } from "../../../lib/helpers";
import { AudioPlayerPlaybackRequestTypes } from "../../../lib/types";
import { AudioSkillController } from "../../../lib/sounds-manager";

export const AudioPlayerPlaybackNearlyFinishedHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsType(handlerInput, AudioPlayerPlaybackRequestTypes.NearlyFinished);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    persistentAttributes.playbackInfo.nextStreamEnqueued = true;

    return AudioSkillController.playNext(handlerInput, persistentAttributes.playbackInfo.token);
  }
}
