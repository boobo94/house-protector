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

export const PreviousIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, AudioPlayerIntentTypes.Previous)
      || IsType(handlerInput, AudioPlayerControllerCommands.Previous);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    return AudioSkillController.playNext(handlerInput, persistentAttributes);
  }
}
