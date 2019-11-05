import { SlotConfirmationStatus } from "ask-sdk-model";

export enum IntentTypes {
  Help = "AMAZON.HelpIntent",
  Stop = "AMAZON.StopIntent",
  Cancel = "AMAZON.CancelIntent",
  Fallback = "AMAZON.FallbackIntent",
  Yes = "AMAZON.YesIntent",
  No = "AMAZON.NoIntent",
  Pause = "AMAZON.PauseIntent",

  ProtectIntent = "protectIntent",
  ChangeDogIntent = "changeDogIntent",
  ConfigDogConfirmationIntent = "configDogConfirmationIntent",

  ChangeProfileIntent = "changeProfileIntent",
  ConfigProfileConfirmationIntent = "configProfileConfirmationIntent",
}

export enum RequestTypes {
  Launch = "LaunchRequest",
  Intent = "IntentRequest",
  SessionEnded = "SessionEndedRequest",
}

export enum States {
  ConfigDog = "configDog",
  ConfigProfile = "configProfile",
}

export enum Errors {
}

export enum SlotTypes {
  Dog = 'dog',
  Profile = 'profile',
}

export type SlotValue = {
  name: string;
  value: string
  isMatch: boolean;
  confirmationStatus: SlotConfirmationStatus;
}

export type SlotValues = {
  [key: string]: SlotValue | undefined;

}

export enum AudioPlayerIntentTypes {
  Pause = "AMAZON.PauseIntent",
  Resume = "AMAZON.ResumeIntent",
  Next = "AMAZON.NextIntent",
  Previous = "AMAZON.PreviousIntent",
}

export enum AudioPlayerControllerCommands {
  Next = "PlaybackController.NextCommandIssued",
  Previous = "PlaybackController.PreviousCommandIssued",
  Pause = "PlaybackController.PauseCommandIssued",
  Play = "PlaybackController.PlayCommandIssued",
}

export enum AudioPlayerPlaybackRequestTypes {
  Failed = "AudioPlayer.PlaybackFailed",
  Finished = "AudioPlayer.PlaybackFinished",
  NearlyFinished = "AudioPlayer.PlaybackNearlyFinished",
  Started = "AudioPlayer.PlaybackStarted",
  Stopped = "AudioPlayer.PlaybackStopped",
}
