import { SkillBuilders, DynamoDbPersistenceAdapter } from 'ask-sdk';
import * as Intents from './intents'
import * as Errors from './errors';
import * as Interceptors from './interceptors'
import { config } from './interceptors/config';

export const handler = SkillBuilders.custom()
  .addRequestHandlers(

    // built in intents
    Intents.LaunchRequestHandler,
    Intents.HelpIntentHandler,
    Intents.CancelIntentHandler,
    Intents.StopIntentHandler,
    Intents.SessionEnded,
    Intents.Fallback,

    // audio-player
    Intents.NextIntentHandler,
    Intents.PreviousIntentHandler,
    Intents.PauseIntentHandler,
    Intents.ResumeIntentHandler,

    // audio-player playback

    // custom
    Intents.ProtectIntentHandler,

  )
  .addErrorHandlers(
    Errors.Unknown,
  )
  .addRequestInterceptors(
    Interceptors.LoadPersistentAttributes,
    Interceptors.Localization,
  ).addResponseInterceptors(
    Interceptors.SavePersistentAttributes,
  )
  .withPersistenceAdapter(new DynamoDbPersistenceAdapter({
    createTable: true,
    tableName: config.dynamoDbTableName,
  }))
  .lambda();
