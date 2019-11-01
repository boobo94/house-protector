import { RequestHandler } from "ask-sdk";
import { GetRequestAttributes, IsIntent } from '../lib/helpers';
import { IntentTypes } from "../lib/types";

export const CancelIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Cancel);
  },
  handle(handlerInput) {
    const { t } = GetRequestAttributes(handlerInput)
    const speechText = t("GOODBYE_MSG")

    return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(true)
      .getResponse();
  }
};
