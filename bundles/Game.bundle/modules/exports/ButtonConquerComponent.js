Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ButtonConquerComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonConquerComponent, __s1param0);
  ButtonConquerComponent.prototype.determineButtonEnablement = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "OutpostMapobjectVO")) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "CapitalMapobjectVO")) {
        this._button.visible = true;
        if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
          this._button.visible = false;
        } else if (__dep_export_CastleModel.CastleModel.userData.hasCapital) {
          this._button.enableButton = false;
          this._button.toolTipText = "errorCode_194";
        } else if (__dep_export_CastleModel.CastleModel.armyData.hasCapitalOwnConquerMovement) {
          this._button.enableButton = false;
          this._button.toolTipText = "alreadyConquerCapitalMovement";
        } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS) {
          this._button.enableButton = false;
          this._button.toolTipText = {
            t: "noCapitalConquer",
            p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS]
          };
        }
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "MetropolMapobjectVO")) {
        if (__dep_export_CastleModel.CastleModel.userData.hasMetropol) {
          this._button.enableButton = false;
          this._button.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("errorCode_252");
        } else if (__dep_export_CastleModel.CastleModel.armyData.hasMetropolOwnConquerMovement) {
          this._button.enableButton = false;
          this._button.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("alreadyConquerMetropolMovement");
        } else if (!__dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_METROPOL) {
          this._button.enableButton = false;
          this._button.toolTipText = {
            t: __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("noMetropolConquer"),
            p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS]
          };
        }
      } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_OUTPOSTS) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "noBaronsLvl",
          p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_OUTPOSTS]
        };
      } else if (__dep_export_CastleModel.CastleModel.lordData.numAllBarons < 1 || __dep_export_CastleModel.CastleModel.lordData.numAvailableBarons < 1) {
        this._button.enableButton = false;
        this._button.toolTipText = String("noAbailableBarons");
      }
    }
  };
  ButtonConquerComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeConquered();
    if (this._button.visible) {
      this._button.enableButton = true;
      this._button.toolTipText = null;
      this.determineButtonEnablement();
    }
  };
  Object.defineProperty(ButtonConquerComponent.prototype, "targetWMO", {
    set: function (__s22param0) {
      this._worldMapObjectVO = __s22param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonConquerComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER, null);
  };
  Object.defineProperty(ButtonConquerComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_conquer";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonConquerComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonConquerComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
