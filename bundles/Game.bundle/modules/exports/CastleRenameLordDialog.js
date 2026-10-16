Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SRenameLordVO = require("gge-module:export_C2SRenameLordVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicRenameDialog = require("gge-module:export_BasicRenameDialog");
var __s0local0 = function (__s1param0) {
  function CastleRenameLordDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRenameLordDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRenameLordDialog, __s1param0);
  CastleRenameLordDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.initStaticText(this.dialogDisp.txt_title, "dialog_renameLord_title");
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_renameLord_copy");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_renameLord_insertText");
    this.dialogDisp.mc_costs.visible = false;
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  Object.defineProperty(CastleRenameLordDialog.prototype, "textMaxChars", {
    get: function () {
      return __dep_exact_26a421b704832cff.EquipmentConst.LORD_NAME_MAX_LENGTH;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "textMaxChars").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRenameLordDialog.prototype, "defaultName", {
    get: function () {
      return this.dialogProperties.lordVO.defaultName.compose();
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "defaultName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameLordDialog.prototype.validate = function () {
    if (__s1param0.prototype.validate.call(this)) {
      if (__dep_exact_9e901e8e2483a22f.TextValide.isSmartFoxValide(this.itxt_insert.text) && __dep_exact_9e901e8e2483a22f.TextValide.isUsernameValide(this.itxt_insert.text)) {
        return true;
      }
      this.alert("generic_alert_watchout", "register_emptyName_copy");
    }
    return false;
  };
  CastleRenameLordDialog.prototype.sendCommand = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRenameLordVO.C2SRenameLordVO(this.itxt_insert.text, this.dialogProperties.lordVO.id));
    this.hide();
  };
  Object.defineProperty(CastleRenameLordDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRenameLordDialog.__initialize_static_members = function () {
    CastleRenameLordDialog.NAME = "CastleNameAlliance";
  };
  return CastleRenameLordDialog;
}(__dep_export_BasicRenameDialog.BasicRenameDialog);
exports.CastleRenameLordDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
