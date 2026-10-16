Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
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
  function AttackDialogWaveHandlerFinalYardWaveInfoItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("WaveListItem_FinalWave"))(), __s3param1) || this;
    __s3local0.CONST_MAX_SLOTS = 8;
    __s3local0.selectWave = false;
    __s3local0.cbx = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(__s3local0.itemMc.cbx_select, true);
    if (__s3param0) {
      __s3local0.cbx.selected();
    } else {
      __s3local0.cbx.deselected();
    }
    __s3local0.itemMc.mc_down.visible = false;
    __s3local0.itemMc.mc_hover.visible = false;
    __s3local0.fill();
    __s3local0.controller.onSelectedWaveInfoSlotContainerChanged.add(__s3local0.bindFunction(__s3local0.onSelectionChanged));
    __s3local0.controller.updateAllWaveInfo.add(__s3local0.bindFunction(__s3local0.fill));
    __s3local0.controller.onAutoFillALLSelectionChanged.add(__s3local0.bindFunction(__s3local0.updateAutoFillSelection));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerFinalYardWaveInfoItem, __s1param0);
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.fill));
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateAutoFillSelection));
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.updateAutoFillSelection = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onSelectionChanged = function () {
    this.fill();
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.fill = function () {
    var __s15local0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.mc_units], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.itemMc.mc_units.mouseChildren = false;
    this.selectWave = false;
    __s15local0 = 0;
    for (; __s15local0 < this.CONST_MAX_SLOTS; __s15local0++) {
      this.fillUnitContainer(__s15local0, this.itemMc.mc_units, this.controller.attackVO.yardWaveContainer, false);
    }
    this.itemMc.mc_selected.visible = this.controller.selectedWaveName == AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.fillUnitContainer = function (__s19param0, __s19param1, __s19param2, __s19param3) {
    var __s19local0 = __s19param1["item" + __s19param0];
    var __s19local1 = this.getSelectedSlot() == __s19param2;
    var __s19local2 = __s19param2.items[__s19param0];
    var __s19local3 = !!__s19local2.unitVO;
    var __s19local4 = !__s19local2.unitVO;
    __s19local0.mc_range.visible = !__s19param3 && __s19local3 && __s19local2.unitVO.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    __s19local0.mc_melee.visible = !__s19param3 && __s19local3 && __s19local2.unitVO.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s19local0.mc_icon);
    if (__s19param3 && __s19local2.unitVO) {
      __dep_export_WodPicHelper.WodPicHelper.addToolEffectIcon(__s19local2.unitVO, __s19local0.mc_icon, 20, 20, 0);
    }
    __s19local0.mc_selected_plus.visible = __s19local4 && __s19local1 && __s19local2.isUnlocked();
    __s19local0.mc_selected_bg.visible = __s19local1;
    __s19local0.mc_error_frame.visible = __s19local2.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE;
    __s19local0.mc_error_icon.visible = __s19local2.outline != __dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE && !__s19local2.unitVO;
    __s19local0.mc_filled_bg.visible = __s19local3 && !__s19local1;
    __s19local0.mc_empty_plus.visible = __s19local4 && !__s19local1 && __s19local2.isUnlocked();
    __s19local0.mc_empty_bg.visible = __s19local4 && !__s19local1;
    this.selectWave = this.selectWave || __s19local1;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    switch (__s22param0.target) {
      case this.itemMc.mc_units:
        this.selectContainer();
        break;
      case this.itemMc.cbx_select:
        this.cbx.toggleSelected();
        this.controller.changeSelectionForAutoFill(AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME, this.cbx.isSelected);
        break;
      default:
        this.selectContainer();
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.selectForAutoFill = function (__s25param0) {
    if (__s25param0) {
      this.cbx.selected();
    } else {
      this.cbx.deselected();
    }
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "isSelectedForAutoFill", {
    get: function () {
      return this.cbx.isSelected;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.selectContainer = function () {
    this.controller.setSelectedWaveInfoSlotMC(this.controller.attackVO.yardWaveContainer, null, -1, AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME);
    if (this.controller.selectedWaveInfoSlotContainer) {
      this.controller.onOpenUnitPicker.dispatch(this.controller.selectedWaveInfoSlotContainer.items[0]);
      this.controller.openSpyInfoFlank("keep");
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseDown = function (__s40param0) {
    this.itemMc.mc_down.visible = true;
    if (__s40param0.target != this.itemMc.mc_units && __s40param0.target != this.itemMc.cbx_select) {
      this.controller.setSelectedWaveInfoSlotMC(null, null, -1, AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME);
    }
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseUp = function (__s43param0) {
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseOver = function (__s45param0) {
    this.controller.onMouseOverWave.dispatch(this.controller.attackVO.yardWaveContainer, this.disp);
    this.itemMc.mc_hover.visible = true;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.onMouseOut = function (__s47param0) {
    this.controller.onMouseOutWave.dispatch(this.controller.attackVO.yardWaveContainer, this.disp);
    this.itemMc.mc_hover.visible = false;
    this.itemMc.mc_down.visible = false;
  };
  AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype.getSelectedSlot = function () {
    return this.controller.selectedWaveInfoSlotContainer;
  };
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandlerFinalYardWaveInfoItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME = "yardWave";
  return AttackDialogWaveHandlerFinalYardWaveInfoItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AttackDialogWaveHandlerFinalYardWaveInfoItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
