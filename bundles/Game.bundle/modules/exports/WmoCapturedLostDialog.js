Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function WmoCapturedLostDialog() {
    return __s1param0.call(this, WmoCapturedLostDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WmoCapturedLostDialog, __s1param0);
  WmoCapturedLostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_list.mc_slider.btn_slider], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_list).addMouseWheelElements([this.dialogDisp]).addSliderButton(this.dialogDisp.mc_list.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_list.mc_slider.sliderLine).addVisualElements([this.dialogDisp.mc_list.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  WmoCapturedLostDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.copy));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest, this.dialogProperties.ownerInfo.crest, null, true);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
    this.dialogDisp.mc_holder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.wmoVO, new __s0local1(70, 70), true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    if (this.dialogProperties.wmoVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_name.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.dialogProperties.wmoVO.areaNameString)).autoFitToBounds = true;
      this.dialogDisp.mc_name.visible = true;
    } else {
      this.dialogDisp.mc_name.visible = false;
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    if (this.dialogProperties.isCapturedDialog && !this.dialogProperties.isInventoryEmpty) {
      this.buildCapturedBuildingList();
    } else {
      this.buildLostDialogList();
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.isCapturedDialog ? "siegeMessage_outpostcaptured_buildingstatus" : "siegeMessage_outpostlost_buildingstatus")).visible = this.dialogProperties.isInventoryEmpty;
    var __s7local0 = this.dialogDisp.mc_list.mc_items.getBounds(null);
    this._scrollComponent.init(0, Math.max(__s7local0.height - this.dialogDisp.mc_list.mc_mask.height, 0), 10, 10);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(__s7local0.height > this.dialogDisp.mc_list.mc_mask.height);
    this._scrollComponent.enableComponent(true);
  };
  WmoCapturedLostDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
      this._scrollComponent.hide();
    }
  };
  WmoCapturedLostDialog.prototype.buildCapturedBuildingList = function () {
    var __s16local0 = 0;
    var __s16local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("WmoCapturedLost_ItemHeader", __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
    this.dialogDisp.mc_list.mc_items.addChild(__s16local1);
    __s16local1.y = __s16local0;
    __s16local0 += __s16local1.height;
    this.textFieldManager.registerTextField(__s16local1.currentshownDisplayObject.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_ci_assign_list_buildings_tooltip")));
    this.createBuildingList(this.dialogProperties.buildingList, __s16local0);
  };
  WmoCapturedLostDialog.prototype.buildLostDialogList = function () {
    var __s18local0 = [];
    var __s18local1 = [];
    var __s18local2 = [];
    var __s18local3 = this.dialogProperties.ciList;
    for (var __s18local4 = 0, __s18local5 = this.dialogProperties.buildingList; __s18local4 < __s18local5.length; __s18local4++) {
      var __s18local6 = __s18local5[__s18local4];
      var __s18local7 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s18local6[0]);
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s18local7, "DecoBuildingVO")) {
        __s18local2.push(__s18local6);
      } else if (__s18local7.isDistrict) {
        __s18local1.push(__s18local6);
      } else {
        __s18local0.push(__s18local6);
      }
    }
    var __s18local8 = 0;
    if (__s18local0.length > 0) {
      __s18local8 = this.createHeader("dialog_ci_assign_list_buildings_tooltip", __s18local8);
      __s18local8 = this.createBuildingList(__s18local0, __s18local8);
    }
    if (__s18local1.length > 0) {
      __s18local8 = this.createHeader("panel_deco_districts", __s18local8);
      __s18local8 = this.createBuildingList(__s18local1, __s18local8);
    }
    if (__s18local2.length > 0) {
      __s18local8 = this.createHeader("dialog_welcomeBack_category_decorations_desc", __s18local8);
      __s18local8 = this.createBuildingList(__s18local2, __s18local8);
    }
    if (__s18local3 && __s18local3.length > 0) {
      __s18local8 = this.createHeader("dialog_ci_assign_list_items_tooltip", __s18local8);
      __s18local8 = this.createConstructionItemList(__s18local3, __s18local8);
    }
  };
  WmoCapturedLostDialog.prototype.createHeader = function (__s29param0, __s29param1) {
    var __s29local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("WmoCapturedLost_ItemHeader", __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
    this.dialogDisp.mc_list.mc_items.addChild(__s29local0);
    __s29local0.y = __s29param1;
    this.textFieldManager.registerTextField(__s29local0.currentshownDisplayObject.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s29param0)));
    return __s29param1 + __s29local0.height;
  };
  WmoCapturedLostDialog.prototype.createBuildingList = function (__s31param0, __s31param1) {
    var __s31local0 = __s31param1;
    for (var __s31local1 = 0, __s31local2 = __s31param0; __s31local1 < __s31local2.length; __s31local1++) {
      var __s31local3 = __s31local2[__s31local1];
      var __s31local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("WmoCapturedLost_ItemBuilding", __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
      this.dialogDisp.mc_list.mc_items.addChild(__s31local4);
      __s31local4.y = __s31local0;
      __s31local0 += __s31local4.height;
      var __s31local5 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s31local3[0]);
      var __s31local6 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [__s31local3[1], __s31local5.getNameString()]);
      var __s31local7 = __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [__s31local5.level]);
      var __s31local8 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_DASH_SPLIT, [__s31local6, __s31local7]);
      this.textFieldManager.registerTextField(__s31local4.currentshownDisplayObject.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s31local8));
      __s31local4.currentshownDisplayObject.mc_icon.addChild(this.getBuildingIcon(__s31local5));
    }
    return __s31local0;
  };
  WmoCapturedLostDialog.prototype.createConstructionItemList = function (__s35param0, __s35param1) {
    var __s35local0 = __s35param1;
    for (var __s35local1 = 0, __s35local2 = __s35param0; __s35local1 < __s35local2.length; __s35local1++) {
      var __s35local3 = __s35local2[__s35local1];
      var __s35local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("WmoCapturedLost_ItemCI", __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
      this.dialogDisp.mc_list.mc_items.addChild(__s35local4);
      __s35local4.y = __s35local0;
      __s35local0 += __s35local4.height;
      var __s35local5 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(__s35local3[0]);
      var __s35local6 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [__s35local3[1], __s35local5.nameTextId]);
      var __s35local7 = __dep_exact_92d05af59ee2ff30.Localize.text("ci_level", [__s35local5.level]);
      var __s35local8 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_DASH_SPLIT, [__s35local6, __s35local7]);
      this.textFieldManager.registerTextField(__s35local4.currentshownDisplayObject.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s35local8));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips(__s35local4.currentshownDisplayObject.mc_icon).addIconMc(__s35local4.currentshownDisplayObject.mc_icon), new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO(__s35local3[0]), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local1(44, 44)));
    }
    return __s35local0;
  };
  WmoCapturedLostDialog.prototype.getBuildingIcon = function (__s39param0) {
    var __s39local0 = new __s0local0();
    var __s39local1 = new Library.CastleInterfaceElements.BuildingGroundBg();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s39local1, 22, 22);
    __s39local0.addChild(__s39local1);
    var __s39local2 = new (__dep_export_IsoHelper.IsoHelper.view.createIsoObjectVEFromVO(__s39param0).buildingGroundIconClass)();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s39local2, 15.399999999999999, 15.399999999999999);
    __s39local2.gotoAndStop(1);
    __s39local0.addChild(__s39local2);
    __s39local0.mouseChildren = false;
    return __s39local0;
  };
  WmoCapturedLostDialog.prototype.onClick = function (__s41param0) {
    __s1param0.prototype.onClick.call(this, __s41param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      switch (__s41param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  WmoCapturedLostDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_list.mc_items.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(WmoCapturedLostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  WmoCapturedLostDialog.NAME = "WmoCapturedLost";
  return WmoCapturedLostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.WmoCapturedLostDialog = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
