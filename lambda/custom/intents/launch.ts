import * as  Alexa from 'ask-sdk'
import { GetRequestAttributes, GetSessionAttributes } from '../lib/helpers';
import { RequestTypes } from '../lib/types';
import { ProtectIntentHandler } from './protect-intent';

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
        let speechText = t("WELCOME_MSG")

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
