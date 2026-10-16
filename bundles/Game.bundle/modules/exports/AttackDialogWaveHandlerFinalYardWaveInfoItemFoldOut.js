Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MouseEvent;
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItem");
var __s0local1 = function (__s1param0) {
  function AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("WaveListItem_FinalWave_FoldBig"))(), __s3param1) || this;
    __s3local0.CONST_MAX_SLOTS = 8;
    __s3local0.selectWave = false;
    __s3local0.cbx = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(__s3local0.itemMc.headerMC.cbx_select, true);
    __s3local0.init(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut, __s1param0);
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.init = function (__s5param0) {
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
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.fill = function () {
    var __s17local0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.headerMC.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.itemMc.headerMC.btn_expand.mouseChildren = false;
    this.itemMc.headerMC.btn_expand.actLikeButton = true;
    this.itemMc.headerMC.btn_clear.toolTipText = "deleteAll";
    this.itemMc.headerMC.mc_units.gotoAndStop(1);
    this.selectWave = false;
    __s17local0 = 0;
    for (; __s17local0 < this.CONST_MAX_SLOTS; __s17local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s17local0, this.itemMc.headerMC.mc_units, this.controller.attackVO.yardWaveContainer, false);
    }
    this.itemMc.headerMC.mc_selected.visible = this.controller.selectedWaveName == __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME;
    this.itemMc.headerMC.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.showFinalWave(this.itemMc.contentMC, this.getSelectedSlot());
    if (this.contentMC.cacheCanvas) {
      this.contentMC.updateCache();
    } else {
      this.contentMC.doCache();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    switch (__s23param0.target) {
      case this.itemMc.headerMC.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME, this.cbx.isSelected);
        break;
      case this.itemMc.headerMC.btn_expand:
        this.expand(!this.isExpanded, false);
        this.controller.trackExpandWaves(this.isExpanded);
        break;
      case this.itemMc.headerMC.btn_clear:
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.yardWaveContainer);
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (__s23param0.target.parent) {
        case this.itemMc.headerMC.mc_units:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.getSelectedSlot(), null, -1, __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
      this.controller.openSpyInfoFlank("keep");
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseDown = function (__s37param0) {
    if (__s37param0.target == this.itemMc.headerMC.btn_expand) {
      this.itemMc.headerMC.mc_down.visible = true;
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseUp = function (__s40param0) {
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseOver = function (__s42param0) {
    if (!__dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s42param0.target, this.contentMC)) {
      this.controller.onMouseOverWave.dispatch(this.getSelectedSlot(), this.disp);
      if (__s42param0.target == this.itemMc.headerMC.btn_expand) {
        this.itemMc.headerMC.mc_hover.visible = true;
      }
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.onMouseOut = function (__s46param0) {
    this.controller.onMouseOutWave.dispatch(this.getSelectedSlot(), this.disp);
    this.itemMc.headerMC.mc_hover.visible = false;
    this.itemMc.headerMC.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.yardWaveContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        return 90;
      } else {
        return this._headerMC.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.prototype.expand = function (__s58param0, __s58param1, __s58param2 = false) {
    __s1param0.prototype.expand.call(this, __s58param0, __s58param1, __s58param2);
    this.itemMc.headerMC.arrow_right.visible = !__s58param0;
    this.itemMc.headerMC.arrow_down.visible = __s58param0;
    this.controller.addToExpandWaveTrackingTemp("RW");
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME = "yardWave";
  return AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
