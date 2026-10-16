Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleUpgradeLaboratoryDialogProperties = require("gge-module:export_CastleUpgradeLaboratoryDialogProperties");
var __dep_export_CastleUpgradeLandmarkDialogProperties = require("gge-module:export_CastleUpgradeLandmarkDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonUpgradeLandmarkComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonUpgradeLandmarkComponent, __s1param0);
  Object.defineProperty(ButtonUpgradeLandmarkComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonUpgradeLandmarkComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "UpgradableLandmarkMapobjectVO")) {
      switch (this._worldMapObjectVO.areaType) {
        case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT:
          this._button.gotoAndStop(1);
          break;
        case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY:
          this._button.gotoAndStop(2);
      }
      this._button.visible = this._worldMapObjectVO.canBeUpgradedByMe();
    } else {
      this._button.visible = false;
    }
  };
  ButtonUpgradeLandmarkComponent.prototype.onClick = function () {
    var __s12local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "MonumentMapobjectVO") ? new __dep_export_CastleUpgradeLandmarkDialogProperties.CastleUpgradeLandmarkDialogProperties(this._worldMapObjectVO) : new __dep_export_CastleUpgradeLaboratoryDialogProperties.CastleUpgradeLaboratoryDialogProperties(this._worldMapObjectVO);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleUpgradeLandmarkDialog.CastleUpgradeLandmarkDialog, __s12local0);
  };
  Object.defineProperty(ButtonUpgradeLandmarkComponent.prototype, "infoTextId", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "MonumentMapobjectVO")) {
        return "dialog_monument_manageShort_tooltip";
      } else {
        return "dialog_laboratory_manageShort_tooltip";
      }
    },
    enumerable: true,
    configurable: true
  });
  return ButtonUpgradeLandmarkComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonUpgradeLandmarkComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleUpgradeLandmarkDialog = require("gge-module:export_CastleUpgradeLandmarkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
