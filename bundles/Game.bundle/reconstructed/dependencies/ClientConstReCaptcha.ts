import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
export class ClientConstReCaptcha {
  static getSiteKey() {
    if (EnvGlobalsHandler.globals.isLocal) {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY_LOCAL;
    } else if (EnvGlobalsHandler.globals.isTest) {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY_TEST;
    } else {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY;
    }
  }
  static RECAPTCHA_SITE_KEY_LOCAL = "6Lf0aFooAAAAAASMeebUEt4Y9ir7jbXfLCPEWnrA";
  static RECAPTCHA_SITE_KEY_TEST = "6Lf0aFooAAAAAASMeebUEt4Y9ir7jbXfLCPEWnrA";
  static RECAPTCHA_SITE_KEY = "6Lc7w34oAAAAAFKhfmln41m96VQm4MNqEdpCYm-k";
}
