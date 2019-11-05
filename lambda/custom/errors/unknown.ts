import * as  Alexa from 'ask-sdk'
import { GetRequestAttributes } from '../lib/helpers';
import { TranslationsKeys } from '../locales/translations';

export const Unknown: Alexa.ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(error)
    console.log(`Error handled: ${error.message}`);

    const { t } = GetRequestAttributes(handlerInput)
    const speechText = t(TranslationsKeys.GENERAL_ERROR)

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};
