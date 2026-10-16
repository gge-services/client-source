Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventSkinEventVO = require("gge-module:export_EventSkinEventVO");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSoundController() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.unMuteMusic();
    __s3local0.unmuteEffects();
    var __s3local1 = __dep_export_CastleModel.CastleModel.localData.readSoundSettings();
    if (__s3local1) {
      var __s3local2 = __s3local1[0];
      var __s3local3 = __s3local1[2];
      if (__s3local2) {
        __s3local0.muteMusic();
      }
      if (__s3local3) {
        __s3local0.muteEffects();
      }
    }
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, __s3local0.bindFunction(__s3local0.onEventAdded));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, __s3local0.bindFunction(__s3local0.onEventRemoved));
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isChrome || __dep_exact_81dacdf05bd32292.currentBrowserInfo.isSafari) {
      window.addEventListener("click", __s3local0.bindFunction(__s3local0.resumeAudioContext));
    }
    __s3local0.setupAudioErrorHandling();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSoundController, __s1param0);
  CastleSoundController.prototype.setupAudioErrorHandling = function () {
    try {
      if (createjs.Sound && createjs.Sound.addEventListener) {
        createjs.Sound.addEventListener("fileerror", function (__s13param0) {
          console.warn("Audio file failed to load:", __s13param0.src || __s13param0.id);
        });
      }
      if (createjs.WebAudioPlugin && createjs.WebAudioPlugin.context) {
        var __s9local0 = createjs.WebAudioPlugin.context;
        var __s9local1 = __s9local0.decodeAudioData.bind(__s9local0);
        if (__s9local1) {
          createjs.WebAudioPlugin.context.decodeAudioData = function (__s17param0, __s17param1, __s17param2) {
            if (!__s17param1 && !__s17param2) {
              return __s9local1(__s17param0).catch(function (__s20param0) {
                console.warn("Failed to decode audio data (promise):", __s20param0 && __s20param0.message || __s20param0);
                return null;
              });
            }
            return __s9local1(__s17param0, __s17param1, function (__s22param0) {
              console.warn("Failed to decode audio data (callback):", __s22param0 && __s22param0.message || __s22param0);
              if (__s17param2) {
                __s17param2(__s22param0);
              }
            });
          };
        }
      }
      window.addEventListener("unhandledrejection", function (__s25param0) {
        if (__s25param0.reason && __s25param0.reason.name === "EncodingError" && __s25param0.reason.message && __s25param0.reason.message.indexOf("decodeAudioData") !== -1) {
          __s25param0.preventDefault();
          console.warn("Audio decoding failed (unhandled):", __s25param0.reason.message);
        }
      });
    } catch (__s28local0) {
      console.warn("Could not setup audio error handling:", __s28local0);
    }
  };
  CastleSoundController.prototype.resumeAudioContext = function () {
    try {
      if (createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended") {
        this.stopMusic();
        this.playMusic(CastleSoundController.MUSIC_LOOP1, -1);
        createjs.WebAudioPlugin.context.resume();
        window.removeEventListener("click", this.bindFunction(this.resumeAudioContext));
      }
    } catch (__s34local0) {
      console.error("There was an error while trying to resume the SoundJS Web Audio context...");
      console.error(__s34local0);
    }
  };
  CastleSoundController.prototype.onEventRemoved = function (__s36param0) {
    if (!this.useWinterLoop && !this.isMuted) {
      this.playMusic(CastleSoundController.MUSIC_LOOP1, Number.MAX_VALUE);
    }
  };
  CastleSoundController.prototype.onEventAdded = function (__s39param0) {
    if (this.useWinterLoop && !this.isMuted) {
      this.playMusic(CastleSoundController.MUSIC_LOOP1_WINTER, Number.MAX_VALUE);
    }
  };
  CastleSoundController.prototype.playMusic = function (__s42param0, __s42param1 = 1, __s42param2 = false) {
    if (this.useWinterLoop) {
      __s42param0 = CastleSoundController.MUSIC_LOOP1_WINTER;
    }
    __s1param0.prototype.playMusic.call(this, __s42param0, __s42param1, __s42param2);
  };
  Object.defineProperty(CastleSoundController.prototype, "activeSkinEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoundController.prototype, "useWinterLoop", {
    get: function () {
      return this.activeSkinEvent && this.activeSkinEvent.skinString == __dep_export_EventSkinEventVO.EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE;
    },
    enumerable: true,
    configurable: true
  });
  CastleSoundController.MUSIC_LOOP1 = "new_empire_theme_smaller.mp3";
  CastleSoundController.MUSIC_LOOP1_WINTER = "AoK_Ambient_Main_Winter.mp3";
  return CastleSoundController;
}(__dep_exact_9e901e8e2483a22f.BasicSoundController);
exports.CastleSoundController = __s0local0;
