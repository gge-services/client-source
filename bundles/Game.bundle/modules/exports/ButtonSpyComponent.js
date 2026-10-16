Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MapObjectHelper = require("gge-module:export_MapObjectHelper");
var __dep_export_CastleSpyDialogProperties = require("gge-module:export_CastleSpyDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonSpyComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._showNormalToolTip = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonSpyComponent, __s1param0);
  Object.defineProperty(ButtonSpyComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonSpyComponent.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
  };
  ButtonSpyComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
  };
  ButtonSpyComponent.prototype.onSpiesChanged = function (__s11param0) {
    this.initSpyButton(this._showNormalToolTip);
  };
  ButtonSpyComponent.prototype.initAsRingmenuButton = function () {
    this.initSpyButton(false);
  };
  ButtonSpyComponent.prototype.initSpyButton = function (__s15param0) {
    if (this._worldMapObjectVO && this._worldMapObjectVO.ownerInfo) {
      this._showNormalToolTip = __s15param0;
      var __s15local0 = this._worldMapObjectVO.ownerInfo.isLegend || __dep_export_MapObjectHelper.MapObjectHelper.isLandmark(this._worldMapObjectVO);
      this._button.visible = this._worldMapObjectVO.canBeSpied && __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished() && !__dep_export_CastleModel.CastleModel.subscriptionData.isAutoSpyActiveForArea(this._worldMapObjectVO);
      this._button.enableButton = true;
      if (this._worldMapObjectVO.isInSpyLevelRange) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && this._button.visible && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
          this._button.enableButton = false;
          this._button.toolTipText = "panel_action_castle_spectator";
        } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SPY || __dep_export_CastleModel.CastleModel.spyData.getNumAllSpies(__s15local0) == 0) {
          this._button.enableButton = false;
          this._button.toolTipText = "ringmenu_toolTip_noAgents";
        } else if (__dep_export_CastleModel.CastleModel.spyData.getNumAvailableSpies(__s15local0) <= 0) {
          this._button.enableButton = false;
          this._button.toolTipText = "ringmenu_toolTip_noFreeAgents";
        } else {
          this._button.toolTipText = __s15param0 ? "ringmenu_spy_menu" : null;
        }
      } else {
        this._button.enableButton = false;
        this._button.toolTipText = "ringmenu_toolTip_levelTooLow";
      }
    }
  };
  ButtonSpyComponent.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyDialog.CastleSpyDialog, new __dep_export_CastleSpyDialogProperties.CastleSpyDialogProperties(this._worldMapObjectVO, __dep_export_CastleSpyDialog.CastleSpyDialog.TAB_SPY));
  };
  Object.defineProperty(ButtonSpyComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_spy_menu";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonSpyComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonSpyComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
