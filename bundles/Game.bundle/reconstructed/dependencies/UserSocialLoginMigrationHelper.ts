import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
export class UserSocialLoginMigrationHelper {
  static get isOvergamezAndNeedsRedirectByJS() {
    return (EnvGlobalsHandler.globals.networkId == 86 || EnvGlobalsHandler.globals.networkId == 87 || EnvGlobalsHandler.globals.networkId == 88) && EnvGlobalsHandler.globals.requestPayByJS == 0;
  }
  static getNameByInstanceID(argument0) {
    if (this.data[argument0]) {
      return this.data[argument0].name;
    } else {
      return " ";
    }
  }
  static getLinkByInstanceID(argument0) {
    if (this.data[argument0]) {
      return this.data[argument0].newLink;
    } else {
      return " ";
    }
  }
  static getDateOfChange() {
    if (EnvGlobalsHandler.globals.networkId == 86 || EnvGlobalsHandler.globals.networkId == 87 || EnvGlobalsHandler.globals.networkId == 88) {
      return new Date("2022-06-30T00:00:00");
    } else {
      return new Date("2022-05-31T00:00:00");
    }
  }
  static data = {
    26: {
      name: "jetztspielen.de",
      newLink: "https://www.jetztspielen.de/spiel/goodgame-empire-online"
    },
    28: {
      name: "jeux.fr",
      newLink: "https://www.jeux.fr/jeu/goodgame-empire-online"
    },
    29: {
      name: "gioco.it",
      newLink: "https://www.gioco.it/gioco/goodgame-empire-online"
    },
    30: {
      name: "gry.pl",
      newLink: "https://www.gry.pl/gra/goodgame-empire-online"
    },
    33: {
      name: "spielen.com",
      newLink: "https://www.spielen.com/spiel/goodgame-empire-online"
    },
    35: {
      name: "jeu.fr",
      newLink: "https://www.jeu.fr/jeu/goodgame-empire-online"
    },
    40: {
      name: "spela.se",
      newLink: "https://www.spela.se/spel_/goodgame-empire-online"
    },
    53: {
      name: "spel.nl",
      newLink: "https://www.spel.nl/spel/goodgame-empire-online"
    },
    58: {
      name: "spelletjes.nl",
      newLink: "https://www.spelletjes.nl/spel/goodgame-empire-online"
    },
    63: {
      name: "giochi.it",
      newLink: "https://www.giochi.it/gioco/goodgame-empire-online"
    },
    34: {
      name: "agame.com",
      newLink: "https://www.agame.com/game/goodgame-empire-online"
    },
    36: {
      name: "games.co.uk",
      newLink: "https://www.games.co.uk/game/goodgame-empire-online"
    },
    37: {
      name: "gamesgames.com",
      newLink: "https://www.gamesgames.com/game/goodgame-empire-online"
    },
    38: {
      name: "juegos.com",
      newLink: "https://www.juegos.com/juego/goodgame-empire-online"
    },
    59: {
      name: "ojogos.com.br",
      newLink: "https://www.ojogos.com.br/jogo/goodgame-empire-online"
    },
    39: {
      name: "ourgames.ru",
      newLink: "https://www.ourgames.ru/igra/goodgame-empire-online"
    },
    52: {
      name: "flashgames.ru",
      newLink: "https://www.flashgames.ru/igra/goodgame-empire-online"
    },
    61: {
      name: "games.co.id",
      newLink: "https://www.games.co.id/permainan_/goodgame-empire-online"
    },
    86: {
      name: "vk.com",
      newLink: "https://empire.goodgamestudios.com/vk/"
    },
    87: {
      name: "ok.ru",
      newLink: "https://empire.goodgamestudios.com/vk/"
    },
    88: {
      name: "my.mail.ru",
      newLink: "https://empire.goodgamestudios.com/mail/"
    }
  };
}
