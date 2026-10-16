Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SWishingWellCommandVO = require("gge-module:export_C2SWishingWellCommandVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRubyWishingWellData = require("gge-module:export_CastleRubyWishingWellData");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_RingMenuButtonGacha = require("gge-module:export_RingMenuButtonGacha");
var __dep_export_RingMenuButtonGeneralsHub = require("gge-module:export_RingMenuButtonGeneralsHub");
var __dep_export_RingMenuButtonGeneralsOverview = require("gge-module:export_RingMenuButtonGeneralsOverview");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function RubyWishingWellFixedPositionBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RubyWishingWellFixedPositionBuildingVE, __s1param0);
  RubyWishingWellFixedPositionBuildingVE.prototype.update = function (__s5param0) {
    __s1param0.prototype.update.call(this, __s5param0);
    if (this.additionalClips.containsClipsByType(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK2) != this.shouldHaveExclamationMark()) {
      this.updateAdditionalClips();
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.rubyWishingWellData.addEventListener(__dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onWishingWellDataUpdated));
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.rubyWishingWellData.removeEventListener(__dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.UPDATE, this.bindFunction(this.onWishingWellDataUpdated));
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.createAdditionalClips = function () {
    if (this.shouldHaveExclamationMark()) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK2);
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.createStatusIcons = function () {
    if (__dep_export_CastleModel.CastleModel.rubyWishingWellData.isRunning()) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PROGRESS_BAR_RUBY_WISH_WELL);
    } else if (__dep_export_CastleModel.CastleModel.rubyWishingWellData.isReadyToCollect()) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.RUBY_WISH_WELL_COLLECTABLE);
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.getRingMenuButtons = function () {
    var __s19local0 = [];
    __s19local0.push(new __dep_export_RingMenuButtonUpgradeBuilding.RingMenuButtonUpgradeBuilding());
    __s19local0.push(new __dep_export_RingMenuButtonInfo.RingMenuButtonInfo());
    __s19local0.push(new __dep_export_RingMenuButtonWishingWell.RingMenuButtonWishingWell());
    __s19local0.push(new __dep_export_RingMenuButtonConstructionHelpRequest.RingMenuButtonConstructionHelpRequest());
    __s19local0.push(new __dep_export_RingMenuButtonGeneralsHub.RingMenuButtonGeneralsHub());
    __s19local0.push(new __dep_export_RingMenuButtonGeneralsOverview.RingMenuButtonGeneralsOverview());
    __s19local0.push(new __dep_export_RingMenuButtonGacha.RingMenuButtonGacha());
    return __s19local0;
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.onWishingWellDataUpdated = function (__s21param0) {
    if (__dep_export_CastleModel.CastleModel.rubyWishingWellData.isWaitingForCollectResponse) {
      var __s21local0 = this.getGlobalDispPosTopCenter();
      var __s21local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.rubyWishingWellData.getCurrentNode().entryCosts * __dep_export_CastleRubyWishingWellData.CastleRubyWishingWellData.MULTIPLIER);
      this.isoRenderer.isoData.updater.spawnCollectableFadeEffect(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s21local1), __s21local0);
    }
    __dep_export_CastleModel.CastleModel.rubyWishingWellData.isWaitingForCollectResponse = false;
    this.updateDisp();
    this.updateAdditionalClips();
    this.updateStatusIcon();
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.onMouseClick = function () {
    if (__dep_export_CastleModel.CastleModel.rubyWishingWellData.isReadyToCollect() && !__dep_export_CastleModel.CastleModel.rubyWishingWellData.isWaitingForCollectResponse) {
      __dep_export_CastleModel.CastleModel.rubyWishingWellData.isWaitingForCollectResponse = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SWishingWellCommandVO.C2SWishingWellCommandVO(__dep_exact_26a421b704832cff.WishingWellConst.OPTION_COLLECT_RUBY_WISHING_WELL));
    }
  };
  RubyWishingWellFixedPositionBuildingVE.prototype.shouldHaveExclamationMark = function () {
    return this.buildingVO.level <= 0 || __dep_export_CastleModel.CastleModel.rubyWishingWellData.isReadyToStart() && __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_WISHING_WELL_COIN) >= __dep_export_CastleModel.CastleModel.rubyWishingWellData.getCurrentNode().neededWishingWellCoins;
  };
  return RubyWishingWellFixedPositionBuildingVE;
}(require("gge-module:export_AFixedPositionBuildingVE").AFixedPositionBuildingVE);
exports.RubyWishingWellFixedPositionBuildingVE = __s0local0;
var __dep_export_RingMenuButtonWishingWell = require("gge-module:export_RingMenuButtonWishingWell");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __dep_export_RingMenuButtonUpgradeBuilding = require("gge-module:export_RingMenuButtonUpgradeBuilding");
var __dep_export_RingMenuButtonInfo = require("gge-module:export_RingMenuButtonInfo");
var __dep_export_RingMenuButtonConstructionHelpRequest = require("gge-module:export_RingMenuButtonConstructionHelpRequest");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
