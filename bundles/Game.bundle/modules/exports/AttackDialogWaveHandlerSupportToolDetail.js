Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItem = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItem");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogWaveHandlerSupportToolDetail(__s3param0) {
    this.CONST_MAX_TOOL_SLOTS = 3;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._disp.btn_clear.toolTipText = "deleteAll";
    this._disp.mc_detailViewBG.doCache();
  }
  AttackDialogWaveHandlerSupportToolDetail.prototype.setVisibility = function (__s5param0) {
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
  AttackDialogWaveHandlerSupportToolDetail.prototype.fill = function () {
    var __s9local0;
    this._disp.mc_tools.gotoAndStop(1);
    __s9local0 = 0;
    for (; __s9local0 < this.CONST_MAX_TOOL_SLOTS; __s9local0++) {
      __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.fillUnitContainer(__s9local0, this._disp.mc_tools, this.controller.attackVO.supportItemContainer, true, true);
    }
    this._disp.btn_clear.visible = this.getSelectedSlot().sumOfItems > 0;
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.showSupportWave(this._disp, this.getSelectedSlot());
  };
  AttackDialogWaveHandlerSupportToolDetail.prototype.onClick = function (__s13param0) {
    switch (__s13param0.target) {
      case this._disp.btn_clear:
        var __s13local0 = this.controller.attackVO.supportItemContainer.getTotalBonusByToolEffect(__dep_export_ToolEffectType.ToolEffectType.ADDITIONAL_WAVE) > 0;
        __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(this.controller.attackVO.supportItemContainer);
        if (__s13local0) {
          this.controller.onLordChanged.dispatch();
        }
        this.controller.updateAllWaveInfo.dispatch();
    }
    if (!this.controller.draggedUnitVO) {
      switch (__s13param0.target.parent) {
        case this._disp.mc_tools:
          this.selectContainer();
      }
    }
  };
  AttackDialogWaveHandlerSupportToolDetail.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.supportItemContainer, null, -1, __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItem.AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
    }
  };
  Object.defineProperty(AttackDialogWaveHandlerSupportToolDetail.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerSupportToolDetail.prototype.getSelectedSlot = function () {
    return this.controller.attackVO.supportItemContainer;
  };
  AttackDialogWaveHandlerSupportToolDetail.CONST_WAVE_NAME = "support";
  return AttackDialogWaveHandlerSupportToolDetail;
}();
exports.AttackDialogWaveHandlerSupportToolDetail = __s0local1;
