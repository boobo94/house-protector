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

export const NextIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, AudioPlayerIntentTypes.Next)
      || IsType(handlerInput, AudioPlayerControllerCommands.Next);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    return AudioSkillController.playImediatly(handlerInput, persistentAttributes);
  }
}
