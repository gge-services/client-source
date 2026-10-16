Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ButtonBasicComponent(__s3param0, __s3param1 = null) {
    this.preConstructorBG(__s3param1);
    this._button = __s3param0;
    this.init();
  }
  ButtonBasicComponent.prototype.preConstructorBG = function (__s5param0) {};
  ButtonBasicComponent.prototype.init = function () {};
  ButtonBasicComponent.prototype.listenOnLevelUp = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  ButtonBasicComponent.prototype.listenOnLayoutChange = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
  };
  ButtonBasicComponent.prototype.listenOnChangeCastleList = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
  };
  ButtonBasicComponent.prototype.listenOnChangeSelectedCastleListItem = function () {
    __dep_export_CastleModel.CastleModel.worldmapCameraData.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
  };
  ButtonBasicComponent.prototype.onChangeSelectedCastleListItem = function (__s17param0) {};
  ButtonBasicComponent.prototype.onChangeCastleList = function (__s19param0) {};
  ButtonBasicComponent.prototype.onLevelUp = function (__s21param0) {};
  ButtonBasicComponent.prototype.onChangeLayoutState = function (__s23param0) {
    this.init();
  };
  ButtonBasicComponent.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    if (__dep_export_CastleModel.CastleModel.worldmapData) {
      __dep_export_CastleModel.CastleModel.worldmapData.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    }
  };
  Object.defineProperty(ButtonBasicComponent.prototype, "targetMC", {
    get: function () {
      return this._button;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponent.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonBasicComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ButtonBasicComponent;
}();
exports.ButtonBasicComponent = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
