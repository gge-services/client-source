Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ACastleSocketDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleSocketDialog, __s1param0);
  ACastleSocketDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.titleTextID)).autoFitToBounds = true;
    this.dialogDisp.mc_gem.mouseChildren = false;
    this.dialogDisp.mc_eq.mouseChildren = false;
  };
  ACastleSocketDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.gemVO.nameString)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.eqVO.nameString)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.renderIcons();
    this.onUserCurrencyChanged(null);
  };
  ACastleSocketDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChanged));
    __s1param0.prototype.hide.call(this);
  };
  ACastleSocketDialog.prototype.updateCosts = function () {
    this.destroyCollectableRenderList();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_cost), this.getCosts(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, ACastleSocketDialog.COST_ICON_DIMENSION));
  };
  ACastleSocketDialog.prototype.renderIcons = function () {
    this.dialogDisp.mc_gem.equipmentVO = this.dialogProperties.gemVO;
    this.dialogDisp.mc_gem.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(this.dialogProperties.gemVO, null, null, true));
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this.dialogProperties.eqVO, this.dialogDisp.mc_eq, 55, 55, null, true, false, false, true, true);
    this.dialogDisp.mc_eq.equipmentVO = this.dialogProperties.eqVO;
    this.dialogDisp.mc_rarity.visible = false;
    this.dialogDisp.mc_rarity.gotoAndStop(this.dialogProperties.eqVO.visualRareID + 1);
  };
  ACastleSocketDialog.prototype.checkAndShowNotEnoughCurrencyMessage = function (__s15param0) {
    return !!__dep_export_CostHelper.CostHelper.canAfford(__dep_export_CollectableHelper.CollectableHelper.createCostList([__s15param0])) || (__s15param0.itemType == __dep_export_CollectableEnum.CollectableEnum.C1 ? __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties()) : __s15param0.itemType == __dep_export_CollectableEnum.CollectableEnum.C2 ? __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties()) : __dep_export_CostHelper.CostHelper.showNotEnoughSpecialCurrencyDialog([new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s15param0).id]), false);
  };
  Object.defineProperty(ACastleSocketDialog.prototype, "titleTextID", {
    get: function () {
      return "dialog_gems_insertGems_header";
    },
    enumerable: true,
    configurable: true
  });
  ACastleSocketDialog.prototype.getCosts = function () {
    var __s19local0 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.gemVO, "CastleGemVO") ? __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(this.dialogProperties.gemVO.levelInfos.insertCostC1) : __dep_exact_26a421b704832cff.RelicItemConst.INSERT_RELIC_GEM_C1_COST);
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C1, __s19local0);
  };
  ACastleSocketDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_ok:
          this.onConfirmButtonClicked();
          break;
        case this.dialogDisp.btn_back:
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          if (this.dialogProperties.onAbort) {
            this.dialogProperties.onAbort();
          }
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_insertGems"));
      }
    }
  };
  ACastleSocketDialog.prototype.onConfirmButtonClicked = function () {
    if (this.checkAndShowNotEnoughCurrencyMessage(this.getCosts())) {
      this.onValidConfirmClicked();
      if (this.dialogProperties.onConfirm) {
        this.dialogProperties.onConfirm();
      }
      this.hide();
    }
  };
  ACastleSocketDialog.prototype.onUserCurrencyChanged = function (__s30param0) {
    this.updateCosts();
  };
  ACastleSocketDialog.prototype.onMouseOver = function (__s32param0) {
    __s1param0.prototype.onMouseOver.call(this, __s32param0);
    if (__s32param0.target && __s32param0.target.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s32param0.target, __s32param0.target.equipmentVO);
    }
  };
  ACastleSocketDialog.prototype.onValidConfirmClicked = function () {};
  Object.defineProperty(ACastleSocketDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ACastleSocketDialog.__initialize_static_members = function () {
    ACastleSocketDialog.COST_ICON_DIMENSION = new __s0local0(35, 35);
  };
  return ACastleSocketDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ACastleSocketDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
__s0local1.__initialize_static_members();
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
