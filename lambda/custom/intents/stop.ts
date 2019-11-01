import { RequestHandler } from "ask-sdk";
import { IsIntent } from '../lib/helpers';
import { IntentTypes } from "../lib/types";

export const StopIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Stop);
  },
  handle(handlerInput) {
    return StopIntentHandler.handle(handlerInput);
  }
};
