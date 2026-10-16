Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.GlowFilter;
var __s0local2 = function (__s1param0) {
  function CastleLevelUpDialog() {
    var __s3local0 = this;
    __s3local0._inventoryCurrentPage = 0;
    __s3local0._inventoryMaxPage = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleLevelUpDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLevelUpDialog, __s1param0);
  CastleLevelUpDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_unlockInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_levelup_unlockInfo"));
    this.i_level_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.comp_newBuildings.btn_rightArrow, this.dialogDisp.comp_newBuildings.btn_leftArrow]);
  };
  CastleLevelUpDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    var __s7local0 = __dep_export_Iso.Iso.controller.viewUpdater;
    if (__s7local0) {
      __s7local0.switchBuildModeInOwnCastle(false);
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    if (this.levelUpDialogProperties.isLegendLevel) {
      this.dialogDisp.bg.mc_header.gotoAndStop(2);
      this.dialogDisp.mc_level.txt_value.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_LEGENDARY);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("legendLevel"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_levelupText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_levelup_description_legend"));
    } else {
      this.dialogDisp.bg.mc_header.gotoAndStop(1);
      this.dialogDisp.mc_level.txt_value.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_NORMAL);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_levelupText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_levelup_description"));
    }
    this.i_level_txt_value.textContentVO.numberValue = this.levelUpDialogProperties.newLevel;
    this.i_level_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.levelUpDialogProperties.newLevel));
    this.dialogDisp.mc_level.filters = [new __s0local1(16766077, 1, 5, 5, 5000)];
    this._inventoryCurrentPage = 0;
    this.fillNewBuildings();
    this.fillRewards();
  };
  CastleLevelUpDialog.prototype.onClick = function (__s12param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      __s1param0.prototype.onClick.call(this, __s12param0);
      switch (__s12param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.comp_newBuildings.btn_leftArrow:
        case this.dialogDisp.comp_newBuildings.btn_rightArrow:
          this.onClickInventoryArrow(__s12param0);
      }
    }
  };
  CastleLevelUpDialog.prototype.showLoaded = function (__s16param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s16param0);
    this.dialogDisp.gotoAndPlay(1);
    if (this.layoutManager.tutorialPanel) {
      this.layoutManager.tutorialPanel.hide();
    }
  };
  CastleLevelUpDialog.prototype.onClickInventoryArrow = function (__s19param0) {
    var __s19local0 = this._inventoryCurrentPage;
    if (__s19param0.target == this.dialogDisp.comp_newBuildings.btn_leftArrow) {
      this._inventoryCurrentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this._inventoryCurrentPage - 1));
    } else {
      this._inventoryCurrentPage = __dep_exact_f855840627e6e145.int(Math.min(this._inventoryMaxPage, this._inventoryCurrentPage + 1));
    }
    if (__s19local0 != this._inventoryCurrentPage) {
      this.fillNewBuildings();
    }
  };
  CastleLevelUpDialog.prototype.initInventoryArrows = function (__s24param0) {
    this._inventoryMaxPage = __dep_exact_f855840627e6e145.int((__s24param0 - 1) / CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE);
    this.dialogDisp.comp_newBuildings.btn_rightArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage < this._inventoryMaxPage;
    this.dialogDisp.comp_newBuildings.btn_leftArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage > 0;
  };
  CastleLevelUpDialog.prototype.fillRewards = function () {
    var __s26local0 = __dep_export_CastleModel.CastleModel.levelUpData.getLevelUp(this.levelUpDialogProperties.newLevel, this.levelUpDialogProperties.isLegendLevel, __dep_export_CastleModel.CastleModel.userData.splitRunData.getBooleanParam(__dep_exact_26a421b704832cff_1.SplitRunConst.SKIP_GROUP_PARAM));
    var __s26local1 = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s26local0.rewardID);
    if (this.levelUpDialogProperties.newLevel == 1 && this.levelUpDialogProperties.isLegendLevel) {
      var __s26local2 = __dep_export_CastleModel.CastleModel.levelUpData.getLevelUp(__dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP, false, __dep_export_CastleModel.CastleModel.userData.splitRunData.getBooleanParam(__dep_exact_26a421b704832cff_1.SplitRunConst.SKIP_GROUP_PARAM));
      __s26local1.addList(__dep_export_CastleModel.CastleModel.rewardData.getListById(__s26local2.rewardID), true);
    }
    if (__s26local1.length > 4) {
      throw new Error("The level up dialog is designed to hold a maximum of 4 rewards.");
    }
    for (var __s26local3 = 1; __s26local3 <= 4; ++__s26local3) {
      this.dialogDisp["rewards" + __s26local3].visible = __s26local3 == __s26local1.length;
    }
    if (__s26local1.length > 0) {
      var __s26local4 = this.dialogDisp["rewards" + __s26local1.length];
      var __s26local5 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s26local4, "i");
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, __s26local5, __s26local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, CastleLevelUpDialog.REWARD_MAX_ITEM_SIZE));
    }
  };
  CastleLevelUpDialog.prototype.fillNewBuildings = function () {
    var __s33local0 = this.getBuildingsForThisLevel();
    this.dialogDisp.txt_unlockInfo.visible = __s33local0.length > 0;
    this.initInventoryArrows(__s33local0.length);
    this._inventoryCurrentPage = __dep_exact_f855840627e6e145.int(Math.min(this._inventoryCurrentPage, this._inventoryMaxPage));
    var __s33local1 = this._inventoryCurrentPage * CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE;
    for (var __s33local2 = 0; __s33local2 < CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE; __s33local2++) {
      var __s33local3 = this.dialogDisp.comp_newBuildings["i" + __s33local2];
      if (__s33local1 < __s33local0.length) {
        __s33local3.visible = true;
        __s33local3.mouseChildren = false;
        var __s33local4 = __s33local0[__s33local1];
        __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s33local4, __s33local3.mc_item, CastleLevelUpDialog.BUILDING_MAX_ITEM_SIZE.x, CastleLevelUpDialog.BUILDING_MAX_ITEM_SIZE.y, __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID).kingdomName);
        if (__s33local4.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.DECO) {
          __s33local3.toolTipText = __s33local4.getNameString();
        } else {
          __s33local3.toolTipText = "building_with_level" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + [__s33local4.getNameString(), __s33local4.level].toString();
        }
      } else {
        __s33local3.visible = false;
      }
      __s33local1++;
    }
  };
  CastleLevelUpDialog.prototype.getBuildingsForThisLevel = function () {
    var __s41local0;
    var __s41local1 = [];
    var __s41local2 = false;
    var __s41local3 = new Map();
    for (var __s41local4 = 0, __s41local5 = Array.from(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).values()); __s41local4 < __s41local5.length; __s41local4++) {
      var __s41local6 = __s41local5[__s41local4];
      if (__s41local6 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s41local6, "ABasicBuildingVO")) {
        __s41local2 = (__s41local0 = __s41local6).requiredLegendLevel > 0;
        var __s41local7 = __dep_exact_f855840627e6e145.int(__s41local0.getRequiredLevel());
        if (__s41local2 == this.levelUpDialogProperties.isLegendLevel && __s41local7 == this.levelUpDialogProperties.newLevel && __s41local0.onlyInEventIds.length <= 0 && (__s41local0.isAvailableInAreaType(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE) || __s41local0.isAvailableInAreaType(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGDOM_CASTLE)) && (__s41local3.get(__s41local0.name) == null || __s41local3.get(__s41local0.name).level < __s41local0.level)) {
          __s41local3.set(__s41local0.name, __s41local0);
        }
      }
    }
    if (__s41local3 != null) {
      for (var __s41local8 = 0, __s41local9 = Array.from(__s41local3.values()); __s41local8 < __s41local9.length; __s41local8++) {
        if ((__s41local0 = __s41local9[__s41local8]) !== undefined) {
          __s41local1.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s41local0.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
        }
      }
    }
    __s41local1.sort(__dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return __s41local1;
  };
  Object.defineProperty(CastleLevelUpDialog.prototype, "levelUpDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLevelUpDialog.__initialize_static_members = function () {
    CastleLevelUpDialog.NAME = "CastleLevelUp";
    CastleLevelUpDialog.BUILDING_MAX_ITEM_SIZE = new __s0local0(53, 75);
    CastleLevelUpDialog.REWARD_MAX_ITEM_SIZE = new __s0local0(60, 60);
    CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE = 4;
  };
  return CastleLevelUpDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleLevelUpDialog = __s0local2;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleDecoShopItemArrayHelper = require("gge-module:export_CastleDecoShopItemArrayHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
