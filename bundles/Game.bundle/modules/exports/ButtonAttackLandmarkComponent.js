Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonAttackComponent = require("gge-module:export_ButtonAttackComponent");
var __s0local0 = function (__s1param0) {
  function ButtonAttackLandmarkComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAttackLandmarkComponent, __s1param0);
  ButtonAttackLandmarkComponent.prototype.initAttackButton = function (__s5param0) {
    if (this._worldMapObjectVO) {
      this._button.visible = this._worldMapObjectVO.canBeAttacked();
      this._button.enableButton = true;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "UpgradableLandmarkMapobjectVO")) {
        switch (this._worldMapObjectVO.areaType) {
          case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT:
            this._button.gotoAndStop(1);
            break;
          case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY:
            this._button.gotoAndStop(2);
        }
        __s1param0.prototype.initAttackButton.call(this, __s5param0);
      } else {
        this._button.visible = false;
      }
      this.initTooltipsAndEnable(this._worldMapObjectVO);
    }
  };
  ButtonAttackLandmarkComponent.prototype.initTooltipsAndEnable = function (__s11param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(__s11param0.ownerInfo)) {
      this._button.visible = false;
      this._button.enableButton = false;
    } else if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(__s11param0.ownerInfo.allianceID)) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED && __dep_export_CastleModel.CastleModel.userData.allianceID != -1) {
      this._button.toolTipText = "cantAttackAlliedPlayer";
      this._button.enableButton = false;
    } else if (__s11param0.remainingCooldownTimeInSeconds > 0) {
      var __s11local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(__s11param0.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "castleHasCooldown",
        p: [__s11local0]
      };
      this._button.enableButton = false;
    } else if (__s11param0.kingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && __s11param0.ownerInfo.remainingRelocateDuration > 0) {
      var __s11local1 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(__s11param0.ownerInfo.remainingRelocateDuration * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "relocate_attackprotection",
        p: [__s11local1]
      };
      this._button.enableButton = false;
    } else {
      this._button.enableButton = !__s11param0.isOwnMapobject;
    }
  };
  Object.defineProperty(ButtonAttackLandmarkComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ButtonAttackComponent.ButtonAttackComponent.prototype, "infoTextId").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAttackLandmarkComponent;
}(__dep_export_ButtonAttackComponent.ButtonAttackComponent);
exports.ButtonAttackLandmarkComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
