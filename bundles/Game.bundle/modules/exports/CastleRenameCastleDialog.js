Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SRenameCastleVO = require("gge-module:export_C2SRenameCastleVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicRenameDialog = require("gge-module:export_BasicRenameDialog");
var __s0local0 = function (__s1param0) {
  function CastleRenameCastleDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRenameCastleDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRenameCastleDialog, __s1param0);
  CastleRenameCastleDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.initStaticText(this.dialogDisp.txt_title, "dialog_renameCastle_title");
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_renameCastle_description");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_nameCastle_title");
    this.initStaticText(this.dialogDisp.mc_costs.txt_title, "costs");
    this.i_costs_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive ? 0 : __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.PlayerConst.CHANGE_CASTLE_NAME_C2));
    this.layoutManager.revertFullscreen();
    this.dialogDisp.mc_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.i_costs_txt_value.textContentVO.numberValue = __s5local0;
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < __s5local0) {
      this.i_costs_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.i_costs_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  Object.defineProperty(CastleRenameCastleDialog.prototype, "defaultName", {
    get: function () {
      return this.nameDialogProperties.prefillName;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "defaultName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRenameCastleDialog.prototype, "textMaxChars", {
    get: function () {
      return __dep_exact_26a421b704832cff.PlayerConst.CASTLE_NAME_MAX_LENGTH;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "textMaxChars").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameCastleDialog.prototype.validate = function () {
    if (__s1param0.prototype.validate.call(this)) {
      if (this.itxt_insert.text.length < __dep_exact_9e901e8e2483a22f.BasicModel.basicLocalization.getUsernameMinLength) {
        this.alert("generic_alert_watchout", "alert_castlenameTooShort");
      } else if (__dep_exact_9e901e8e2483a22f_1.TextValide.isSmartFoxValide(this.itxt_insert.text) && __dep_exact_9e901e8e2483a22f_1.TextValide.isUsernameValide(this.itxt_insert.text)) {
        if (this.itxt_insert.text != this.nameDialogProperties.worldmapObjectVO.areaNameString) {
          return true;
        }
        this.alert("generic_alert_watchout", "dialog_renameCastle_sameName");
      } else {
        this.alert("generic_alert_watchout", "errorCode_28");
      }
    }
    return false;
  };
  CastleRenameCastleDialog.prototype.sendCommand = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRenameCastleVO.C2SRenameCastleVO(this.nameDialogProperties.worldmapObjectVO.objectId, this.nameDialogProperties.worldmapObjectVO.kingdomID, this.itxt_insert.text, 1, this.nameDialogProperties.worldmapObjectVO.areaType));
    this.hide();
  };
  Object.defineProperty(CastleRenameCastleDialog.prototype, "nameDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameCastleDialog.__initialize_static_members = function () {
    CastleRenameCastleDialog.NAME = "CastleNameAlliance";
  };
  return CastleRenameCastleDialog;
}(__dep_export_BasicRenameDialog.BasicRenameDialog);
exports.CastleRenameCastleDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
