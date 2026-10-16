Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MouseEvent;
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __s0local1 = function (__s1param0) {
  function AttackDialogWaveHandlerWaveInfoItemFoldOut(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("WaveListItem_NormalWave_Fold"))(), __s3param3) || this;
    __s3local0.CONST_MAX_FLANK_SLOTS = 2;
    __s3local0.CONST_MAX_MIDDLE_TOOL_SLOTS = 3;
    __s3local0.CONST_MAX_MIDDLE_SOLDIER_SLOTS = 6;
    __s3local0.selectWave = false;
    __s3local0.init(__s3param0, __s3param1, __s3param2);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerWaveInfoItemFoldOut, __s1param0);
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    this.waveInfo = __s5param0;
    this.waveIndex = __s5param1;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.headerMC.txt_number, new __dep_exact_92d05af59ee2ff30.TextVO((this.waveIndex + 1 < 10 ? "0" : "") + (this.waveIndex + 1) + "."), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.cbx ||= new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.itemMc.headerMC.cbx_select, true);
    if (__s5param2) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
    this.itemMc.headerMC.mc_down.visible = false;
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.arrow_right.visible = !this._isExpanded;
    this.itemMc.headerMC.arrow_down.visible = this._isExpanded;
    this.fill();
    this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.onSelectionChanged));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(this.waveIndex)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.fill = function () {
    var __s17local0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.headerMC.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.itemMc.headerMC.btn_expand.mouseChildren = false;
    this.itemMc.headerMC.btn_expand.actLikeButton = true;
    this.itemMc.headerMC.btn_clear.toolTipText = "deleteAll";
    this.itemMc.headerMC.mc_left_tools.gotoAndStop(1);
    this.itemMc.headerMC.mc_right_tools.gotoAndStop(1);
    this.itemMc.headerMC.mc_left_units.gotoAndStop(1);
    this.itemMc.headerMC.mc_right_units.gotoAndStop(1);
    this.itemMc.headerMC.mc_middle_tools.gotoAndStop(1);
    this.itemMc.headerMC.mc_middle_units.gotoAndStop(1);
    this.selectWave = false;
    __s17local0 = 0;
    for (; __s17local0 < this.CONST_MAX_FLANK_SLOTS; __s17local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_left_tools, this.waveInfo.itemsLeftWall_tools, true, false, this.waveIndex);
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_right_tools, this.waveInfo.itemsRightWall_tools, true, false, this.waveIndex);
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_left_units, this.waveInfo.itemsLeftWall_units, false, false, this.waveIndex);
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_right_units, this.waveInfo.itemsRightWall_units, false, false, this.waveIndex);
    }
    for (__s17local0 = 0; __s17local0 < this.CONST_MAX_MIDDLE_TOOL_SLOTS; __s17local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_middle_tools, this.waveInfo.itemsMiddleWall_tools, true, false, this.waveIndex);
    }
    for (__s17local0 = 0; __s17local0 < this.CONST_MAX_MIDDLE_SOLDIER_SLOTS; __s17local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_middle_units, this.waveInfo.itemsMiddleWall_units, false, false, this.waveIndex);
    }
    this.itemMc.headerMC.mc_selected.visible = this.controller.selectedWaveIndex == this.waveIndex;
    this.itemMc.headerMC.btn_clear.visible = this.waveInfo.getSumOfItems() > 0;
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.showNormalWave(this.itemMc.contentMC, this.waveInfo, this.waveIndex + 1);
    if (this.contentMC.cacheCanvas) {
      this.contentMC.updateCache();
    } else {
      this.contentMC.doCache();
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    switch (__s27param0.target) {
      case this.itemMc.headerMC.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(this.waveIndex, this.cbx.isSelected);
        break;
      case this.itemMc.headerMC.btn_expand:
        this.expand(!this.isExpanded, false);
        this.controller.trackExpandWaves(this.isExpanded);
        break;
      case this.itemMc.headerMC.btn_clear:
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_tools);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_units);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_tools);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_units);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_tools);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_units);
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (__s27param0.target.parent) {
        case this.itemMc.headerMC.mc_left_tools:
          this.selectContainer(this.waveInfo.itemsLeftWall_tools);
          this.controller.openSpyInfoFlank("left");
          break;
        case this.itemMc.headerMC.mc_right_tools:
          this.selectContainer(this.waveInfo.itemsRightWall_tools);
          this.controller.openSpyInfoFlank("right");
          break;
        case this.itemMc.headerMC.mc_left_units:
          this.selectContainer(this.waveInfo.itemsLeftWall_units);
          this.controller.openSpyInfoFlank("left");
          break;
        case this.itemMc.headerMC.mc_right_units:
          this.selectContainer(this.waveInfo.itemsRightWall_units);
          this.controller.openSpyInfoFlank("right");
          break;
        case this.itemMc.headerMC.mc_middle_tools:
          this.selectContainer(this.waveInfo.itemsMiddleWall_tools);
          this.controller.openSpyInfoFlank("middle");
          break;
        case this.itemMc.headerMC.mc_middle_units:
          this.selectContainer(this.waveInfo.itemsMiddleWall_units);
          this.controller.openSpyInfoFlank("middle");
      }
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.selectContainer = function (__s32param0) {
    this.controller.setSelectedWaveInfoSlotMC(__s32param0, this.waveInfo, this.waveIndex);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.selectForAutoFill = function (__s35param0) {
    if (__s35param0) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseDown = function (__s45param0) {
    if (__s45param0.target == this.itemMc.headerMC.btn_expand) {
      this.itemMc.headerMC.mc_down.visible = true;
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseUp = function (__s48param0) {
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseOver = function (__s50param0) {
    if (!__dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s50param0.target, this.contentMC)) {
      this.controller.onMouseOverWave.dispatch(this.waveInfo, this.disp, this.waveIndex);
      if (__s50param0.target == this.itemMc.headerMC.btn_expand) {
        this.itemMc.headerMC.mc_hover.visible = true;
      }
    }
  };
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.onMouseOut = function (__s54param0) {
    this.controller.onMouseOutWave.dispatch(this.waveInfo, this.disp);
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.mc_down.visible = false;
  };
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "isSelectedForAutoFill", {
    get: function () {
      return this.cbx.isSelected;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return 220;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerWaveInfoItemFoldOut.prototype.expand = function (__s68param0, __s68param1, __s68param2 = false) {
    __s1param0.prototype.expand.call(this, __s68param0, __s68param1, __s68param2);
    this.itemMc.headerMC.arrow_right.visible = !__s68param0;
    this.itemMc.headerMC.arrow_down.visible = __s68param0;
    this.controller.addToExpandWaveTrackingTemp(this.waveIndex + 1);
  };
  return AttackDialogWaveHandlerWaveInfoItemFoldOut;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AttackDialogWaveHandlerWaveInfoItemFoldOut = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
