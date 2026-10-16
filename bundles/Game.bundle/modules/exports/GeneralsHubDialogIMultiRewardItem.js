Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __s0local0 = createjs.Point;
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __s0local1 = function (__s1param0) {
  function GeneralsHubDialogIMultiRewardItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubDialogIMultiRewardItem, __s1param0);
  GeneralsHubDialogIMultiRewardItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this.clipLists = [new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRendererList.CollectableRendererList()];
  };
  GeneralsHubDialogIMultiRewardItem.prototype.fill = function () {
    for (var __s7local0 = 0; __s7local0 < 4; __s7local0++) {
      var __s7local1 = this.rewards.length > __s7local0 ? this.rewards[__s7local0] : null;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc["mc_icon" + __s7local0]);
      this.itemMc["mc_item" + __s7local0].visible = false;
      if (__s7local1) {
        this.clipLists[__s7local0].destroyCollectableRenderList();
        if (this.showCurrencyAsGeneral(__s7local1.RW)) {
          var __s7local2 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralXMLVOByTokenID(__s7local1.RW.id);
          var __s7local3 = __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(__s7local2.generalID);
          new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s7local3, this.itemMc["mc_icon" + __s7local0], false, false, false, true, null, true, false, false, true);
          this.itemMc["mc_icon" + __s7local0].getChildAt(0).y = -50;
          this.itemMc["mc_icon" + __s7local0].scaleX = this.itemMc["mc_icon" + __s7local0].scaleY = 1.9;
          this.itemMc["mc_icon" + __s7local0].mouseChildren = false;
          this.itemMc["mc_icon" + __s7local0].toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s7local1.RW.amount), __s7local1.RW.getNameTextId()]);
        } else {
          this.itemMc["mc_item" + __s7local0].visible = true;
          var __s7local4 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(173, 173));
          __s7local4.icon.unitLevelDimension = new __s0local0(70, 70);
          __s7local4.icon.unitLevelOffset = new __s0local0(-70, -70);
          var __s7local5 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.itemMc["mc_item" + __s7local0].mc_item).addIconMc(this.itemMc["mc_item" + __s7local0].mc_item.mc_icon).addBuildingLevelMc(this.itemMc["mc_item" + __s7local0].mc_item.mc_buildingLevel).addTextfieldBgMc(this.itemMc["mc_item" + __s7local0].mc_item.text_bg).addTextfield(this.itemMc["mc_item" + __s7local0].mc_item.txt_text).addInfoBtn(this.itemMc["mc_item" + __s7local0].btn_info);
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.clipLists[__s7local0], __s7local5, __s7local1.RW, __s7local4);
        }
      }
    }
  };
  GeneralsHubDialogIMultiRewardItem.prototype.showCurrencyAsGeneral = function (__s14param0) {
    if (!__s14param0) {
      return false;
    }
    if (__s14param0.itemType != __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY) {
      return false;
    }
    var __s14local0 = __dep_export_CastleModel.CastleModel.generalsData.getGeneralXMLVOByTokenID(__s14param0.id);
    if (!__s14local0) {
      return false;
    }
    var __s14local1 = __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(__s14local0.generalID);
    var __s14local2 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s14param0.id);
    return (!__s14local1 || !__s14local1.isUnlocked) && __s14local2 >= __s14local0.rarity.unlockCosts || !!__s14local1 && !!__s14local1.isUnlocked && !!(__s14local1.requiredShards > 0) && !!(__s14local2 >= __s14local1.requiredShards);
  };
  Object.defineProperty(GeneralsHubDialogIMultiRewardItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubDialogIMultiRewardItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsHubDialogIMultiRewardItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.GeneralsHubDialogIMultiRewardItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
