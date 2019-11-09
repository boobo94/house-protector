import * as  Alexa from 'ask-sdk';
import { AudioSkillController } from '../../lib/sounds-manager';
import {
  IsIntent,
  GetPersistentAttributes,
  GetSessionAttributes,
} from '../../lib/helpers';
import { IntentTypes, States } from '../../lib/types';

export const ProtectIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ProtectIntent);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    // reset token to start with the initial sound
    persistentAttributes.playbackInfo.token = null;

    const attributes = GetSessionAttributes(handlerInput);
    attributes.state = States.Protect;

    return AudioSkillController.playNext(handlerInput, persistentAttributes);
  }
};
