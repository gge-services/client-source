Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AttackDialogWaveHandlerSupportToolWaveInfoItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("WaveListItem_SupportTools"))(), __s3param0) || this;
    __s3local0.CONST_MAX_TOOL_SLOTS = 3;
    __s3local0.selectWave = false;
    __s3local0.itemMc.mc_down.visible = false;
    __s3local0.itemMc.mc_hover.visible = false;
    __s3local0.itemMc.cbx_select.gotoAndStop(3);
    __s3local0.fill();
    __s3local0.controller.onSelectedWaveInfoSlotContainerChanged.add(__s3local0.bindFunction(__s3local0.onSelectionChanged));
    __s3local0.controller.updateAllWaveInfo.add(__s3local0.bindFunction(__s3local0.fill));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerSupportToolWaveInfoItem, __s1param0);
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.fill = function () {
    var __s9local0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.mc_tools], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.itemMc.mc_tools.mouseChildren = false;
    this.selectWave = false;
    __s9local0 = 0;
    for (; __s9local0 < this.CONST_MAX_TOOL_SLOTS; __s9local0++) {
      this.fillUnitContainer(__s9local0, this.itemMc.mc_tools, this.controller.attackVO.supportItemContainer, true);
    }
    this.itemMc.mc_selected.visible = this.controller.selectedWaveName == AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.fillUnitContainer = function (__s13param0, __s13param1, __s13param2, __s13param3) {
    var __s13local0 = __s13param1["item" + __s13param0];
    var __s13local1 = this.getSelectedSlot() == __s13param2;
    var __s13local2 = __s13param2.items[__s13param0];
    var __s13local3 = !!__s13local2.unitVO;
    var __s13local4 = !__s13local2.unitVO;
    __s13local0.mc_range.visible = !__s13param3 && __s13local3 && __s13local2.unitVO.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    __s13local0.mc_melee.visible = !__s13param3 && __s13local3 && __s13local2.unitVO.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s13local0.mc_icon);
    if (__s13param3 && __s13local2.unitVO) {
      __dep_export_WodPicHelper.WodPicHelper.addToolEffectIcon(__s13local2.unitVO, __s13local0.mc_icon, 20, 20, 0);
    }
    __s13local0.mc_selected_plus.visible = __s13local4 && __s13local1 && __s13local2.isUnlocked();
    __s13local0.mc_selected_bg.visible = __s13local1;
    __s13local0.mc_error_frame.visible = __s13local2.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE;
    __s13local0.mc_error_icon.visible = __s13local2.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE && !__s13local2.unitVO;
    __s13local0.mc_filled_bg.visible = __s13local3 && !__s13local1;
    __s13local0.mc_empty_plus.visible = __s13local4 && !__s13local1 && __s13local2.isUnlocked();
    __s13local0.mc_empty_bg.visible = __s13local4 && !__s13local1;
    this.selectWave = this.selectWave || __s13local1;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.itemMc.mc_tools:
      default:
        this.selectContainer();
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.supportItemContainer, null, -1, AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseDown = function (__s27param0) {
    this.itemMc.mc_down.visible = true;
    if (__s27param0.target != this.itemMc.mc_tools) {
      this.controller.setSelectedWaveInfoSlotMC(null, null, -1, AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME);
    }
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseUp = function (__s30param0) {
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseOver = function (__s32param0) {
    this.controller.onMouseOverWave.dispatch(this.controller.attackVO.supportItemContainer, this.disp);
    this.itemMc.mc_hover.visible = true;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.onMouseOut = function (__s34param0) {
    this.controller.onMouseOutWave.dispatch(this.controller.attackVO.supportItemContainer, this.disp);
    this.itemMc.mc_hover.visible = false;
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerSupportToolWaveInfoItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerSupportToolWaveInfoItem.CONST_WAVE_NAME = "support";
  return AttackDialogWaveHandlerSupportToolWaveInfoItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AttackDialogWaveHandlerSupportToolWaveInfoItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
