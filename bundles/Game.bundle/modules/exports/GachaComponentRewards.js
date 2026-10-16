Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __dep_export_GachaEventMainDialog = require("gge-module:export_GachaEventMainDialog");
var __dep_export_GachaEventMainRewardItem = require("gge-module:export_GachaEventMainRewardItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaComponentRewards(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_back], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s3local1 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.disp.rewardList).addMaskMc(__s3local0.disp.rewardList.mc_items.mask).addMouseWheelAreaMc(__s3local0.disp.parent);
    var __s3local2 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_GachaEventMainRewardItem.GachaEventMainRewardItem, "GachaEventMain_RewardContainer", __dep_export_GachaEventMainDialog.GachaEventMainDialog.NAME);
    __s3local2.sliderInvisibleWhenNotScrollable = true;
    __s3local2.isMultiColumn = true;
    __s3local2.itemPaddingX = 60;
    __s3local2.itemPaddingY = 60;
    __s3local0._rewardList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s3local1, __s3local2);
    __s3local0._defaultPos = new __s0local0(__s3local0.disp.rewardList.x, __s3local0.disp.rewardList.y);
    __s3local0.disp.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentRewards, __s1param0);
  GachaComponentRewards.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.disp.visible = false;
    this._rewardList.onShow();
  };
  GachaComponentRewards.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._rewardList) {
      this._rewardList.onHide();
    }
  };
  GachaComponentRewards.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
  };
  GachaComponentRewards.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
  };
  GachaComponentRewards.prototype.onSpin = function (__s14param0) {
    var __s14local0 = this;
    if (this.disp.visible) {
      this.startRewardAnimation(__s14param0);
    } else {
      this.delayedSpin = function () {
        __s14local0.startRewardAnimation(__s14param0);
      };
    }
  };
  GachaComponentRewards.prototype.startRewardAnimation = function (__s20param0) {
    var __s20local0 = this;
    this.removeAnimations();
    var __s20local1 = new __dep_export_CollectableList.CollectableList();
    var __s20local2 = [];
    if (__s20param0.eventVO.eventId == this.getEventVO().eventId) {
      __s20param0.params.forEach(function (__s23param0, __s23param1) {
        var __s23local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s23param0.RR);
        if (__s23local0) {
          __s20local1.addList(__s23local0);
          __s23local0.list.forEach(function (__s26param0) {
            __s20local2.push(__s23param0.R);
          });
        }
      });
    }
    this._rewardList.updateWithNewData(__s20local1.list);
    var __s20local3 = __s20local1.length <= GachaComponentRewards.THRESHOLD_SHOW_RARITY;
    if (__s20local3) {
      this.disp.rewardList.x = this._defaultPos.x + (GachaComponentRewards.THRESHOLD_SHOW_RARITY - __s20local1.list.length) * 71;
      this.disp.rewardList.y = this._defaultPos.y + 71;
      __s20local2.forEach(function (__s29param0, __s29param1) {
        __s20local0.addRarityAnimation(__s29param0, __s29param1);
      });
    } else {
      this.disp.rewardList.x = this._defaultPos.x;
      this.disp.rewardList.y = this._defaultPos.y;
    }
    var __s20local4 = __s20local3 ? 0.2 : 0;
    this._rewardList.items.forEach(function (__s32param0, __s32param1) {
      if (__s32param0.isVisible) {
        var __s32local0 = __s20local0.disp.rewardList["anim_" + __s32param1];
        __s32param0.disp.alpha = 0;
        __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s32param0.disp, 0.5, {
          alpha: 0
        }, {
          alpha: 1,
          delay: __s20local4 * __s32param1,
          ease: __dep_exact_608de47b6498f9b0_1.Linear.easeIn,
          onStart: function () {
            if (__s32local0 && __s32local0.children.length > 0) {
              __s32local0.getChildAt(0).doWhenLoaded(function (__s38param0) {
                __s38param0.currentshownDisplayObject.gotoAndPlay(1);
              });
            }
          }
        });
      }
    });
    this.disp.visible = true;
  };
  GachaComponentRewards.prototype.addRarityAnimation = function (__s40param0, __s40param1) {
    if (!(__s40param1 >= GachaComponentRewards.THRESHOLD_SHOW_RARITY)) {
      var __s40local0;
      var __s40local1;
      var __s40local2 = this.disp.rewardList["anim_" + __s40param1];
      switch (__s40param0) {
        case 1:
          __s40local0 = "_Common";
          break;
        case 2:
          __s40local0 = "_Rare";
          break;
        case 3:
          __s40local0 = "_Epic";
          break;
        case 4:
          __s40local0 = "_Legendary";
          break;
        default:
          __s40local0 = "_Common";
      }
      var __s40local3 = "Rewards_Animation_" + this.getEventVO().assetName();
      __s40local1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s40local3) ? new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s40local3, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s40local3), null, 24, false) : new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("RewardAnimation" + __s40local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Rewards_Animation"), null, 24, false);
      __s40local2.addChild(__s40local1);
    }
  };
  GachaComponentRewards.prototype.removeAnimations = function () {
    for (var __s44local0 = 0; __s44local0 < GachaComponentRewards.THRESHOLD_SHOW_RARITY; __s44local0++) {
      var __s44local1 = this.disp.rewardList["anim_" + __s44local0];
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s44local1);
    }
  };
  GachaComponentRewards.prototype.onSpinComplete = function (__s48param0) {
    if (this.delayedSpin) {
      this.delayedSpin();
      this.delayedSpin = null;
    }
  };
  GachaComponentRewards.prototype.onClick = function (__s51param0) {
    __s1param0.prototype.onClick.call(this, __s51param0);
    switch (__s51param0.target) {
      case this.disp.btn_back:
        this.removeAnimations();
        this.disp.visible = false;
    }
  };
  GachaComponentRewards.prototype.getEventVO = function () {
    return this._params[0];
  };
  GachaComponentRewards.THRESHOLD_SHOW_RARITY = 3;
  return GachaComponentRewards;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentRewards = __s0local1;
