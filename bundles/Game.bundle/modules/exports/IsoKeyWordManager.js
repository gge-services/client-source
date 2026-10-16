Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoKeyWordManager() {
    var __s3local0 = this;
    __s3local0._inputBuffer = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoKeyWordManager, __s1param0);
  IsoKeyWordManager.prototype.addEventListener = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.addEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
  };
  IsoKeyWordManager.prototype.removeEventListener = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.removeEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
  };
  IsoKeyWordManager.prototype.checkForContainingKeyWorld = function () {
    var __s9local0 = "";
    for (var __s9local1 = 0, __s9local2 = Array.from(__dep_export_IsoConst.IsoConst.KEY_WORD_FUNCTIONS.keys()); __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 !== undefined && this.inputBuffer.indexOf(__s9local3) >= 0) {
        __s9local0 = __s9local3;
        break;
      }
    }
    if (__s9local0 != "") {
      this._inputBuffer = "";
      var __s9local4 = __dep_export_IsoConst.IsoConst.KEY_WORD_FUNCTIONS.get(__s9local0);
      if (__s9local4) {
        __s9local4();
      }
    }
  };
  IsoKeyWordManager.prototype.onKeyUp = function (__s16param0) {
    var __s16local0 = __s16param0.key;
    if (this.inputBuffer.length >= __dep_export_IsoConst.IsoConst.KEY_WORD_BUFFER_LENGTH) {
      this._inputBuffer = this.inputBuffer.substring(1, __dep_export_IsoConst.IsoConst.KEY_WORD_BUFFER_LENGTH - 1) + __s16local0;
    } else {
      this._inputBuffer += __s16local0;
    }
    this.checkForContainingKeyWorld();
  };
  Object.defineProperty(IsoKeyWordManager.prototype, "inputBuffer", {
    get: function () {
      return this._inputBuffer;
    },
    enumerable: true,
    configurable: true
  });
  return IsoKeyWordManager;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.IsoKeyWordManager = __s0local0;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
