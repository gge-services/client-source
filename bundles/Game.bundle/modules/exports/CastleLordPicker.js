Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_ComboboxItemRendererLord = require("gge-module:export_ComboboxItemRendererLord");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleLordPicker(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.isBaronPicker = false;
    __s3local0._numAllLords = 0;
    __s3local0._disp = __s3param0;
    __s3local0.isBaronPicker = __s3param3;
    __s3local0._lordList = [];
    __s3local0._numAllLords = __dep_exact_f855840627e6e145.int(__s3local0._lordList.length);
    __s3local0._disp.visible = __s3param1 != null;
    __s3local0.initComboBox(__s3param1, __s3param2, __s3param4);
    __s3local0._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(__s3local0._disp.btn_equipCommander, true);
    __s3local0._lordTooltipTrigger.show();
    __s3local0._disp.btn_equipCommander.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onEquipClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, __s3local0.bindFunction(__s3local0.onEquipOrRename));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLordPicker, __s1param0);
  CastleLordPicker.prototype.initComboBox = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0;
    if (__s5param1 === undefined) {
      __s5param1 = false;
    }
    if (__s5param2 === undefined) {
      __s5param2 = false;
    }
    this._lordComboBox = new __dep_export_ComboboxComponent.ComboboxComponent(this._disp.mc_lordCombobox, __dep_exact_92d05af59ee2ff30.Localize.text("equipment_itemType_general"), __dep_export_ComboboxComponent.ComboboxComponent.OPEN_UP, 17, 16, -1, CastleLordPicker.MAX_LORDS_TO_SHOW, new __dep_export_ComboboxItemRendererLord.ComboboxItemRendererLord(__s5param2), 0, true, false, 0, "", 0);
    if (__s5param0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && (__s5local3.isAvailableForMovement || __s5param1)) {
          this._lordList.push(__s5local3);
          (__s5local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).data = __s5local3;
          __s5local0.itemLabel = __s5local3.label;
          this._lordComboBox.addItem(__s5local0);
        }
      }
    }
    this._lordComboBox.enabled = this._lordList.length > 1;
    if (!this._lordComboBox.enabled) {
      this._lordComboBox.disp.doCache(0, 2);
    }
    this._lordComboBox.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.handleSelectionChanged));
    if (this._lordList.length > 0) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = -1;
    }
  };
  CastleLordPicker.prototype.handleSelectionChanged = function (__s16param0) {
    this.updateDisp();
    this.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  CastleLordPicker.prototype.onEquipOrRename = function (__s18param0) {
    var __s18local0 = this._lordComboBox.selectedId;
    if (!(__s18local0 < 0)) {
      var __s18local1;
      var __s18local2 = __dep_export_CastleModel.CastleModel.lordData.getCommanderByID(this._lordList[__s18local0].id);
      if (__s18local2) {
        this._lordList[__s18local0] = __s18local2;
        (__s18local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).data = __s18local2;
        __s18local1.itemLabel = __s18local2.label;
        this._lordComboBox.changeItemAtIndex(__s18local1, __s18local0);
        this._lordComboBox.selectItemIndex(__s18local0);
      }
    }
  };
  CastleLordPicker.prototype.onEquipClick = function (__s22param0) {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this.selectedLord && this.canBeEquipped(this.selectedLord)) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, this.selectedLord ? this.selectedLord.id : -1, this.isBaronPicker));
    }
  };
  CastleLordPicker.prototype.canBeEquipped = function (__s25param0) {
    return (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s25param0, "BaronVO") || !__s25param0.isDummyBaron) && !!__s25param0 && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s25param0, "DefaultLordVO");
  };
  CastleLordPicker.prototype.destroy = function () {
    this._disp.btn_equipCommander.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onEquipClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
    this._lordComboBox.dispose();
    this._lordTooltipTrigger.hide();
  };
  CastleLordPicker.prototype.updateDisp = function () {
    this._disp.btn_equipCommander.mouseEnabled = true;
    var __s29local0 = this.selectedLord;
    this._disp.btn_equipCommander.actLikeButton = __s29local0 && __s29local0.isAvailableForEquip;
    this.addLordIcon(__s29local0);
    this._lordComboBox.disp.doCache();
  };
  CastleLordPicker.prototype.addLordIcon = function (__s31param0) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._disp.mc_lordHolder);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s31param0, this._disp.mc_lordHolder, 27, 30, Library.CastleInterfaceElements.FightScreenHeroLordContainer, true);
    this._disp.mc_lordHolder.mouseChildren = false;
    this._disp.mc_lordHolder.mouseEnabled = false;
  };
  Object.defineProperty(CastleLordPicker.prototype, "selectedLord", {
    get: function () {
      if (this.selectedIndex > -1 && this.selectedIndex < this._lordList.length) {
        return this._lordList[this.selectedIndex];
      } else {
        return this.premiumLord;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "premiumLord", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.lordData.getDefaultLordByID(__dep_exact_26a421b704832cff.TravelConst.COMMANDER_PREMIUM);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "selectedIndex", {
    get: function () {
      return this._lordComboBox.selectedId;
    },
    set: function (__s41param0) {
      if (this._lordList.length == 0) {
        __s41param0 = -1;
      } else {
        if (__s41param0 >= this._lordList.length) {
          __s41param0 = 0;
        }
        if (__s41param0 < 0) {
          __s41param0 = __dep_exact_f855840627e6e145.int(this._lordList.length - 1);
        }
      }
      this._lordComboBox.selectItemIndex(__s41param0);
      this.updateDisp();
      this.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "lordTooltipTrigger", {
    get: function () {
      return this._lordTooltipTrigger;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordPicker.MAX_LORDS_TO_SHOW = 21;
  return CastleLordPicker;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleLordPicker = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
