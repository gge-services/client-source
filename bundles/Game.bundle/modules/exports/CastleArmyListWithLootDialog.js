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
var __dep_export_CastleArmyExternalDialog = require("gge-module:export_CastleArmyExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleArmyListWithLootDialog() {
    var __s3local0 = this;
    __s3local0._currentPageIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleArmyListWithLootDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArmyListWithLootDialog, __s1param0);
  CastleArmyListWithLootDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome, this.dialogDisp.mc_container.btn_left, this.dialogDisp.mc_container.btn_right]);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shortArmy_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shortArmy_exactSize"));
    this._movementResourceList = new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.mc_ressourceList, Library.CastleInterfaceElements.ResourceListCompnent_Item, 3, 2);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleArmyListWithLootDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
      var __s7local0 = this.mapMovementVO;
      if (this.mapMovementVO.isMyMovement && __s7local0.lootList.length > 0) {
        this._movementResourceList.updateComponent(__s7local0.lootList, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_loot"));
      }
    }
    this._currentPageIndex = 0;
    this.updateUnitList();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.mapMovementVO, this.bindFunction(this.hide));
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var __s7local1 = this.mapMovementVO.lordVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s7local1, this.dialogDisp.mc_lordHolder, 50);
    }
    this.updateLord();
  };
  CastleArmyListWithLootDialog.prototype.updateLord = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var __s12local0 = this.mapMovementVO.lordVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s12local0, this.dialogDisp.mc_lordHolder, 50);
      var __s12local1 = this.mapMovementVO.isReturnHome ? this.mapMovementVO.sourceArea : this.mapMovementVO.targetArea;
      var __s12local2 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyByMovementVO(this.mapMovementVO);
      this.lordTooltipTrigger.setProperties(__s12local0, null, __s12local1, __s12local2);
    }
    this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(this.mapMovementVO.lordVO.assignedGeneralVO, this.dialogDisp.mc_general, false, false, false, true, null, true, this.dialogProperties.mapMovementVO.movementOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID, true);
    this._generalIcon.onShow();
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    this._generalIcon.disp.scaleX = this._generalIcon.disp.scaleY = 0.6;
    if (this.mapMovementVO.lordVO.assignedGeneralVO) {
      this.dialogDisp.mc_general.mouseChildren = false;
      var __s12local3 = "";
      if (this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffects().length > 0 || this.mapMovementVO.lordVO.assignedGeneralVO.selectedAbilities.length > 0) {
        __s12local3 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
        var __s12local4 = __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedGeneralAbilitySummary(this.mapMovementVO.lordVO.assignedGeneralVO, true);
        if (__s12local4 != "") {
          __s12local3 += "\n\n" + __s12local4;
        }
        var __s12local5 = this.mapMovementVO.lordVO.assignedGeneralVO ? this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffectsText() : "";
        if (__s12local5 != "") {
          __s12local3 += "\n\n" + __s12local5;
        }
      } else {
        __s12local3 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_abilityDialog_noActiveAbilities");
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: __s12local3,
        width: 500
      };
    }
  };
  CastleArmyListWithLootDialog.prototype.hideLoaded = function (__s20param0 = null) {
    this._movementDetails.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
    __s1param0.prototype.hideLoaded.call(this, __s20param0);
  };
  CastleArmyListWithLootDialog.prototype.updateUnitList = function () {
    var __s23local0 = this.dialogDisp.mc_container;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s23local0.mc_items);
    var __s23local1 = this.getUnitList();
    __s23local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    __s23local0.btn_left.visible = __s23local0.btn_right.visible = __s23local1.length > CastleArmyListWithLootDialog.UNITS_PER_PAGE;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s23local0.btn_left, this.currentPageIndex > 0);
    var __s23local2 = __dep_exact_f855840627e6e145.int(this.getMaxPagesCount(__s23local1));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s23local0.btn_right, this.currentPageIndex < __s23local2 - 1);
    for (var __s23local3 = 0; __s23local3 < CastleArmyListWithLootDialog.UNITS_PER_PAGE; __s23local3++) {
      var __s23local4 = this.currentPageIndex * CastleArmyListWithLootDialog.UNITS_PER_PAGE + __s23local3;
      if (__s23local4 >= __s23local1.length) {
        break;
      }
      var __s23local5 = __s23local1[__s23local4];
      var __s23local6 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("ArmyCounterComponent_T"))();
      __s23local6.mouseChildren = false;
      __s23local6.vo = __s23local5;
      __s23local6.x = __s23local3 % CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT * CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_X;
      __s23local6.y = __dep_exact_f855840627e6e145.int(__s23local3 / CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT) * CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_Y;
      __s23local6.toolTipText = __s23local5.type.toLowerCase() + "_name";
      __s23local6.actLikeButton = true;
      this.textFieldManager.registerTextField(__s23local6.mc_counter.txt_pick, new __dep_exact_92d05af59ee2ff30_2.TextVO(String(__s23local5.inventoryAmount)));
      __dep_export_WodPicHelper.WodPicHelper.addSmallPlayerUnitPicToContainer(__s23local5, __s23local6, 20, new __s0local0(20, 20), true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(__s23local5, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT));
      __s23local0.mc_items.addChild(__s23local6);
    }
  };
  CastleArmyListWithLootDialog.prototype.scrollPage = function (__s28param0) {
    this._currentPageIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_1.MathBase.clamp(this._currentPageIndex + __s28param0, 0, this.getMaxPagesCount() - 1));
    this.updateUnitList();
  };
  CastleArmyListWithLootDialog.prototype.getUnitList = function () {
    var __s30local0 = this.dialogProperties.mapMovementVO.inventory;
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
      __s30local0 = this.mapMovementVO.inventory;
    } else if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.mapMovementVO, "SiegeMapmovementVO")) {
      __s30local0 = this.mapMovementVO.inventory;
    }
    return __s30local0.getUnits(null);
  };
  CastleArmyListWithLootDialog.prototype.getMaxPagesCount = function (__s34param0 = null) {
    var __s34local0 = __s34param0 || this.getUnitList();
    return __dep_exact_f855840627e6e145.int(__s34local0.length / CastleArmyListWithLootDialog.UNITS_PER_PAGE + 1);
  };
  CastleArmyListWithLootDialog.prototype.onClick = function (__s36param0) {
    if (__dep_exact_81dacdf05bd32292_2.getQualifiedClassName(__s36param0.target) == "ArmyCounterComponent_T") {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s36param0.target.vo));
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      __s1param0.prototype.onClick.call(this, __s36param0);
      switch (__s36param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.mapMovementVO.isReturnHome ? "help_armyDialog_return_player" : "help_armyDialog_player"));
          break;
        case this.dialogDisp.mc_container.btn_left:
          this.scrollPage(-1);
          break;
        case this.dialogDisp.mc_container.btn_right:
          this.scrollPage(1);
      }
    }
  };
  CastleArmyListWithLootDialog.prototype.onArmyDataUpdated = function (__s41param0) {
    if (this.mapMovementVO.shouldBeShown()) {
      this._movementDetails.updateComponent();
    } else {
      this.hide();
    }
  };
  CastleArmyListWithLootDialog.prototype.onArmyRemoved = function (__s45param0) {
    if (__s45param0.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleArmyListWithLootDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyListWithLootDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyListWithLootDialog.prototype, "currentPageIndex", {
    get: function () {
      return this._currentPageIndex;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyListWithLootDialog.__initialize_static_members = function () {
    CastleArmyListWithLootDialog.NAME = "CastleArmyListWithLoot";
    CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT = 9;
    CastleArmyListWithLootDialog.UNIT_DISPLAY_ROW_COUNT = 2;
    CastleArmyListWithLootDialog.UNITS_PER_PAGE = CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT * CastleArmyListWithLootDialog.UNIT_DISPLAY_ROW_COUNT;
    CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_X = 44;
    CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_Y = 46;
  };
  return CastleArmyListWithLootDialog;
}(__dep_export_CastleArmyExternalDialog.CastleArmyExternalDialog);
exports.CastleArmyListWithLootDialog = __s0local1;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
