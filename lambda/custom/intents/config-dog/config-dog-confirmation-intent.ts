import * as  Alexa from 'ask-sdk';
import {
  IsIntent,
  GetPersistentAttributes,
  GetRequestAttributes,
} from '../../lib/helpers';
import { IntentTypes } from '../../lib/types';
import { TranslationsKeys } from '../../locales/translations';

export const ConfigDogConfirmationIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ConfigDogConfirmationIntent);
  },
  async handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);
    const { favoriteDog } = await GetPersistentAttributes(handlerInput);

    const speechText = t(TranslationsKeys.CONFIG_DOG_CONFIRMATION, favoriteDog);
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(t(TranslationsKeys.SKILL_NAME), speechText)
      .getResponse();
  }
};
