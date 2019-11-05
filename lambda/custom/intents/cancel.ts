import { RequestHandler } from "ask-sdk";
import { GetRequestAttributes, IsIntent } from '../lib/helpers';
import { IntentTypes } from "../lib/types";
import { TranslationsKeys } from "../locales/translations";

export const CancelIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Cancel);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput)
    const speechText = t(TranslationsKeys.GOODBYE)

    return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(true)
      .getResponse();
  }
};
