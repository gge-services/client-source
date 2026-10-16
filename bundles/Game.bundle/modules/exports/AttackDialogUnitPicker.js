Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleFightDataEvent = require("gge-module:export_CastleFightDataEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_export_CastleDefenceBuyUnitsDialog = require("gge-module:export_CastleDefenceBuyUnitsDialog");
var __dep_export_CastleDefenceBuyUnitsDialogProperties = require("gge-module:export_CastleDefenceBuyUnitsDialogProperties");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_AAdvancedTroopSelectionComponent = require("gge-module:export_AAdvancedTroopSelectionComponent");
var __dep_export_AttackDialogWaveHandlerSoldierPickItem = require("gge-module:export_AttackDialogWaveHandlerSoldierPickItem");
var __dep_export_AttackDialogWaveHandlerToolPickItem = require("gge-module:export_AttackDialogWaveHandlerToolPickItem");
var __s0local0 = function (__s1param0) {
  function AttackDialogUnitPicker(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.onParentDialogShow();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogUnitPicker, __s1param0);
  AttackDialogUnitPicker.prototype.onParentDialogShow = function () {
    this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.onOpenUnitPicker.add(this.bindFunction(this.openUnitPickerList));
    this.controller.onAutoFillAllWaves.add(this.bindFunction(this.hide));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleFightDataEvent.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
    this.disp.visible = false;
    this._unitMixedInventory = this.attackInfoVO.unitInventory;
    this._unitMixedInventory.addAll(this.attackInfoVO.strongholdUnitInventory.getUnits(null));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
  };
  AttackDialogUnitPicker.prototype.onUnitUpdated = function (__s7param0) {
    this._unitMixedInventory = this.attackInfoVO.unitInventory;
    this._unitMixedInventory.addAll(this.attackInfoVO.strongholdUnitInventory.getUnits(null));
  };
  AttackDialogUnitPicker.prototype.showCurrentList = function (__s9param0, __s9param1) {
    var __s9local0;
    if (__s9param0 === undefined) {
      __s9param0 = 0;
    }
    if (__s9param1 === undefined) {
      __s9param1 = -1;
    }
    __s1param0.prototype.showCurrentList.call(this, __s9param0, __s9param1);
    __s9local0 = this._currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS ? "dialog_attack_rework2022_noUnits_desc" : "dialog_attack_rework2022_noTools_desc";
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local0)).visible = this.currentList.dataList.length == 0;
  };
  AttackDialogUnitPicker.prototype.getStartScrollValue = function () {
    return __dep_exact_f855840627e6e145.int(this.currentList ? this.currentList.scrollComponent.currentValue : -1);
  };
  AttackDialogUnitPicker.prototype.onSlotSelectionChanged = function () {
    this.hide();
  };
  Object.defineProperty(AttackDialogUnitPicker.prototype, "unitScrollItemClass", {
    get: function () {
      return __dep_export_AttackDialogWaveHandlerSoldierPickItem.AttackDialogWaveHandlerSoldierPickItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogUnitPicker.prototype, "toolScrollItemClass", {
    get: function () {
      return __dep_export_AttackDialogWaveHandlerToolPickItem.AttackDialogWaveHandlerToolPickItem;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogUnitPicker.prototype.openUnitPickerList = function (__s21param0) {
    var __s21local0;
    var __s21local1;
    var __s21local2 = this.controller.selectedWaveInfoSlotContainer.items[0].slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER;
    var __s21local3 = this.controller.selectedWaveInfoSlotContainer.items[0].slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE;
    __s21local1 = __s21local2 ? __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS : __s21local3 ? __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS : __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_TOOLS;
    __s21local0 = __dep_export_AttackDialogHelper.AttackDialogHelper.getFilteredArray(__s21local1);
    __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
    if (__s21local2) {
      this.showUnitList(__s21local0, this.containerVO, this.attackInfoVO.sourceArea, this, -1, __s21param0);
    } else {
      this.showToolList(__s21local0, this.containerVO, this.attackInfoVO.sourceArea, this, -1, __s21param0);
    }
  };
  AttackDialogUnitPicker.prototype.getFightDialogType = function () {
    return __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK;
  };
  AttackDialogUnitPicker.prototype.isMaxAmountPerWaveReached = function (__s27param0) {
    return __s27param0.amountPerWave <= (this.attackInfoVO.army.getWaveByID(this.controller.selectedWaveIndex) ? this.attackInfoVO.army.getWaveByID(this.controller.selectedWaveIndex).getSumOfToolsByTool(__s27param0) : 0) + (this.attackInfoVO.supportItemContainer ? this.attackInfoVO.supportItemContainer.getAmountOfToolInContainer(__s27param0) : 0);
  };
  AttackDialogUnitPicker.prototype.changeItemAmount = function (__s29param0, __s29param1, __s29param2) {
    __dep_export_AttackDialogHelper.AttackDialogHelper.changeUnitItemAmount(this._unitMixedInventory, __s29param0, __s29param1, __s29param2);
  };
  AttackDialogUnitPicker.prototype.onNewToolBought = function (__s31param0) {
    var __s31local0 = __s31param0.params[0];
    if (__s31local0) {
      var __s31local1 = __dep_exact_f855840627e6e145.int(__s31local0.W);
      var __s31local2 = __dep_exact_f855840627e6e145.int(__s31local0.A);
      this._unitMixedInventory.changeUnitAmount(__s31local1, __s31local2);
      if (this.disp.visible && this.currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this.addToMergedInventory(__s31local1, __s31local2);
      }
    }
  };
  AttackDialogUnitPicker.prototype.showInstantBuyDialog = function (__s35param0) {
    var __s35local0 = -1;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO.sourceArea, "EventCampMapobjectVO")) {
      __s35local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDefenceBuyUnitsDialog.CastleDefenceBuyUnitsDialog, new __dep_export_CastleDefenceBuyUnitsDialogProperties.CastleDefenceBuyUnitsDialogProperties(__s35param0, this.attackInfoVO.sourceArea, __s35local0));
  };
  Object.defineProperty(AttackDialogUnitPicker.prototype, "containerVO", {
    get: function () {
      return this.controller.selectedWaveInfoSlotContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogUnitPicker.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogUnitPicker.prototype.destroy = function () {
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.onOpenUnitPicker.remove(this.bindFunction(this.openUnitPickerList));
    this.controller.onAutoFillAllWaves.remove(this.bindFunction(this.hide));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleFightDataEvent.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
  };
  Object.defineProperty(AttackDialogUnitPicker.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogUnitPicker.__initialize_static_members = function () {};
  return AttackDialogUnitPicker;
}(__dep_export_AAdvancedTroopSelectionComponent.AAdvancedTroopSelectionComponent);
exports.AttackDialogUnitPicker = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
