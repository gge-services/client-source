Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SRequestForgeCraftVO = require("gge-module:export_C2SRequestForgeCraftVO");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceDialogForge(__s3param0) {
    var __s3local0 = this;
    __s3local0._preventShowEquipTooltip = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    __s3local0.itxt_forgelvl = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_forgelvl, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    __s3local0.itxt_cost = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO());
    __s3local0.itxt_storageEquipment = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_storageSpace.txt_storage, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    __s3local0.itxt_storageGem = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_storageSpaceGem.txt_storage, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    __s3local0.subLayerDisp.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    __s3local0.subLayerDisp.mc_storageSpace.mouseChildren = false;
    __s3local0.subLayerDisp.mc_storageSpaceGem.toolTipText = "dialog_gemSpace_tooltip";
    __s3local0.subLayerDisp.mc_storageSpaceGem.mouseChildren = false;
    __s3local0.subLayerDisp.mc_equip.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_upgrade, __s3local0.subLayerDisp.btn_craft]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogForge, __s1param0);
  CastleAllianceDialogForge.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceForge"));
  };
  CastleAllianceDialogForge.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (!this.subLayerDisp.ani_success.isPlaying) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
      this.subLayerDisp.mc_equip.equipVO = null;
      this.subLayerDisp.mc_equip.alpha = 0;
      this.subLayerDisp.mc_equip.gotoAndStop(1);
      this.onForgeData();
    }
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.FORGE_DATA_RECEIVED, this.bindFunction(this.onForgeData));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.FORGE_CRAFT_EXECUTED, this.bindFunction(this.onForgeItem));
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED, this.bindFunction(this.onForgeGem));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    this.updateStorageText();
  };
  CastleAllianceDialogForge.prototype.onInventorySpaceUpdate = function (__s10param0) {
    this.updateStorageText();
  };
  CastleAllianceDialogForge.prototype.updateStorageText = function () {
    this.itxt_storageEquipment.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.equipData.filledInventorySpace, __dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace];
    this.itxt_storageEquipment.color = __dep_export_CastleModel.CastleModel.equipData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_storageGem.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.gemData.filledInventorySpace, __dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace];
    this.itxt_storageGem.color = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleAllianceDialogForge.prototype.onForgeItem = function (__s14param0) {
    this.subLayerDisp.mc_equip.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
    this.subLayerDisp.mc_equip.scaleX = this.subLayerDisp.mc_equip.scaleY = 1;
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(__s14param0.equipmentInventory[0], this.subLayerDisp.mc_equip, 129.79999999999998, 129.79999999999998, function (__s16param0) {
      if (__s16param0.parent) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(__s16param0.parent);
      }
    });
    this.subLayerDisp.mc_equip.equipVO = __s14param0.equipmentInventory[0];
    this.subLayerDisp.ani_success.play();
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.subLayerDisp.mc_equip, 1, {
      alpha: 0.2
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onStart: this.bindFunction(this.onCompleteBounce)
    });
  };
  CastleAllianceDialogForge.prototype.onForgeGem = function (__s19param0) {
    this.subLayerDisp.mc_equip.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
    this.subLayerDisp.mc_equip.scaleX = this.subLayerDisp.mc_equip.scaleY = 1;
    this.subLayerDisp.mc_equip.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(__s19param0.gemInventory[0], null, new __s0local0(129.79999999999998, 129.79999999999998)));
    this.subLayerDisp.mc_equip.equipVO = __s19param0.gemInventory[0];
    this.subLayerDisp.mc_equip.gotoAndStop(0);
    this.subLayerDisp.ani_success.play();
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.subLayerDisp.mc_equip, 1, {
      alpha: 0.2
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onStart: this.bindFunction(this.onCompleteBounce)
    });
  };
  CastleAllianceDialogForge.prototype.throwEquipInInventory = function () {
    this._preventShowEquipTooltip = true;
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.subLayerDisp.mc_equip, 1, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeOut)
    });
  };
  CastleAllianceDialogForge.prototype.onCompleteFadeOut = function (__s23param0 = null) {
    this._preventShowEquipTooltip = false;
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
    this.subLayerDisp.mc_equip.equipVO = null;
    this.updateCraftButton();
  };
  CastleAllianceDialogForge.prototype.onCompleteBounce = function (__s25param0 = null) {
    this.updateCraftButton();
  };
  CastleAllianceDialogForge.prototype.onForgeData = function (__s27param0 = null) {
    this.setTextsAndValues();
  };
  CastleAllianceDialogForge.prototype.updateCraftButton = function () {
    if (this.isAllowedToCraft && !this.isEquipmentOnScreen) {
      this.subLayerDisp.btn_craft.toolTipText = "allyforge_tooltip_craft";
      this.subLayerDisp.btn_craft.gotoAndStop(1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, true);
    } else if (this.isEquipmentOnScreen) {
      this.subLayerDisp.btn_craft.toolTipText = "allyforge_tooltip_collect";
      this.subLayerDisp.btn_craft.gotoAndStop(2);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, true);
    } else {
      this.subLayerDisp.btn_craft.toolTipText = "allyforge_alreadyCrafted_gems_tooltip";
      if (this.isInventoryFull) {
        this.subLayerDisp.btn_craft.toolTipText = "allyforge_tooltip_inventoryFull_equipment";
      }
      this.subLayerDisp.btn_craft.gotoAndStop(1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    }
  };
  CastleAllianceDialogForge.prototype.setTextsAndValues = function () {
    var __s35local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceForgeCostByLevel(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getBoostLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE)));
    var __s35local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__s35local0));
    this.itxt_copy.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("allianceForge_gems_copy");
    this.itxt_forgelvl.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("allyforge_copy_lvl");
    this.itxt_forgelvl.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.allianceData.allyForgeLevel];
    this.itxt_cost.textContentVO.numberValue = __s35local1;
    this.itxt_cost.color = __dep_export_CastleModel.CastleModel.currencyData.c1Amount < __s35local1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.subLayerDisp.icon_inventoryFull.toolTipText = this.setInventoryTooltip;
    this.subLayerDisp.info_costs_tooltip.toolTipText = "cash";
    this.subLayerDisp.icon_inventoryFull.visible = this.isInventoryFull;
    this.updateCraftButton();
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isBoostUpgradeable(__dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE)) {
      if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE)) {
        this.subLayerDisp.btn_upgrade.toolTipText = "allyforge_tooltip_upragde";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_upgrade, true);
      } else {
        this.subLayerDisp.btn_upgrade.toolTipText = "dialog_alliance_rankToLow";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_upgrade, false);
      }
    } else {
      this.subLayerDisp.btn_upgrade.toolTipText = "dialog_alliance_maxUpgradeLevel";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_upgrade, false);
    }
  };
  CastleAllianceDialogForge.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.FORGE_DATA_RECEIVED, this.bindFunction(this.onForgeData));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.FORGE_CRAFT_EXECUTED, this.bindFunction(this.onForgeItem));
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED, this.bindFunction(this.onForgeGem));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
  };
  CastleAllianceDialogForge.prototype.onClick = function (__s43param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s43param0.target)) {
      __s1param0.prototype.onClick.call(this, __s43param0);
      switch (__s43param0.target) {
        case this.subLayerDisp.btn_craft:
          this.onCraftButtonPressed();
          break;
        case this.subLayerDisp.btn_upgrade:
          this.onUpgradeButtonPressed();
          break;
        case this.subLayerDisp.mc_equip:
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s43param0) && this.subLayerDisp.mc_equip.equipVO) {
            if (__dep_export_EquipmentIconHelper.EquipmentIconHelper.equipToolTip.disp.visible) {
              __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideEquipmentToolTip();
            } else if (__dep_export_EquipmentIconHelper.EquipmentIconHelper.relicEquipToolTip.disp.visible) {
              __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideRelicEquipmentToolTip();
            } else {
              __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this.subLayerDisp.mc_equip, this.subLayerDisp.mc_equip.equipVO);
            }
            __s43param0.stopPropagation();
          }
      }
    }
  };
  CastleAllianceDialogForge.prototype.onMouseOver = function (__s51param0) {
    if (!this._preventShowEquipTooltip) {
      __s1param0.prototype.onMouseOver.call(this, __s51param0);
      if (this.subLayerDisp.mc_equip.equipVO && __s51param0.target == this.subLayerDisp.mc_equip) {
        __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this.subLayerDisp.mc_equip, this.subLayerDisp.mc_equip.equipVO);
      }
    }
  };
  CastleAllianceDialogForge.prototype.onUpgradeButtonPressed = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceForgeUpgradeDialog.CastleAllianceForgeUpgradeDialog);
  };
  CastleAllianceDialogForge.prototype.onCraftButtonPressed = function () {
    if (this.isAllowedToCraft && !this.isEquipmentOnScreen) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRequestForgeCraftVO.C2SRequestForgeCraftVO());
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    } else if (this.isEquipmentOnScreen) {
      this.throwEquipInInventory();
    }
  };
  Object.defineProperty(CastleAllianceDialogForge.prototype, "isEquipmentOnScreen", {
    get: function () {
      return this.subLayerDisp.mc_equip.equipVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForge.prototype, "setInventoryTooltip", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isInventoryFull && !__dep_export_CastleModel.CastleModel.gemData.isInventoryFull) {
        return "allyforge_tooltip_inventoryFull_equipment";
      } else if (!__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isInventoryFull && __dep_export_CastleModel.CastleModel.gemData.isInventoryFull) {
        return "allyforge_tooltip_inventoryFull_gems";
      } else {
        return "allyforge_tooltip_inventoryFull_general";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForge.prototype, "isInventoryFull", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isInventoryFull || __dep_export_CastleModel.CastleModel.gemData.isInventoryFull;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForge.prototype, "isAllowedToCraft", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isAbleToForge;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceDialogForge;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogForge = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_CastleAllianceForgeUpgradeDialog = require("gge-module:export_CastleAllianceForgeUpgradeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
