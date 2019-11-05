import { RequestHandler } from 'ask-sdk';
import { GetRequestAttributes, IsIntent } from '../lib/helpers';
import { IntentTypes } from '../lib/types';
import { TranslationsKeys } from '../locales/translations';

export const HelpIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Help)
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput)
    const speechText = t(TranslationsKeys.HELP)

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(t(TranslationsKeys.SKILL_NAME), speechText)
      .getResponse();
  }
};
