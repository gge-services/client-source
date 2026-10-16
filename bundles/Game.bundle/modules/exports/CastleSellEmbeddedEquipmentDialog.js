Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSellEmbeddedEquipmentDialog() {
    return __s1param0.call(this, CastleSellEmbeddedEquipmentDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog.NAME)) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSellEmbeddedEquipmentDialog, __s1param0);
  CastleSellEmbeddedEquipmentDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_extract, this.dialogDisp.btn_sell, this.dialogDisp.btn_close]);
    this.dialogDisp.mc_equipment.mouseChildren = false;
    this.dialogDisp.mc_sell_1.mouseChildren = this.dialogDisp.mc_sell_2_0.mouseChildren = this.dialogDisp.mc_sell_2_1.mouseChildren = this.dialogDisp.mc_extract.mouseChildren = false;
  };
  CastleSellEmbeddedEquipmentDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentSale_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentSale_info", [this.dialogProperties.itemToSell.gemVO.nameString]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_sell.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentSale_sell")).verticalAlign = __dep_exact_9e901e8e2483a22f_2.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_extract.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentSale_extractGem")).verticalAlign = __dep_exact_9e901e8e2483a22f_2.GGSVerticalAlign.MIDDLE;
    var __s7local0;
    var __s7local1 = this.calculateRemovalCostsForGems();
    var __s7local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(32, 32));
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO")) {
      var __s7local3 = this.dialogProperties.itemToSell.getSellPrice();
      this.showSingleSellSlot(__s7local3, __s7local2);
      __s7local0 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s7local1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS);
    } else {
      var __s7local4 = this.dialogProperties.itemToSell;
      var __s7local5 = __s7local4.gemVO;
      var __s7local6 = __s7local4.sellCurrencies;
      var __s7local7 = __s7local5 ? __s7local5.sellCurrencies : null;
      if (__s7local6 && __s7local6.length > 0 || __s7local7 && __s7local7.length > 0) {
        var __s7local8 = new __dep_export_CollectableList.CollectableList();
        if (__s7local6 && __s7local6.length > 0) {
          __s7local8.addList(__s7local6);
        }
        if (__s7local7 && __s7local7.length > 0) {
          __s7local8.addList(__s7local7);
        }
        __s7local8.combineDuplicatedItems();
        if (__s7local8.length > 1) {
          this.showDoubleSellSlot(__s7local8.getItemByIndex(0), __s7local8.getItemByIndex(1), __s7local2);
        } else {
          this.showSingleSellSlot(__s7local8.getItemByIndex(0), __s7local2);
        }
      } else {
        var __s7local9 = __s7local4.sellPriceOverride > -1 ? __s7local4.sellPriceOverride : __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquipmentRareness(__s7local4.rareID).saleValue;
        if (__s7local4.gemVO) {
          __s7local9 += __s7local5.sellPriceOverride > -1 ? __s7local5.sellPriceOverride : __s7local5.levelInfos.sellValueC1;
        }
        this.showSingleSellSlot(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s7local9), __s7local2);
      }
      __s7local0 = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s7local1);
    }
    this.renderCurrencySlot(this.dialogDisp.mc_extract, __s7local0, __s7local2);
    if (__s7local1 == 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_extract.tfSellValue, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_extract.tfSellValue, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local1)).autoFitToBounds = true;
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.renderCurrencySlot = function (__s20param0, __s20param1, __s20param2) {
    __s20param0.toolTipText = __s20param1.getNameTextId();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(__s20param0.mc_icon), __s20param1, __s20param2);
    this.textFieldManager.registerTextField(__s20param0.tfSellValue, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s20param1.amount));
  };
  CastleSellEmbeddedEquipmentDialog.prototype.showSingleSellSlot = function (__s22param0, __s22param1) {
    this.dialogDisp.mc_sell_1.visible = true;
    this.dialogDisp.mc_sell_2_0.visible = false;
    this.dialogDisp.mc_sell_2_1.visible = false;
    this.renderCurrencySlot(this.dialogDisp.mc_sell_1, __s22param0, __s22param1);
  };
  CastleSellEmbeddedEquipmentDialog.prototype.showDoubleSellSlot = function (__s24param0, __s24param1, __s24param2) {
    this.dialogDisp.mc_sell_1.visible = false;
    this.dialogDisp.mc_sell_2_0.visible = true;
    this.dialogDisp.mc_sell_2_1.visible = true;
    this.renderCurrencySlot(this.dialogDisp.mc_sell_2_0, __s24param0, __s24param2);
    this.renderCurrencySlot(this.dialogDisp.mc_sell_2_1, __s24param1, __s24param2);
  };
  CastleSellEmbeddedEquipmentDialog.prototype.calculateRemovalCostsForGems = function () {
    var __s26local0 = 0;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell.gemVO, "CastleGemVO")) {
      __s26local0 += __dep_exact_f855840627e6e145.int(this.dialogProperties.itemToSell.gemVO.levelInfos.removalCostC2);
    } else {
      __s26local0 += __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST);
    }
    return __s26local0;
  };
  CastleSellEmbeddedEquipmentDialog.prototype.showLoaded = function (__s30param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s30param0);
    this.destroyCollectableRenderList();
    this.initTexts();
    this.fillSlotContainer(this.dialogProperties.itemToSell);
    var __s30local0 = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !__s30local0);
    this.dialogDisp.btn_extract.toolTipText = __s30local0 ? "allyforge_tooltip_inventoryFull_gems" : "";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !__dep_export_CastleModel.CastleModel.gemData.isInventoryFull);
    this.dialogDisp.btn_extract.toolTipText = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  CastleSellEmbeddedEquipmentDialog.prototype.hideLoaded = function (__s32param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s32param0);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_equipment.mc_equipmentHolder);
    this.dialogDisp.mc_equipment.mc_bg.gotoAndStop(6);
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onClick = function (__s34param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      __s1param0.prototype.onClick.call(this, __s34param0);
      switch (__s34param0.target) {
        case this.dialogDisp.btn_close:
          if (this.dialogProperties.cancelFunction) {
            this.dialogProperties.cancelFunction();
          }
          this.hide();
          break;
        case this.dialogDisp.btn_sell:
          this.dialogProperties.okFunction(false);
          this.hide();
          break;
        case this.dialogDisp.btn_extract:
          this.onExtract();
      }
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onExtract = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO") && __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS) < this.calculateRemovalCostsForGems()) {
      __dep_export_CostHelper.CostHelper.showNotEnoughSpecialCurrencyDialog([__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS]);
    } else if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO") && __dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.calculateRemovalCostsForGems()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    } else {
      this.dialogProperties.okFunction(true);
      this.hide();
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onMouseOver = function (__s44param0) {
    __s1param0.prototype.onMouseOver.call(this, __s44param0);
    if (__s44param0.target == this.dialogDisp.mc_equipment) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this.dialogDisp.mc_equipment, this.dialogProperties.itemToSell);
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.fillSlotContainer = function (__s47param0) {
    if (__s47param0) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s47param0, "BasicEquipmentVO")) {
        __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s47param0, this.dialogDisp.mc_equipment.mc_equipmentHolder, __dep_export_CastleEquipmentDialog.CastleEquipmentDialog.MAX_WIDTH, __dep_export_CastleEquipmentDialog.CastleEquipmentDialog.MAX_HEIGHT, this.bindFunction(this.onEQLoaded), true, false, false, true, true);
        var __s47local0 = __dep_exact_f855840627e6e145.int(__s47param0.visualRareID);
        if (__s47param0.rarity == __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_UNIQUE) {
          __s47local0 = 5;
        }
        this.dialogDisp.mc_equipment.mc_bg.gotoAndStop(__s47local0);
      } else {
        this.dialogDisp.mc_equipment.mc_equipmentHolder.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(__s47param0, null, null, true));
      }
    }
  };
  CastleSellEmbeddedEquipmentDialog.prototype.onEQLoaded = function (__s53param0 = null) {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_equipment);
  };
  Object.defineProperty(CastleSellEmbeddedEquipmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSellEmbeddedEquipmentDialog.NAME = "CastleSellEmbeddedEquipment";
  return CastleSellEmbeddedEquipmentDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSellEmbeddedEquipmentDialog = __s0local1;
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
