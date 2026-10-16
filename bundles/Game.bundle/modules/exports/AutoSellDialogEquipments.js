Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AutoSellEquipmentsVO = require("gge-module:export_AutoSellEquipmentsVO");
var __dep_export_AAutoSellDialogSublayer = require("gge-module:export_AAutoSellDialogSublayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AutoSellDialogEquipments(__s3param0) {
    var __s3local0 = this;
    __s3local0.NUMBER_OF_ACTIVE_STATE_CHECKBOXES = new __s0local0(4, 5);
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellDialogEquipments, __s1param0);
  AutoSellDialogEquipments.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_selectAll, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("selectAll")).autoFitToBounds = true;
    this.subLayerDisp.mc_icon_hero.toolTipText = "equipment_slotType_hero_heroine";
    this.subLayerDisp.mc_icon_helmet.toolTipText = "equipment_slotType_helmet";
    this.subLayerDisp.mc_icon_armor.toolTipText = "equipment_slotType_armor";
    this.subLayerDisp.mc_icon_weapon.toolTipText = "equipment_slotType_weapon";
    this.subLayerDisp.mc_icon_artifact.toolTipText = "equipment_slotType_artifact";
    this.subLayerDisp.mc_icon_common.toolTipText = "equipment_rarity_common";
    this.subLayerDisp.mc_icon_rare.toolTipText = "equipment_rarity_rare";
    this.subLayerDisp.mc_icon_epic.toolTipText = "equipment_rarity_epic";
    this.subLayerDisp.mc_icon_legendary.toolTipText = "equipment_rarity_legendary";
    this._selectAllCheckbox = new __dep_export_AutoSellDialogSelectAllCheckbox.AutoSellDialogSelectAllCheckbox(this.subLayerDisp.btn_selectAll);
    this._activeStateCheckboxes = [];
    for (var __s5local0 = 0; __s5local0 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++__s5local0) {
      this._activeStateCheckboxes[__s5local0] = [];
      for (var __s5local1 = 0; __s5local1 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++__s5local1) {
        this._activeStateCheckboxes[__s5local0][__s5local1] = new __dep_export_AutoSellDialogActiveStateCheckbox.AutoSellDialogActiveStateCheckbox(this.subLayerDisp.getChildByName("mc_active_" + __s5local1 + "_" + __s5local0), __s5local1, __s5local0);
      }
    }
  };
  AutoSellDialogEquipments.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this._selectAllCheckbox.onStateChanged.add(this.bindFunction(this.onSelectAllCheckboxChanged));
    this._selectAllCheckbox.onShow();
    for (var __s11local0 = 0; __s11local0 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++__s11local0) {
      for (var __s11local1 = 0; __s11local1 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++__s11local1) {
        var __s11local2 = this._activeStateCheckboxes[__s11local0][__s11local1];
        __s11local2.onShow();
        __s11local2.onStateChanged.add(this.bindFunction(this.onActiveStateCheckboxChanged));
      }
    }
    this.updateSelectAllCheckbox();
    this.updateActiveCheckboxes();
  };
  AutoSellDialogEquipments.prototype.hide = function () {
    this._selectAllCheckbox.onHide();
    for (var __s17local0 = 0; __s17local0 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++__s17local0) {
      for (var __s17local1 = 0; __s17local1 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++__s17local1) {
        var __s17local2 = this._activeStateCheckboxes[__s17local0][__s17local1];
        __s17local2.onStateChanged.remove(this.bindFunction(this.onActiveStateCheckboxChanged));
        __s17local2.onHide();
      }
    }
    this._selectAllCheckbox.onStateChanged.remove(this.bindFunction(this.onSelectAllCheckboxChanged));
    __s1param0.prototype.hide.call(this);
  };
  AutoSellDialogEquipments.prototype.updateActiveCheckboxes = function () {
    for (var __s23local0 = 0; __s23local0 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.y; ++__s23local0) {
      for (var __s23local1 = 0; __s23local1 < this.NUMBER_OF_ACTIVE_STATE_CHECKBOXES.x; ++__s23local1) {
        this._activeStateCheckboxes[__s23local0][__s23local1].setState(this.getActiveStateFromData(__s23local1, __s23local0), false);
      }
    }
  };
  AutoSellDialogEquipments.prototype.updateSelectAllCheckbox = function () {
    var __s29local0 = __dep_exact_f855840627e6e145.int(this.autoSellVO.equipments.getCurrentActiveStatesCount());
    var __s29local1 = -1;
    __s29local1 = __s29local0 <= 0 ? __dep_exact_f855840627e6e145.int(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_UNSELECTED) : __s29local0 >= __dep_export_AutoSellEquipmentsVO.AutoSellEquipmentsVO.NUMBER_OF_ACTIVE_STATES ? __dep_exact_f855840627e6e145.int(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED) : __dep_exact_f855840627e6e145.int(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_MIXED);
    this._selectAllCheckbox.setState(__s29local1, false);
  };
  AutoSellDialogEquipments.prototype.getActiveStateFromData = function (__s31param0, __s31param1) {
    return __dep_exact_f855840627e6e145.int(this.autoSellVO.equipments.isActive(__dep_export_AutoSellEquipmentsVO.AutoSellEquipmentsVO.SLOT_ORDER[__s31param1], __dep_export_AutoSellEquipmentsVO.AutoSellEquipmentsVO.RARITY_ORDER[__s31param0]) ? __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED : __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_UNSELECTED);
  };
  AutoSellDialogEquipments.prototype.setActiveStateInData = function (__s33param0, __s33param1, __s33param2) {
    this.autoSellVO.equipments.setActive(__dep_export_AutoSellEquipmentsVO.AutoSellEquipmentsVO.SLOT_ORDER[__s33param1], __dep_export_AutoSellEquipmentsVO.AutoSellEquipmentsVO.RARITY_ORDER[__s33param0], __s33param2);
  };
  AutoSellDialogEquipments.prototype.onSelectAllCheckboxChanged = function (__s35param0) {
    switch (__s35param0.currentState) {
      case __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_UNSELECTED:
      case __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_MIXED:
        this.autoSellVO.equipments.setAllActiveStates(false);
        break;
      case __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED:
        this.autoSellVO.equipments.setAllActiveStates(true);
    }
    this.updateActiveCheckboxes();
  };
  AutoSellDialogEquipments.prototype.onActiveStateCheckboxChanged = function (__s38param0) {
    var __s38local0 = __s38param0;
    this.setActiveStateInData(__s38local0.row, __s38local0.column, __s38param0.currentState == __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED);
    this.updateSelectAllCheckbox();
  };
  return AutoSellDialogEquipments;
}(__dep_export_AAutoSellDialogSublayer.AAutoSellDialogSublayer);
exports.AutoSellDialogEquipments = __s0local1;
var __dep_export_AAutoSellDialogCheckbox = require("gge-module:export_AAutoSellDialogCheckbox");
var __dep_export_AutoSellDialogActiveStateCheckbox = require("gge-module:export_AutoSellDialogActiveStateCheckbox");
var __dep_export_AutoSellDialogSelectAllCheckbox = require("gge-module:export_AutoSellDialogSelectAllCheckbox");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
