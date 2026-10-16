Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_GeneralsHubInfoDialogListItem = require("gge-module:export_GeneralsHubInfoDialogListItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralsHubInfoDialog() {
    var __s3local0 = __s1param0.call(this, GeneralsHubInfoDialog.NAME) || this;
    __s3local0.index = 0;
    __s3local0.tombolaIndex = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubInfoDialog, __s1param0);
  GeneralsHubInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.charIDs = __dep_export_CastleModel.CastleModel.generalsData.getAllGeneralsHubQuestIDs();
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right, this.dialogDisp.cbx_btn0, this.dialogDisp.cbx_btn1, this.dialogDisp.cbx_btn2, this.dialogDisp.cbx_btn3, this.dialogDisp.cbx_btn4, this.dialogDisp.cbx_btn5], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  GeneralsHubInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_drawChances_header")));
    var __s7local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_GeneralsHubInfoDialogListItem.GeneralsHubInfoDialogListItem, "GeneralsHubLootChancesItem", GeneralsHubInfoDialog.NAME);
    __s7local0.itemPaddingY = 0;
    __s7local0.useSmoothScroll = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider).addMaskMc(this.dialogDisp.mc_list.mc_mask), __s7local0);
    this._list.onShow();
    this.updateAllInfos(true);
  };
  GeneralsHubInfoDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    __s1param0.prototype.hide.call(this);
  };
  GeneralsHubInfoDialog.prototype.updateRadioButtons = function () {
    for (var __s12local0 = 0; __s12local0 < 6; __s12local0++) {
      var __s12local1 = this.charQuestVO.getTombolaOfferingCurrencyID(__s12local0);
      var __s12local2 = this.dialogDisp["cbx_btn" + __s12local0];
      var __s12local3 = this.dialogDisp["mc_offering" + __s12local0];
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s12local3);
      if (__s12local1 < 0) {
        __s12local2.visible = false;
      } else {
        __s12local2.visible = true;
        __s12local2.content_label_green_12.visible = this.tombolaIndex == __s12local0;
        this.fillItemIcon(__s12local3, __s12local1);
      }
    }
  };
  GeneralsHubInfoDialog.prototype.fillItemIcon = function (__s18param0, __s18param1) {
    var __s18local0 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __s18param1);
    var __s18local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
    __s18local1.tooltip.useAmount = false;
    var __s18local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s18param0).addIconMc(__s18param0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), __s18local2, __s18local0, __s18local1);
  };
  GeneralsHubInfoDialog.prototype.dataList = function () {
    var __s20local0;
    var __s20local1 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxTombolasByTombolaID(this.charQuestVO.getTombolaID(this.tombolaIndex));
    var __s20local2 = 0;
    var __s20local3 = [];
    for (__s20local0 = 0; __s20local0 < __s20local1.length; __s20local0++) {
      __s20local2 += __s20local1[__s20local0].shares;
    }
    for (__s20local0 = 0; __s20local0 < __s20local1.length; __s20local0++) {
      var __s20local4 = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s20local1[__s20local0].rewardIDs);
      if (!__s20local4 || __s20local4.list.length <= 0) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", "no rewards found for ID " + __s20local1[__s20local0].rewardIDs.toString()));
      }
      var __s20local5 = {
        rewardCategory: __s20local1[__s20local0].rewardCategory,
        reward: __s20local4.list[0],
        chance: __s20local1[__s20local0].shares / __s20local2 * 100
      };
      __s20local3.push(__s20local5);
    }
    __s20local3.sort(this.bindFunction(this.sortByChance));
    return __s20local3;
  };
  GeneralsHubInfoDialog.prototype.sortByChance = function (__s27param0, __s27param1) {
    return __s27param0.chance - __s27param1.chance;
  };
  GeneralsHubInfoDialog.prototype.updateAllInfos = function (__s29param0 = false) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.charQuestVO.nameTextID));
    var __s29local0 = this.dataList();
    this._list.updateWithNewData(__s29local0, __s29param0);
    this._list.onShow();
    this.updateRadioButtons();
  };
  GeneralsHubInfoDialog.prototype.onClick = function (__s31param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      __s1param0.prototype.onClick.call(this, __s31param0);
      switch (__s31param0.target) {
        case this.dialogDisp.btn_left:
          this.tombolaIndex = 0;
          this.selectCharacter(this.index == 0 ? this.charIDs.length - 1 : this.index - 1);
          break;
        case this.dialogDisp.btn_right:
          this.tombolaIndex = 0;
          this.selectCharacter(this.index == this.charIDs.length - 1 ? 0 : this.index + 1);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.cbx_btn0:
          this.tombolaIndex = 0;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn1:
          this.tombolaIndex = 1;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn2:
          this.tombolaIndex = 2;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn3:
          this.tombolaIndex = 3;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn4:
          this.tombolaIndex = 4;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn5:
          this.tombolaIndex = 5;
          this.updateAllInfos(true);
      }
    }
  };
  GeneralsHubInfoDialog.prototype.selectCharacter = function (__s35param0) {
    this.index = __s35param0;
    this.updateAllInfos();
  };
  Object.defineProperty(GeneralsHubInfoDialog.prototype, "charQuestVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(this.charIDs[this.index]);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubInfoDialog.NAME = "GeneralsHubLootChances2";
  return GeneralsHubInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralsHubInfoDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
