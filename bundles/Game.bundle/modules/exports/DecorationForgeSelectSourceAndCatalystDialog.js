Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __dep_export_CastleFusionCompareToolTip = require("gge-module:export_CastleFusionCompareToolTip");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DecorationForgeSelectResultVO = require("gge-module:export_DecorationForgeSelectResultVO");
var __dep_export_DecorationForgeSelectionListItemVO = require("gge-module:export_DecorationForgeSelectionListItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeSelectSourceAndCatalystDialog() {
    return __s1param0.call(this, DecorationForgeSelectSourceAndCatalystDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectSourceAndCatalystDialog, __s1param0);
  DecorationForgeSelectSourceAndCatalystDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_sourceCatalyst_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_sourceTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_sourceCatalyst_source_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_catalystTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_sourceCatalyst_catalyst_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_emptySource.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_sourceCatalyst_source_empty")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_emptyCatalyst.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_sourceCatalyst_catalyst_empty")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_decoForge_sourceCatalyst_hint")).autoFitToBounds = true;
    this.dialogDisp.mc_targetLevel.toolTipText = "fusionLevel";
    this.dialogDisp.mc_targetXP.toolTipText = "fusionXP";
    this.dialogDisp.mc_resultBonusChance.toolTipText = "bonusFusionXPChance";
    this.dialogDisp.mc_resultBonusXP.toolTipText = "bonusFusionXP";
    this.dialogDisp.mc_resultXP.toolTipText = "fusionXP";
    this.dialogDisp.btn_ok.toolTipText = "confirmSelection";
    this.dialogDisp.btn_help.toolTipText = "help";
    this._sourceList = new __dep_export_DecorationForgeSelectionList.DecorationForgeSelectionList(this.dialogDisp.mc_sourceList, __dep_export_DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE, 5);
    this._catalystList = new __dep_export_DecorationForgeSelectionList.DecorationForgeSelectionList(this.dialogDisp.mc_catalystList, __dep_export_DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE.DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE, 5);
    this.dialogDisp.mc_targetLevel.mouseChildren = false;
    this.dialogDisp.mc_targetXP.mouseChildren = false;
    this.dialogDisp.mc_resultBonusChance.mouseChildren = false;
    this.dialogDisp.mc_resultBonusXP.mouseChildren = false;
    this.dialogDisp.mc_resultXP.mouseChildren = false;
    this.dialogDisp.btn_resultInfo.mouseChildren = false;
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._sourceList.onShow();
    this._catalystList.onShow();
    this._sourceList.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._catalystList.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this.updateTargetInfo();
    this.updateSourceList();
    this.updateCatalystList();
    this.updateResultInfo();
    this.updateOkButton();
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.hide = function () {
    this._sourceList.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._catalystList.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._sourceList.onHide();
    this._catalystList.onHide();
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onStorageUpdated = function (__s11param0) {
    this.updateSourceList();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateTargetInfo = function () {
    var __s13local0 = this.dialogProperties.buttons.buttonTarget.currentSelectionVO;
    var __s13local1 = __s13local0.getBuildingFusionInfoVO();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_targetItem), __s13local0.itemVO, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(64, 42)));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_targetLevel.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local1.getCurrentLevel())).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_targetXP.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_proportional_value", [__s13local1.getDeltaXpBetweenCurrentLevels(), __s13local1.getDeltaXpForNextLevel()])).autoFitToBounds = true;
    new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.dialogDisp.mc_targetXP.mc_progress, 326).setProgressByPercent(__s13local1.getDeltaXpPercentFactor());
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateSourceList = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.decoStorage.getMainStorage();
    var __s15local1 = __s15local0.getAllDecosAsBuildings();
    var __s15local2 = [];
    var __s15local3 = this.dialogProperties.buttons.buttonSource.currentSelectionVO ? this.dialogProperties.buttons.buttonSource.currentSelectionVO.itemVO : null;
    var __s15local4 = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO;
    if (__s15local1 != null) {
      for (var __s15local5 = 0, __s15local6 = __s15local1; __s15local5 < __s15local6.length; __s15local5++) {
        var __s15local7 = __s15local6[__s15local5];
        if (__s15local7 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15local7, "ADecoBuildingVO")) {
          var __s15local8 = __s15local7;
          if (__s15local8.fusionInfoVO.isFusionSource && __s15local8) {
            var __s15local9 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
            __s15local9.buildingVO = __s15local8;
            __s15local9.amount = __s15local8.isUnique() ? 1 : __s15local0.getAmount(__s15local8.wodId);
            if (__s15local4.buildingVO.objectId <= 0 && __s15local9.equals(__s15local4)) {
              __s15local9.amount--;
            }
            if (__s15local9.amount > 0) {
              __s15local2.push(new __dep_export_DecorationForgeSelectionListItemVO.DecorationForgeSelectionListItemVO(__s15local9, __s15local9.equals(__s15local3), __s15local4));
            }
          }
        }
      }
    }
    for (var __s15local10 = 0, __s15local11 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionShopPackages(__dep_export_ClientConstPackages.ClientConstPackages.FUSION_SHOP_ID_HARD); __s15local10 < __s15local11.length; __s15local10++) {
      var __s15local12 = __s15local11[__s15local10];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15local12.reward, "CollectableItemBuildingVO")) {
        var __s15local13 = false;
        if (__s15local2 != null) {
          for (var __s15local14 = 0, __s15local15 = __s15local2; __s15local14 < __s15local15.length; __s15local14++) {
            var __s15local16 = __s15local15[__s15local14];
            if (__s15local16 !== undefined && __s15local12.reward.buildingVO.wodId == __s15local16.collectableBuildingVO.buildingVO.wodId) {
              __s15local13 = true;
              break;
            }
          }
        }
        if (!__s15local13) {
          var __s15local17 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
          __s15local17.buildingVO = __s15local12.reward.buildingVO;
          var __s15local18 = __s15local17.buildingVO;
          __s15local17.amount = __s15local0.getAmount(__s15local18.wodId);
          __s15local2.push(new __dep_export_DecorationForgeSelectionListItemVO.DecorationForgeSelectionListItemVO(__s15local17, __s15local17.equals(__s15local3), __s15local4));
        }
      }
    }
    __s15local2.sort(this.bindFunction(this.sortBuildings));
    this._sourceList.updateWithNewData(__s15local2);
    this.updateNoDecoText();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.sortBuildings = function (__s32param0, __s32param1) {
    return __s32param1.fusionXP - __s32param0.fusionXP;
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateCatalystList = function () {
    var __s34local0 = this.dialogProperties.buttons.buttonCatalyst.currentSelectionVO ? this.dialogProperties.buttons.buttonCatalyst.currentSelectionVO.itemVO : null;
    var __s34local1 = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO;
    var __s34local2 = __dep_exact_f855840627e6e145.int(__s34local1.buildingVO.fusionInfoVO.getCurrentLevel());
    var __s34local3 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).getAvailableCatalysts(__s34local2);
    var __s34local4 = [];
    if (__s34local3 != null) {
      for (var __s34local5 = 0, __s34local6 = __s34local3; __s34local5 < __s34local6.length; __s34local5++) {
        var __s34local7 = __s34local6[__s34local5];
        if (__s34local7 !== undefined) {
          __s34local4.push(new __dep_export_DecorationForgeSelectionListItemVO.DecorationForgeSelectionListItemVO(__s34local7, __s34local7.equals(__s34local0), __s34local1));
        }
      }
    }
    this._catalystList.updateWithNewData(__s34local4);
    this.updateNoDecoText();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateNoDecoText = function () {
    this.dialogDisp.mc_emptySource.visible = this._sourceList.itemVOs.length <= 0;
    this.dialogDisp.mc_emptyCatalyst.visible = this._catalystList.itemVOs.length <= 0;
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateResultInfo = function () {
    var __s42local0 = this._sourceList.getSelectedItemVO();
    var __s42local1 = this._catalystList.getSelectedItemVO();
    if (__s42local0 && __s42local1) {
      var __s42local2 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID);
      var __s42local3 = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO.buildingVO;
      var __s42local4 = __s42local0.data.buildingVO;
      var __s42local5 = __s42local1.data;
      var __s42local6 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPChance(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance, __s42local4.fusionInfoVO.getCurrentLevel(), __s42local3.fusionInfoVO.getCurrentLevel(), __s42local5.xmlCurrencyVO.tier, __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s42local3.fusionInfoVO.getCurrentLevel())));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusChance.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [__s42local6]));
      var __s42local7 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPWithForgeMax(__s42local4.fusionInfoVO.getCurrentLevel(), __s42local3.fusionInfoVO.getCurrentLevel(), __s42local2.level));
      __s42local7 += __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPBoost(__s42local7, __s42local6, 0));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusXP.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s42local7]));
      var __s42local8 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionXPFromSource(__s42local4.fusionInfoVO.getCurrentLevel(), __s42local3.fusionInfoVO.getCurrentLevel()));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultXP.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [__s42local8]));
      this.dialogDisp.btn_resultInfo.toolTipText = null;
    } else {
      this.dialogDisp.btn_resultInfo.toolTipText = "infoArea_tt";
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusChance.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultBonusXP.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_resultXP.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"));
    }
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.updateOkButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, this.areAllSelectionsDone());
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.areAllSelectionsDone = function () {
    return !!this._sourceList.getSelectedItemVO() && !!this._catalystList.getSelectedItemVO();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onClick = function (__s50param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s50param0.target)) {
      __s1param0.prototype.onClick.call(this, __s50param0);
      switch (__s50param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_decoForge_sourceCatalyst_help"));
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButtonClicked();
          this.hide();
      }
    }
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onSelectionChanged = function () {
    this.updateResultInfo();
    this.updateOkButton();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onOkButtonClicked = function () {
    var __s56local0 = new __dep_export_DecorationForgeSelectResultVO.DecorationForgeSelectResultVO(this._sourceList.getSelectedItemVO().data);
    __s56local0.btn = this.dialogProperties.buttons.buttonSource;
    var __s56local1 = new __dep_export_DecorationForgeSelectResultVO.DecorationForgeSelectResultVO(this._catalystList.getSelectedItemVO().data);
    __s56local1.btn = this.dialogProperties.buttons.buttonCatalyst;
    this.dialogProperties.onSuccessFunc(__s56local0);
    this.dialogProperties.onSuccessFunc(__s56local1);
    this.hide();
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onMouseOver = function (__s58param0) {
    __s1param0.prototype.onMouseOver.call(this, __s58param0);
    if (__s58param0.target == this.dialogDisp.btn_resultInfo) {
      if (!this._sourceList.getSelectedItemVO() || !this._catalystList.getSelectedItemVO()) {
        return;
      }
      var __s58local0 = this._sourceList.getSelectedItemVO().data.buildingVO;
      var __s58local1 = this.dialogProperties.buttons.buttonTarget.currentSelectionVO.itemVO.buildingVO;
      var __s58local2 = this._catalystList.getSelectedItemVO().data;
      __dep_export_CastleFusionCompareToolTip.CastleFusionCompareToolTip.showToolTip(this.dialogDisp.btn_resultInfo, __s58local0.fusionInfoVO, __s58local1.fusionInfoVO, __s58local2);
    }
  };
  DecorationForgeSelectSourceAndCatalystDialog.prototype.onMouseOut = function (__s62param0) {
    __s1param0.prototype.onMouseOut.call(this, __s62param0);
    __dep_export_CastleFusionCompareToolTip.CastleFusionCompareToolTip.hideToolTip();
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectSourceAndCatalystDialog.NAME = "DecorationForgeSelectSourceAndCatalyst";
  return DecorationForgeSelectSourceAndCatalystDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeSelectSourceAndCatalystDialog = __s0local1;
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DecorationForgeSelectionList = require("gge-module:export_DecorationForgeSelectionList");
var __dep_export_DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE = require("gge-module:export_DecorationForgeSelectSourceAndCatalystDialogListItemCatalystVE");
var __dep_export_DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE = require("gge-module:export_DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
