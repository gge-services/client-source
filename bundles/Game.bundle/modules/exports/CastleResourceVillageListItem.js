Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleStartAttackDialogProperties = require("gge-module:export_CastleStartAttackDialogProperties");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_PrivateResourceVillageActionDialogProperties = require("gge-module:export_PrivateResourceVillageActionDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleResourceVillageListItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_level = CastleResourceVillageListItem.textFieldManager.registerTextField(__s3param0.txt_villageLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ci_level", [0]));
    __s3param0.btn_jump_to_wmo.toolTipText = "panel_action_jumpTo";
    __s3param0.btn_stationing.toolTipText = "ringmenu_sendTroups";
    __s3param0.btn_upgrade.toolTipText = "dialog_privateResourceVillages_upgrade_tt";
    __s3param0.btn_remove.toolTipText = "dialog_privateResourceVillages_remove_tt";
    __s3param0.mc_castleHolder.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_jump_to_wmo, __s3param0.btn_stationing, __s3param0.btn_upgrade, __s3param0.btn_remove]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceVillageListItem, __s1param0);
  CastleResourceVillageListItem.prototype.onUpdateSent = function (__s5param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_upgrade, false);
  };
  CastleResourceVillageListItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.UPV_SENT, this.bindFunction(this.onUpdateSent));
  };
  CastleResourceVillageListItem.prototype.customFillItem = function () {
    this.fillVillageIcon();
    this.fillResourceBonus();
    this.fillUnitInventory();
    this.fillButtons();
  };
  CastleResourceVillageListItem.prototype.fillVillageIcon = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_castleHolder);
    if (this.villageScrollItemVO.wmo) {
      this.disp.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.villageScrollItemVO.wmo, new __s0local0(80, 55), true, false, false));
      var __s11local0 = this.villageScrollItemVO.wmo;
      var __s11local1 = __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_privateResourceVillages_publicVillage_" + __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(__s11local0.villageType).toLowerCase() + "_tt");
      this.disp.mc_castleHolder.toolTipText = __s11local1;
      this.itxt_level.visible = false;
    } else {
      __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.renderVillage(this.villageScrollItemVO.privateResourceVillage.villageInfo.type, this.disp.mc_castleHolder, 80, 55);
      this.itxt_level.textContentVO.textReplacements = [this.villageScrollItemVO.privateResourceVillage.villageInfo.villageLevel];
      this.disp.mc_castleHolder.toolTipText = {
        t: "dialog_privateResourceVillages_villageLevel_" + __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(this.villageScrollItemVO.privateResourceVillage.villageInfo.type).toLowerCase() + "_tt",
        p: [this.villageScrollItemVO.privateResourceVillage.villageInfo.villageLevel]
      };
      this.itxt_level.visible = true;
    }
  };
  CastleResourceVillageListItem.prototype.fillResourceBonus = function () {
    if (this.villageScrollItemVO.showResourceBonus) {
      this.disp.mc_resourceBonus.visible = true;
      __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.disp.mc_resourceBonus, this.villageScrollItemVO.resourceVillageType, this.villageScrollItemVO.resourceBonus);
    } else {
      this.disp.mc_resourceBonus.visible = false;
    }
  };
  CastleResourceVillageListItem.prototype.fillUnitInventory = function () {
    this.disp.mc_inventory.visible = this.villageScrollItemVO.unitInventory;
    this.disp.mc_missingInventoryDeco.visible = !this.villageScrollItemVO.unitInventory;
    if (this.villageScrollItemVO.unitInventory) {
      if (this.inventoryComponent) {
        this.inventoryComponent.updateInventory(this.villageScrollItemVO.unitInventory);
      } else {
        this.inventoryComponent = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(this.disp.mc_inventory, 6, this.villageScrollItemVO.unitInventory, Library.CastleInterfaceElements.CastleAttackSpyInfoContainer, 35.8, 32.35, true);
      }
      this.inventoryComponent.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    }
  };
  CastleResourceVillageListItem.prototype.onClickInventoryItem = function (__s24param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s24param0.unitVO, __s24param0.crestVO));
  };
  CastleResourceVillageListItem.prototype.fillButtons = function () {
    this.disp.btn_jump_to_wmo.visible = !this.villageScrollItemVO.privateResourceVillage;
    this.disp.btn_stationing.visible = !this.villageScrollItemVO.privateResourceVillage;
    this.disp.btn_upgrade.visible = this.villageScrollItemVO.privateResourceVillage;
    this.disp.btn_remove.visible = this.villageScrollItemVO.privateResourceVillage;
    if (this.disp.btn_upgrade.visible) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_upgrade, this.getNextLevelVillage());
      if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.disp.btn_upgrade)) {
        this.disp.btn_upgrade.toolTipText = "dialog_privateResourceVillages_upgrade_tt";
      } else {
        this.disp.btn_upgrade.toolTipText = "dialog_privateResourceVillages_maxLevel_tt";
      }
    }
    if (this.disp.btn_jump_to_wmo.visible) {
      this.disp.btn_jump_to_wmo.gotoAndStop(__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.villageScrollItemVO.wmo, "VillageMapobjectVO") ? 1 : 2);
    }
  };
  CastleResourceVillageListItem.prototype.getNextLevelVillage = function () {
    if (!this.villageScrollItemVO.privateResourceVillage) {
      return false;
    }
    var __s32local0 = __dep_exact_f855840627e6e145.int(this.villageScrollItemVO.privateResourceVillage.villageInfo.kingdomID);
    var __s32local1 = __dep_exact_f855840627e6e145.int(this.villageScrollItemVO.privateResourceVillage.villageInfo.type);
    var __s32local2 = __dep_exact_f855840627e6e145.int(this.villageScrollItemVO.privateResourceVillage.villageInfo.villageLevel);
    return !!__dep_export_CastleModel.CastleModel.privateResourceVillageData.getPrivateVillageInfo(__s32local0, __s32local1, __s32local2 + 1);
  };
  CastleResourceVillageListItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.inventoryComponent) {
      this.inventoryComponent.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.UPV_SENT, this.bindFunction(this.onUpdateSent));
  };
  CastleResourceVillageListItem.prototype.onMouseClick = function (__s38param0) {
    __s1param0.prototype.onMouseClick.call(this, __s38param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s38param0.target)) {
      switch (__s38param0.target) {
        case this.disp.btn_jump_to_wmo:
          __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.villageScrollItemVO.wmo);
          break;
        case this.disp.btn_stationing:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, new __dep_export_CastleStartAttackDialogProperties.CastleStartAttackDialogProperties(this.villageScrollItemVO.wmo, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS));
          break;
        case this.disp.btn_upgrade:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_PrivateResourceVillageUpgradeDialog.PrivateResourceVillageUpgradeDialog, new __dep_export_PrivateResourceVillageActionDialogProperties.PrivateResourceVillageActionDialogProperties(this.villageScrollItemVO.privateResourceVillage.villageInfo, this.villageScrollItemVO.privateResourceVillage.uniqueID));
          break;
        case this.disp.btn_remove:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_PrivateResourceVillageDestroyDialog.PrivateResourceVillageDestroyDialog, new __dep_export_PrivateResourceVillageActionDialogProperties.PrivateResourceVillageActionDialogProperties(this.villageScrollItemVO.privateResourceVillage.villageInfo, this.villageScrollItemVO.privateResourceVillage.uniqueID));
      }
    }
  };
  Object.defineProperty(CastleResourceVillageListItem.prototype, "villageScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourceVillageListItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.CastleResourceVillageListItem = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CastlePrivateResourceVillageRenderHelper = require("gge-module:export_CastlePrivateResourceVillageRenderHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_PrivateResourceVillageDestroyDialog = require("gge-module:export_PrivateResourceVillageDestroyDialog");
var __dep_export_PrivateResourceVillageUpgradeDialog = require("gge-module:export_PrivateResourceVillageUpgradeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
