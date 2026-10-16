Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SBuyArtifactPieceVO = require("gge-module:export_C2SBuyArtifactPieceVO");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_TextPicker = require("gge-module:export_TextPicker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleArtifactBuyPieceDialog() {
    return __s1param0.call(this, CastleArtifactBuyPieceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArtifactBuyPieceDialog, __s1param0);
  CastleArtifactBuyPieceDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this.dialogDisp.info_cost.mouseChildren = false;
    this.dialogDisp.info_cost.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_artifact_" + this.dialogProperties.artifactEventVO.skinID + "_buy_desc"));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_cost.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this._amoutPicker = new __dep_export_TextPicker.TextPicker(this.dialogDisp.pick_amount);
    this._amoutPicker.setNumItems(this.dialogProperties.artifactEventVO.missingParts);
    this._amoutPicker.selectedValue = 0;
    this.setAmount(this.piecesToBuy);
    this._amoutPicker.buttonsVisible = this.dialogProperties.artifactEventVO.missingParts > 1;
    this.dialogDisp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.initArtifact();
    this.dialogDisp.mc_decoration.gotoAndStop(this.dialogProperties.artifactEventVO.skinID);
  };
  CastleArtifactBuyPieceDialog.prototype.initArtifact = function () {
    var __s7local0;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_piece);
    var __s7local1 = this.dialogProperties.artifactEventVO.artifactClassName + "_Piece_External";
    var __s7local2 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("LoadingAnimation");
    __s7local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local1, this.artifctAssetFileURL, null, 0, false, __s7local2);
    var __s7local3 = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(100, 100);
    __s7local3.clipSizeChanged.add(CastleArtifactBuyPieceDialog.onClipSizeChanged);
    __s7local0.clipSizeComponent = __s7local3;
    this.dialogDisp.mc_piece.addChild(__s7local0.asDisplayObject());
  };
  CastleArtifactBuyPieceDialog.onClipSizeChanged = function (__s9param0) {
    var __s9local0 = __s9param0.asDisplayObject();
    __s9local0.x = __s9param0.clipSizeComponent.offsetX;
    __s9local0.y = __s9param0.clipSizeComponent.offsetY;
  };
  CastleArtifactBuyPieceDialog.prototype.onRemoveEvent = function (__s11param0) {
    if (__s11param0.specialEventVO.eventId == this.dialogProperties.artifactEventVO.eventId) {
      this.hide();
    }
  };
  CastleArtifactBuyPieceDialog.prototype.onChangeAmount = function (__s14param0) {
    this.setAmount(this.piecesToBuy);
  };
  CastleArtifactBuyPieceDialog.prototype.setAmount = function (__s16param0) {
    var __s16local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.artifactEventVO.artifactPartCosts * __s16param0));
    this.itxt_value.textContentVO.numberValue = __s16local0;
    this.itxt_value.color = __s16local0 <= __dep_export_CastleModel.CastleModel.currencyData.c2Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  Object.defineProperty(CastleArtifactBuyPieceDialog.prototype, "piecesToBuy", {
    get: function () {
      return this._amoutPicker.selectedValue + 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBuyPieceDialog.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyArtifactPieceVO.C2SBuyArtifactPieceVO(this.piecesToBuy, this.dialogProperties.artifactEventVO.eventId, this.dialogProperties.artifactEventVO.kingdomIDs[0]));
          this.hide();
      }
    }
  };
  CastleArtifactBuyPieceDialog.prototype.hideLoaded = function (__s24param0 = null) {
    this.dialogDisp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._amoutPicker.dispose();
    __s1param0.prototype.hideLoaded.call(this, __s24param0);
  };
  Object.defineProperty(CastleArtifactBuyPieceDialog.prototype, "artifctAssetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.artifactEventVO.artifactClassName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArtifactBuyPieceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBuyPieceDialog.NAME = "CastleArtifactBuyPieceEx";
  return CastleArtifactBuyPieceDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleArtifactBuyPieceDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
