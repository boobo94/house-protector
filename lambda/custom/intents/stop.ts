import { RequestHandler } from "ask-sdk";
import { IsIntent } from '../lib/helpers';
import { IntentTypes } from "../lib/types";
import { AudioSkillController } from "../lib/sounds-manager";

export const StopAudioHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Stop, IntentTypes.Cancel);
  },
  handle(handlerInput) {
    return AudioSkillController.stop(handlerInput);
  }
};
