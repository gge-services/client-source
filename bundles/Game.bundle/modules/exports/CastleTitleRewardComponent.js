Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTitleRewardComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._alreadyAchieved = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).disp = __s3param0;
    __s3local0.rewardListComponent = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(__s3param0.mc_rewardList, CastleTitleRewardComponent.REWARD_LIST_ICON_DIM);
    __s3local0.itxt_effectDescription = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_effectReward.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO());
    __s3local0.itxt_effectDescription.autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleRewardComponent, __s1param0);
  CastleTitleRewardComponent.prototype.show = function (__s5param0, __s5param1) {
    this.title = __s5param0;
    this._alreadyAchieved = __s5param1;
    if (__s5param0.boni && __s5param0.hasEffects()) {
      this.renderByEffect();
    } else {
      this.renderByRewardList();
    }
  };
  CastleTitleRewardComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.rewardListComponent.destroy();
  };
  CastleTitleRewardComponent.prototype.renderByEffect = function () {
    this.disp.mc_effectReward.visible = true;
    this.disp.mc_rewardList.visible = false;
    this.itxt_effectDescription.textContentVO.textId = this.title.descriptionTextVO.textId;
    this.itxt_effectDescription.textContentVO.textReplacements = this.title.descriptionTextVO.textReplacements;
    if (this.title.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL])) {
      this.showUnitIcon();
    } else {
      this.showEffectIcon();
    }
  };
  CastleTitleRewardComponent.prototype.showUnitIcon = function () {
    this.disp.mc_effectReward.mc_effectIcon.visible = false;
    this.disp.mc_effectReward.mc_item.visible = true;
    this.disp.mc_effectReward.btn_info.visible = true;
    var __s15local0 = 0;
    var __s15local1 = this.title.boni[0].effectValue;
    __s15local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15local1, "EffectValueWodID") ? __dep_exact_f855840627e6e145.int(__s15local1.firstWodID) : __dep_exact_f855840627e6e145.int(__s15local1.strength);
    var __s15local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, CastleTitleRewardComponent.EFFECT_ICON_DIM);
    __s15local2.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_effectReward.mc_item).addInfoBtn(this.disp.mc_effectReward.btn_info), new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(__s15local0, 1), __s15local2);
  };
  CastleTitleRewardComponent.prototype.showEffectIcon = function () {
    this.disp.mc_effectReward.mc_item.visible = false;
    this.disp.mc_effectReward.btn_info.visible = false;
    this.disp.mc_effectReward.mc_effectIcon.visible = false;
    var __s17local0 = this.title.boni[0].effect.name;
    for (var __s17local1 = 0, __s17local2 = this.disp.mc_effectReward.mc_effectIcon.labels; __s17local1 < __s17local2.length; __s17local1++) {
      var __s17local3 = __s17local2[__s17local1];
      if (__s17local3 !== undefined && __s17local3.name == __s17local0) {
        this.disp.mc_effectReward.mc_effectIcon.visible = true;
        this.disp.mc_effectReward.mc_effectIcon.gotoAndStop(__s17local0);
        break;
      }
    }
  };
  CastleTitleRewardComponent.prototype.renderByRewardList = function () {
    this.disp.mc_effectReward.visible = false;
    this.disp.mc_rewardList.visible = true;
    var __s22local0 = __dep_export_CastleModel.CastleModel.rewardData.getListById(this.title.rewardID);
    this.rewardListComponent.showRewards(__s22local0);
    for (var __s22local1 = 0; __s22local1 < 3; __s22local1++) {
      this.disp.mc_rewardList["item" + __s22local1].mc_checkmark.visible = this._alreadyAchieved;
    }
  };
  CastleTitleRewardComponent.__initialize_static_members = function () {
    CastleTitleRewardComponent.REWARD_LIST_ICON_DIM = new __s0local0(40, 27.4);
    CastleTitleRewardComponent.EFFECT_ICON_DIM = new __s0local0(34.9, 40);
  };
  return CastleTitleRewardComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleTitleRewardComponent = __s0local1;
var __dep_export_CollectableItemUnitVO = require("gge-module:export_CollectableItemUnitVO");
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
