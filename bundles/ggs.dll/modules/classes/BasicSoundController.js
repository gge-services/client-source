Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_MathBase = require("gge-module:class_MathBase");
var __dep_class_SecurityErrorLOFactory = require("gge-module:class_SecurityErrorLOFactory");
var __dep_class_IOErrorLOFactory = require("gge-module:class_IOErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __dep_class_BasicSoundEvent = require("gge-module:class_BasicSoundEvent");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_CSSMouseCursor_1 = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.EventDispatcher;
var __s0local2 = createjs.IOErrorEvent;
var __s0local3 = createjs.ProgressEvent;
var __s0local4 = createjs.SecurityErrorEvent;
var __s0local5 = function (__s1param0) {
  function BasicSoundController() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._globalSoundTransform = new __dep_export_CSSMouseCursor_1.SoundTransform();
    __s3local0._effectsTransform = new __dep_export_CSSMouseCursor_1.SoundTransform();
    __s3local0._musicTransform = new __dep_export_CSSMouseCursor_1.SoundTransform();
    __s3local0._isMuted = false;
    __s3local0._isEffectsMuted = false;
    __s3local0._isMusicMuted = true;
    __s3local0._globalSavedVolume = 1;
    __s3local0._musicSavedVolume = 1;
    __s3local0._effectsSavedVolume = 1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicSoundController, __s1param0);
  BasicSoundController.prototype.initialize = function () {
    this.loadedSongs = new Map();
    this._playingSoundEffects = [];
  };
  BasicSoundController.prototype.playSoundEffectByName = function (__s7param0, __s7param1 = 0) {
    if (this.isEffectsMuted) {
      return null;
    }
    var __s7local0;
    if (__s7local0 = this.loadedSongs.get(__s7param0)) {
      return __s7local0.play(0, __s7param1);
    }
    if (createjs.Sound.loadComplete(__s7param0)) {
      var __s7local1 = new __dep_export_CSSMouseCursor_1.Sound(new __dep_export_CSSMouseCursor.URLRequest(__s7param0));
      this.loadedSongs.set(__s7param0, __s7local1);
      return __s7local1.play(0, __s7param1);
    }
    this.loadedSongs.set(__s7param0, this.loadMusicFile(__dep_class_PathProvider.PathProvider.instance.getSoundURL(__s7param0)));
    return null;
  };
  BasicSoundController.prototype.playSoundEffect = function (__s12param0, __s12param1 = 0) {
    if (this.isEffectsMuted) {
      return null;
    } else {
      return __s12param0.play(0, __s12param1, this._effectsTransform);
    }
  };
  BasicSoundController.prototype.playLoopedSoundEffect = function (__s16param0, __s16param1 = 0) {
    if (this.isEffectsMuted) {
      return null;
    }
    var __s16local0 = __s16param0.play(0, -1, this._effectsTransform);
    this._playingSoundEffects.push(__s16local0);
    return __s16local0;
  };
  BasicSoundController.prototype.stopAllLoopedSoundEffects = function () {
    for (var __s19local0 = 0; __s19local0 < this._playingSoundEffects.length; __s19local0++) {
      var __s19local1 = this._playingSoundEffects[__s19local0];
      __s19local1.stop();
      __s19local1 = null;
    }
    this._playingSoundEffects = [];
  };
  BasicSoundController.prototype.stopLoopedSoundEffect = function (__s23param0) {
    for (var __s23local0 = 0; __s23local0 < this._playingSoundEffects.length; __s23local0++) {
      var __s23local1 = this._playingSoundEffects[__s23local0];
      if (__s23local1 == __s23param0) {
        __s23local1.stop();
        this._playingSoundEffects.splice(__s23local0, 1);
        return;
      }
    }
  };
  BasicSoundController.prototype.playMusic = function (__s28param0, __s28param1 = 0, __s28param2 = false) {
    if ((this._currentSongString !== __s28param0 || __s28param2) && (this._currentSongString = __s28param0, this._currentSongLoops = __s28param1, !this._isMusicMuted)) {
      if (this.loadedSongs.get(__s28param0)) {
        this.dispatchEvent(new __dep_class_BasicSoundEvent.BasicSoundEvent(__dep_class_BasicSoundEvent.BasicSoundEvent.SONG_BUFFERED_COMPLETE));
        var __s28local0 = this.loadedSongs.get(__s28param0);
        if (__s28local0.bytesLoaded === __s28local0.bytesTotal) {
          this.playSong(__s28local0, __s28param1);
        }
      } else {
        this.loadedSongs.set(__s28param0, this.loadMusicFile(__dep_class_PathProvider.PathProvider.instance.getSoundURL(__s28param0)));
      }
    }
  };
  BasicSoundController.prototype.stopMusic = function () {
    if (this._currentSongChannel != null) {
      this._currentSongChannel.stop();
      this._currentSongChannel.removeEventListener(__s0local0.SOUND_COMPLETE, this.bindFunction(this.onCurrentSongReachedEnd));
    }
    this._currentSongString = "";
    this._currentSong = null;
  };
  BasicSoundController.prototype.stopAllSounds = function () {
    this.stopAllLoopedSoundEffects();
    this.stopMusic();
  };
  BasicSoundController.prototype.preLoadMusic = function (__s39param0) {
    if (!this.loadedSongs.get(__s39param0)) {
      var __s39local0 = new __dep_export_CSSMouseCursor.URLRequest(__dep_class_PathProvider.PathProvider.instance.getSoundURL(__s39param0));
      new __dep_export_CSSMouseCursor_1.Sound(__s39local0).addEventListener(__s0local2.IO_ERROR, this.bindFunction(this.onStreamError));
    }
  };
  BasicSoundController.prototype.onStreamError = function (__s42param0) {
    throw new Error("Fehler beim Streamen der Sounddatei! \n\n" + __s42param0.target.url + "\n\n" + __s42param0.text);
  };
  BasicSoundController.prototype.playSong = function (__s44param0, __s44param1 = 0) {
    if (__s44param0 != null) {
      if (this._currentSongChannel != null) {
        this._currentSongChannel.stop();
      }
      this._currentSongChannel = __s44param0.play(0, __s44param1, this._musicTransform);
      if (this._currentSongChannel != null) {
        this._currentSongChannel.addEventListener(__s0local0.SOUND_COMPLETE, this.bindFunction(this.onCurrentSongReachedEnd));
        this._currentSong = __s44param0;
      }
    }
  };
  BasicSoundController.prototype.onCurrentSongReachedEnd = function (__s49param0) {
    this.dispatchEvent(new __dep_class_BasicSoundEvent.BasicSoundEvent(__dep_class_BasicSoundEvent.BasicSoundEvent.SONG_PLAYED_COMPLETE));
  };
  BasicSoundController.prototype.loadMusicFile = function (__s51param0) {
    var __s51local0 = new __dep_export_CSSMouseCursor_1.Sound();
    __s51local0.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    __s51local0.addEventListener(__s0local3.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    __s51local0.addEventListener(__s0local2.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    __s51local0.addEventListener(__s0local4.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
    __s51local0.load(new __dep_export_CSSMouseCursor.URLRequest(__s51param0));
    return __s51local0;
  };
  BasicSoundController.prototype.onMusicFileLoadIOError = function (__s53param0) {
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_IOErrorLOFactory.IOErrorLOFactory(__dep_class_IOErrorLOFactory.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, __s53param0.text, __s53param0.target.url));
    __s53param0.target.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    __s53param0.target.removeEventListener(__s0local3.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    __s53param0.target.removeEventListener(__s0local2.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    __s53param0.target.removeEventListener(__s0local4.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
  };
  BasicSoundController.prototype.onMusicFileLoadSecurityError = function (__s55param0) {
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory(__dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, __s55param0.text, __s55param0.target.url));
    __s55param0.target.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    __s55param0.target.removeEventListener(__s0local3.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    __s55param0.target.removeEventListener(__s0local2.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    __s55param0.target.removeEventListener(__s0local4.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
  };
  BasicSoundController.prototype.onMusicFileLoadComplete = function (__s57param0) {
    __s57param0.target.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    __s57param0.target.removeEventListener(__s0local3.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    __s57param0.target.removeEventListener(__s0local2.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    __s57param0.target.removeEventListener(__s0local4.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
    this.dispatchEvent(new __dep_class_BasicSoundEvent.BasicSoundEvent(__dep_class_BasicSoundEvent.BasicSoundEvent.SONG_BUFFERED_COMPLETE));
    var __s57local0 = __s57param0.target;
    this.playSong(__s57local0, this._currentSongLoops);
  };
  BasicSoundController.prototype.onMusicFileLoadProgress = function (__s59param0) {
    var __s59local0 = __s59param0.target;
    if (__s59local0.bytesLoaded > __s59local0.bytesTotal * BasicSoundController.BUFFER_SONG_LEGTH) {
      __s59local0.removeEventListener(__s0local2.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
      __s59local0.removeEventListener(__s0local4.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
      __s59local0.removeEventListener(__s0local3.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
      this.dispatchEvent(new __dep_class_BasicSoundEvent.BasicSoundEvent(__dep_class_BasicSoundEvent.BasicSoundEvent.SONG_BUFFERED_ENOUGH));
      this.playSong(__s59param0.target, this._currentSongLoops);
    }
  };
  BasicSoundController.prototype.toggleMute = function () {
    if (this._isMuted) {
      this.unMuteAll();
    } else {
      this.muteAll();
    }
  };
  BasicSoundController.prototype.toggleMuteMusic = function () {
    if (this._isMusicMuted) {
      this.unMuteMusic();
    } else {
      this.muteMusic();
    }
  };
  BasicSoundController.prototype.toggleMuteEffects = function () {
    if (this._isEffectsMuted) {
      this.unmuteEffects();
    } else {
      this.muteEffects();
    }
  };
  BasicSoundController.prototype.muteAll = function () {
    createjs.Sound.muted = this._isMuted = true;
  };
  BasicSoundController.prototype.unMuteAll = function () {
    createjs.Sound.muted = this._isMuted = false;
  };
  BasicSoundController.prototype.muteMusic = function () {
    this._isMusicMuted = true;
    this._musicSavedVolume = this._musicTransform.volume;
    this._musicTransform.volume = 0;
    this.applyMusicSoundTransform();
  };
  BasicSoundController.prototype.unMuteMusic = function () {
    this._isMusicMuted = false;
    this._musicTransform.volume = this._musicSavedVolume;
    this.applyMusicSoundTransform();
    if (!this._currentSong && this._currentSongString) {
      this.playMusic(this.currentSongString, this._currentSongLoops, true);
    }
  };
  BasicSoundController.prototype.muteEffects = function () {
    this._isEffectsMuted = true;
    this._effectsSavedVolume = this._effectsTransform.volume;
    this._effectsTransform.volume = 0;
  };
  BasicSoundController.prototype.unmuteEffects = function () {
    this._isEffectsMuted = false;
    this._effectsTransform.volume = this._effectsSavedVolume;
  };
  Object.defineProperty(BasicSoundController.prototype, "musicVolume", {
    get: function () {
      return this._musicTransform.volume;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "isEffectsMuted", {
    get: function () {
      return this._isMuted || this._isEffectsMuted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "isMusicMuted", {
    get: function () {
      return this._isMuted || this._isMusicMuted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "isMuted", {
    get: function () {
      return this._isMuted;
    },
    enumerable: true,
    configurable: true
  });
  BasicSoundController.prototype.setMusicVolume = function (__s95param0) {
    if (this._isMusicMuted) {
      this._musicSavedVolume = __dep_class_MathBase.MathBase.clamp(__s95param0, 0, 1);
    } else {
      this._musicTransform.volume = __dep_class_MathBase.MathBase.clamp(__s95param0, 0, 1);
      this.applyMusicSoundTransform();
    }
  };
  BasicSoundController.prototype.setEffectsVolume = function (__s99param0) {
    this._effectsTransform.volume = __dep_class_MathBase.MathBase.clamp(__s99param0, 0, 1);
  };
  Object.defineProperty(BasicSoundController.prototype, "musicMaxPeak", {
    get: function () {
      return Math.max(this._currentSongChannel.leftPeak, this._currentSongChannel.rightPeak);
    },
    enumerable: true,
    configurable: true
  });
  BasicSoundController.prototype.applyMusicSoundTransform = function () {
    if (this._currentSongChannel != null) {
      this._currentSongChannel.soundTransform = this._musicTransform;
    }
  };
  Object.defineProperty(BasicSoundController.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "currentSongString", {
    get: function () {
      return this._currentSongString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "currentSongChannel", {
    get: function () {
      return this._currentSongChannel;
    },
    enumerable: true,
    configurable: true
  });
  BasicSoundController.BUFFER_SONG_LEGTH = 0.4;
  return BasicSoundController;
}(__s0local1);
exports.BasicSoundController = __s0local5;
