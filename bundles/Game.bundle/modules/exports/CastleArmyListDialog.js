Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper = require("gge-module:export_WodPicHelperUnitFramePerfectCallbackWrapper");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleArmyListDialog() {
    var __s3local0 = this;
    __s3local0.UNIT_DISLPAY_COLUMNCOUNT = 10;
    __s3local0.UNIT_ITEM_SPACE_X = 42;
    __s3local0.UNIT_ITEM_SPACE_Y = 46;
    __s3local0.unitPage = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleArmyListDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArmyListDialog, __s1param0);
  CastleArmyListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_shortArmy_title"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.itxt_title.verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome, this.dialogDisp.mc_container.btn_left, this.dialogDisp.mc_container.btn_right]);
  };
  CastleArmyListDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.unitPage = 0;
    this.itxt_description.textContentVO.textId = "dialog_shortArmy_exactSize";
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "SupportDefenceMapmovementVO")) {
        this.itxt_description.textContentVO.textId = "dialog_shortArmy_stationed";
      }
      this.setUnitList();
    } else if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "SiegeMapmovementVO")) {
      this.setUnitList();
      this.itxt_description.textContentVO.textId = "dialog_shortArmy_siegeMovement";
    }
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.mapMovementVO, this.bindFunction(this.hide));
    this.onPage(0);
    this.updateLord();
  };
  Object.defineProperty(CastleArmyListDialog.prototype, "unitInventory", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
        return this.dialogProperties.mapMovementVO.inventory;
      } else if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "SiegeMapmovementVO")) {
        return this.dialogProperties.mapMovementVO.inventory;
      } else {
        return undefined;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyListDialog.prototype.onPage = function (__s17param0) {
    this.unitPage += __s17param0;
    var __s17local0 = this.unitInventory.getUnits(null);
    this.dialogDisp.mc_container.btn_left.visible = this.unitPage > 0;
    this.dialogDisp.mc_container.btn_right.visible = __s17local0.length > this.UNIT_DISLPAY_COLUMNCOUNT * 2 * (this.unitPage + 1);
    this.setUnitList();
  };
  CastleArmyListDialog.prototype.updateLord = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var __s19local0 = this.mapMovementVO.lordVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s19local0, this.dialogDisp.mc_lordHolder, 50);
      var __s19local1 = this.mapMovementVO.isReturnHome ? this.mapMovementVO.sourceArea : this.mapMovementVO.targetArea;
      var __s19local2 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyByMovementVO(this.mapMovementVO);
      this.lordTooltipTrigger.setProperties(__s19local0, null, __s19local1, __s19local2);
    }
    this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(this.mapMovementVO.lordVO.assignedGeneralVO, this.dialogDisp.mc_general, false, false, false, true, null, true, this.dialogProperties.mapMovementVO.movementOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID, true);
    this._generalIcon.onShow();
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    this._generalIcon.disp.scaleX = this._generalIcon.disp.scaleY = 0.6;
    if (this.mapMovementVO.lordVO.assignedGeneralVO) {
      this.dialogDisp.mc_general.mouseChildren = false;
      var __s19local3 = "";
      if (this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffects().length > 0 || this.mapMovementVO.lordVO.assignedGeneralVO.selectedAbilities.length > 0) {
        __s19local3 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
        var __s19local4 = __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedGeneralAbilitySummary(this.mapMovementVO.lordVO.assignedGeneralVO, true);
        if (__s19local4 != "") {
          __s19local3 += "\n\n" + __s19local4;
        }
        var __s19local5 = this.mapMovementVO.lordVO.assignedGeneralVO ? this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffectsText() : "";
        if (__s19local5 != "") {
          __s19local3 += "\n\n" + __s19local5;
        }
      } else {
        __s19local3 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_abilityDialog_noActiveAbilities");
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: __s19local3,
        width: 500
      };
    }
  };
  CastleArmyListDialog.prototype.onArmyRemoved = function (__s27param0) {
    if (__s27param0.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleArmyListDialog.prototype.hideLoaded = function (__s30param0 = null) {
    this._movementDetails.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
    __s1param0.prototype.hideLoaded.call(this, __s30param0);
  };
  CastleArmyListDialog.prototype.setUnitList = function () {
    var __s33local0 = this.dialogDisp.mc_container;
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s33local0.mc_items);
    var __s33local1 = this.unitInventory.getUnits(null);
    __s33local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    for (var __s33local2 = 0; __s33local2 < __s33local1.length; __s33local2++) {
      var __s33local3 = __s33local1[__s33local2];
      this.UNIT_DISLPAY_COLUMNCOUNT;
      var __s33local4 = __s33local2 % this.UNIT_DISLPAY_COLUMNCOUNT;
      var __s33local5 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("ArmyCounterComponent_T"))();
      __s33local5.mouseChildren = false;
      __s33local5.vo = __s33local3;
      __s33local5.x = __s33local4 * this.UNIT_ITEM_SPACE_X;
      __s33local5.y = __dep_exact_f855840627e6e145.int(__s33local2 / this.UNIT_DISLPAY_COLUMNCOUNT) * this.UNIT_ITEM_SPACE_Y;
      this.textFieldManager.registerTextField(__s33local5.mc_counter.txt_pick, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s33local3.inventoryAmount), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
      __s33local5.toolTipText = __s33local3.type.toLowerCase() + "_name";
      __s33local5.actLikeButton = true;
      __s33local0.mc_items.addChild(__s33local5);
      __dep_export_WodPicHelper.WodPicHelper.addSmallPlayerUnitPicToContainer(__s33local3, __s33local5, 18, null, true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(__s33local3, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT));
    }
  };
  CastleArmyListDialog.prototype.onArmyDataUpdated = function (__s37param0) {
    if (this.mapMovementVO.shouldBeShown()) {
      this._movementDetails.updateComponent();
    } else {
      this.hide();
    }
  };
  CastleArmyListDialog.prototype.onClick = function (__s41param0) {
    if (__dep_exact_81dacdf05bd32292_2.getQualifiedClassName(__s41param0.target) == "ArmyCounterComponent_T") {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s41param0.target.vo));
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      __s1param0.prototype.onClick.call(this, __s41param0);
      switch (__s41param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.mapMovementVO.isReturnHome ? "help_armyDialog_return_player" : "help_armyDialog_player"));
          break;
        case this.dialogDisp.mc_container.btn_left:
          this.onPage(-1);
          break;
        case this.dialogDisp.mc_container.btn_right:
          this.onPage(1);
      }
    }
  };
  Object.defineProperty(CastleArmyListDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyListDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyListDialog.__initialize_static_members = function () {
    CastleArmyListDialog.NAME = "CastleArmyList";
  };
  return CastleArmyListDialog;
}(require("gge-module:export_CastleArmyExternalDialog").CastleArmyExternalDialog);
exports.CastleArmyListDialog = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
