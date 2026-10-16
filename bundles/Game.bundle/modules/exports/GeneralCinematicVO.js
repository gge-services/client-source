Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function GeneralCinematicVO(__s3param0) {
    this._id = __s3param0;
  }
  Object.defineProperty(GeneralCinematicVO.prototype, "title", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("generals_introduction_cinematic" + this.cinematicID + "_name");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "description", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("generals_introduction_cinematic" + this.cinematicID + "_desc");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "fileName", {
    get: function () {
      var __s9local0 = this.getLocaSuffix();
      return "GeneralsIntroductionCinematic_" + this._id + "_" + __s9local0 + ".mp4";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "length", {
    get: function () {
      return GeneralCinematicVO.CINEMATICS_LENGTH[this._id];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralCinematicVO.prototype, "cinematicID", {
    get: function () {
      if (this._id < 10) {
        return "0" + this._id;
      } else {
        return "" + this._id;
      }
    },
    enumerable: true,
    configurable: true
  });
  GeneralCinematicVO.prototype.getLocaSuffix = function () {
    var __s19local0 = __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.currentCountryLanguageCode;
    if (GeneralCinematicVO.AVAILABLE_LANGUAGES.indexOf(__s19local0) > -1) {
      return __s19local0;
    } else {
      return "en";
    }
  };
  GeneralCinematicVO.prototype.onPlayCinematic = function () {
    __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState("start_cinematic_" + this.cinematicID);
  };
  GeneralCinematicVO.AVAILABLE_LANGUAGES = ["br", "cs", "de", "en", "es", "fr", "hu", "it", "ja", "nl", "pl", "ro", "ru", "tr"];
  GeneralCinematicVO.CINEMATICS_LENGTH = ["0:00", "1:11", "0:57"];
  return GeneralCinematicVO;
}();
exports.GeneralCinematicVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICinematicVO");
