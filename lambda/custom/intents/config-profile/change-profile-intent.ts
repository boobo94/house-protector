import * as Alexa from 'ask-sdk';
import {
  IsIntent,
  GetPersistentAttributes,
  GetSlotValues,
} from '../../lib/helpers';
import {
  IntentTypes,
  SlotTypes,
} from '../../lib/types';
import { ProfileType } from '../../lib/interfaces';
import { ConfigProfileConfirmationIntentHandler } from './config-profile-confirmation-intent';

export const ChangeProfileIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ChangeDogIntent);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    const slots = GetSlotValues(handlerInput)
    persistentAttributes.favoriteProfile = slots[SlotTypes.Profile].value as ProfileType;

    return ConfigProfileConfirmationIntentHandler.handle(handlerInput);
  }
};
