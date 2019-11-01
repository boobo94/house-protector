import * as  Alexa from 'ask-sdk';
import { GetRequestAttributes, IsIntent } from '../../lib/helpers';
import { IntentTypes } from '../../lib/types';

export const ProtectIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.ProtectIntent);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput)
    let speechText = t("SKILL_NAME")
    // todo: implement this intent
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};
