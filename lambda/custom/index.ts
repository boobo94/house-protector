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
    Intents.StopAudioHandler,
    Intents.SessionEnded,
    Intents.Fallback,

    // audio-player playback

    Intents.AudioPlayerPlaybackStartedHandler,
    Intents.AudioPlayerPlaybackFinishedHandler,
    Intents.AudioPlayerPlaybackStoppedHandler,
    Intents.AudioPlayerPlaybackNearlyFinishedHandler,
    Intents.AudioPlayerFailedHandler,

    // audio-player
    Intents.ResumeIntentHandler,
    Intents.PauseIntentHandler,
    Intents.NextIntentHandler,
    Intents.PreviousIntentHandler,

    // custom
    Intents.ProtectIntentHandler,
    Intents.ConfigDogConfirmationIntentHandler,
    Intents.ChangeDogIntentHandler,
    Intents.ConfigProfileConfirmationIntentHandler,
    Intents.ChangeProfileIntentHandler,

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
