Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAttackAddUnitsDialog = require("gge-module:export_CastleAttackAddUnitsDialog");
var __dep_export_CastleBasicAddUnitsDialogProperties = require("gge-module:export_CastleBasicAddUnitsDialogProperties");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function () {
  function AttackDialogDragTarget(__s3param0) {
    this._waveIndex = -1;
    this._disp = __s3param0;
    this._disp.mc_drag_default.visible = false;
    this._disp.mc_drag_active.visible = false;
    if (this._disp.stage) {
      this.onAddedToStage(null);
    } else {
      this.onRemovedFromStage(null);
    }
  }
  AttackDialogDragTarget.prototype.init = function (__s7param0, __s7param1, __s7param2, __s7param3 = false, __s7param4 = -1) {
    this._index = __s7param0;
    this._containerVO = __s7param1;
    this._isToolSlot = __s7param2;
    this._isSupportToolSlot = __s7param3;
    this._waveIndex = __s7param4;
  };
  AttackDialogDragTarget.prototype.onRemovedFromStage = function (__s9param0) {
    this._disp.addEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage), false, 0, true);
    this._disp.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this._disp.removeEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.removeEventListener("rollout", this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onStartDrag.remove(this.bindFunction(this.onStartDrag));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onStopDrag.remove(this.bindFunction(this.onStopDrag));
  };
  AttackDialogDragTarget.prototype.onAddedToStage = function (__s11param0) {
    this._disp.removeEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._disp.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage), false, 0, true);
    this._disp.addEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.addEventListener("rollout", this.bindFunction(this.onRollOut));
    this._disp.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onStartDrag.add(this.bindFunction(this.onStartDrag));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onStopDrag.add(this.bindFunction(this.onStopDrag));
  };
  AttackDialogDragTarget.prototype.onMouseUp = function (__s13param0) {
    if (this.draggedUnitVO && this.isFittingSlot()) {
      if (this.draggedUnitVO instanceof __dep_export_ToolUnitVO.ToolUnitVO && this.draggedUnitVO.hasLimitedAmountPerWave && !this.draggedUnitVO.isSupportTool && !this.fightItemVO.isSameType(this.draggedUnitVO) && this.isMaxAmountPerWaveReached(this.draggedUnitVO)) {
        return;
      }
      if (this._containerVO.exceedsSupportToolSlotLimit(this.fightItemVO, this.draggedUnitVO)) {
        return;
      }
      if (this.fightItemVO.isFree() && this._containerVO.isFull) {
        return;
      }
      this.editUnitSlot();
    }
    __dep_export_AttackDialogController.AttackDialogController.getInstance().stopDrag();
  };
  AttackDialogDragTarget.prototype.editUnitSlot = function () {
    var __s19local0 = this.draggedUnitVO instanceof __dep_export_ToolUnitVO.ToolUnitVO && this.fightItemVO.isSameType(this.draggedUnitVO);
    var __s19local1 = Number.MAX_VALUE;
    if (this.draggedUnitVO instanceof __dep_export_ToolUnitVO.ToolUnitVO && this.draggedUnitVO.amountPerWave > -1 && this._waveIndex > -1) {
      __s19local1 = __dep_exact_f855840627e6e145.int(this.draggedUnitVO.amountPerWave - this.attackVO.army.getWaveByID(this._waveIndex).getSumOfToolsByTool(this.draggedUnitVO) + this.fightItemVO.getAmount());
    }
    if (this.draggedUnitVO instanceof __dep_export_ToolUnitVO.ToolUnitVO && this.draggedUnitVO.isSupportTool) {
      __s19local1 = this.draggedUnitVO.amountPerWave;
    }
    var __s19local2 = new __dep_export_CastleBasicAddUnitsDialogProperties.CastleBasicAddUnitsDialogProperties(this.draggedUnitVO, this.bindFunction(this.changeItemAmount), this.fightItemVO, __s19local0, this._containerVO, __s19local1);
    __s19local2.targetAreaType = this.attackVO.targetArea.areaType;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAttackAddUnitsDialog.CastleAttackAddUnitsDialog, __s19local2);
  };
  AttackDialogDragTarget.prototype.changeItemAmount = function (__s23param0, __s23param1, __s23param2) {
    __dep_export_AttackDialogHelper.AttackDialogHelper.changeUnitItemAmount(this.attackVO.unitInventory, __s23param0, __s23param1, __s23param2);
  };
  AttackDialogDragTarget.prototype.onRollOut = function (__s25param0) {
    if (this.draggedUnitVO && this.isFittingSlot()) {
      this._disp.mc_drag_default.visible = true;
      this._disp.mc_drag_active.visible = false;
    } else {
      this._disp.mc_drag_default.visible = false;
      this._disp.mc_drag_active.visible = false;
    }
  };
  AttackDialogDragTarget.prototype.onRollOver = function (__s29param0) {
    if (this.draggedUnitVO && this.isFittingSlot()) {
      this._disp.mc_drag_default.visible = false;
      this._disp.mc_drag_active.visible = true;
    } else {
      this._disp.mc_drag_default.visible = false;
      this._disp.mc_drag_active.visible = false;
    }
  };
  AttackDialogDragTarget.prototype.onStartDrag = function () {
    if (this.isFittingSlot()) {
      this._disp.mc_drag_default.visible = true;
    }
  };
  AttackDialogDragTarget.prototype.onStopDrag = function () {
    this._disp.mc_drag_default.visible = false;
    this._disp.mc_drag_active.visible = false;
  };
  AttackDialogDragTarget.prototype.isMaxAmountPerWaveReached = function (__s38param0) {
    return __s38param0.amountPerWave <= this.attackVO.army.getWaveByID(this._waveIndex).getSumOfToolsByTool(__s38param0) + (this.attackVO.supportItemContainer ? this.attackVO.supportItemContainer.getAmountOfToolInContainer(__s38param0) : 0);
  };
  AttackDialogDragTarget.prototype.isFittingSlot = function () {
    return this.draggedUnitVO.isToolForSlotType(this.fightItemVO.slotType) && this.fightItemVO.isUnlocked();
  };
  Object.defineProperty(AttackDialogDragTarget.prototype, "draggedUnitVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().draggedUnitVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDragTarget.prototype, "attackVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogDragTarget.prototype, "fightItemVO", {
    get: function () {
      return this._containerVO.items[this._index];
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogDragTarget;
}();
exports.AttackDialogDragTarget = __s0local2;
