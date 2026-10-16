Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogWaveHandlerWaveInfoDetail(__s3param0) {
    this.CONST_MAX_FLANK_SLOTS = 2;
    this.CONST_MAX_MIDDLE_TOOL_SLOTS = 3;
    this.CONST_MAX_MIDDLE_SOLDIER_SLOTS = 6;
    this._waveIndex = 0;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._disp.btn_clear.toolTipText = "deleteAll";
    this._disp.mc_detailViewBG.doCache();
  }
  AttackDialogWaveHandlerWaveInfoDetail.prototype.setVisibility = function (__s5param0, __s5param1) {
    this._disp.visible = __s5param0;
    this._waveIndex = __s5param1;
    if (!this.waveInfo) {
      __s5param0 = false;
    }
    if (__s5param0) {
      this.fill();
      this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.fill));
      this.controller.updateAllWaveInfo.add(this.bindFunction(this.fill));
      this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    } else {
      this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.fill));
      this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
      this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
  };
  AttackDialogWaveHandlerWaveInfoDetail.prototype.fill = function () {
    if (this.waveInfo) {
      var __s10local0;
      this._disp.mc_left_tools.gotoAndStop(1);
      this._disp.mc_right_tools.gotoAndStop(1);
      this._disp.mc_left_units.gotoAndStop(1);
      this._disp.mc_right_units.gotoAndStop(1);
      this._disp.mc_middle_tools.gotoAndStop(1);
      this._disp.mc_middle_units.gotoAndStop(1);
      __s10local0 = 0;
      for (; __s10local0 < this.CONST_MAX_FLANK_SLOTS; __s10local0++) {
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s10local0, this._disp.mc_left_tools, this.waveInfo.itemsLeftWall_tools, true, false, this._waveIndex);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s10local0, this._disp.mc_right_tools, this.waveInfo.itemsRightWall_tools, true, false, this._waveIndex);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s10local0, this._disp.mc_left_units, this.waveInfo.itemsLeftWall_units, false, false, this._waveIndex);
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s10local0, this._disp.mc_right_units, this.waveInfo.itemsRightWall_units, false, false, this._waveIndex);
      }
      for (__s10local0 = 0; __s10local0 < this.CONST_MAX_MIDDLE_TOOL_SLOTS; __s10local0++) {
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s10local0, this._disp.mc_middle_tools, this.waveInfo.itemsMiddleWall_tools, true, false, this._waveIndex);
      }
      for (__s10local0 = 0; __s10local0 < this.CONST_MAX_MIDDLE_SOLDIER_SLOTS; __s10local0++) {
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s10local0, this._disp.mc_middle_units, this.waveInfo.itemsMiddleWall_units, false, false, this._waveIndex);
      }
      this._disp.btn_clear.visible = this.waveInfo.getSumOfItems() > 0;
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.showNormalWave(this._disp, this.waveInfo, this._waveIndex + 1);
    }
  };
  AttackDialogWaveHandlerWaveInfoDetail.prototype.onClick = function (__s19param0) {
    if (this.waveInfo) {
      switch (__s19param0.target) {
        case this._disp.btn_clear:
          __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_tools);
          __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsLeftWall_units);
          __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_tools);
          __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsMiddleWall_units);
          __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_tools);
          __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.waveInfo.itemsRightWall_units);
          this.controller.updateAllWaveInfo.dispatch();
      }
      if (!this.controller.draggedUnitVO) {
        switch (__s19param0.target.parent) {
          case this._disp.mc_left_tools:
            this.selectContainer(this.waveInfo.itemsLeftWall_tools);
            this.controller.openSpyInfoFlank("left");
            break;
          case this._disp.mc_right_tools:
            this.selectContainer(this.waveInfo.itemsRightWall_tools);
            this.controller.openSpyInfoFlank("right");
            break;
          case this._disp.mc_left_units:
            this.selectContainer(this.waveInfo.itemsLeftWall_units);
            this.controller.openSpyInfoFlank("left");
            break;
          case this._disp.mc_right_units:
            this.selectContainer(this.waveInfo.itemsRightWall_units);
            this.controller.openSpyInfoFlank("right");
            break;
          case this._disp.mc_middle_tools:
            this.selectContainer(this.waveInfo.itemsMiddleWall_tools);
            this.controller.openSpyInfoFlank("middle");
            break;
          case this._disp.mc_middle_units:
            this.selectContainer(this.waveInfo.itemsMiddleWall_units);
            this.controller.openSpyInfoFlank("middle");
        }
      }
    }
  };
  AttackDialogWaveHandlerWaveInfoDetail.prototype.selectContainer = function (__s25param0) {
    this.controller.setSelectedWaveInfoSlotMC(__s25param0, this.waveInfo, this._waveIndex);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoDetail.prototype, "waveInfo", {
    get: function () {
      return this.controller.attackVO.army.waves[this._waveIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerWaveInfoDetail.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerWaveInfoDetail.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.supportItemContainer;
  };
  return AttackDialogWaveHandlerWaveInfoDetail;
}();
exports.AttackDialogWaveHandlerWaveInfoDetail = __s0local1;
