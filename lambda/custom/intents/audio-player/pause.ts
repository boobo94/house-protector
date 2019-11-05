
import { RequestHandler } from "ask-sdk-core";
import { AudioSkillController } from "../../lib/sounds-manager";
import {
  IsIntent,
  IsType,
} from "../../lib/helpers";
import {
  AudioPlayerIntentTypes,
  AudioPlayerControllerCommands,
} from "../../lib/types";

export const PauseIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, AudioPlayerIntentTypes.Pause)
      || IsType(handlerInput, AudioPlayerControllerCommands.Pause);
  },
  async handle(handlerInput) {
    return AudioSkillController.stop(handlerInput);
  }
};
