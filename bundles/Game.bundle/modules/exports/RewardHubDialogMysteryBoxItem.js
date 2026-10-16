Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RewardHubDialogMysteryBoxItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubDialogMysteryBoxItem, __s1param0);
  RewardHubDialogMysteryBoxItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc().mc_item0.btn_left, this.getItemMc().mc_item1.btn_left, this.getItemMc().mc_item2.btn_left, this.getItemMc().mc_item0.btn_right, this.getItemMc().mc_item1.btn_right, this.getItemMc().mc_item2.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  RewardHubDialogMysteryBoxItem.prototype.fill = function () {
    this.fillItem(0);
    this.fillItem(1);
    this.fillItem(2);
  };
  RewardHubDialogMysteryBoxItem.prototype.fillItem = function (__s9param0) {
    var __s9local0 = this.getItemMc()["mc_item" + __s9param0];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s9local0.mc_item);
    if (this.getBox(__s9param0)) {
      __s9local0.visible = true;
      __s9local0.btn_left.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openSingleBox_tooltip", [this.getBox(__s9param0).getNameTextId(), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, this.selectedKeyID).getNameTextId()]);
      if (this.selectedKeyID == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON) {
        __s9local0.btn_right.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openMultipleBoxes_tooltip", [this.getBox(__s9param0).getNameTextId(), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, this.selectedKeyID).getNameTextId()]);
      } else {
        __s9local0.btn_right.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openMultipleBoxes_needCommonKey_tooltip");
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s9local0.btn_left, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.selectedKeyID) > 0 || this.selectedKeyID == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s9local0.btn_right, this.selectedKeyID == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON);
      var __s9local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(130, 130));
      __s9local1.icon.showMysteryBoxDrawCounter = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips(__s9local0.mc_item).addTextfield(__s9local0.txt_copy).addIconMc(__s9local0.mc_item).addInfoBtn(__s9local0.btn_info), this.getBox(__s9param0), __s9local1);
    } else {
      __s9local0.visible = false;
    }
  };
  Object.defineProperty(RewardHubDialogMysteryBoxItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  RewardHubDialogMysteryBoxItem.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.getItemMc().mc_item0.btn_left:
          __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.getBox(0).lootBoxID, this.selectedKeyID, false);
          break;
        case this.getItemMc().mc_item1.btn_left:
          __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.getBox(1).lootBoxID, this.selectedKeyID, false);
          break;
        case this.getItemMc().mc_item2.btn_left:
          __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.getBox(2).lootBoxID, this.selectedKeyID, false);
          break;
        case this.getItemMc().mc_item0.btn_right:
          __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.getBox(0).lootBoxID, this.selectedKeyID, true);
          break;
        case this.getItemMc().mc_item1.btn_right:
          __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.getBox(1).lootBoxID, this.selectedKeyID, true);
          break;
        case this.getItemMc().mc_item2.btn_right:
          __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.getBox(2).lootBoxID, this.selectedKeyID, true);
      }
    }
  };
  RewardHubDialogMysteryBoxItem.prototype.getBox = function (__s21param0) {
    if (__s21param0 >= this.data.data.length) {
      return null;
    } else {
      return this.data.data[__s21param0];
    }
  };
  Object.defineProperty(RewardHubDialogMysteryBoxItem.prototype, "selectedKeyID", {
    get: function () {
      return this.data.selectedKey;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubDialogMysteryBoxItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.RewardHubDialogMysteryBoxItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
