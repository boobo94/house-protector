import { RequestHandler } from "ask-sdk-core";
import { IsIntent, GetRequestAttributes } from "../lib/helpers";
import { IntentTypes } from "../lib/types";
import { TranslationsKeys } from "../locales/translations";

export const Fallback: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Fallback);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput);

    const speechText = t(TranslationsKeys.UNEXPECTED_ERROR);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};
