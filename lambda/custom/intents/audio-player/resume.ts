import { RequestHandler } from "ask-sdk-core";
import { AudioSkillController } from "../../lib/sounds-manager";

import {
  GetPersistentAttributes,
  IsIntent,
  IsType,
} from "../../lib/helpers";
import {
  AudioPlayerIntentTypes,
  AudioPlayerControllerCommands,
} from "../../lib/types";

export const ResumeIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, AudioPlayerIntentTypes.Resume)
      || IsType(handlerInput, AudioPlayerControllerCommands.Play);
  },
  async handle(handlerInput) {
    const { playbackInfo } = await GetPersistentAttributes(handlerInput);

    return AudioSkillController.resume(handlerInput, playbackInfo.token);
  }
}
