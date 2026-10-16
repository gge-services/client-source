Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ButtonBasicComponentExternal(__s3param0) {
    this._button = __s3param0;
    this.init();
  }
  ButtonBasicComponentExternal.prototype.init = function () {};
  ButtonBasicComponentExternal.prototype.listenOnLayoutChange = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
  };
  ButtonBasicComponentExternal.prototype.listenOnChangeCastleList = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
  };
  ButtonBasicComponentExternal.prototype.listenOnChangeSelectedCastleListItem = function () {
    __dep_export_CastleModel.CastleModel.worldmapCameraData.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
  };
  ButtonBasicComponentExternal.prototype.onChangeSelectedCastleListItem = function (__s13param0) {};
  ButtonBasicComponentExternal.prototype.onChangeCastleList = function (__s15param0) {};
  ButtonBasicComponentExternal.prototype.onChangeLayoutState = function (__s17param0) {
    this.init();
  };
  ButtonBasicComponentExternal.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    if (__dep_export_CastleModel.CastleModel.worldmapData) {
      __dep_export_CastleModel.CastleModel.worldmapData.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeCastleList));
    }
  };
  Object.defineProperty(ButtonBasicComponentExternal.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponentExternal.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ButtonBasicComponentExternal;
}();
exports.ButtonBasicComponentExternal = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
