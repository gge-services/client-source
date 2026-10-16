Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SConstructionItemInventorySpaceLeftVO = require("gge-module:export_C2SConstructionItemInventorySpaceLeftVO");
var __dep_export_C2SGetLostAndFoundListVO = require("gge-module:export_C2SGetLostAndFoundListVO");
var __dep_export_CastleConstructionItemsEvent = require("gge-module:export_CastleConstructionItemsEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleLostAndFoundDataEvent = require("gge-module:export_CastleLostAndFoundDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function LostAndFoundDialog() {
    var __s3local0 = this;
    __s3local0._itemVOs = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, LostAndFoundDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LostAndFoundDialog, __s1param0);
  LostAndFoundDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_lostAndFound_title")));
    this.emptyListTxt = this.textFieldManager.registerTextField(this.dialogDisp.txt_noReward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_lostAndFound_empty"));
    this.emptyListTxt.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_amount.toolTipText = "dialog_lostAndFoundSpace_tooltip";
    this.dialogDisp.mc_eq.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_gem.toolTipText = "dialog_gemSpace_tooltip";
    this.dialogDisp.mc_constructionItem.toolTipText = "dialog_buildItemsSpace_tooltip";
    this.dialogDisp.mc_deco.toolTipText = "dialog_uniqueDecosSpace_tooltip";
    this.dialogDisp.mc_received.toolTipText = "dialog_lostAndFound_received_tt";
    this.dialogDisp.mc_timeLeft.toolTipText = "dialog_lostAndFound_time_tt";
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_LostAndFoundListItem.LostAndFoundListItem, LostAndFoundDialog.ASSET_CLIP_NAME_GRID_ITEM, LostAndFoundDialog.NAME);
    __s5local0.itemPaddingY = 4;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_mask), __s5local0);
  };
  LostAndFoundDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SConstructionItemInventorySpaceLeftVO.C2SConstructionItemInventorySpaceLeftVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLostAndFoundListVO.C2SGetLostAndFoundListVO());
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onEqInventorySpaceUpdate));
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventorySpaceUpdate));
    this.controller.addEventListener(__dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onLostAndFoundDataUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  LostAndFoundDialog.prototype.updateDialog = function () {
    this._scrollList.onShow();
    this.initListItems();
    this.updateItems();
    this.updateStorage();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_received.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._itemVOs.length > 0 ? "dialog_lostAndFound_received" : " "));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_timeLeft.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._itemVOs.length > 0 ? "dialog_lostAndFound_time" : " "));
  };
  LostAndFoundDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdated));
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onEqInventorySpaceUpdate));
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventorySpaceUpdate));
    this.controller.removeEventListener(__dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onLostAndFoundDataUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  LostAndFoundDialog.prototype.onLostAndFoundDataUpdated = function (__s14param0) {
    this.updateDialog();
  };
  LostAndFoundDialog.prototype.onTimerTick = function (__s16param0 = null) {
    this._scrollList.items.forEach(LostAndFoundDialog.updateItemTimer);
  };
  LostAndFoundDialog.updateItemTimer = function (__s18param0) {
    var __s18local0 = [];
    for (var __s18local1 = 1; __s18local1 < arguments.length; __s18local1++) {
      __s18local0[__s18local1 - 1] = arguments[__s18local1];
    }
    __s18param0.updateTimer();
  };
  LostAndFoundDialog.prototype.updateStorage = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__dep_export_CastleModel.CastleModel.lostAndFoundData.getItemAmount(), __dep_exact_26a421b704832cff.LostAndFoundConst.INVENTORY_SIZE]));
    this.onDecoStorageUpdated();
    this.onConstructionItemInventoryUpdated();
    this.onEqInventorySpaceUpdate();
    this.onGemInventorySpaceUpdate();
    this.onTimerTick();
  };
  LostAndFoundDialog.prototype.onGemInventorySpaceUpdate = function (__s24param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace]));
  };
  LostAndFoundDialog.prototype.onEqInventorySpaceUpdate = function (__s26param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace]));
  };
  LostAndFoundDialog.prototype.onDecoStorageUpdated = function (__s28param0 = null) {
    var __s28local0 = __dep_export_CastleModel.CastleModel.decoStorage.getMainStorage();
    var __s28local1 = __s28local0.getCurrentCapacity();
    var __s28local2 = __s28local0.getMaxCapacity();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_deco, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s28local1, __s28local2]));
  };
  LostAndFoundDialog.prototype.onConstructionItemInventoryUpdated = function (__s30param0 = null) {
    var __s30local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.ConstructionItemConst.INVENTORY_SOFTCAP - __dep_export_CastleModel.CastleModel.constructionItemData.inventorySpaceLeft);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_constructionItem, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s30local0, __dep_exact_26a421b704832cff_1.ConstructionItemConst.INVENTORY_SOFTCAP]));
  };
  LostAndFoundDialog.prototype.initListItems = function () {
    this._itemVOs = [];
    var __s32local0 = __dep_export_CastleModel.CastleModel.lostAndFoundData.itemVOs;
    if (__s32local0 != null) {
      for (var __s32local1 = 0, __s32local2 = __s32local0; __s32local1 < __s32local2.length; __s32local1++) {
        var __s32local3 = __s32local2[__s32local1];
        if (__s32local3 !== undefined && __s32local3.remainingTimeInSeconds > 0) {
          this._itemVOs.push(__s32local3);
        }
      }
    }
  };
  LostAndFoundDialog.prototype.updateItems = function () {
    var __s38local0 = [];
    if (this._itemVOs != null) {
      for (var __s38local1 = 0, __s38local2 = this._itemVOs; __s38local1 < __s38local2.length; __s38local1++) {
        var __s38local3 = __s38local2[__s38local1];
        if (__s38local3 !== undefined) {
          __s38local0.push(__s38local3);
        }
      }
    }
    this.emptyListTxt.visible = __s38local0.length <= 0;
    this._scrollList.updateWithNewData(__s38local0);
  };
  LostAndFoundDialog.prototype.onClick = function (__s44param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s44param0.target)) {
      __s1param0.prototype.onClick.call(this, __s44param0);
      switch (__s44param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_lostAndFound"));
      }
    }
  };
  LostAndFoundDialog.NAME = "LostAndFound";
  LostAndFoundDialog.ASSET_CLIP_NAME_GRID_ITEM = "LostAndFoundItem";
  return LostAndFoundDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.LostAndFoundDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_LostAndFoundListItem = require("gge-module:export_LostAndFoundListItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
