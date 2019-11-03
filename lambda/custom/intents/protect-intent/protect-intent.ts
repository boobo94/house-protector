import * as  Alexa from 'ask-sdk';
import { AudioSkillController } from '../../lib/sounds-manager';
import {
  IsIntent,
  GetPersistentAttributes,
} from '../../lib/helpers';
import { IntentTypes } from '../../lib/types';

export const ProtectIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ProtectIntent);
  },
  async handle(handlerInput) {
    const { playbackInfo } = await GetPersistentAttributes(handlerInput);

    return AudioSkillController.playNext(handlerInput, playbackInfo.token);
  }
};
