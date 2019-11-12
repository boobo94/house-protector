
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
      [TranslationsKeys.HELP]: "House protector is a skill that aims to protect your home when you leave. I'll simulate a real environment reproducing real human existence. The room profiles available are LIVING ROOM, KITCHEN, BEDROOM. Change the profile according to your preferences. The dog profile available are LABRADOR, DOBERMAN, GERMAN SHEPARD, SMALL. Change the profile according to your preferences. What do you want now?",
      [TranslationsKeys.GENERAL_ERROR]: "Sorry, I can't understand the command. Please say it again.",
      [TranslationsKeys.UNEXPECTED_ERROR]: "Sorry, an unexpected error has occurred. Please try again later.",

      [TranslationsKeys.CONFIG_DOG_CONFIRMATION]: "The active dog is %s. The options available are labrador, Doberman, small dog and german Shepard. You can start the guard mode or change the dog by your preference. What is your option?",
      [TranslationsKeys.CONFIG_PROFILE_CONFIRMATION]: "The active profile is %s. The options available are default, kitchen, bedroom and living room. You can start the guard mode or change the profile by your preference. What is your option?",
    }
  },
};
