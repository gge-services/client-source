Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MouseEvent;
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItem = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItem");
var __s0local1 = function (__s1param0) {
  function AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("WaveListItem_SupportWave_Fold"))(), __s3param1) || this;
    __s3local0.CONST_MAX_TOOL_SLOTS = 3;
    __s3local0.cbx = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(__s3local0.itemMc.headerMC.cbx_select, true);
    __s3local0.init(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut, __s1param0);
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.init = function (__s5param0) {
    if (__s5param0) {
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
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.fill = function () {
    var __s17local0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.headerMC.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.itemMc.headerMC.btn_expand.mouseChildren = false;
    this.itemMc.headerMC.btn_expand.actLikeButton = true;
    this.itemMc.headerMC.btn_clear.toolTipText = "deleteAll";
    this.itemMc.headerMC.mc_tools.gotoAndStop(1);
    __s17local0 = 0;
    for (; __s17local0 < this.CONST_MAX_TOOL_SLOTS; __s17local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_tools, this.controller.attackVO.supportItemContainer, true, true);
    }
    this.itemMc.headerMC.mc_selected.visible = this.controller.selectedWaveName == __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItem.AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME;
    this.itemMc.headerMC.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.showSupportWave(this.itemMc.contentMC, this.getSelectedSlot());
    if (this.contentMC.cacheCanvas) {
      this.contentMC.updateCache();
    } else {
      this.contentMC.doCache();
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    switch (__s23param0.target) {
      case this.itemMc.headerMC.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME, this.cbx.isSelected);
        break;
      case this.itemMc.headerMC.btn_expand:
        this.expand(!this.isExpanded, false);
        this.controller.trackExpandWaves(this.isExpanded);
        break;
      case this.itemMc.headerMC.btn_clear:
        var __s23local0 = this.controller.attackVO.supportItemContainer.getTotalBonusByToolEffect(__dep_export_ToolEffectType.ToolEffectType.ADDITIONAL_WAVE) > 0;
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.supportItemContainer);
        if (__s23local0) {
          this.controller.onLordChanged.dispatch();
        }
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (__s23param0.target.parent) {
        case this.itemMc.headerMC.mc_tools:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.supportItemContainer, null, -1, __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItem.AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseDown = function (__s38param0) {
    if (__s38param0.target == this.itemMc.headerMC.btn_expand) {
      this.itemMc.headerMC.mc_down.visible = true;
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseUp = function (__s41param0) {
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseOver = function (__s43param0) {
    if (!__dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s43param0.target, this.contentMC)) {
      this.controller.onMouseOverWave.dispatch(this.getSelectedSlot(), this.disp);
      if (__s43param0.target == this.itemMc.headerMC.btn_expand) {
        this.itemMc.headerMC.mc_hover.visible = true;
      }
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.onMouseOut = function (__s47param0) {
    this.controller.onMouseOutWave.dispatch(this.getSelectedSlot(), this.disp);
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.supportItemContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return 120;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.prototype.expand = function (__s59param0, __s59param1, __s59param2 = false) {
    __s1param0.prototype.expand.call(this, __s59param0, __s59param1, __s59param2);
    this.itemMc.headerMC.arrow_right.visible = !__s59param0;
    this.itemMc.headerMC.arrow_down.visible = __s59param0;
    this.controller.addToExpandWaveTrackingTemp("RW");
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME = "support";
  return AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
