import * as  Alexa from 'ask-sdk'
import { GetRequestAttributes, GetSessionAttributes } from '../lib/helpers';
import { RequestTypes } from '../lib/types';
import { ProtectIntentHandler } from './protect-intent';
import { TranslationsKeys } from '../locales/translations';

export const LaunchRequestHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === RequestTypes.Launch;
  },
  handle(handlerInput) {
    const { firstTimeUser } = GetSessionAttributes(handlerInput);
    if (!firstTimeUser) {
      return ProtectIntentHandler.handle(handlerInput);
    }

    const { t } = GetRequestAttributes(handlerInput)
    let speechText = `${t(TranslationsKeys.WELCOME)} ${t(TranslationsKeys.HELP)}`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};
