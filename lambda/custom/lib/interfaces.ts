import { States } from "./types";

export interface RequestAttributes {
  /**
   * Searches for the translation of the given key
   * @param key
   * @param args
   */
  t(key: string, ...args: any[]): any;

  tr(key: string): string;

}

export interface SessionAttributes {
  state: States
  firstTimeUser: boolean;

}

export interface PersistentAttributes {
  /**
   * The version of the attributes. If the version doesn't match with the `VERSION` in `lib/constants.ts`,
   * the attributes will be reset.
   */
  version: string;

  /**
   * The room selected by user
   */
  favoriteProfile: ProfileType;

  /**
   * The dog selected by user
   */
  favoriteDog: DogType;

  /**
    * Playback details.
    */
  playbackInfo: {

    /**
     * The token of the current audio.
     */
    token: string;

    offsetInMilliseconds: number;

    nextStreamEnqueued: boolean;
  };
}

export interface AudioType {
  token: string;
  url: string;
}

export enum ProfileType {
  DEFAULT = 'default',
  KITCHEN = 'kitchen',
  BEDROOM = 'bedroom',
  LIVING = 'living',
}

export enum DogType {
  LABRADOR = 'labrador',
  DOBERMAN = 'doberman',
  SMALL = 'small',
  GERMAN_SHEPARD = 'german shepard',
}

