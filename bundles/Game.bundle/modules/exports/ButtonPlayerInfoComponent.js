Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleABGTowerInfoDialogProperties = require("gge-module:export_CastleABGTowerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonPlayerInfoComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonPlayerInfoComponent, __s1param0);
  Object.defineProperty(ButtonPlayerInfoComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonPlayerInfoComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.hasOtherPlayerInfo && !this._worldMapObjectVO.isOwnMapobject;
    this._button.visible = this._button.visible || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "ABGAllianceTowerMapobjectVO");
  };
  ButtonPlayerInfoComponent.prototype.onClick = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      if (this._worldMapObjectVO.ownerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleABGTowerDetailAllianceDialog.CastleABGTowerDetailAllianceDialog, new __dep_export_CastleABGTowerInfoDialogProperties.CastleABGTowerInfoDialogProperties(this._worldMapObjectVO), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleABGTowerDetailDialog.CastleABGTowerDetailDialog, new __dep_export_CastleABGTowerInfoDialogProperties.CastleABGTowerInfoDialogProperties(this._worldMapObjectVO), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    } else if (this._worldMapObjectVO.ownerInfo) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this._worldMapObjectVO.ownerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  Object.defineProperty(ButtonPlayerInfoComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_playerInfo";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonPlayerInfoComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonPlayerInfoComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleABGTowerDetailAllianceDialog = require("gge-module:export_CastleABGTowerDetailAllianceDialog");
var __dep_export_CastleABGTowerDetailDialog = require("gge-module:export_CastleABGTowerDetailDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
