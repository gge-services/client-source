Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogWaveHandlerFinalYardWaveInfoDetail(__s3param0) {
    this.CONST_MAX_SLOTS = 8;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._disp.btn_clear.toolTipText = "deleteAll";
    this._disp.mc_detailViewBG.doCache();
  }
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.setVisibility = function (__s5param0) {
    this._disp.visible = __s5param0;
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
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.fill = function () {
    var __s9local0;
    this._disp.mc_units.gotoAndStop(1);
    __s9local0 = 0;
    for (; __s9local0 < this.CONST_MAX_SLOTS; __s9local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s9local0, this._disp.mc_units, this.controller.attackVO.yardWaveContainer, false);
    }
    this._disp.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.showFinalWave(this._disp, this.getSelectedSlot());
  };
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.onClick = function (__s13param0) {
    switch (__s13param0.target) {
      case this._disp.btn_clear:
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.yardWaveContainer);
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (__s13param0.target.parent) {
        case this._disp.mc_units:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.getSelectedSlot(), null, -1, AttackDialogWaveHandlerFinalYardWaveInfoDetail.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
      this.controller.openSpyInfoFlank("keep");
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.yardWaveContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoDetail.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoDetail.CONST_WAVE_NAME = "yardWave";
  return AttackDialogWaveHandlerFinalYardWaveInfoDetail;
}();
exports.AttackDialogWaveHandlerFinalYardWaveInfoDetail = __s0local1;
