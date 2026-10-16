Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __dep_export_ScrollableComboboxItemGeneralOverviewLord = require("gge-module:export_ScrollableComboboxItemGeneralOverviewLord");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function GeneralOverviewLordPicker(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.btn_equipCommander], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.mc_lordCombobox.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.mc_lordCombobox.btn_arrow, 1);
    __s3local0._clickFeedBack = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3param0.mc_lordCombobox.btn_arrow);
    __s3local0._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(__s3local0._disp.btn_equipCommander, true);
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0._disp.mc_lordCombobox).addSliderBackground(__s3local0._disp.mc_lordCombobox.mc_sliderBackground).addMouseWheelElements([__s3local0._disp.mc_lordCombobox]);
    var __s3local2 = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical(__dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM);
    __s3local0._lordComboBox = new __dep_export_ScrollableComboboxComponent.ScrollableComboboxComponent(__s3local0._disp.mc_lordCombobox, __s3local1, __s3local2);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralOverviewLordPicker, __s1param0);
  GeneralOverviewLordPicker.prototype.show = function (__s5param0, __s5param1) {
    this._lordComboBox.clear();
    this._lordList = __s5param0;
    this._generalVO = __s5param1;
    var __s5local0;
    var __s5local1 = this._generalVO.assignedLord;
    var __s5local2 = false;
    for (var __s5local3 = __s5param0.length - 1; __s5local3 >= 0; __s5local3--) {
      var __s5local4 = __s5param0[__s5local3];
      __s5local0 = new __dep_export_ScrollableComboboxItemGeneralOverviewLord.ScrollableComboboxItemGeneralOverviewLord(__s5local4);
      if (__s5local1 && __s5local1.id == __s5local4.id) {
        __s5local0.setSelected(true);
        __s5local2 = true;
      } else {
        __s5local0.setSelected(false);
      }
      this._lordComboBox.addItem(__s5local0);
    }
    __s5local0 = new __dep_export_ScrollableComboboxItemGeneralOverviewLord.ScrollableComboboxItemGeneralOverviewLord(null);
    if (!__s5local2) {
      __s5local0.setSelected(true);
    }
    this._lordComboBox.addItem(__s5local0);
    if (__s5local1) {
      this._lordComboBox.enableComponent(__s5local1.isAvailableForGeneralAssignement);
      this._lordComboBox.disp.mouseChildren = __s5local1.isAvailableForGeneralAssignement;
      this._lordComboBox.disp.toolTipText = __s5local1.isAvailableForGeneralAssignement ? null : {
        t: "dialog_generals_generalTravelling_tooltip",
        p: [__s5local1.assignedGeneralVO ? __s5local1.assignedGeneralVO.nameTextShort : ""]
      };
    } else {
      this._lordComboBox.enableComponent(true);
      this._lordComboBox.disp.mouseChildren = true;
      this._lordComboBox.disp.toolTipText = null;
    }
    this._lordTooltipTrigger.show();
    this._lordComboBox.onShow();
    this.updateDisp();
    this._lordComboBox.onSelectSignal.add(this.bindFunction(this.onSelectLord));
    this._clickFeedBack.addEventListener();
    this._disp.btn_equipCommander.addEventListener(__s0local0.CLICK, this.bindFunction(this.onEquipClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
  };
  GeneralOverviewLordPicker.prototype.hide = function () {
    this._lordTooltipTrigger.hide();
    this._lordComboBox.onHide();
    this._lordComboBox.onSelectSignal.remove(this.bindFunction(this.onSelectLord));
    this._clickFeedBack.removeEventListener();
    this._disp.btn_equipCommander.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onEquipClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
  };
  GeneralOverviewLordPicker.prototype.onSelectLord = function (__s16param0) {
    this.updateDisp();
    this.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  GeneralOverviewLordPicker.prototype.onEquipOrRename = function (__s18param0) {
    this._lordComboBox.selectItem(this._lordComboBox.selectedItem, true);
  };
  GeneralOverviewLordPicker.prototype.onEquipClick = function (__s20param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp.btn_equipCommander) && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this.selectedLord) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, this.selectedLord ? this.selectedLord.id : -1, this.selectedLord.isBaron));
    }
  };
  GeneralOverviewLordPicker.prototype.updateDisp = function () {
    var __s23local0 = this.selectedLord;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_equipCommander, true);
    this.addLordIcon(__s23local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_equipCommander, __s23local0 && __s23local0.isAvailableForEquip);
    this._disp.btn_equipCommander.mouseEnabled = !!__s23local0;
  };
  GeneralOverviewLordPicker.prototype.addLordIcon = function (__s25param0) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._disp.btn_equipCommander.mc_lordHolder);
    if (__s25param0) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s25param0, this._disp.btn_equipCommander.mc_lordHolder, 106, -1, null, false);
    }
    if (this._disp.btn_equipCommander.mc_empty) {
      this._disp.btn_equipCommander.mc_empty.visible = !__s25param0;
    }
  };
  Object.defineProperty(GeneralOverviewLordPicker.prototype, "lordTooltipTrigger", {
    get: function () {
      return this._lordTooltipTrigger;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralOverviewLordPicker.prototype, "selectedLord", {
    get: function () {
      if (this._lordComboBox.selectedItem) {
        return this._lordComboBox.selectedItem.data;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return GeneralOverviewLordPicker;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.GeneralOverviewLordPicker = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_ScrollableComboboxComponent = require("gge-module:export_ScrollableComboboxComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
