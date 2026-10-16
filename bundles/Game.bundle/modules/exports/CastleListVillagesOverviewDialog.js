Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SKingdomGetVillageListVO = require("gge-module:export_C2SKingdomGetVillageListVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleListVillagesOverviewDialog() {
    var __s3local0 = this;
    __s3local0._currentFirstCastle = 0;
    __s3local0.inventoryArrowStandardX = 0;
    __s3local0.inventoryUnitStandardX = 0;
    __s3local0.timers = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleListVillagesOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListVillagesOverviewDialog, __s1param0);
  CastleListVillagesOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("")).autoFitToBounds = true;
    this.inventoryArrowStandardX = this.dialogDisp.i0.mc_inventory.btn_leftArrow.x;
    this.inventoryUnitStandardX = this.dialogDisp.i0.mc_inventory.mc_unitHolder.x;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    for (var __s5local0 = 0; __s5local0 <= 4; __s5local0++) {
      var __s5local1 = this.dialogDisp["i" + __s5local0];
      __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s5local1.btn_rightArrow, __s5local1.btn_leftArrow, __s5local1.btn_jumpToIsland, __s5local1.btn_jumpToCamp, __s5local1.btn_jumpTo, __s5local1.btn_gotoCastle]);
    }
  };
  CastleListVillagesOverviewDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.hideAllItems();
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest1, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest2, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMapMovement));
    }
    this.disp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.lockDialog();
    this.getData();
  };
  CastleListVillagesOverviewDialog.prototype.onMouseWheel = function (__s12param0) {
    if (__s12param0.delta < 0) {
      this.currentFirstCastle = this._currentFirstCastle - 1;
    } else if (__s12param0.delta > 0) {
      this.currentFirstCastle = this._currentFirstCastle + 1;
    }
  };
  CastleListVillagesOverviewDialog.prototype.getData = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomGetVillageListVO.C2SKingdomGetVillageListVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
  };
  CastleListVillagesOverviewDialog.prototype.onNewMapMovement = function (__s18param0) {
    this.getData();
  };
  CastleListVillagesOverviewDialog.prototype.onDataUpdated = function (__s20param0) {
    this._villageList = __s20param0.params;
    this.currentFirstCastle = 0;
    this.onCastleUpdated();
  };
  CastleListVillagesOverviewDialog.prototype.onCastleUpdated = function (__s22param0 = null) {
    var __s22local0 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID ? "dialog_islandListOverview_title" : "dialog_villageListOverview_title";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s22local0)).autoFitToBounds = true;
    this.fillItems();
    this.unLockDialog();
  };
  CastleListVillagesOverviewDialog.prototype.fillItems = function () {
    var __s24local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    if (this._villageList && __dep_export_CastleModel.CastleModel.userCastleListDetailed && __s24local0) {
      this.clearTimers();
      var __s24local1 = this._villageList.getSortedVillageListByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      var __s24local2 = this._currentFirstCastle - 1;
      var __s24local3 = 0;
      for (var __s24local4 = 0; __s24local4 < 5; __s24local4++) {
        var __s24local5 = this.dialogDisp["i" + __s24local4];
        __s24local5.visible = true;
        if (this._currentFirstCastle != 0 || __s24local4 != 0) {
          if (__s24local2 + __s24local4 < __s24local1.length) {
            __s24local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID ? CastleListVillagesOverviewDialog.MAX_UNITS_RESOURCE_ISLAND : CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL);
            this.initItem(__s24local5, __s24local1[__s24local2 + __s24local4].villageMapObjectVO);
            this.fillInventory(__s24local5, __s24local1[__s24local2 + __s24local4].unitInventory.getUnits(null), __s24local3);
          } else {
            __s24local5.visible = false;
          }
        } else {
          __s24local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID ? CastleListVillagesOverviewDialog.MAX_UNITS_RESOURCE_ISLAND : CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL);
          this.initItem(__s24local5, __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID));
          this.fillInventory(__s24local5, __s24local0.unitInventory.getUnits(null), __s24local3);
        }
      }
    }
  };
  CastleListVillagesOverviewDialog.prototype.initItem = function (__s33param0, __s33param1) {
    if (__s33param0.property && __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param0.property, "CastleInventoryComponent")) {
      __s33param0.property.destroy();
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s33param0.mc_castleHolder);
    var __s33local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_jumpto_castleName", [__s33param1.areaNameString + " "]);
    __s33param0.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s33param1, new __s0local1(80, 55), true, false, true, __s33local0));
    __s33param0.mc_castleHolder.mapObjectVO = __s33param1;
    __s33param0.btn_gotoCastle.mapObjectVO = __s33param1;
    __s33param0.btn_jumpTo.mapObjectVO = __s33param1;
    __s33param0.btn_jumpToIsland.mapObjectVO = __s33param1;
    __s33param0.btn_gotoCastle.visible = !__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param1, "VillageMapobjectVO");
    __s33param0.btn_jumpTo.visible = __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param1, "VillageMapobjectVO") && !__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param1, "ResourceIsleMapobjectVO");
    __s33param0.btn_jumpToCamp.visible = __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param1, "FactionCampMapobjectVO");
    __s33param0.btn_gotoCastle.toolTipText = "ringmenu_visit_castle";
    __s33param0.btn_jumpTo.toolTipText = "panel_action_jumpTo";
    __s33param0.btn_jumpToIsland.visible = __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param1, "ResourceIsleMapobjectVO");
    __s33param0.mc_resourceIslandTimer.visible = __s33param1.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
    if (__s33param1.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      __s33param0.btn_jumpToIsland.toolTipText = "dialog_jumpto_targetSelected";
      __s33param0.mc_resourceIslandTimer.mouseChildren = false;
      __s33param0.mc_inventory.btn_leftArrow.x = this.inventoryArrowStandardX + CastleListVillagesOverviewDialog.ISLAND_TIMER_OFFSET;
      __s33param0.mc_inventory.mc_unitHolder.x = this.inventoryUnitStandardX + CastleListVillagesOverviewDialog.ISLAND_TIMER_OFFSET;
      var __s33local1 = this.textFieldManager.registerTextField(__s33param0.mc_resourceIslandTimer.txt_timer, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33param1, "ResourceIsleMapobjectVO")) {
        __s33param0.mc_resourceIslandTimer.icon_waitTime.visible = true;
        __s33param0.mc_resourceIslandTimer.toolTipText = {
          t: "kingdom_eiLand_village_countdown",
          p: [""]
        };
        this.timers.push(new __dep_export_CastleTimerComponent.CastleTimerComponent(__s33local1, this.bindFunction(this.getTimerText), __s33param1.remainingOccupierTime));
      } else {
        __s33param0.mc_resourceIslandTimer.icon_waitTime.visible = false;
        __s33param0.mc_resourceIslandTimer.toolTipText = "countdown_aquamarin_tooltip";
        this.timers.push(new __dep_export_CastleTimerComponent.CastleTimerComponent(__s33local1, this.bindFunction(this.getTimerText), __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).resetTime));
      }
    } else {
      __s33param0.mc_inventory.btn_leftArrow.x = this.inventoryArrowStandardX;
      __s33param0.mc_inventory.mc_unitHolder.x = this.inventoryUnitStandardX;
    }
  };
  CastleListVillagesOverviewDialog.prototype.hideAllItems = function () {
    for (var __s40local0 = 0; __s40local0 < 5; __s40local0++) {
      this.dialogDisp["i" + __s40local0].visible = false;
    }
  };
  CastleListVillagesOverviewDialog.prototype.getTimerText = function (__s44param0) {
    var __s44local0 = __s44param0 > 2592000 ? __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED : __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.TWO_TIME_FORMAT;
    return __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__s44param0, __s44local0, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
  };
  CastleListVillagesOverviewDialog.prototype.fillInventory = function (__s46param0, __s46param1, __s46param2 = CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL) {
    var __s46local0 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("VillageOverviewInventoryInfoContainer");
    __s46param0.property = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(__s46param0.mc_inventory, __s46param2, __s46param1, __s46local0, 25, 31, true);
  };
  CastleListVillagesOverviewDialog.prototype.onClick = function (__s48param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s48param0.target)) {
      var __s48local0;
      switch (__s48param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_up:
          this.currentFirstCastle = this._currentFirstCastle - 1;
          break;
        case this.dialogDisp.btn_down:
          this.currentFirstCastle = this._currentFirstCastle + 1;
          break;
        case this.dialogDisp.i0.btn_gotoCastle:
          __s48local0 = __s48param0.target.mapObjectVO;
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, __s48local0);
          break;
        case this.dialogDisp.i0.btn_jumpTo:
        case this.dialogDisp.i1.btn_jumpTo:
        case this.dialogDisp.i2.btn_jumpTo:
        case this.dialogDisp.i3.btn_jumpTo:
        case this.dialogDisp.i4.btn_jumpTo:
        case this.dialogDisp.i0.btn_jumpToIsland:
        case this.dialogDisp.i1.btn_jumpToIsland:
        case this.dialogDisp.i2.btn_jumpToIsland:
        case this.dialogDisp.i3.btn_jumpToIsland:
        case this.dialogDisp.i4.btn_jumpToIsland:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s48param0.target.mapObjectVO);
      }
      if (__dep_exact_81dacdf05bd32292_2.getQualifiedClassName(__s48param0.target) == "VillageOverviewInventoryInfoContainer") {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s48param0.target.unitVO));
      }
    }
  };
  CastleListVillagesOverviewDialog.prototype.hideLoaded = function (__s53param0 = null) {
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.getData));
    }
    this.disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    for (var __s53local0 = 0; __s53local0 < 5; __s53local0++) {
      if (this.dialogDisp["i" + __s53local0].property && __dep_exact_81dacdf05bd32292_3.instanceOfClass(this.dialogDisp["i" + __s53local0].property, "CastleInventoryComponent")) {
        this.dialogDisp["i" + __s53local0].property.destroy();
      }
    }
    this.clearTimers();
    __s1param0.prototype.hideLoaded.call(this, __s53param0);
  };
  CastleListVillagesOverviewDialog.prototype.clearTimers = function () {
    while (this.timers.length > 0) {
      this.timers.pop().stop();
    }
  };
  Object.defineProperty(CastleListVillagesOverviewDialog.prototype, "currentFirstCastle", {
    set: function (__s63param0) {
      if (this._villageList) {
        var __s63local0 = __dep_exact_f855840627e6e145.int(this._villageList.getAmountInKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) + 1);
        __s63param0 = __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(__s63local0 - 5, __s63param0)));
        this._currentFirstCastle = __s63param0;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_up, __s63local0 > 5 && this._currentFirstCastle > 0);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_down, __s63local0 > 5 && this._currentFirstCastle < __s63local0 - 5);
        this.fillItems();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleListVillagesOverviewDialog.__initialize_static_members = function () {
    CastleListVillagesOverviewDialog.NAME = "CastleListVillagesOverviewExt";
    CastleListVillagesOverviewDialog.ISLAND_TIMER_OFFSET = 125;
    CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL = 10;
    CastleListVillagesOverviewDialog.MAX_UNITS_RESOURCE_ISLAND = 7;
  };
  return CastleListVillagesOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleListVillagesOverviewDialog = __s0local2;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
