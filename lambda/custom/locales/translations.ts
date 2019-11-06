
export enum TranslationsKeys {
  SKILL_NAME = 'SKILL_NAME',
  WELCOME = 'WELCOME',
  WELCOME_SHORT = 'WELCOME_SHORT',
  GOODBYE = 'GOODBYE',
  HELP = 'HELP',
  GENERAL_ERROR = 'GENERAL_ERROR',
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
  CONFIG_DOG_CONFIRMATION = 'CONFIG_DOG_CONFIRMATION',
  CONFIG_PROFILE_CONFIRMATION = 'CONFIG_PROFILE_CONFIRMATION',
}

export const locales = {
  'en-US': {
    translation: {
      [TranslationsKeys.SKILL_NAME]: "House Protector",
      [TranslationsKeys.WELCOME]: "Welcome to House Protector.",
      [TranslationsKeys.WELCOME_SHORT]: "Welcome to House Protector. I can help you to change your favorite dog, room profile or protect your home. What can I do for you?",
      [TranslationsKeys.GOODBYE]: "Goodbye!",
      [TranslationsKeys.HELP]: "House protector is a skill which aims to protect your home when you leave it. When you're leaving I'll play sounds for you. The room profiles available are: LIVING ROOM, KITCKEN, BEDROOM. Change them by simply ask to change the profile. The dog profiles availables are: LABRADOR, DOBERMAN, GERMAN SHEPARD. You can change the dog by asking to change the dog. What do want next?",
      [TranslationsKeys.GENERAL_ERROR]: "Sorry, I can't understand the command. Please say it again.",
      [TranslationsKeys.UNEXPECTED_ERROR]: "Sorry, an unexpected error has occured. Please try again later.",

      [TranslationsKeys.CONFIG_DOG_CONFIRMATION]: "The current dog selected is %s. The options available are: labrador, doberman, small dog and german shepard. What is your option?",
      [TranslationsKeys.CONFIG_PROFILE_CONFIRMATION]: "The current profile selected is %s. The options available are: default, kitchen, bedroom and living room. What is your option?"
    }
  },
};
