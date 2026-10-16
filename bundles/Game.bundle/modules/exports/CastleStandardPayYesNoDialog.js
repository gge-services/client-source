Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleStandardPayYesNoDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStandardPayYesNoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStandardPayYesNoDialog, __s1param0);
  CastleStandardPayYesNoDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no]);
    var __s5local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.standardDialogProperties.copy));
    var __s5local1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.resourceCostForSkip));
    this.dialogDisp.mc_cost.toolTipText = "gold";
    this.dialogDisp.mc_cost.mouseChildren = false;
    __s5local0.autoFitToBounds = true;
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    __s5local1.color = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.resourceCostForSkip ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.placeholder);
    if (this.standardDialogProperties.characterName != "") {
      var __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.standardDialogProperties.characterName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.standardDialogProperties.characterName), null, 0, false);
      __s5local2.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(75, 75);
      this.dialogDisp.placeholder.addChild(__s5local2);
    }
  };
  Object.defineProperty(CastleStandardPayYesNoDialog.prototype, "resourceCostForSkip", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.ResourceConst.getC2PriceForResources(this.standardDialogProperties.args);
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardPayYesNoDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.standardDialogProperties.functionYes != null) {
          this.standardDialogProperties.functionYes(null);
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionClose != null) {
          this.standardDialogProperties.functionClose(null);
        }
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.standardDialogProperties.functionNo != null) {
          this.standardDialogProperties.functionNo(null);
        }
    }
  };
  CastleStandardPayYesNoDialog.prototype.onEventAdded = function (__s16param0) {
    if (__s16param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT || __s16param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT_FACTION) {
      this.hide();
    }
  };
  CastleStandardPayYesNoDialog.prototype.onEventRemoved = function (__s19param0) {
    if (__s19param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT || __s19param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_MERCHANT_FACTION) {
      this.hide();
    }
  };
  CastleStandardPayYesNoDialog.prototype.hideLoaded = function (__s22param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
  };
  Object.defineProperty(CastleStandardPayYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardPayYesNoDialog.__initialize_static_members = function () {
    CastleStandardPayYesNoDialog.NAME = "CastleStandardPayYesNoEx";
  };
  return CastleStandardPayYesNoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleStandardPayYesNoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
