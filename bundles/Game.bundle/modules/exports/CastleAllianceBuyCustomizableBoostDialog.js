Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceUpgradeVO = require("gge-module:export_C2SAllianceUpgradeVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceBuyCustomizableBoostDialog() {
    return __s1param0.call(this, CastleAllianceBuyCustomizableBoostDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBuyCustomizableBoostDialog, __s1param0);
  CastleAllianceBuyCustomizableBoostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_level = this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX", [1]));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    this.itxt_duration = this.textFieldManager.registerTextField(this.dialogDisp.txt_duration, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_plus, this.dialogDisp.btn_minus], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(this.dialogProperties.titleText)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.descriptionText));
    this.dialogDisp.mc_level_tooltip.toolTipText = this.dialogProperties.isTemporaryBoosterActive ? "dialog_alliance_temporaryBoost_activeEffectLevel" : "dialog_alliance_temporaryBoost_selectedEffectLevel";
    this.dialogDisp.mc_duration_tooltip.toolTipText = this.dialogProperties.isTemporaryBoosterActive ? "dialog_alliance_temporaryBoost_activeBoosterAddTime" : "effectDuration";
    this.updateIcon();
    var __s7local0 = 1;
    if (this.dialogProperties.isTemporaryBoosterActive) {
      __s7local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.getBoostLevel(this.dialogProperties.buffSeriesID));
      this.scrollComponent.setVisibility(false);
    } else {
      this.scrollComponent.setVisibility(true);
    }
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.scrollComponent.init(1, this.allianceInfoVO.getBoostMaxLevel(this.dialogProperties.buffSeriesID));
    this.scrollComponent.scrollToValue(__s7local0);
    this.scrollComponent.show();
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.onScroll = function () {
    this.updateCosts();
    this.updateBuff();
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.updateIcon = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.dialogProperties.buffSeriesID, this.allianceInfoVO.getBoostMaxLevel(this.dialogProperties.buffSeriesID)).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
    if (__s13local0) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_icon).addIconMc(this.dialogDisp.mc_icon), new __dep_export_CollectableItemEffectVO.CollectableItemEffectVO(__s13local0.effect.effectID, false), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, CastleAllianceBuyCustomizableBoostDialog.ICON_SIZE));
    }
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.updateBuff = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue);
    this.itxt_level.textContentVO.textReplacements = [__s16local0.level];
    this.itxt_value.textContentVO.textReplacements = [__s16local0.boni[0].strength];
    this.itxt_duration.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this.allianceInfoVO.getBoostDuration(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue), __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_HOURS_FORMAT, __dep_exact_92d05af59ee2ff30_2.Localize.text);
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.updateCosts = function () {
    var __s18local0 = __dep_export_CastleModel.CastleModel.allianceBuffData.getCosts(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue);
    var __s18local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(30, 30));
    __s18local1.tooltip.useAmount = false;
    __s18local1.costTextfield.useOtherResourceStorage = this.allianceInfoVO.storage;
    __s18local1.costTextfield.enableMarkOnNotEnough = true;
    __s18local1.costTextfield.useKiloAbbreviationForAmount = false;
    __s18local1.costTextfield.useMillionAbbreviationForAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItems(new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "item"), __s18local0, __s18local1, null, function afterRenderFunc(__s20param0) {
      __s20param0.destroy();
    });
    __dep_export_CostHelper.CostHelper.initAsCostsFromOtherStorage(__s18local0, this.dialogDisp, true, this.allianceInfoVO.storage);
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.onClick = function (__s22param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
      switch (__s22param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onBuyBoost();
      }
    }
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.hideLoaded = function (__s26param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s26param0);
    if (this.dialogProperties.targetAllianceSublayer) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(this.dialogProperties.targetAllianceSublayer));
      this.dialogProperties.targetAllianceSublayer = null;
    }
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
  };
  CastleAllianceBuyCustomizableBoostDialog.prototype.onBuyBoost = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceUpgradeVO.C2SAllianceUpgradeVO(this.dialogProperties.buffSeriesID, this.scrollComponent.currentValue));
    this.hide();
  };
  Object.defineProperty(CastleAllianceBuyCustomizableBoostDialog.prototype, "allianceInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBuyCustomizableBoostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBuyCustomizableBoostDialog.__initialize_static_members = function () {
    CastleAllianceBuyCustomizableBoostDialog.ICON_SIZE = new __s0local0(60, 60);
  };
  CastleAllianceBuyCustomizableBoostDialog.NAME = "CastleAllianceBuyCustomizableBoost";
  return CastleAllianceBuyCustomizableBoostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceBuyCustomizableBoostDialog = __s0local1;
var __dep_export_CollectableItemEffectVO = require("gge-module:export_CollectableItemEffectVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
