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
import { ConfigDogConfirmationIntentHandler } from './config-dog-confirmation-intent';
import { DogType } from '../../lib/interfaces';

export const ChangeDogIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ChangeDogIntent);
  },
  async handle(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    const slots = GetSlotValues(handlerInput)
    persistentAttributes.favoriteDog = slots[SlotTypes.Dog].value as DogType;

    return ConfigDogConfirmationIntentHandler.handle(handlerInput);
  }
};
