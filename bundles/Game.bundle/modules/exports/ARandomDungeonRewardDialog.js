Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ARandomDungeonRewardDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0.emptyRewardPosX = 0;
    __s3local0.rewardOffset = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ARandomDungeonRewardDialog, __s1param0);
  ARandomDungeonRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.centeredRewardListComponent = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(this.dialogDisp.mc_rewards, new __s0local0(34, 34), __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, this.bindFunction(this.preRenderFunc));
    this.emptyRewardPosX = this.dialogDisp.mc_rewardsEmpty.x;
    this.rewardOffset = (this.dialogDisp.mc_rewardsEmpty.emptyItem1.x - this.dialogDisp.mc_rewardsEmpty.emptyItem0.x) / 2;
  };
  ARandomDungeonRewardDialog.prototype.preRenderFunc = function (__s7param0) {
    if (__s7param0.itemVO) {
      var __s7local0 = __s7param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      switch (__s7param0.itemVO.itemType) {
        case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS:
        case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE:
        case __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM:
        case __dep_export_CollectableEnum.CollectableEnum.GEM:
        case __dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM:
        case __dep_export_CollectableEnum.CollectableEnum.BOOSTER:
        case __dep_export_CollectableEnum.CollectableEnum.BUILDING:
        case __dep_export_CollectableEnum.CollectableEnum.EXTINGUISH_FIRE:
        case __dep_export_CollectableEnum.CollectableEnum.ALLIANCE_GIFT:
        case __dep_export_CollectableEnum.CollectableEnum.DUNGEON_PROTECTION:
          __s7local0.transform.offset.y = 5;
      }
    }
  };
  ARandomDungeonRewardDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.centeredRewardListComponent.showRewards(this.rewards);
    if (this.rewards.length % 2) {
      this.dialogDisp.mc_rewardsEmpty.mc_lastEmptyItem.visible = false;
      this.dialogDisp.mc_rewardsEmpty.x = this.emptyRewardPosX + this.rewardOffset;
    } else {
      this.dialogDisp.mc_rewardsEmpty.mc_lastEmptyItem.visible = true;
      this.dialogDisp.mc_rewardsEmpty.x = this.emptyRewardPosX;
    }
  };
  Object.defineProperty(ARandomDungeonRewardDialog.prototype, "rewards", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  return ARandomDungeonRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ARandomDungeonRewardDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
