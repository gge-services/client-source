Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_AConstructionItemsActionDialog = require("gge-module:export_AConstructionItemsActionDialog");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleConstructionItemsDisassembledDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 || CastleConstructionItemsDisassembledDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsDisassembledDialog, __s1param0);
  CastleConstructionItemsDisassembledDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons(this.buttons);
    this.textFieldManager.registerTextField(this.dialogDisp.text_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ciDisassembled_header")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.additionalInit();
  };
  CastleConstructionItemsDisassembledDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.mc_boosterDrop.visible = this.dialogProperties.constructionItemVO.isTemporary;
    this.dialogDisp.mc_costs.visible = !this.dialogProperties.constructionItemVO.isTemporary;
    this.textFieldManager.registerTextField(this.dialogDisp.text_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getDescriptionTextID(), [__dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.constructionItemVO.nameTextId)]));
    if (this.resourceListComponent) {
      this.resourceListComponent.destroy();
    }
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      this.showTempCIDisassembling();
      if (this.dialogDisp.btn_showMe) {
        this.dialogDisp.btn_showMe.visible = false;
      }
    } else {
      this.updateResourceList();
      if (this.dialogDisp.btn_showMe) {
        this.dialogDisp.btn_showMe.visible = true;
      }
    }
  };
  CastleConstructionItemsDisassembledDialog.prototype.updateResourceList = function () {
    if (this.resourceListComponent) {
      this.resourceListComponent.destroy();
    }
    this.resourceListComponent = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.fillDisassembledMaterials(this.dialogDisp.mc_costs, this.dialogProperties.constructionItemVO, this.selectedAmountForResources);
  };
  CastleConstructionItemsDisassembledDialog.prototype.showTempCIDisassembling = function () {
    this.destroyCollectableRenderList();
    if (this.dialogProperties.additionalParams) {
      var __s17local0 = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(this.dialogProperties.additionalParams.RIDS, true);
      var __s17local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp.mc_boosterDrop, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("parent.mc_buildingLevel"), __s17local0, __s17local1);
    } else {
      var __s17local2 = __dep_export_CastleModel.CastleModel.constructionItemData.getDisassemblingTobola(this.dialogProperties.constructionItemVO.disassemblingTombolaID);
      __s17local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
      for (var __s17local3 = 0; __s17local3 < CastleConstructionItemsDisassembledDialog.MAX_TOMBOLA_ITEMS; __s17local3++) {
        var __s17local4 = this.dialogDisp.mc_boosterDrop["item" + __s17local3];
        if (__s17local2.length > __s17local3) {
          var __s17local5 = __s17local2[__s17local3];
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s17local4.mc_item).addInfoBtn(__s17local4.btn_info).addBuildingLevelMc(__s17local4.mc_buildingLevel), __s17local5.rewards.getItemByIndex(0), __s17local1);
          if (this.isBoosterDisassemble()) {
            this.textFieldManager.registerTextField(__s17local4.mc_item.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s17local5.shares]));
          }
          __s17local4.visible = true;
        } else {
          __s17local4.visible = false;
        }
      }
    }
  };
  CastleConstructionItemsDisassembledDialog.prototype.getDescriptionTextID = function () {
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      if (this.isBoosterDisassemble()) {
        return "dialog_ciDisassembled_tempCI_booster_desc";
      } else {
        return "dialog_ciDisassembled_tempCI_currency_desc";
      }
    } else {
      return "dialog_ciDisassembled_desc";
    }
  };
  CastleConstructionItemsDisassembledDialog.prototype.additionalInit = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_questInfo_showMe"));
  };
  CastleConstructionItemsDisassembledDialog.prototype.hideLoaded = function (__s34param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s34param0);
    if (this.dialogProperties.hideCallback) {
      this.dialogProperties.hideCallback();
    }
  };
  Object.defineProperty(CastleConstructionItemsDisassembledDialog.prototype, "buttons", {
    get: function () {
      return [this.dialogDisp.btn_showMe];
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembledDialog.prototype.onClick = function (__s39param0) {
    __s1param0.prototype.onClick.call(this, __s39param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s39param0.target)) {
      switch (__s39param0.target) {
        case this.dialogDisp.btn_showMe:
          this.showMainDialogCraftingTab();
      }
    }
  };
  Object.defineProperty(CastleConstructionItemsDisassembledDialog.prototype, "selectedAmountForResources", {
    get: function () {
      if (this.dialogProperties.additionalParams && this.dialogProperties.additionalParams) {
        return this.dialogProperties.additionalParams.AMT;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembledDialog.prototype.showMainDialogCraftingTab = function () {
    this.hide();
    var __s47local0 = new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, __s47local0);
  };
  CastleConstructionItemsDisassembledDialog.prototype.isBoosterDisassemble = function () {
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      var __s49local0 = undefined;
      if (this.dialogProperties.additionalParams) {
        __s49local0 = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(this.dialogProperties.additionalParams.RIDS, true).list[0];
      } else {
        var __s49local1 = __dep_export_CastleModel.CastleModel.constructionItemData.getDisassemblingTobola(this.dialogProperties.constructionItemVO.disassemblingTombolaID);
        if (__s49local1.length > 0) {
          __s49local0 = __s49local1[0].rewards.list[0];
        }
      }
      if (__s49local0 instanceof __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO && __dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_CI_BOOSTER).indexOf(__s49local0.xmlCurrencyVO.id) > -1) {
        return true;
      }
    }
    return false;
  };
  CastleConstructionItemsDisassembledDialog.NAME = "CastleConstructionItemsDisassembled_Z";
  CastleConstructionItemsDisassembledDialog.MAX_TOMBOLA_ITEMS = 3;
  return CastleConstructionItemsDisassembledDialog;
}(__dep_export_AConstructionItemsActionDialog.AConstructionItemsActionDialog);
exports.CastleConstructionItemsDisassembledDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
