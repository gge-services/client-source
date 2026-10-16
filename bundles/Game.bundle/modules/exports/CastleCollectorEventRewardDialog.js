Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericRewardDialog = require("gge-module:export_CastleGenericRewardDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGenericRewardsComponent = require("gge-module:export_CastleGenericRewardsComponent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function CastleCollectorEventRewardDialog() {
    return __s1param0.call(this, CastleCollectorEventRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectorEventRewardDialog, __s1param0);
  CastleCollectorEventRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._rewards = new __dep_export_CastleGenericRewardsComponent.CastleGenericRewardsComponent(this.dialogDisp.mc_items, true, true, null, function (__s7param0) {
      __s7param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = __s7param0.itemVE && __s7param0.itemVE.textfieldBackgroundVisible() ? 0 : 5;
    });
  };
  CastleCollectorEventRewardDialog.prototype.initDialog = function () {
    var __s9local0;
    var __s9local1;
    if (this.dialogProperties.rewardList && this.dialogProperties.rewardList.length > 0) {
      __s9local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.gotRewardTitleTextId));
      __s9local1 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.gotRewardCopyTextId, [this.dialogProperties.points]);
    } else {
      __s9local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.noRewardTitleTextId));
      __s9local1 = this.makeSpecialRewardLocalizedTextVO(this.noRewardCopyTextId, this.dialogProperties.points, this.dialogProperties.ownRank);
    }
    var __s9local2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, __s9local0);
    __s9local2.autoFitToBounds = true;
    __s9local2.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, __s9local1).autoFitToBounds = true;
  };
  CastleCollectorEventRewardDialog.prototype.updateRewards = function () {
    this._rewards.onShow();
    if (this.dialogProperties.rewardList && this.dialogProperties.rewardList.length > 0) {
      this.dialogProperties.rewardList.sort(__dep_export_ClientConstSort.ClientConstSort.sortCombinedEventRewards);
      this._rewards.updateWithNewData(this.dialogProperties.rewardList);
    }
  };
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "eventSuffix", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.collectEventData.getCollectInfoVOByID(this.dialogProperties.optionID).collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "dialog_collector_eventEnd_title_" + this.eventSuffix;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "dialog_collector_eventReward_copy_" + this.eventSuffix;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return this.firstPlaceTitleTextId;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXTitleTextId").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return this.firstPlaceCopyTextId;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextId").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.points];
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "topXCopyTextReplacements").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return this.firstPlaceTitleTextId;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardTitleTextId").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return this.firstPlaceCopyTextId;
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "gotRewardCopyTextId").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return this.firstPlaceCopyTextId;
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardTitleTextId").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectorEventRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "dialog_collector_eventNoReward_copy_" + this.eventSuffix;
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog.prototype, "noRewardCopyTextId").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleCollectorEventRewardDialog.NAME = "CastleGenericRewardsDialog";
  return CastleCollectorEventRewardDialog;
}(__dep_export_CastleGenericRewardDialog.CastleGenericRewardDialog);
exports.CastleCollectorEventRewardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
