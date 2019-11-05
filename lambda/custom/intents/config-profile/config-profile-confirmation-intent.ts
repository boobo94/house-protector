import * as  Alexa from 'ask-sdk';
import {
  IsIntent,
  GetPersistentAttributes,
  GetRequestAttributes,
} from '../../lib/helpers';
import { IntentTypes } from '../../lib/types';
import { TranslationsKeys } from '../../locales/translations';

export const ConfigProfileConfirmationIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ConfigProfileConfirmationIntent);
  },
  async handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);
    const { favoriteProfile } = await GetPersistentAttributes(handlerInput);

    const speechText = t(TranslationsKeys.CONFIG_PROFILE_CONFIRMATION, favoriteProfile);
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(t(TranslationsKeys.SKILL_NAME), speechText)
      .getResponse();
  }
};
