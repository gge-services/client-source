Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SCollectPatchNoteRewardsVO = require("gge-module:export_C2SCollectPatchNoteRewardsVO");
var __dep_export_C2SGetPatchNoteRewardsVO = require("gge-module:export_C2SGetPatchNoteRewardsVO");
var __dep_export_CastleChangelistRewardsEvent = require("gge-module:export_CastleChangelistRewardsEvent");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleChangelistDialog() {
    var __s3local0 = this;
    __s3local0.openedTime = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleChangelistDialog.NAME) || this).desaturate = new __dep_exact_9e901e8e2483a22f_2.ColorMatrix();
    __s3local0.desaturate.desaturate();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangelistDialog, __s1param0);
  CastleChangelistDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textScroller = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_changelist, this.dialogDisp.mc_scroll.btn_up, this.dialogDisp.mc_scroll.btn_down, this.dialogDisp.mc_scroll.btn_scroll, this.dialogDisp.mc_scroll.mc_slider, null));
    this.textScroller.hideArrowsOnScrollToEdges = true;
    this.textScroller.invisibleOnFit = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_changelist_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_changelist_subheader"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_changelist_collect")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_changelist = this.textFieldManager.registerTextField(this.dialogDisp.txt_changelist, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_collect, this.dialogDisp.mc_scroll.btn_up, this.dialogDisp.mc_scroll.btn_down, this.dialogDisp.mc_scroll.btn_scroll]);
  };
  CastleChangelistDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.openedTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000);
    this.textScroller.scrollToStart();
    this.textScroller.onShow();
    var __s7local0 = "";
    if (this.dialogProperties.messageVO.patchNoteId >= 19) {
      __s7local0 = "\n\n" + __dep_exact_92d05af59ee2ff30.Localize.text("changelist_forum_hint");
    }
    this.itxt_changelist.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("changelist_message_" + this.dialogProperties.messageVO.patchNoteId) + __s7local0;
    this.textScroller.updateItemVisibility();
    this.updateCollectButton();
    this.updateTeaserPicture();
    this.requestRewards();
  };
  CastleChangelistDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    this.textScroller.onHide();
    this.controller.removeEventListener(__dep_export_CastleChangelistRewardsEvent.CastleChangelistRewardsEvent.DATA_UPDATED, this.bindFunction(this.onChangelistDataArrived));
    if (this.dialogProperties.messageVO.patchNoteId == 59) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_DecorationForgeQuickGuideDialog.DecorationForgeQuickGuideDialog);
    }
  };
  CastleChangelistDialog.prototype.requestRewards = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_rewardsContainer);
    this.controller.addEventListener(__dep_export_CastleChangelistRewardsEvent.CastleChangelistRewardsEvent.DATA_UPDATED, this.bindFunction(this.onChangelistDataArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetPatchNoteRewardsVO.C2SGetPatchNoteRewardsVO(this.dialogProperties.messageVO.patchNoteId));
  };
  CastleChangelistDialog.prototype.onChangelistDataArrived = function (__s15param0) {
    this.controller.removeEventListener(__dep_export_CastleChangelistRewardsEvent.CastleChangelistRewardsEvent.DATA_UPDATED, this.bindFunction(this.onChangelistDataArrived));
    this.dialogProperties.rewards = __s15param0.rewards;
    this.updateLayout();
    this.updateRewards();
    this.updateCollectButton();
  };
  CastleChangelistDialog.prototype.updateLayout = function () {
    var __s17local0 = this.dialogProperties.rewards.length > 0;
    var __s17local1 = __s17local0 ? 0 : 100;
    this.dialogDisp.txt_changelist.height = 145 + __s17local1;
    this.dialogDisp.mc_scroll.btn_down.y = 137 + __s17local1;
    this.dialogDisp.mc_scroll.mc_slider.height = 85 + __s17local1;
    this.dialogDisp.mc_button_background.visible = __s17local0;
  };
  CastleChangelistDialog.prototype.updateRewards = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_rewardsContainer);
    var __s19local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.rewards.length);
    if (__s19local0 <= 0) {
      this.dialogProperties.messageVO.collected = true;
    } else {
      var __s19local1 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("ChangelistRewardContainer");
      var __s19local2 = new __s19local1();
      var __s19local3 = __s19local0 * __s19local2.width;
      var __s19local4 = [];
      for (var __s19local5 = 0; __s19local5 < __s19local0; ++__s19local5) {
        this.dialogDisp.mc_rewardsContainer.addChild(__s19local2);
        __s19local2.x = (__s19local5 + 0.5) * __s19local2.width - __s19local3 / 2;
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s19local2.mc_item.btn_info);
        if (this.dialogProperties.messageVO.collected) {
          __s19local2.mc_item.useFilters([this.desaturate.filter]);
        } else {
          __s19local2.mc_item.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
        }
        __s19local4.push(__s19local2);
        __s19local2 = new __s19local1();
      }
      var __s19local6 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList();
      __s19local6.createByItemMcList(__s19local4);
      __s19local6.addItemMcs("mc_item");
      __s19local6.addInfoBtns("parent.btn_info");
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, __s19local6, this.dialogProperties.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(56, 66)), null, function () {
        var __s27local0;
        for (__s27local0 = 0; __s27local0 < __s19local4.length; __s27local0++) {
          if ((__s19local2 = __s19local4[__s27local0]).mc_item.cacheCanvas) {
            __s19local2.mc_item.updateCache();
          }
        }
      });
    }
  };
  CastleChangelistDialog.prototype.updateTeaserPicture = function () {
    var __s32local0;
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_picture_container);
    __s32local0 = this.dialogProperties.messageVO.teaserId > -1 ? "CastleWelcomeNews" + this.dialogProperties.messageVO.teaserId : "CastleWelcomeNewsUnspecified";
    var __s32local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s32local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s32local0), null, 0, false);
    __s32local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(CastleChangelistDialog.TEASER_SIZE_WIDTH, CastleChangelistDialog.TEASER_SIZE_HEIGHT);
    this.dialogDisp.mc_picture_container.addChild(__s32local1);
    if (__s32local1.isLoaded) {
      this.adjustTeaserBasedOnFrameSize(__s32local1);
    } else {
      __s32local1.clipLoaded.add(this.bindFunction(this.adjustTeaserBasedOnFrameSize));
    }
  };
  CastleChangelistDialog.prototype.adjustTeaserBasedOnFrameSize = function (__s36param0) {
    __s36param0.clipLoaded.remove(this.bindFunction(this.adjustTeaserBasedOnFrameSize));
    var __s36local0 = __s36param0.currentshownDisplayObject;
    var __s36local1 = __s36local0.getChildByName("frame_size");
    if (__s36local1) {
      var __s36local2 = CastleChangelistDialog.TEASER_SIZE_WIDTH / __s36local1.width;
      __s36param0.scaleX = __s36param0.scaleY = 1;
      __s36local0.scaleX = __s36local0.scaleY = __s36local2;
    }
  };
  CastleChangelistDialog.prototype.updateCollectButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_collect, !this.dialogProperties.messageVO.collected);
    this.dialogDisp.btn_collect.toolTipText = this.dialogProperties.messageVO.collected ? "dialog_changelist_collected" : "";
    this.dialogDisp.btn_collect.visible = this.dialogProperties.rewards.length > 0;
  };
  CastleChangelistDialog.prototype.onClick = function (__s41param0) {
    __s1param0.prototype.onClick.call(this, __s41param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      switch (__s41param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_collect:
          this.collectRewards();
      }
    }
  };
  CastleChangelistDialog.prototype.collectRewards = function () {
    this.dialogProperties.messageVO.collected = true;
    this.controller.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST));
    this.updateCollectButton();
    this.updateRewards();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCollectPatchNoteRewardsVO.C2SCollectPatchNoteRewardsVO(this.dialogProperties.messageVO.patchNoteId, this.dialogProperties.messageVO.messageID));
  };
  Object.defineProperty(CastleChangelistDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangelistDialog.__initialize_static_members = function () {
    CastleChangelistDialog.NAME = "CastleChangelist";
    CastleChangelistDialog.TEASER_SIZE_WIDTH = 180;
    CastleChangelistDialog.TEASER_SIZE_HEIGHT = 103;
  };
  return CastleChangelistDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleChangelistDialog = __s0local1;
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DecorationForgeQuickGuideDialog = require("gge-module:export_DecorationForgeQuickGuideDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
