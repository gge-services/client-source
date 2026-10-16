Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleListCampsOverviewDialog() {
    var __s3local0 = this;
    __s3local0._currentFirstCastle = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleListCampsOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListCampsOverviewDialog, __s1param0);
  CastleListCampsOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.i0.btn_gotoCastle, this.dialogDisp.i1.btn_gotoCastle, this.dialogDisp.i2.btn_gotoCastle, this.dialogDisp.i3.btn_gotoCastle, this.dialogDisp.i4.btn_gotoCastle]);
  };
  CastleListCampsOverviewDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_action_campoverview")).autoFitToBounds = true;
    this.hideAllItems();
    var __s7local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION).ownFaction == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest1, __s7local0);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest2, __s7local0);
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    this.disp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.lockDialog();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
  };
  CastleListCampsOverviewDialog.prototype.onMouseWheel = function (__s9param0) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.userData.castleList.listOfAllFactionCamps;
    if (__s9param0.delta < 0) {
      if (this._currentFirstCastle > 0) {
        this.currentFirstCastle = this._currentFirstCastle - 1;
      }
    } else if (__s9param0.delta > 0 && this._currentFirstCastle < __s9local0.length - 5 && __s9local0.length > 5) {
      this.currentFirstCastle = this._currentFirstCastle + 1;
    }
  };
  CastleListCampsOverviewDialog.prototype.onCastleUpdated = function (__s14param0 = null) {
    this.currentFirstCastle = 0;
    this.fillItems();
    this.unLockDialog();
  };
  CastleListCampsOverviewDialog.prototype.fillItems = function () {
    var __s16local0 = false;
    var __s16local1 = __dep_export_CastleModel.CastleModel.userData.castleList.listOfAllFactionCamps;
    var __s16local2 = 0;
    for (var __s16local3 = 0; __s16local3 < 5; ++__s16local3) {
      do {
        __s16local0 = false;
        if (!(this._currentFirstCastle + __s16local3 + __s16local2 < __s16local1.length)) {
          this.dialogDisp["i" + __s16local3].visible = false;
          break;
        }
        var __s16local4 = __s16local1[__s16local3 + this._currentFirstCastle];
        if (__s16local4.isDestroyed) {
          __s16local2++;
          __s16local0 = true;
        } else {
          this.initItem(this.dialogDisp["i" + __s16local3], __s16local4);
          var __s16local5 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(__s16local4.objectId, __s16local4.kingdomID);
          if (__s16local5) {
            this.fillInventory(this.dialogDisp["i" + __s16local3], __s16local5.unitInventory.getUnits(null));
          }
        }
      } while (__s16local0);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_down, this._currentFirstCastle < __s16local1.length - 5 && __s16local1.length > 5);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_up, this._currentFirstCastle > 0);
  };
  CastleListCampsOverviewDialog.prototype.initItem = function (__s26param0, __s26param1) {
    if (__s26param0.property && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s26param0.property, "CastleInventoryComponent")) {
      __s26param0.property.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
      __s26param0.property.destroy();
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s26param0.mc_castleHolder);
    __s26param0.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s26param1, new __s0local1(80, 55), true, false, true, "dialog_jumpto_castleName" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s26param1.areaNameString));
    __s26param0.mc_castleHolder.mapObjectVO = __s26param1;
    __s26param0.btn_gotoCastle.mapObjectVO = __s26param1;
    __s26param0.btn_jumpTo.mapObjectVO = __s26param1;
    __s26param0.btn_jumpToCamp.mapObjectVO = __s26param1;
    __s26param0.btn_gotoCastle.visible = true;
    __s26param0.btn_jumpTo.visible = false;
    __s26param0.btn_jumpToCamp.visible = false;
    __s26param0.btn_gotoCastle.toolTipText = "ringmenu_visit_camp";
    __s26param0.btn_jumpTo.toolTipText = "panel_action_jumpTo";
    __s26param0.btn_jumpToCamp.toolTipText = "panel_action_jumpTo";
    __s26param0.btn_jumpToIsland.visible = false;
    __s26param0.mc_resourceIslandTimer.visible = false;
    __s26param0.visible = true;
  };
  CastleListCampsOverviewDialog.prototype.fillInventory = function (__s29param0, __s29param1) {
    __s29param0.property = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(__s29param0.mc_inventory, 10, __s29param1, Library.CastleInterfaceElements.CastleAttackSpyInfoContainer, 25, 31, true);
    __s29param0.property.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
  };
  CastleListCampsOverviewDialog.prototype.onItemClick = function (__s31param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s31param0.unitVO, __s31param0.crestVO));
  };
  CastleListCampsOverviewDialog.prototype.hideAllItems = function () {
    for (var __s33local0 = 0; __s33local0 < 5; __s33local0++) {
      this.dialogDisp["i" + __s33local0].visible = false;
    }
  };
  CastleListCampsOverviewDialog.prototype.onClick = function (__s37param0) {
    var __s37local0;
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      switch (__s37param0.target) {
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
        case this.dialogDisp.i1.btn_gotoCastle:
        case this.dialogDisp.i2.btn_gotoCastle:
        case this.dialogDisp.i3.btn_gotoCastle:
        case this.dialogDisp.i4.btn_gotoCastle:
          __s37local0 = __s37param0.target.mapObjectVO;
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, __s37local0);
      }
    }
  };
  CastleListCampsOverviewDialog.prototype.hideLoaded = function (__s41param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    this.disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    for (var __s41local0 = 0; __s41local0 < 5; __s41local0++) {
      if (this.dialogDisp["i" + __s41local0].property && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogDisp["i" + __s41local0].property, "CastleInventoryComponent")) {
        this.dialogDisp["i" + __s41local0].property.destroy();
      }
    }
    __s1param0.prototype.hideLoaded.call(this, __s41param0);
  };
  Object.defineProperty(CastleListCampsOverviewDialog.prototype, "currentFirstCastle", {
    set: function (__s46param0) {
      var __s46local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.castleList.listOfAllFactionCamps.length);
      __s46param0 = __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(__s46local0 - 5, __s46param0)));
      this._currentFirstCastle = __s46param0;
      this.fillItems();
    },
    enumerable: true,
    configurable: true
  });
  CastleListCampsOverviewDialog.NAME = "CastleListVillagesOverviewExt";
  return CastleListCampsOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleListCampsOverviewDialog = __s0local2;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
