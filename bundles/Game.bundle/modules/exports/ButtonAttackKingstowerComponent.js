Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ButtonAttackKingstowerComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAttackKingstowerComponent, __s1param0);
  Object.defineProperty(ButtonAttackKingstowerComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackKingstowerComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "KingstowerMapobjectVO")) {
        if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED && __dep_export_CastleModel.CastleModel.userData.allianceID != -1) {
          this._button.toolTipText = "cantAttackAlliedPlayer";
          this._button.visible = true;
          this._button.enableButton = false;
        } else {
          this._button.toolTipText = null;
          this._button.visible = this._worldMapObjectVO.canBeAttacked();
          this._button.enableButton = true;
        }
      } else {
        this._button.visible = false;
      }
    }
  };
  Object.defineProperty(ButtonAttackKingstowerComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackKingstowerComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK, null);
  };
  return ButtonAttackKingstowerComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAttackKingstowerComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
