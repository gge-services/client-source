Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __dep_class_SoundService = require("gge-module:class_SoundService");
var __dep_class_SoundTransform = require("gge-module:class_SoundTransform");
var __dep_class_SoundChannel = require("gge-module:class_SoundChannel");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = createjs.PlayPropsConfig;
var __s0local2 = __dep_export_LoggerConfigurator.getLogger("sound");
var __s0local3 = function (__s1param0) {
  function Sound(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._bytesLoaded = 0;
    __s3local0._bytesTotal = 0;
    __s3local0._playWhenComplete = false;
    __s3local0._url = __s3param0;
    __s3local0._config = new __s0local1();
    __s3local0._config.set({
      delay: 0,
      interrupt: createjs.Sound.INTERRUPT_NONE,
      loop: 0,
      offset: 0,
      pan: 0,
      volume: 1
    });
    __s3local0._soundTransform = new __dep_class_SoundTransform.SoundTransform();
    __s3local0._soundChannel = new __dep_class_SoundChannel.SoundChannel();
    if (__s3local0._url) {
      __s3local0.load(__s3local0._url);
    }
    return __s3local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(Sound, __s1param0);
  Object.defineProperty(Sound.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Sound.prototype, "bytesLoaded", {
    get: function () {
      return this._bytesLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Sound.prototype, "bytesTotal", {
    get: function () {
      return this._bytesTotal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Sound.prototype, "url", {
    get: function () {
      return this._url;
    },
    enumerable: true,
    configurable: true
  });
  Sound.prototype.play = function (__s14param0 = 0, __s14param1 = 0, __s14param2) {
    this._config.loop = __s14param1;
    this._config.offset = __s14param0;
    this._soundTransform = __s14param2 || this._soundTransform || new __dep_class_SoundTransform.SoundTransform();
    this._config.volume = this._soundTransform.volume;
    this._config.pan = this._soundTransform.pan;
    if (createjs.Sound.loadComplete(this._id) && !this._soundChannel.soundInstance) {
      this.onComplete();
    }
    if (this._soundChannel.soundInstance) {
      this._config.duration = this._config.loop === -1 ? Number.MAX_VALUE : this._soundChannel.soundInstance.duration * (__s14param1 + 1);
      this._soundChannel.soundInstance.play(this._config);
      __s0local2.info("sound: starting to play " + this._id);
    } else {
      this._playWhenComplete = true;
    }
    return this._soundChannel;
  };
  Sound.prototype.load = function (__s19param0) {
    if (this._url && this._url.url !== __s19param0.url) {
      throw new Error("Sound url has already defined, can't load another sound.");
    }
    this._url = this._url || __s19param0;
    var __s19local0 = this._url.url.split("/");
    this._id = __s19local0[__s19local0.length - 1].replace(/\.\w+$/i, "");
    if (!createjs.Sound.loadComplete(this._id)) {
      if (/.mp3$/i.test(this._url.url)) {
        __dep_class_SoundService.SoundService.instance.sounds.set(this._id, this);
        createjs.Sound.registerSound(__s19param0.url, this._id);
        this.on(__dep_class_SoundService.SoundService.LOAD_DONE, this.onComplete.bind(this));
        this.on(__dep_class_SoundService.SoundService.LOAD_ERROR, this.onError.bind(this));
      }
    }
  };
  Sound.prototype.onComplete = function (__s24param0) {
    var __s24local0 = this;
    var __s24local1 = createjs.Sound.createInstance(this._id);
    __s24local1.on("failed", function () {
      __s0local2.error("sound[" + __s24local0._id + "] play failed");
    });
    __s24local1.on("complete", function () {
      __s0local2.debug("sound[" + __s24local0._id + "] play complete");
      __s24local0._soundChannel.dispatchEvent(createjs.Event.SOUND_COMPLETE);
      __s24local0.dispatchEvent(createjs.Event.SOUND_COMPLETE);
    });
    this._soundChannel.soundInstance = __s24local1;
    this._soundChannel.soundTransform = this._soundTransform;
    if (this._playWhenComplete) {
      this._playWhenComplete = false;
      this.play();
    }
    this.dispatchEvent(createjs.Event.COMPLETE);
    this.removeAllEventListeners(__dep_class_SoundService.SoundService.LOAD_DONE);
    this.removeAllEventListeners(__dep_class_SoundService.SoundService.LOAD_ERROR);
  };
  Sound.prototype.onError = function (__s31param0) {
    __s0local2.error("Fail to load Sound: " + (this.url !== undefined ? this.url.url : "Unkown URL (already discarded)"));
    this.dispatchEvent(createjs.IOErrorEvent.IO_ERROR);
    this.removeAllEventListeners(__dep_class_SoundService.SoundService.LOAD_DONE);
    this.removeAllEventListeners(__dep_class_SoundService.SoundService.LOAD_ERROR);
  };
  return Sound;
}(__s0local0);
exports.Sound = __s0local3;
