Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_WorldmapEasterEggHelper = require("gge-module:export_WorldmapEasterEggHelper");
var __s0local0 = function (__s1param0) {
  function WorldmapKeyWordManager() {
    var __s3local0 = this;
    __s3local0._inputBuffer = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldmapKeyWordManager, __s1param0);
  WorldmapKeyWordManager.prototype.addEventListener = function () {
    this._inputBuffer = "";
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.addEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
  };
  WorldmapKeyWordManager.prototype.removeEventListener = function () {
    this._inputBuffer = "";
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.removeEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
  };
  WorldmapKeyWordManager.prototype.checkForContainingKeyWord = function () {
    if (!(this._inputBuffer.indexOf(__dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.KEY_WORD_CAT_MODE) < 0)) {
      this._inputBuffer = "";
      __dep_export_WorldmapEasterEggHelper.WorldmapEasterEggHelper.activateCatMode();
    }
  };
  WorldmapKeyWordManager.prototype.onKeyUp = function (__s12param0) {
    var __s12local0 = __s12param0.key;
    if (__s12local0 && __s12local0.length == 1) {
      __s12local0 = __s12local0.toLowerCase();
      if (this._inputBuffer.length >= WorldmapKeyWordManager.KEY_WORD_BUFFER_LENGTH) {
        this._inputBuffer = this._inputBuffer.substring(1, WorldmapKeyWordManager.KEY_WORD_BUFFER_LENGTH - 1) + __s12local0;
      } else {
        this._inputBuffer += __s12local0;
      }
      this.checkForContainingKeyWord();
    }
  };
  Object.defineProperty(WorldmapKeyWordManager.prototype, "inputBuffer", {
    get: function () {
      return this._inputBuffer;
    },
    enumerable: true,
    configurable: true
  });
  WorldmapKeyWordManager.KEY_WORD_BUFFER_LENGTH = 100;
  return WorldmapKeyWordManager;
}(__dep_export_CastleComponent.CastleComponent);
exports.WorldmapKeyWordManager = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
