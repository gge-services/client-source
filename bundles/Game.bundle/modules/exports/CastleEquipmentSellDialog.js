Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleEquipmentSellDialog() {
    return __s1param0.call(this, CastleEquipmentSellDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog.NAME)) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentSellDialog, __s1param0);
  CastleEquipmentSellDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btnCancel, this.dialogDisp.btnConfirm, this.dialogDisp.btnClose]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_equipmentSale_title"));
    this.dialogDisp.coinContainer.mouseChildren = false;
    this.dialogDisp.saleSlot.mouseChildren = false;
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleEquipmentSellDialog.prototype.showLoaded = function (__s7param0) {
    var __s7local0;
    var __s7local1;
    var __s7local2;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.destroyCollectableRenderList();
    this.fillSlotContainer(this.dialogProperties.itemToSell);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell, "RelicEquipmentVO")) {
      var __s7local3 = this.dialogProperties.itemToSell;
      __s7local0 = __s7local3.nameString;
      __s7local1 = new __dep_exact_92d05af59ee2ff30_3.TextVO(__s7local3.typeDescriptionText);
      __s7local2 = __s7local3.getSellPrice();
      this.textFieldManager.registerTextField(this.dialogDisp.tfName, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local0));
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell, "BasicEquipmentVO")) {
      var __s7local4 = this.dialogProperties.itemToSell;
      __s7local0 = __s7local4.nameString;
      __s7local1 = new __dep_exact_92d05af59ee2ff30_3.TextVO(__s7local4.typeDescriptionText);
      this.textFieldManager.registerTextField(this.dialogDisp.tfName, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local0));
      if (__s7local4.sellCurrencies && __s7local4.sellCurrencies.length > 0) {
        __s7local2 = __s7local4.sellCurrencies.getItemByIndex(0);
      } else {
        var __s7local5 = __s7local4.sellPriceOverride > -1 ? __s7local4.sellPriceOverride : __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquipmentRareness(__s7local4.rareID).saleValue;
        __s7local2 = new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s7local5);
      }
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.itemToSell, "RelicGemVO")) {
      var __s7local6 = this.dialogProperties.itemToSell;
      __s7local0 = __s7local6.nameString;
      (__s7local1 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO()).addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local6.typeDescriptionText));
      __s7local2 = __s7local6.relicInfoVO.getSellPrice();
      this.textFieldManager.registerTextField(this.dialogDisp.tfName, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local0));
    } else {
      var __s7local7 = this.dialogProperties.itemToSell;
      if (__s7local7) {
        __s7local0 = __s7local7.nameString;
        (__s7local1 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO()).addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local7.typeDescriptionText));
        this.textFieldManager.registerTextField(this.dialogDisp.tfName, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local0));
        __s7local2 = __s7local7.sellCurrencies && __s7local7.sellCurrencies.length > 0 ? __s7local7.sellCurrencies.getItemByIndex(0) : new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s7local7.sellPriceOverride > -1 ? __s7local7.sellPriceOverride : __s7local7.levelInfos.sellValueC1);
      } else {
        __s7local2 = new __dep_export_CollectableItemC1VO.CollectableItemC1VO();
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.tfType, __s7local1 || new __dep_exact_92d05af59ee2ff30_3.TextVO(" ")).autoFitToBounds = true;
    if (__s7local2) {
      this.dialogDisp.coinContainer.toolTipText = __s7local2.getNameTextId();
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dialogDisp.coinContainer.mc_icon), __s7local2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(32, 32)));
      this.textFieldManager.registerTextField(this.dialogDisp.coinContainer.tfSellValue, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local2.amount));
    }
  };
  CastleEquipmentSellDialog.prototype.fillSlotContainer = function (__s19param0) {
    if (__s19param0) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19param0, "BasicEquipmentVO")) {
        __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s19param0, this.dialogDisp.saleSlot.mc_equipmentHolder, __dep_export_CastleEquipmentDialog.CastleEquipmentDialog.MAX_WIDTH, __dep_export_CastleEquipmentDialog.CastleEquipmentDialog.MAX_HEIGHT, this.bindFunction(this.onEQLoaded), true, false, false, true, true);
        var __s19local0 = __dep_exact_f855840627e6e145.int(__s19param0.visualRareID);
        if (__s19param0.rarity == __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_UNIQUE) {
          __s19local0 = 5;
        }
        this.dialogDisp.saleSlot.mc_bg.gotoAndStop(__s19local0);
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19param0, "RelicGemVO")) {
        this.dialogDisp.saleSlot.mc_bg.gotoAndStop(7);
        this.dialogDisp.saleSlot.mc_equipmentHolder.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(__s19param0, null, null, true));
      } else {
        this.dialogDisp.saleSlot.mc_bg.gotoAndStop(__s19param0.isUnique ? 5 : 6);
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19param0, "CastleGemVO")) {
          this.dialogDisp.saleSlot.mc_equipmentHolder.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(__s19param0, null, null, true));
        }
      }
    }
  };
  CastleEquipmentSellDialog.prototype.onEQLoaded = function (__s27param0 = null) {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.saleSlot);
  };
  CastleEquipmentSellDialog.prototype.hideLoaded = function (__s29param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.saleSlot.mc_equipmentHolder);
    this.dialogDisp.saleSlot.mc_bg.gotoAndStop(6);
  };
  CastleEquipmentSellDialog.prototype.onMouseOver = function (__s31param0) {
    __s1param0.prototype.onMouseOver.call(this, __s31param0);
    if (__s31param0.target == this.dialogDisp.saleSlot) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s31param0.target, this.dialogProperties.itemToSell, null, false);
    }
  };
  CastleEquipmentSellDialog.prototype.onClick = function (__s34param0) {
    switch (__s34param0.target) {
      case this.dialogDisp.btnCancel:
      case this.dialogDisp.btnClose:
        if (this.dialogProperties.cancelFunction) {
          this.dialogProperties.cancelFunction();
        }
        this.hide();
        break;
      case this.dialogDisp.btnConfirm:
        if (this.dialogProperties.okFunction) {
          this.dialogProperties.okFunction();
        }
        this.hide();
    }
  };
  Object.defineProperty(CastleEquipmentSellDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentSellDialog.NAME = "CastleEquipmentSell";
  return CastleEquipmentSellDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEquipmentSellDialog = __s0local1;
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
