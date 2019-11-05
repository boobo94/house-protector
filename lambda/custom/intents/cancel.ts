import { RequestHandler } from "ask-sdk";
import { IsIntent, GetSessionAttributes } from '../lib/helpers';
import { IntentTypes, States } from "../lib/types";

export const CancelIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    if (!handlerInput.requestEnvelope.session)
      return false

    const { state } = GetSessionAttributes(handlerInput)

    return IsIntent(handlerInput, IntentTypes.Stop, IntentTypes.Cancel) && (state === States.Protect);
  },
  async handle(handlerInput) {
    return handlerInput.responseBuilder
      .withShouldEndSession(true)
      .getResponse()
  }
};
