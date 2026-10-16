Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_ASeasonEventVO = require("gge-module:export_ASeasonEventVO");
var __s0local0 = function (__s1param0) {
  function UnderworldEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnderworldEventVO, __s1param0);
  UnderworldEventVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0.UL && __s5param0.UL.MID) {
      this._mapID = __s5param0.UL.MID;
    }
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
  };
  UnderworldEventVO.prototype.openMerchantDialog = function (__s8param0, __s8param1) {
    this.executeOpenDialog(__s8param0, __dep_export_CastleUnderworldEventDialog.CastleUnderworldEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s8param1));
  };
  Object.defineProperty(UnderworldEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return UnderworldEventVO.EVENT_BUILDING_WOD_ID;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASeasonEventVO.ASeasonEventVO.prototype, "eventBuildingWOD").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnderworldEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_UNDERWORLD_EXPLORER;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASeasonEventVO.ASeasonEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  UnderworldEventVO.EVENT_BUILDING_WOD_ID = 73;
  return UnderworldEventVO;
}(__dep_export_ASeasonEventVO.ASeasonEventVO);
exports.UnderworldEventVO = __s0local0;
var __dep_export_CastleUnderworldEventDialog = require("gge-module:export_CastleUnderworldEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
