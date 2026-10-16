Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLegendSkillDialog = require("gge-module:export_CastleLegendSkillDialog");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_LegendSkillsDataEvent = require("gge-module:export_LegendSkillsDataEvent");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleLegendSkillSceatBottomMenu = require("gge-module:export_CastleLegendSkillSceatBottomMenu");
var __dep_export_CastleLegendSkillSceatListItem = require("gge-module:export_CastleLegendSkillSceatListItem");
var __dep_export_CastleLegendSkillTreeComponent = require("gge-module:export_CastleLegendSkillTreeComponent");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillSceatSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_shop], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __s3local0._itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0._itxt_title.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0._itxt_pointsLeft = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_points.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("numbersXY", [0, 0]));
    __s3local0._itxt_pointsLeft2 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_points2.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("numbersXY", [0, 0]));
    __s3local0.subLayerDisp.mc_points.mouseChildren = false;
    __s3local0.subLayerDisp.mc_points2.mouseChildren = false;
    var __s3local1 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s3local1.scrollStepPixels = 124;
    __s3local1.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s3local1.disableButtons = true;
    __s3local1.onlyOneActiveItem = false;
    __s3local0._accordionComponent = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(__s3local0.subLayerDisp, __s3local1, null, false);
    __s3local0._bottomMenu = new __dep_export_CastleLegendSkillSceatBottomMenu.CastleLegendSkillSceatBottomMenu(__s3local0.subLayerDisp.mc_bottomMenu);
    __s3local0.subLayerDisp.mc_shop_tooltip.x = __s3local0.subLayerDisp.btn_shop.x;
    __s3local0.subLayerDisp.mc_shop_tooltip.visible = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s3local0.subLayerDisp.mc_ItemContainer);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillSceatSublayer, __s1param0);
  CastleLegendSkillSceatSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_shop, this.availableSceatShop);
    this.createSkillTrees();
    this.updateText();
    this._accordionComponent.show();
    this._accordionComponent.scrollToTop();
    this._bottomMenu.onShow();
    this._bottomMenu.update(this._params.sublayerID);
    this.controller.addEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillSceatSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._accordionComponent.hide();
    this._bottomMenu.onHide();
    this.controller.removeEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillSceatSublayer.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.subLayerDisp.btn_shop:
          this.shopEvent.openMerchantDialog(true, this.shopEvent.getEventPackagesByCurrencyType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN))[0].packageID);
      }
    }
  };
  CastleLegendSkillSceatSublayer.prototype.createSkillTrees = function () {
    var __s13local0 = this.legendSkillData.sceatTreeTabMap.get(this._params.sublayerID);
    this._listItems = [];
    for (var __s13local1 = 0, __s13local2 = __s13local0; __s13local1 < __s13local2.length; __s13local1++) {
      var __s13local3 = __s13local2[__s13local1];
      var __s13local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LegendSkillTreeItem"))();
      var __s13local5 = new __dep_export_CastleLegendSkillTreeComponent.CastleLegendSkillTreeComponent(__s13local3);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s13local4.contentMC);
      __s13local4.contentMC.addChild(__s13local5.disp);
      var __s13local6 = __s13local5.treeNode.isUnlocked() && !this.legendSkillData.isTreeMaxedOut(__s13local3);
      var __s13local7 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 4, 0, 0), true, 0.2, 0.2, __s13local6);
      var __s13local8 = new __dep_export_CastleLegendSkillSceatListItem.CastleLegendSkillSceatListItem(__s13local4, __s13local5, __s13local7);
      this._listItems.push(__s13local8);
      this._accordionComponent.addItem(__s13local8);
    }
    this._listItems[this._listItems.length - 1].markAsNew = true;
    this._listItems[this._listItems.length - 1].update();
  };
  CastleLegendSkillSceatSublayer.prototype.jumpToSkillTier = function (__s17param0) {
    var __s17local0 = this.legendSkillData.getSceatSkillByID(__s17param0);
    var __s17local1 = this._listItems.find(function (__s19param0) {
      return __s19param0.treeComponent.treeNode.id == __s17local0.skillTreeID;
    });
    if (__s17local1) {
      var __s17local2 = __s17local1.treeComponent.tierComponents.find(function (__s22param0) {
        return __s22param0.tierNode.id == __s17local0.tier;
      }).disp.y + __s17local1.disp.y;
      this._accordionComponent.scrollToValue(__s17local2);
    }
  };
  CastleLegendSkillSceatSublayer.prototype.updateText = function () {
    this._itxt_title.textContentVO.textId = this._params.sublayerID == __dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog.SUBLAYER_BUILDINGS ? __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_title_building") : __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_title_units");
    var __s24local0 = __dep_export_CastleModel.CastleModel.currencyData.getCurrencyById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN);
    var __s24local1 = __dep_export_CastleModel.CastleModel.currencyData.getCurrencyById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT);
    var __s24local2 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN);
    var __s24local3 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT);
    var __s24local4 = __s24local0 ? __s24local0.amount : 0;
    var __s24local5 = __s24local1 ? __s24local1.amount : 0;
    this._itxt_pointsLeft.textContentVO.textReplacements = [__s24local4, __s24local2.softCap];
    this._itxt_pointsLeft.color = __s24local4 < __s24local2.softCap ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    this._itxt_pointsLeft2.textContentVO.textReplacements = [__s24local5, __s24local3.softCap];
    this._itxt_pointsLeft2.color = __s24local5 < __s24local3.softCap ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    if (__s24local4 < __s24local2.softCap) {
      this.subLayerDisp.mc_points.toolTipText = "currency_name_sceatToken";
    } else {
      this.subLayerDisp.mc_points.toolTipText = "dialog_legendTemple_sceats_sceatStockLimit_tooltip";
    }
    if (__s24local5 < __s24local3.softCap) {
      this.subLayerDisp.mc_points2.toolTipText = "currency_name_ImperialDucat";
    } else {
      this.subLayerDisp.mc_points2.toolTipText = {
        t: "dialog_legendTemple_imperialDucat_ImperialDucatLimit_tooltip",
        p: [__s24local3.softCap]
      };
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_shop)) {
      this.subLayerDisp.btn_shop.toolTipText = "dialog_longPointsEvent_eventcamp_desc_shopbutton";
    } else {
      this.subLayerDisp.btn_shop.toolTipText = "dialog_legendTemple_sceats_sceatStore_unavailable_tooltip";
    }
  };
  CastleLegendSkillSceatSublayer.prototype.updateTrees = function () {
    for (var __s32local0 = 0; __s32local0 < this._listItems.length; __s32local0++) {
      this._listItems[__s32local0].update();
    }
    this._bottomMenu.update(this._params.sublayerID);
  };
  CastleLegendSkillSceatSublayer.prototype.onLegendSkillsUpdated = function (__s36param0) {
    this.updateText();
    this.updateTrees();
  };
  Object.defineProperty(CastleLegendSkillSceatSublayer.prototype, "availableSceatShop", {
    get: function () {
      if (!this.shopEvent) {
        return false;
      }
      var __s38local0 = this.shopEvent.getEventPackagesByCurrencyType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN)).length > 0;
      var __s38local1 = this.shopEvent.getEventPackagesByCurrencyType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_IMPERIAL_DUCAT)).length > 0;
      return __s38local0 || __s38local1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillSceatSublayer.prototype, "shopEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillSceatSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_legendTemple_sceat_help"));
  };
  Object.defineProperty(CastleLegendSkillSceatSublayer.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillSceatSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleLegendSkillSceatSublayer = __s0local0;
