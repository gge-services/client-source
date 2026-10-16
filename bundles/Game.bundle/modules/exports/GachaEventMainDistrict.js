Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_GachaComponentAnimation = require("gge-module:export_GachaComponentAnimation");
var __dep_export_GachaComponentBackground = require("gge-module:export_GachaComponentBackground");
var __dep_export_GachaComponentCurrency = require("gge-module:export_GachaComponentCurrency");
var __dep_export_GachaComponentLevelRewards = require("gge-module:export_GachaComponentLevelRewards");
var __dep_export_GachaComponentMerchantButton = require("gge-module:export_GachaComponentMerchantButton");
var __dep_export_GachaComponentMilestones = require("gge-module:export_GachaComponentMilestones");
var __dep_export_GachaComponentPull = require("gge-module:export_GachaComponentPull");
var __dep_export_GachaComponentRanking = require("gge-module:export_GachaComponentRanking");
var __dep_export_GachaComponentRewards = require("gge-module:export_GachaComponentRewards");
var __s0local0 = function (__s1param0) {
  function GachaEventMainDistrict(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._gachaComponents = [];
    __s3local0.addGachaComponent(__dep_export_GachaComponentBackground.GachaComponentBackground, __s3param0.mc_bg);
    __s3local0.addGachaComponent(__dep_export_GachaComponentAnimation.GachaComponentAnimation, __s3param0.mc_animation);
    __s3local0.addGachaComponent(__dep_export_GachaComponentCurrency.GachaComponentCurrency, __s3param0.mc_currency);
    __s3local0.addGachaComponent(__dep_export_GachaComponentMerchantButton.GachaComponentMerchantButton, __s3param0.btn_merchant);
    __s3local0.addGachaComponent(__dep_export_GachaComponentRanking.GachaComponentRanking, __s3param0.mc_ranking);
    __s3local0.addGachaComponent(__dep_export_GachaComponentLevelRewards.GachaComponentLevelRewards, __s3param0.mc_levelRewards);
    __s3local0.addGachaComponent(__dep_export_GachaComponentPull.GachaComponentPull, __s3param0.mc_pull, "cashoffers");
    __s3local0.addGachaComponent(__dep_export_GachaComponentMilestones.GachaComponentMilestones, __s3param0.mc_milestones);
    __s3local0.addGachaComponent(__dep_export_GachaComponentRewards.GachaComponentRewards, __s3param0.mc_rewards);
    __dep_exact_9e901e8e2483a22f.loadAsset("Rewards_Animation").then(function (__s5param0) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.SHINE_ANIMATION_LOADED, null, null));
    });
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaEventMainDistrict, __s1param0);
  GachaEventMainDistrict.prototype.addGachaComponent = function (__s7param0, __s7param1, __s7param2 = null) {
    if (__s7param1) {
      if (__s7param2) {
        this._gachaComponents.push(new __s7param0(__s7param1, __s7param2));
      } else {
        this._gachaComponents.push(new __s7param0(__s7param1));
      }
    }
  };
  GachaEventMainDistrict.prototype.show = function (__s12param0) {
    __s1param0.prototype.show.call(this, __s12param0);
    this._gachaComponents.forEach(function (__s14param0) {
      __s14param0.show(__s12param0);
    });
    this.updatePosition();
  };
  GachaEventMainDistrict.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._gachaComponents.forEach(function (__s18param0) {
      __s18param0.onHide();
    });
  };
  GachaEventMainDistrict.prototype.updatePosition = function () {
    var __s20local0 = this.getEventVO().pointThresholds.length > 0 ? GachaEventMainDistrict.MILESTONE_OFFSET_X : 0;
    this.moveDisp(this.subLayerDisp.mc_bg, __s20local0);
    this.moveDisp(this.subLayerDisp.mc_animation, __s20local0);
    this.moveDisp(this.subLayerDisp.mc_levelRewards, __s20local0);
    this.moveDisp(this.subLayerDisp.mc_pull, __s20local0);
  };
  GachaEventMainDistrict.prototype.moveDisp = function (__s22param0, __s22param1) {
    __s22param0.originalX ||= __s22param0.x;
    __s22param0.x = __s22param0.originalX + __s22param1;
  };
  GachaEventMainDistrict.prototype.getEventVO = function () {
    return this._params[0];
  };
  GachaEventMainDistrict.MILESTONE_OFFSET_X = 0;
  return GachaEventMainDistrict;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.GachaEventMainDistrict = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
