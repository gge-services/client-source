Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_ASeasonEventVO = require("gge-module:export_ASeasonEventVO");
var __s0local0 = function (__s1param0) {
  function ThornkingEventVO() {
    var __s3local0 = this;
    __s3local0._mapIDToUse = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ThornkingEventVO, __s1param0);
  ThornkingEventVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0.UL && __s5param0.UL.MID) {
      this._mapIDToUse = __dep_exact_f855840627e6e145.int(__s5param0.UL.MID);
      this._mapID = this._mapIDToUse;
    }
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
  };
  ThornkingEventVO.prototype.openMerchantDialog = function (__s8param0, __s8param1) {
    this.executeOpenDialog(__s8param0, __dep_export_CastleThornkingEventDialog.CastleThornkingEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s8param1));
  };
  Object.defineProperty(ThornkingEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ThornkingEventVO.EVENT_BUILDING_WOD_ID;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASeasonEventVO.ASeasonEventVO.prototype, "eventBuildingWOD").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ThornkingEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_FRIGHTENED_KING;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASeasonEventVO.ASeasonEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  ThornkingEventVO.EVENT_BUILDING_WOD_ID = 385;
  return ThornkingEventVO;
}(__dep_export_ASeasonEventVO.ASeasonEventVO);
exports.ThornkingEventVO = __s0local0;
var __dep_export_CastleThornkingEventDialog = require("gge-module:export_CastleThornkingEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
