Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonConquerComponent = require("gge-module:export_ButtonConquerComponent");
var __s0local0 = function (__s1param0) {
  function ButtonConquerAttackComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonConquerAttackComponent, __s1param0);
  ButtonConquerAttackComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttackedAndConquered();
    if (this._button.visible && (this._button.enableButton = true, this._button.toolTipText = null, this.determineButtonEnablement(), !this._worldMapObjectVO.ignoresPeaceMode && this._worldMapObjectVO.canBeAttackedButHasPeacemode())) {
      this._button.enableButton = false;
      var __s5local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingPeaceTime);
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s5local0]
      };
    }
  };
  ButtonConquerAttackComponent.prototype.onClick = function () {
    __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this._worldMapObjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK, null);
  };
  Object.defineProperty(ButtonConquerAttackComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_conquer";
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ButtonConquerComponent.ButtonConquerComponent.prototype, "infoTextId").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return ButtonConquerAttackComponent;
}(__dep_export_ButtonConquerComponent.ButtonConquerComponent);
exports.ButtonConquerAttackComponent = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
