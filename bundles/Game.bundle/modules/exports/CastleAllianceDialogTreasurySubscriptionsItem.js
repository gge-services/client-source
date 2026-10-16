Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleAllianceDialogTreasurySubscriptionsItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0._seriesId = -1;
    __s3local0._seriesBuffs = [];
    __s3param0.addChild(__s3local0.disp);
    __s3local0._itemClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleAllianceDialogTreasurySubscriptionsItem.ASSET_CLIP_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_CastleAllianceDialog.CastleAllianceDialog.NAME));
    __s3local0.disp.addChild(__s3local0._itemClip);
    __s3local0._seriesId = __s3param1;
    __s3local0._seriesBuffs = __dep_export_CastleModel.CastleModel.subscriptionData.getPackageSeriesBuffs(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE, __s3param1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasurySubscriptionsItem, __s1param0);
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.update = function () {
    this.updateIcon();
    this.updateText();
    this.updateProgressBar();
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.updateIcon = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.itemMc.mc_icon).addIconMc(this.itemMc.mc_icon), new __dep_export_CollectableItemEffectVO.CollectableItemEffectVO(this.seriesBuffs[0].boni[0].effect.effectID), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local1(70, 70)));
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.updateText = function () {
    var __s9local0 = this.seriesBuffs[0];
    var __s9local1 = this.getCurrentBuffVO();
    var __s9local2 = this.getNextBuffVO();
    var __s9local3 = __s9local0.boni[0].effect.name;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_text1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("subscription_effect_description_" + __s9local3, __s9local1 ? __s9local1.boni[0].effectValue.textReplacements : [0]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_text2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local2 ? "dialog_alliance_stageBonus_next_" + __s9local3 : "dialog_alliance_treasury_subscription_subEffect_max", __s9local2 ? __s9local2.boni[0].effectValue.textReplacements : [0]));
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.updateProgressBar = function () {
    var __s11local0 = this.getCurrentBuffVO();
    var __s11local1 = this.getNextBuffVO();
    var __s11local2 = __dep_exact_f855840627e6e145.int(__s11local1 ? __dep_export_CastleModel.CastleModel.subscriptionData.allianceSubscriberCount : __s11local0.requiredMembers);
    var __s11local3 = __dep_exact_f855840627e6e145.int(__s11local1 ? __s11local1.requiredMembers : __s11local0.requiredMembers);
    new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.itemMc.mc_progress, 504).setProgressByPercent(__s11local2 / __s11local3);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_progress.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s11local1 ? "dialog_alliance_treasury_subscription_subEffect_subscriberCounter" : "dialog_alliance_treasury_subscription_subEffect_subscriberCounterMax", [__s11local2, __s11local3]));
  };
  Object.defineProperty(CastleAllianceDialogTreasurySubscriptionsItem.prototype, "itemMc", {
    get: function () {
      return this._itemClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getCurrentBuffIndex = function () {
    var __s15local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.subscriptionData.allianceSubscriberCount);
    var __s15local1 = -1;
    for (var __s15local2 = 0; __s15local2 < this.seriesBuffs.length; ++__s15local2) {
      var __s15local3 = this.seriesBuffs[__s15local2];
      if (__s15local1 < 0) {
        if (__s15local0 >= __s15local3.requiredMembers) {
          __s15local1 = __s15local2;
        }
      } else if (__s15local0 >= __s15local3.requiredMembers && __s15local3.requiredMembers >= this.seriesBuffs[__s15local1].requiredMembers) {
        __s15local1 = __s15local2;
      }
    }
    return __s15local1;
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getBuffVOSafe = function (__s22param0) {
    if (__s22param0 >= 0 && __s22param0 < this.seriesBuffs.length) {
      return this.seriesBuffs[__s22param0];
    } else {
      return null;
    }
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getCurrentBuffVO = function () {
    return this.getBuffVOSafe(this.getCurrentBuffIndex());
  };
  CastleAllianceDialogTreasurySubscriptionsItem.prototype.getNextBuffVO = function () {
    return this.getBuffVOSafe(this.getCurrentBuffIndex() + 1);
  };
  Object.defineProperty(CastleAllianceDialogTreasurySubscriptionsItem.prototype, "seriesId", {
    get: function () {
      return this._seriesId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogTreasurySubscriptionsItem.prototype, "seriesBuffs", {
    get: function () {
      return this._seriesBuffs;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogTreasurySubscriptionsItem.ASSET_CLIP_NAME = "CastleAlliance_Treasury_Item_Subscriptions";
  return CastleAllianceDialogTreasurySubscriptionsItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleAllianceDialogTreasurySubscriptionsItem = __s0local2;
var __dep_export_CollectableItemEffectVO = require("gge-module:export_CollectableItemEffectVO");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
