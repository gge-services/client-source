Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoServerCommands() {}
  IsoServerCommands.prototype.requestWallUpgrade = function (__s5param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoUpgradeDefenceVO.C2SIsoUpgradeDefenceVO(__s5param0.objects.defences.wallInfo.objectId));
  };
  IsoServerCommands.prototype.requestMoatUpgrade = function (__s7param0) {
    var __s7local0 = __s7param0.objects.defences.moat;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoUpgradeObjectVO.C2SIsoUpgradeObjectVO(__s7local0.objectId, __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(__s7local0.upgradeWodID, true)));
  };
  IsoServerCommands.prototype.buyObjectFromShop = function (__s9param0, __s9param1, __s9param2, __s9param3 = -1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoBuyObjectVO.C2SIsoBuyObjectVO(__s9param0, __s9param1.x, __s9param1.y, __s9param2, __dep_export_CastleModel.CastleModel.privateOfferData.getPrivateOfferIDbyWodID(__s9param0, false), false, __s9param3));
  };
  IsoServerCommands.prototype.placeCustomInventoryObject = function (__s11param0, __s11param1, __s11param2) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoPlaceCustomInventoryObjectVO.C2SIsoPlaceCustomInventoryObjectVO(__s11param0, __s11param1.x, __s11param1.y, __s11param2));
  };
  IsoServerCommands.prototype.buyMoat = function (__s13param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoBuyObjectVO.C2SIsoBuyObjectVO(__s13param0, 0, 0, 0, __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(__s13param0, false)));
  };
  IsoServerCommands.prototype.buyExpansion = function (__s15param0, __s15param1, __s15param2) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoBuyExpansionVO.C2SIsoBuyExpansionVO(__s15param0.x, __s15param0.y, __s15param1, __s15param2.id));
  };
  IsoServerCommands.prototype.repairBuilding = function (__s17param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoRepairBuildingVO.C2SIsoRepairBuildingVO(__s17param0));
  };
  IsoServerCommands.prototype.demolishBuilding = function (__s19param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoDisassembleObjectVO.C2SIsoDisassembleObjectVO(__s19param0));
  };
  IsoServerCommands.prototype.storeBuildingToLocalInventory = function (__s21param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoStoreObjectVO.C2SIsoStoreObjectVO(__s21param0));
  };
  IsoServerCommands.prototype.fastCompleteBuilding = function (__s23param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoFastCompleteObjectVO.C2SIsoFastCompleteObjectVO(__s23param0.vo.objectId, __dep_export_CastleModel.CastleModel.specialEventData.hasSkipForFree(__s23param0) ? 1 : 0));
  };
  IsoServerCommands.prototype.upgradeBuilding = function (__s25param0, __s25param1) {
    var __s25local0;
    __s25local0 = __s25param1 >= __dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.MIN_WOD_ID && __s25param1 <= __dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.MAX_WOD_ID ? new __dep_export_C2SWishingWellCommandVO.C2SWishingWellCommandVO(__dep_exact_26a421b704832cff.WishingWellConst.OPTION_UPGRADE_RUBY_WISHING_WELL) : new __dep_export_C2SIsoUpgradeObjectVO.C2SIsoUpgradeObjectVO(__s25param0, __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(__s25param1, true));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s25local0);
  };
  IsoServerCommands.prototype.moveObject = function (__s27param0, __s27param1, __s27param2, __s27param3) {
    if (__s27param3) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRemoveFromDistrictVO.C2SRemoveFromDistrictVO(__s27param0, __s27param1.x, __s27param1.y, __s27param2));
    } else {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoMoveObjectVO.C2SIsoMoveObjectVO(__s27param0, __s27param1.x, __s27param1.y, __s27param2));
    }
  };
  IsoServerCommands.prototype.collectTax = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCollectTaxVO.C2SCollectTaxVO());
  };
  IsoServerCommands.prototype.collectResourcePool = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoResourceCitizenVO.C2SIsoResourceCitizenVO());
  };
  return IsoServerCommands;
}();
exports.IsoServerCommands = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SWishingWellCommandVO = require("gge-module:export_C2SWishingWellCommandVO");
var __dep_export_C2SIsoBuyExpansionVO = require("gge-module:export_C2SIsoBuyExpansionVO");
var __dep_export_C2SIsoBuyObjectVO = require("gge-module:export_C2SIsoBuyObjectVO");
var __dep_export_C2SIsoDisassembleObjectVO = require("gge-module:export_C2SIsoDisassembleObjectVO");
var __dep_export_C2SIsoFastCompleteObjectVO = require("gge-module:export_C2SIsoFastCompleteObjectVO");
var __dep_export_C2SIsoMoveObjectVO = require("gge-module:export_C2SIsoMoveObjectVO");
var __dep_export_C2SIsoPlaceCustomInventoryObjectVO = require("gge-module:export_C2SIsoPlaceCustomInventoryObjectVO");
var __dep_export_C2SIsoRepairBuildingVO = require("gge-module:export_C2SIsoRepairBuildingVO");
var __dep_export_C2SIsoResourceCitizenVO = require("gge-module:export_C2SIsoResourceCitizenVO");
var __dep_export_C2SIsoStoreObjectVO = require("gge-module:export_C2SIsoStoreObjectVO");
var __dep_export_C2SIsoUpgradeDefenceVO = require("gge-module:export_C2SIsoUpgradeDefenceVO");
var __dep_export_C2SIsoUpgradeObjectVO = require("gge-module:export_C2SIsoUpgradeObjectVO");
var __dep_export_C2SCollectTaxVO = require("gge-module:export_C2SCollectTaxVO");
var __dep_export_C2SRemoveFromDistrictVO = require("gge-module:export_C2SRemoveFromDistrictVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRubyWishingWellData = require("gge-module:export_CastleRubyWishingWellData");
