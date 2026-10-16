Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ACastleAllianceDialogTreasurySublayer = require("gge-module:export_ACastleAllianceDialogTreasurySublayer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleAllianceDialogTreasuryStorage(__s3param0) {
    var __s3local0 = this;
    __s3local0._itemClips = [];
    __s3local0._listDefaultY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasuryStorage, __s1param0);
  CastleAllianceDialogTreasuryStorage.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.btn_donate, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.disp.btn_donate.toolTipText = "dialog_alliance_donateToTreasury_tooltip";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_treasury_treasury_info"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.btn_donate.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_donate")));
    this._listDefaultY = this.disp.mc_list.y;
    this.disp.mc_list.mask = this.disp.mc_mask;
    this._scrollStrategy = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true);
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().addSliderLine(this.disp.mc_sliderLine).addSliderButton(this.disp.btn_slider).addSliderBackground(this.disp.sliderBG).addMouseWheelElements([this.disp]), this._scrollStrategy);
  };
  CastleAllianceDialogTreasuryStorage.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this.disp.mc_bottom_bg.width = 653;
  };
  CastleAllianceDialogTreasuryStorage.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  CastleAllianceDialogTreasuryStorage.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleAllianceDialogTreasuryStorage.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasuryStorage.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    var __s15local0 = this.disp.mc_list;
    if (this._itemClips != null) {
      for (var __s15local1 = 0, __s15local2 = this._itemClips; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined) {
          __s15local3.dispose();
        }
      }
    }
    this._itemClips = [];
    __s15local0.removeChildren();
    for (var __s15local4 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage, __s15local5 = [], __s15local6 = [], __s15local7 = 0; __s15local7 < __s15local4.length; ++__s15local7) {
      var __s15local8 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleAllianceDialogTreasuryStorage.ITEM_ASSET_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_CastleAllianceDialog.CastleAllianceDialog.NAME));
      var __s15local9 = new __s0local0();
      __s15local9.addChild(__s15local8);
      __s15local0.addChild(__s15local9);
      this._itemClips.push(__s15local8);
      __s15local6.push(__s15local9);
      __s15local5.push(__s15local8.currentshownDisplayObject);
    }
    var __s15local10 = this._itemClips.length > 0 && this._itemClips[0].height > 0 ? this._itemClips[0].height : CastleAllianceDialogTreasuryStorage.ITEM_WIDTH;
    for (__s15local7 = 0; __s15local7 < __s15local6.length; ++__s15local7) {
      this._itemClips[__s15local7].x = -CastleAllianceDialogTreasuryStorage.ITEM_WIDTH / 2;
      this._itemClips[__s15local7].y = -__s15local10 / 2;
      __s15local6[__s15local7].x = __s15local7 % CastleAllianceDialogTreasuryStorage.ITEMS_PER_ROW * (CastleAllianceDialogTreasuryStorage.ITEM_WIDTH + CastleAllianceDialogTreasuryStorage.ITEM_SPACING) + CastleAllianceDialogTreasuryStorage.ITEM_WIDTH / 2;
      __s15local6[__s15local7].y = Math.floor(__s15local7 / CastleAllianceDialogTreasuryStorage.ITEMS_PER_ROW) * (__s15local10 + CastleAllianceDialogTreasuryStorage.ITEM_SPACING) + __s15local10 / 2;
    }
    var __s15local11 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local1(30, 30));
    __s15local11.tooltip.useAmount = false;
    var __s15local12 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList().createByItemMcList(__s15local5);
    for (__s15local7 = 0; __s15local7 < __s15local12.items.length; ++__s15local7) {
      __s15local12.items[__s15local7].addItemMc(__s15local6[__s15local7]);
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, __s15local12, __s15local4, __s15local11);
    var __s15local13 = __s15local10 + CastleAllianceDialogTreasuryStorage.ITEM_SPACING;
    var __s15local14 = __dep_exact_f855840627e6e145.int(Math.max(0, __s15local0.height - this.disp.mc_mask.height));
    var __s15local15 = this._scrollComponent.currentValue;
    this._scrollStrategy.visibleValue = this.disp.mc_mask.height;
    this._scrollComponent.init(0, __s15local14, __s15local13, __s15local13);
    this._scrollComponent.setVisibility(__s15local14 > 0);
    this._scrollComponent.scrollToValue(__s15local15);
  };
  CastleAllianceDialogTreasuryStorage.prototype.updateScrollPosition = function () {
    this.disp.mc_list.y = this._listDefaultY - this._scrollComponent.currentValue;
  };
  CastleAllianceDialogTreasuryStorage.prototype.onClick = function (__s29param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      __s1param0.prototype.onClick.call(this, __s29param0);
      switch (__s29param0.target) {
        case this.disp.btn_donate:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceDonateDialog.CastleAllianceDonateDialog);
      }
    }
  };
  CastleAllianceDialogTreasuryStorage.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  CastleAllianceDialogTreasuryStorage.ITEM_ASSET_NAME = "Alliance_Treasury_Res_Item";
  CastleAllianceDialogTreasuryStorage.ITEMS_PER_ROW = 4;
  CastleAllianceDialogTreasuryStorage.ITEM_WIDTH = 154;
  CastleAllianceDialogTreasuryStorage.ITEM_SPACING = 5;
  return CastleAllianceDialogTreasuryStorage;
}(__dep_export_ACastleAllianceDialogTreasurySublayer.ACastleAllianceDialogTreasurySublayer);
exports.CastleAllianceDialogTreasuryStorage = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleAllianceDonateDialog = require("gge-module:export_CastleAllianceDonateDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
