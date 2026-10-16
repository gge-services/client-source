Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItem");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut");
var __s0local0 = function () {
  function AttackDialogController() {
    this.onResizeDialog = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.hideDialog = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onLordChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onSelectedWaveInfoSlotContainerChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onAutoFillALLSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onOpenUnitPicker = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.updateAllWaveInfo = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onMouseOverWave = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onMouseOutWave = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onShowSpyInfo = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onHideSpyInfo = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onShowAutoFillOptions = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onHideAutoFillOptions = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onAutoFillAllWaves = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.showPlayerInfos = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.hidePlayerInfos = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.showTargetInfos = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.hideTargetInfos = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.openGeneralSelection = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.closeGeneralSelection = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.updateAutoFillSelections = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onStartDrag = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onStopDrag = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.onDetailViewSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._selectedWaveIndex = -1;
    this._selectedWaveName = "";
    this.detailViewCachedData = {};
    this.controllerReady = false;
    this._expandWaveTrackingTemp = [];
  }
  AttackDialogController.prototype.initAttackVO = function (__s5param0) {
    this.controllerReady = false;
    this.attackVO = __s5param0;
    this._selectedLordID = 0;
    this._selectedLord = null;
    this._autoFillSelected = new Map();
    this._selectedWaveIndex = -1;
    this._isWaveDetailView = false;
    this._selectedDetailView = 0;
    this.setSelectedWaveInfoSlotMC(null, null, -1);
    this._attackAdvisorType = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(this.attackVO.targetArea.areaType);
  };
  AttackDialogController.prototype.changeSelectionForAutoFill = function (__s7param0, __s7param1) {
    if (__s7param0 == AttackDialogController.AUTOFILL_SELECTION_ALL) {
      for (var __s7local0 = Array.from(this._autoFillSelected.keys()), __s7local1 = 0; __s7local1 < __s7local0.length; __s7local1++) {
        if (__s7local0[__s7local1] != AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT && __s7local0[__s7local1] != AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT && __s7local0[__s7local1] != AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE) {
          this._autoFillSelected.set(__s7local0[__s7local1], __s7param1);
        }
      }
    } else {
      this._autoFillSelected.set(__s7param0, __s7param1);
    }
    this.onAutoFillALLSelectionChanged.dispatch();
    if (this.isAutoFillSaveSelected && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      this.saveAttackFilterOptions(false);
    }
  };
  AttackDialogController.prototype.getIsWaveSelectedForAutoFill = function (__s15param0) {
    if (this.isWaveDetailView && __s15param0 != AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT && __s15param0 != AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE && __s15param0 != AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT) {
      return this._selectedDetailView == __s15param0;
    } else {
      return !!this.isWaveActive(__s15param0) && (this._autoFillSelected.has(__s15param0) ? this._autoFillSelected.get(__s15param0) : (this._autoFillSelected.set(__s15param0, true), true));
    }
  };
  AttackDialogController.prototype.isWaveActive = function (__s19param0) {
    if (__s19param0 == __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME) {
      return __dep_export_AttackDialogHelper.AttackDialogHelper.canUseSupportTools();
    } else {
      return __s19param0 == __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME || __s19param0 == AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT || __s19param0 == AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT || __s19param0 == AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE || __s19param0 < this.attackVO.army.getWaveCount();
    }
  };
  AttackDialogController.prototype.getNumberOfNormalWavesSelected = function () {
    var __s23local0 = 0;
    for (var __s23local1 = 0; __s23local1 < this.attackVO.army.waves.length; __s23local1++) {
      if (this.getIsWaveSelectedForAutoFill(__s23local1)) {
        __s23local0++;
      }
    }
    return __s23local0;
  };
  AttackDialogController.prototype.isAnyFlankSelected = function () {
    return this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT) || this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE) || this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT);
  };
  Object.defineProperty(AttackDialogController.prototype, "selectedLord", {
    get: function () {
      if (this._selectedLordID >= 0) {
        return __dep_export_CastleModel.CastleModel.lordData.getLordByID(this._selectedLordID);
      } else {
        return this._selectedLord;
      }
    },
    set: function (__s34param0) {
      if (__s34param0 && __s34param0.id >= 0) {
        this._selectedLordID = __s34param0.id;
        this._selectedLord = null;
      } else {
        this._selectedLordID = -1;
        this._selectedLord = __s34param0;
      }
      this.updateAreEffects();
      this.onLordChanged.dispatch();
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED));
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.updateAreEffects = function () {
    if (this.selectedLord) {
      if (this.attackVO.additionalEffects) {
        this.selectedLord.areaEffects = this.attackVO.additionalEffects.effects;
      } else {
        this.selectedLord.areaEffects = [];
      }
    }
  };
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveInfo", {
    get: function () {
      return this._selectedWaveInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveInfoSlotContainer", {
    get: function () {
      return this._selectedWaveInfoSlotContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveIndex", {
    get: function () {
      return this._selectedWaveIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedWaveName", {
    get: function () {
      return this._selectedWaveName;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.setSelectedWaveInfoSlotMC = function (__s51param0, __s51param1, __s51param2, __s51param3 = "") {
    if (this._selectedWaveInfoSlotContainer == __s51param0 && __s51param0 != null) {
      __s51param0 = null;
      __s51param1 = null;
      __s51param2 = -1;
      __s51param3 = "";
    }
    this._selectedWaveInfoSlotContainer = __s51param0;
    this._selectedWaveName = __s51param3;
    this._selectedWaveInfo = __s51param1;
    this._selectedWaveIndex = __s51param2;
    this.onSelectedWaveInfoSlotContainerChanged.dispatch();
  };
  AttackDialogController.prototype.setSelectedWaveIndex = function (__s54param0) {
    this._selectedWaveIndex = __s54param0;
    this.onSelectedWaveInfoSlotContainerChanged.dispatch();
  };
  AttackDialogController.prototype.setPresetPicker = function (__s56param0) {
    this.presetPicker = __s56param0;
  };
  AttackDialogController.prototype.setAutoFillOptions = function (__s58param0) {
    this.autoFillOptions = __s58param0;
  };
  AttackDialogController.prototype.saveAttackFilterOptions = function (__s60param0) {
    if (__s60param0) {
      __dep_export_CastleModel.CastleModel.localData.saveAttackDialogSelections(null);
    } else if (this.autoFillOptions && this._autoFillSelected && this.presetPicker.selectedPreset) {
      var __s60local0 = {
        toolFilter: Array.from(this.autoFillOptions.toolFilter.entries()),
        unitFilter: Array.from(this.autoFillOptions.unitFilter.entries()),
        waveFilter: Array.from(this._autoFillSelected.entries()),
        presetIndex: this.presetPicker.selectedPreset.index
      };
      __dep_export_CastleModel.CastleModel.localData.saveAttackDialogSelections(__s60local0);
    }
  };
  Object.defineProperty(AttackDialogController.prototype, "isAutoFillSaveSelected", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.localData.getAttackDialogSelections();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.applySavedFilterOptions = function () {
    var __s66local0 = this;
    var __s66local1 = __dep_export_CastleModel.CastleModel.localData.getAttackDialogSelections();
    this.controllerReady = true;
    if (__s66local1) {
      if (__s66local1.toolFilter) {
        __s66local1.toolFilter.forEach(function (__s70param0) {
          __s66local0.autoFillOptions.setToolFilter(__s70param0[0], __s70param0[1]);
        });
      }
      if (__s66local1.unitFilter) {
        __s66local1.unitFilter.forEach(function (__s73param0) {
          __s66local0.autoFillOptions.setUnitFilter(__s73param0[0], __s73param0[1]);
        });
      }
      if (__s66local1.waveFilter) {
        __s66local1.waveFilter.forEach(function (__s76param0) {
          __s66local0._autoFillSelected.set(__s76param0[0], __s76param0[1]);
        });
      }
      this.autoFillOptions.fillLeftFlank = this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT);
      this.autoFillOptions.fillRightFlank = this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT);
      this.autoFillOptions.fillMiddleFlank = this.getIsWaveSelectedForAutoFill(AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE);
      if (this.presetPicker.isInit()) {
        this.presetPicker.selectIndex(__s66local1.presetIndex);
      } else {
        this.presetPicker.onDataChangeHandled.add(this.bindFunction(this.onPresetsLoaded));
      }
      this.updateAutoFillSelections.dispatch();
      this.updateAllWaveInfo.dispatch();
    }
  };
  AttackDialogController.prototype.onPresetsLoaded = function () {
    this.presetPicker.onDataChangeHandled.remove(this.bindFunction(this.onPresetsLoaded));
    var __s80local0 = __dep_export_CastleModel.CastleModel.localData.getAttackDialogSelections();
    this.presetPicker.selectIndex(__s80local0.presetIndex);
  };
  Object.defineProperty(AttackDialogController.prototype, "draggedUnitVO", {
    get: function () {
      return this._draggedUnitVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.startDrag = function (__s84param0) {
    this.stopDrag();
    this._draggedUnitVO = __s84param0;
    this._draggedUnitMC = __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPic(this._draggedUnitVO, null, AttackDialogController.DRAG_UNIT_WIDTH, AttackDialogController.DRAG_UNIT_HEIGHT);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.startDrag(this._draggedUnitMC);
    this.onStartDrag.dispatch();
  };
  AttackDialogController.prototype.stopDrag = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.stopDrag(this._draggedUnitMC);
    this._draggedUnitVO = null;
    this._draggedUnitMC = null;
    this.onStopDrag.dispatch();
  };
  Object.defineProperty(AttackDialogController.prototype, "isWaveDetailView", {
    get: function () {
      return this._isWaveDetailView;
    },
    set: function (__s90param0) {
      this._isWaveDetailView = __s90param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogController.prototype, "selectedDetailView", {
    get: function () {
      return this._selectedDetailView;
    },
    set: function (__s94param0) {
      this._selectedDetailView = __s94param0;
      this.onAutoFillALLSelectionChanged.dispatch();
      this.onDetailViewSelectionChanged.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.addToExpandWaveTrackingTemp = function (__s96param0) {
    this._expandWaveTrackingTemp.push(__s96param0);
  };
  AttackDialogController.prototype.trackExpandWaves = function (__s98param0) {
    this._expandWaveTrackingTemp.toString();
    this._expandWaveTrackingTemp = [];
  };
  AttackDialogController.prototype.openSpyInfoFlank = function (__s100param0) {
    switch (__s100param0) {
      case "left":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsLeft, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "left");
        break;
      case "right":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsRight, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_flankSpy"), true, false, false, true, "right");
        break;
      case "middle":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsMiddle, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle");
        break;
      case "keep":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsKeep, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep");
        break;
      case "reserve":
        AttackDialogController.getInstance().onShowSpyInfo.dispatch(AttackDialogController.getInstance().attackVO.spyInfo.itemsReserve, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spyLog_reserveSpy"), false, false, false, false, "reserve");
    }
  };
  Object.defineProperty(AttackDialogController.prototype, "attackAdvisorType", {
    get: function () {
      return this._attackAdvisorType;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogController.prototype.isAttackAdvisorAvailable = function () {
    return this._attackAdvisorType > 0 && this._selectedLordID >= 0 && __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorActivationInfo(this._attackAdvisorType).advisorActivationCurrencyId > 0;
  };
  AttackDialogController.getInstance = function () {
    AttackDialogController.controller ||= new AttackDialogController();
    return AttackDialogController.controller;
  };
  AttackDialogController.__initialize_static_members = function () {};
  AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT = "right";
  AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT = "left";
  AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE = "middle";
  AttackDialogController.AUTOFILL_SELECTION_ALL = "all";
  AttackDialogController.DRAG_UNIT_WIDTH = 50;
  AttackDialogController.DRAG_UNIT_HEIGHT = 50;
  return AttackDialogController;
}();
exports.AttackDialogController = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
