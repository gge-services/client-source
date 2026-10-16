Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleBreweryProductionInfoDialogItem = require("gge-module:export_CastleBreweryProductionInfoDialogItem");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_BreweryHelper = require("gge-module:export_BreweryHelper");
var __s0local0 = function (__s1param0) {
  function CastleBreweryProductionInfoDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBreweryProductionInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBreweryProductionInfoDialog, __s1param0);
  CastleBreweryProductionInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleBreweryProductionInfoDialogItem.CastleBreweryProductionInfoDialogItem, "CastleMeadProductionInfoItem", CastleBreweryProductionInfoDialog.NAME);
    __s5local0.useSmoothScroll = true;
    __s5local0.sliderInvisibleWhenNotScrollable = false;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addSliderMc(this.dialogDisp.mc_list.mc_slider).addItemMc(this.dialogDisp.mc_list.mc_items), __s5local0);
  };
  CastleBreweryProductionInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_detailsOverview_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_detailsOverview_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.floor(this.finalMeadProduction, 1)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("meadproduction_total_desc"));
    this._scrollList.onShow();
    this._scrollList.updateWithNewData(this.getData());
  };
  CastleBreweryProductionInfoDialog.prototype.getData = function () {
    var __s9local0 = [];
    var __s9local1 = __dep_export_BreweryHelper.BreweryHelper.getCIBonus();
    var __s9local2 = __dep_export_BreweryHelper.BreweryHelper.getCIBoost();
    var __s9local3 = __dep_export_BreweryHelper.BreweryHelper.getBaronBonus();
    var __s9local4 = __dep_export_BreweryHelper.BreweryHelper.getBaronBoost();
    var __s9local5 = __dep_export_BreweryHelper.BreweryHelper.getBuildingBoost();
    var __s9local6 = __dep_export_BreweryHelper.BreweryHelper.getBuildingBonus();
    var __s9local7 = __dep_export_BreweryHelper.BreweryHelper.getAllianceLayoutBonus();
    __s9local0.push(["Icon_Mead_production", new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.baseMeadProduction + __dep_export_BreweryHelper.BreweryHelper.getCIBaseBonus()), "meadproduction_basic_desc"]);
    __s9local0.push(["Icon_LawAndOrder_neutral_Big", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor() * 100).toFixed(0)]), "bonusSource_publicOrder"]);
    __s9local0.push(["Icon_BoostWhip", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__dep_export_BreweryHelper.BreweryHelper.getOverseerBoost()]), "bonusSource_overseer"]);
    if (__s9local5 > 0) {
      __s9local0.push(["Icon_BuildNoShadow", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s9local5]), "bonusSource_buildings"]);
    }
    if (__s9local6 > 0) {
      __s9local0.push(["Icon_BuildNoShadow", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s9local6]), "bonusSource_buildings"]);
    }
    if (__s9local1 > 0 || __s9local2 > 0) {
      if (__s9local1 > 0) {
        __s9local0.push(["Icon_Constructor", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s9local1]), "bonusSource_ci"]);
      }
      if (__s9local2 > 0) {
        __s9local0.push(["Icon_Constructor", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s9local2]), "bonusSource_ci"]);
      }
    } else {
      __s9local0.push(["Icon_Constructor", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [0]), "bonusSource_ci"]);
    }
    __s9local0.push(["crest", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__dep_export_BreweryHelper.BreweryHelper.getCrestBoost()]), "bonusSource_crest"]);
    if (__s9local7 > 0) {
      __s9local0.push(["allianceCrest", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s9local7]), "dialog_meadproduction_allianceCoA_desc"]);
    }
    if (__s9local3 > 0 || __s9local4 > 0) {
      if (__s9local3 > 0) {
        __s9local0.push(["baron", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s9local3]), "bonusSource_castellan_increase"]);
      }
      if (__s9local4 > 0) {
        __s9local0.push(["baron", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s9local4]), "bonusSource_castellan_bonus"]);
      }
    } else {
      __s9local0.push(["baron", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [0]), "bonusSource_castellan_bonus"]);
    }
    __s9local0.push(["Icon_Research", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__dep_export_BreweryHelper.BreweryHelper.getResearchBoost()]), "bonusSource_research"]);
    return __s9local0;
  };
  Object.defineProperty(CastleBreweryProductionInfoDialog.prototype, "baseMeadProduction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.meadProduction * this.dialogProp.factor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryProductionInfoDialog.prototype, "finalMeadProduction", {
    get: function () {
      return (this.baseMeadProduction + __dep_export_BreweryHelper.BreweryHelper.getCIBaseBonus()) * __dep_export_BreweryHelper.BreweryHelper.getTotalBoost() + __dep_export_BreweryHelper.BreweryHelper.getTotalBonus();
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryProductionInfoDialog.prototype.onClick = function (__s26param0) {
    __s1param0.prototype.onClick.call(this, __s26param0);
    switch (__s26param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleBreweryProductionInfoDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryProductionInfoDialog.prototype.hideLoaded = function (__s31param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleBreweryProductionInfoDialog.NAME = "CastleMeadProductionInfo";
  return CastleBreweryProductionInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBreweryProductionInfoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
