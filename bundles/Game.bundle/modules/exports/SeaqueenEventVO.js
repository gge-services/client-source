Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_ASeasonEventVO = require("gge-module:export_ASeasonEventVO");
var __s0local0 = function (__s1param0) {
  function SeaqueenEventVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.preloadedAssets = ["Event4TreasureMapShared1", "Event4TreasureMapShared2", "Event4TreasureMapShared3", "Event4TreasureMapShared4", "Event4TreasureMapShared5", "Event4TreasureMapShared6", "Event4TreasureMapShared7", "Event4TreasureMapShared8", "Event4TreasureMapShared9", "Event4TreasureMapShared10", "Event4TreasureMapShared11", "Event4TreasureMapShared12", "Event4TreasureMapShared13", "Event4TreasureMapShared14"];
    __s3local0.hasFrame = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeaqueenEventVO, __s1param0);
  SeaqueenEventVO.prototype.parseParamObject = function (__s5param0) {
    if (__s5param0.UL && __s5param0.UL.MID) {
      this._mapID = __s5param0.UL.MID;
    }
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
  };
  SeaqueenEventVO.prototype.openMerchantDialog = function (__s8param0, __s8param1) {
    this.executeOpenDialog(__s8param0, __dep_export_CastleSeaQueenEventDialog.CastleSeaQueenEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s8param1));
  };
  Object.defineProperty(SeaqueenEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SeaqueenEventVO.EVENT_BUILDING_WOD_ID;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASeasonEventVO.ASeasonEventVO.prototype, "eventBuildingWOD").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeaqueenEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SEA_QUEEN;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASeasonEventVO.ASeasonEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  SeaqueenEventVO.EVENT_BUILDING_WOD_ID = 396;
  return SeaqueenEventVO;
}(__dep_export_ASeasonEventVO.ASeasonEventVO);
exports.SeaqueenEventVO = __s0local0;
var __dep_export_CastleSeaQueenEventDialog = require("gge-module:export_CastleSeaQueenEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
