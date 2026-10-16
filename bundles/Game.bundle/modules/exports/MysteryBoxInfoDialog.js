Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_MysteryBoxInfoDialogListItem = require("gge-module:export_MysteryBoxInfoDialogListItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function MysteryBoxInfoDialog() {
    var __s3local0 = __s1param0.call(this, MysteryBoxInfoDialog.NAME) || this;
    __s3local0.selectedKey = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MysteryBoxInfoDialog, __s1param0);
  MysteryBoxInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_left, this.dialogDisp.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.mc_info.mouseChildren = false;
  };
  MysteryBoxInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxInfo_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.mysteryBox.getNameTextId()));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mysteryBoxSystem_boxDraws_counter", [this.lootBoxVO.draws]));
    this.dialogDisp.mc_toolTip.visible = false;
    this.dialogDisp.marker_tooltip_attention.mouseChildren = false;
    this.dialogDisp.marker_tooltip_attention.toolTipText = "dialog_mysteryBoxSystem_keyDraws_drawLimit_tooltip";
    this.dialogDisp.mc_icon.mouseChildren = false;
    this.dialogDisp.mc_icon.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_item).addIconMc(this.dialogDisp.mc_item).addItemMc(this.dialogDisp.mc_item), this.dialogProperties.mysteryBox, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(100, 100)));
    var __s7local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_MysteryBoxInfoDialogListItem.MysteryBoxInfoDialogListItem, "MysteryBoxListItem", MysteryBoxInfoDialog.NAME);
    __s7local0.itemPaddingY = 0;
    __s7local0.useSmoothScroll = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s7local0);
    this._list.onShow();
    this.updateAllInfos(true);
    this.updateKeyToolTip();
    this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(__dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgress() / __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax(), 1);
    this.dialogDisp.mc_progress.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.dialogDisp.mc_progress.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgress(), __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax()]));
  };
  MysteryBoxInfoDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    __s1param0.prototype.hide.call(this);
  };
  MysteryBoxInfoDialog.prototype.updateKeyToolTip = function () {
    for (var __s12local0 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxKeyTombolasByKeyTombolaID(this.lootBoxVO.lootBoxKeyTombolaID), __s12local1 = 0, __s12local2 = 0, __s12local3 = 0, __s12local4 = 0, __s12local5 = 0; __s12local5 < __s12local0.length; __s12local5++) {
      __s12local1 += __s12local0[__s12local5].shares;
      if (__s12local0[__s12local5].addRareMysteryBoxKey > 0) {
        __s12local2 += __s12local0[__s12local5].shares;
      }
      if (__s12local0[__s12local5].addEpicMysteryBoxKey > 0) {
        __s12local3 += __s12local0[__s12local5].shares;
      }
      if (__s12local0[__s12local5].addLegendaryMysteryBoxKey > 0) {
        __s12local4 += __s12local0[__s12local5].shares;
      }
    }
    var __s12local6 = __s12local2 / __s12local1 * 100;
    var __s12local7 = __s12local3 / __s12local1 * 100;
    var __s12local8 = __s12local4 / __s12local1 * 100;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_keyDraws_drawChances_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s12local6]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s12local7]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s12local8]));
    this.dialogDisp.mc_key1.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON).getNameTextId();
    this.dialogDisp.mc_key2.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE).getNameTextId();
    this.dialogDisp.mc_key3.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC).getNameTextId();
    this.dialogDisp.mc_key4.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY).getNameTextId();
  };
  MysteryBoxInfoDialog.prototype.dataList = function () {
    var __s19local0;
    var __s19local1 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxTombolasByTombolaID(this.lootBoxVO.lootBoxTombolaID);
    var __s19local2 = 0;
    var __s19local3 = [];
    for (__s19local0 = 0; __s19local0 < __s19local1.length; __s19local0++) {
      var __s19local4 = true;
      switch (__s19local1[__s19local0].rewardCategory) {
        case "Common":
          __s19local4 = this.selectedKey == 0;
          break;
        case "Rare":
          __s19local4 = this.selectedKey <= 1;
          break;
        case "Epic":
          __s19local4 = this.selectedKey <= 2;
          break;
        case "Legendary":
          __s19local4 = this.selectedKey <= 3;
      }
      if (__s19local4) {
        __s19local2 += __s19local1[__s19local0].shares;
      }
    }
    for (__s19local0 = 0; __s19local0 < __s19local1.length; __s19local0++) {
      var __s19local5 = true;
      switch (__s19local1[__s19local0].rewardCategory) {
        case "Common":
          __s19local5 = this.selectedKey == 0;
          break;
        case "Rare":
          __s19local5 = this.selectedKey <= 1;
          break;
        case "Epic":
          __s19local5 = this.selectedKey <= 2;
          break;
        case "Legendary":
          __s19local5 = this.selectedKey <= 3;
      }
      if (__s19local5) {
        var __s19local6 = {
          rewardCategory: __s19local1[__s19local0].rewardCategory,
          shares: __s19local1[__s19local0].shares
        };
        __s19local6.rewards = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s19local1[__s19local0].rewardIDs);
        var __s19local7 = true;
        switch (__s19local1[__s19local0].rewardCategory) {
          case "Common":
            __s19local7 = this.selectedKey == 0;
            break;
          case "Rare":
            __s19local7 = this.selectedKey <= 1;
            break;
          case "Epic":
            __s19local7 = this.selectedKey <= 2;
            break;
          case "Legendary":
            __s19local7 = this.selectedKey <= 3;
        }
        __s19local6.chance = __s19local7 ? __s19local6.shares / __s19local2 * 100 : 0;
        __s19local3.push(__s19local6);
      }
    }
    return __s19local3;
  };
  MysteryBoxInfoDialog.prototype.updateAllInfos = function (__s30param0 = false) {
    var __s30local0 = this.dataList();
    this._list.updateWithNewData(__s30local0, __s30param0);
    this._list.onShow();
    this.dialogDisp.marker_tooltip_attention.visible = this.selectedKey != 0;
  };
  MysteryBoxInfoDialog.prototype.onClick = function (__s32param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      __s1param0.prototype.onClick.call(this, __s32param0);
      switch (__s32param0.target) {
        case this.dialogDisp.btn_left:
          this.selectKey(this.selectedKey == 0 ? 3 : this.selectedKey - 1);
          break;
        case this.dialogDisp.btn_right:
          this.selectKey(this.selectedKey == 3 ? 0 : this.selectedKey + 1);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text(" "), __dep_exact_92d05af59ee2ff30.Localize.text("help_mysteryBoxSystem_mysteryBoxInfo"));
      }
    }
  };
  MysteryBoxInfoDialog.prototype.selectKey = function (__s36param0) {
    this.selectedKey = __s36param0;
    this.dialogDisp.mc_key1.visible = __s36param0 == 0;
    this.dialogDisp.mc_key2.visible = __s36param0 == 1;
    this.dialogDisp.mc_key3.visible = __s36param0 == 2;
    this.dialogDisp.mc_key4.visible = __s36param0 == 3;
    this.updateAllInfos();
  };
  MysteryBoxInfoDialog.prototype.onMouseOver = function (__s38param0) {
    __s1param0.prototype.onMouseOver.call(this, __s38param0);
    if (__s38param0.target == this.dialogDisp.mc_info) {
      this.dialogDisp.mc_toolTip.visible = true;
    }
    this.dialogDisp.mc_toolTip.visible = __s38param0.target == this.dialogDisp.mc_info;
  };
  Object.defineProperty(MysteryBoxInfoDialog.prototype, "lootBoxVO", {
    get: function () {
      return this.dialogProperties.mysteryBox.lootBoxVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MysteryBoxInfoDialog.NAME = "MysteryBoxInfo2";
  return MysteryBoxInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.MysteryBoxInfoDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
