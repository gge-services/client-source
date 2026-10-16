Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SBuyTreasureMapPieceVO = require("gge-module:export_C2SBuyTreasureMapPieceVO");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UnitPicker = require("gge-module:export_UnitPicker");
var __s0local0 = function (__s1param0) {
  function CastleTreasureBuyPieceDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureBuyPieceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureBuyPieceDialog, __s1param0);
  CastleTreasureBuyPieceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.pick_amount.btn_left, this.dialogDisp.pick_amount.btn_right]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_treasureMap_buyPieces_copy"));
    this.dialogDisp.info_cost.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.info_cost.mouseChildren = false;
    this.i_iCost_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_cost.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
  };
  CastleTreasureBuyPieceDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.initAmountPicker();
    this.dialogDisp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
  };
  CastleTreasureBuyPieceDialog.prototype.initAmountPicker = function () {
    this._amountPicker = new __dep_export_UnitPicker.UnitPicker(this.dialogDisp.pick_amount);
    this._amountPicker.setNumItems(__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.missigPieces);
    this._amountPicker.itxt_pick.restrict = "0-9";
    this._amountPicker.itxt_pick.maxChars = 2;
    this._amountPicker.selectedValue = 0;
    this._amountPicker.itxt_pick.focusIn.add(this.bindFunction(this.onPickerFocusIn));
    this._amountPicker.itxt_pick.focusOut.add(this.bindFunction(this.onPickerFocusOut));
    this._amountPicker.itxt_pick.click.add(this.bindFunction(this.onClickInPicker));
    this._amountPicker.itxt_pick.keyDown.add(this.bindFunction(this.onPickerKeyDown));
    this._amountPicker.itxt_pick.change.add(this.bindFunction(this.onPickerTextChanged));
    this.setAmount(this.piecesToBuy);
  };
  CastleTreasureBuyPieceDialog.prototype.onClickInPicker = function (__s11param0) {
    this.setPickText(this.getNumberFromPicker());
    if (this.isOutOfTutorial()) {
      this._amountPicker.itxt_pick.setSelection(0, this._amountPicker.itxt_pick.text.length);
    }
    this._amountPicker.itxt_pick.restrict = "0-9";
    this._amountPicker.itxt_pick.maxChars = 5;
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerTextChanged = function (__s14param0) {
    this.validatePickCount();
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerKeyDown = function (__s16param0) {
    __s16param0.stopPropagation();
    if (__s16param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
      if (this.isOutOfTutorial() && this._onReturnKeyPressed != null) {
        this._onReturnKeyPressed();
      }
    }
  };
  CastleTreasureBuyPieceDialog.prototype.getNumberFromPicker = function () {
    return parseInt(this._amountPicker.itxt_pick.text);
  };
  CastleTreasureBuyPieceDialog.prototype.setPickText = function (__s22param0) {
    this._amountPicker.setValue(__s22param0);
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerFocusIn = function (__s24param0) {
    this.setPickText(this.getNumberFromPicker());
    this._amountPicker.itxt_pick.restrict = "0-9";
    this._amountPicker.itxt_pick.maxChars = 5;
    if (this.isOutOfTutorial()) {
      this._amountPicker.itxt_pick.setSelection(0, this._amountPicker.itxt_pick.text.length);
    }
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerFocusOut = function (__s27param0) {
    if (__s27param0) {
      this.validatePickCount();
      this._amountPicker.selectedValue = this.getNumberFromPicker() - 1;
      this.setPickText(this.getNumberFromPicker());
    }
  };
  CastleTreasureBuyPieceDialog.prototype.registerOnReturnKeyPressed = function (__s30param0) {
    this._onReturnKeyPressed = __s30param0;
  };
  CastleTreasureBuyPieceDialog.prototype.validatePickCount = function () {
    var __s32local0 = this.getNumberFromPicker();
    if (__s32local0 > this._amountPicker.numItems) {
      this.setPickText(this._amountPicker.numItems);
    } else if (__s32local0 <= 0) {
      this.setPickText(1);
    }
  };
  CastleTreasureBuyPieceDialog.prototype.showLoaded = function (__s36param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s36param0);
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this._onTreasureMapDataUpdated));
  };
  CastleTreasureBuyPieceDialog.prototype._onTreasureMapDataUpdated = function (__s38param0) {
    if (__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.missigPieces != 0) {
      this._amountPicker.dispose();
      this.initAmountPicker();
    } else {
      this.hide();
    }
  };
  CastleTreasureBuyPieceDialog.prototype.onChangeAmount = function (__s42param0) {
    this.setAmount(this.piecesToBuy);
  };
  CastleTreasureBuyPieceDialog.prototype.setAmount = function (__s44param0) {
    var __s44local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.treasureMapVO.costPiece * __s44param0));
    this.i_iCost_txt_value.textContentVO.numberValue = __s44local0;
  };
  Object.defineProperty(CastleTreasureBuyPieceDialog.prototype, "piecesToBuy", {
    get: function () {
      return this._amountPicker.selectedValue + 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureBuyPieceDialog.prototype.onClick = function (__s48param0) {
    __s1param0.prototype.onClick.call(this, __s48param0);
    switch (__s48param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyTreasureMapPieceVO.C2SBuyTreasureMapPieceVO(this.piecesToBuy, this.dialogProperties.treasureMapVO.mapID));
        this.hide();
    }
  };
  CastleTreasureBuyPieceDialog.prototype.hideLoaded = function (__s51param0 = null) {
    this.dialogDisp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this._onTreasureMapDataUpdated));
    this._amountPicker.dispose();
    __s1param0.prototype.hideLoaded.call(this, __s51param0);
  };
  Object.defineProperty(CastleTreasureBuyPieceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureBuyPieceDialog.__initialize_static_members = function () {
    CastleTreasureBuyPieceDialog.NAME = "CastleTreasureBuyPiece";
  };
  return CastleTreasureBuyPieceDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTreasureBuyPieceDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
