Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ButtonAttackResourceIsleComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAttackResourceIsleComponent, __s1param0);
  Object.defineProperty(ButtonAttackResourceIsleComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackResourceIsleComponent.prototype.initAsRingmenuButton = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "ResourceIsleMapobjectVO")) {
      var __s7local0 = this._worldMapObjectVO.isOwnMapobject;
      var __s7local1 = __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo);
      this._button.visible = !__s7local0 && !__s7local1;
      if (this._button.visible) {
        this._button.enableButton = true;
        if (this._worldMapObjectVO.ownerInfo) {
          if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED && __dep_export_CastleModel.CastleModel.userData.allianceID != -1) {
            this._button.toolTipText = "cantAttackAlliedPlayer";
            this._button.enableButton = false;
          } else if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
            var __s7local2 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
            this._button.toolTipText = {
              t: "castleHasCooldown",
              p: [__s7local2]
            };
            this._button.enableButton = false;
          }
        }
      }
    } else {
      this._button.visible = false;
    }
  };
  Object.defineProperty(ButtonAttackResourceIsleComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackResourceIsleComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK, null);
  };
  return ButtonAttackResourceIsleComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAttackResourceIsleComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
