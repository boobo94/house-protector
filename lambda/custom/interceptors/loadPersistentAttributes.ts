import { RequestInterceptor } from "ask-sdk-core";
import { GetPersistentAttributes, GetSessionAttributes } from "../lib/helpers";
import { PersistentAttributes, ProfileType, DogType } from '../lib/interfaces';
import { config } from "./config";


export const LoadPersistentAttributes: RequestInterceptor = {
  async process(handlerInput) {
    const persistentAttributes = await GetPersistentAttributes(handlerInput);

    // set default persistent attributes if we don't have any
    // or if the version doesn't match
    const hasPersistentAttributes = Object.keys(persistentAttributes).length > 0;
    if (!hasPersistentAttributes || persistentAttributes.version !== config.version) {
      handlerInput.attributesManager.setPersistentAttributes({
        version: config.version,
        favoriteProfile: ProfileType.DEFAULT,
        favoriteDog: DogType.DOBERMAN,
        playbackInfo: {
          token: '',
          offsetInMilliseconds: 0,
          nextStreamEnqueued: false,
        },
        // Add here any extra attributes
      } as PersistentAttributes);
    }

    // if the user didn't have any persistent attributes, it must be the first time he open the skill
    const hasSession = handlerInput.requestEnvelope.session != null;
    if (hasSession) {
      const sessionAttributes = GetSessionAttributes(handlerInput);

      sessionAttributes.firstTimeUser = !hasPersistentAttributes;
    }
  },
};
