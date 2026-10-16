Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SSpecialEventInfoVO = require("gge-module:export_C2SSpecialEventInfoVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ARandomDungeonRewardDialog = require("gge-module:export_ARandomDungeonRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastleRandomDungeonWinDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRandomDungeonWinDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRandomDungeonWinDialog, __s1param0);
  CastleRandomDungeonWinDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reward"));
  };
  CastleRandomDungeonWinDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.skinID + "_win_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_winText, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.skinID + "_win_desc"));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpecialEventInfoVO.C2SSpecialEventInfoVO());
  };
  CastleRandomDungeonWinDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleRandomDungeonWinDialog.prototype, "rewards", {
    get: function () {
      return this.dialogProperties.rewards;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ARandomDungeonRewardDialog.ARandomDungeonRewardDialog.prototype, "rewards").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRandomDungeonWinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRandomDungeonWinDialog.__initialize_static_members = function () {
    CastleRandomDungeonWinDialog.NAME = "CastleRandomDungeonWinExternal";
  };
  return CastleRandomDungeonWinDialog;
}(__dep_export_ARandomDungeonRewardDialog.ARandomDungeonRewardDialog);
exports.CastleRandomDungeonWinDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
