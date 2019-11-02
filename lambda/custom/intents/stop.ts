import { RequestHandler } from "ask-sdk";
import { IsIntent } from '../lib/helpers';
import { IntentTypes } from "../lib/types";
import { CancelIntentHandler } from "./cancel";

export const StopIntentHandler: RequestHandler = {
  canHandle(handlerInput) {
    return IsIntent(handlerInput, IntentTypes.Stop);
  },
  handle(handlerInput) {
    return CancelIntentHandler.handle(handlerInput);
  }
};
