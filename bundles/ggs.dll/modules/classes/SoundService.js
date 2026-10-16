Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = createjs.Sound;
var __s0local1 = require("gge-module:export_LoggerConfigurator").getLogger("sound");
var __s0local2 = function (__s1param0) {
  function SoundService() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.sounds = new Map();
    __s3local0._queue = null;
    __s3local0._audioSpriteInit = false;
    if (SoundService._instance) {
      throw new Error("SoundService has no constructor, use SoundService.instance");
    }
    if (!__s0local0.isReady) {
      throw new Error("createjs.Sound not ready");
    }
    __s0local0.on("fileload", __s3local0.fileLoadHandler, __s3local0);
    __s0local0.on("fileerror", __s3local0.fileErrorHandler, __s3local0);
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(SoundService, __s1param0);
  Object.defineProperty(SoundService, "instance", {
    get: function () {
      return SoundService._instance ||= new SoundService();
    },
    enumerable: true,
    configurable: true
  });
  SoundService.prototype.init = function (__s9param0) {
    var __s9local0 = this;
    if (!this._audioSpriteInit) {
      this._audioSpriteInit = true;
      this._queue = new createjs.LoadQueue();
      this._jsonUrl = __s9param0;
      this._queue.loadFile({
        id: "audiospritesJson",
        priority: 1,
        src: __s9param0,
        type: createjs.AbstractLoader.JSON
      });
      this._queue.addEventListener("fileload", this._loadAudioSprites.bind(this));
      this._queue.addEventListener("error", function (__s12param0) {
        __s0local1.error("error loading audiosprites.json by load queue from ", __s9local0._jsonUrl);
      });
    }
  };
  SoundService.prototype._loadAudioSprites = function () {
    if (!this._queue) {
      throw new Error("_loadAudioSprites: this._queue is not set");
    }
    var __s14local0 = this._queue.getResult("audiospritesJson");
    if (!__s14local0) {
      throw new Error("Cannot load audio manifest");
    }
    __s14local0.src = this._jsonUrl.replace(/.json$/i, ".mp3");
    this._queue = null;
    __s0local0.registerSounds([__s14local0]);
  };
  SoundService.prototype.fileLoadHandler = function (__s18param0) {
    if (__s18param0.id) {
      var __s18local0 = SoundService.instance.sounds.get(__s18param0.id);
      if (__s18local0) {
        __s18local0.dispatchEvent(SoundService.LOAD_DONE);
        SoundService.instance.sounds.delete(__s18param0.id);
      }
    } else {
      this.dispatchEvent(SoundService.AUDIO_SPRITE_DONE);
    }
  };
  SoundService.prototype.fileErrorHandler = function (__s23param0) {
    if (__s23param0.id) {
      var __s23local0 = SoundService.instance.sounds.get(__s23param0.id);
      if (__s23local0) {
        __s23local0.dispatchEvent(SoundService.LOAD_ERROR);
        SoundService.instance.sounds.delete(__s23param0.id);
      }
    }
    __s0local1.error("error loading audiosprite", __s23param0);
  };
  SoundService.LOAD_DONE = "sound_load_done";
  SoundService.LOAD_ERROR = "sound_load_error";
  SoundService.AUDIO_SPRITE_DONE = "AudioSpritesDone";
  return SoundService;
}(createjs.EventDispatcher);
exports.SoundService = __s0local2;
