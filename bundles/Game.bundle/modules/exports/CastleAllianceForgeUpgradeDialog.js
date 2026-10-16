Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SAllianceUpgradeVO = require("gge-module:export_C2SAllianceUpgradeVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceForgeUpgradeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceForgeUpgradeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceForgeUpgradeDialog, __s1param0);
  CastleAllianceForgeUpgradeDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE));
  };
  CastleAllianceForgeUpgradeDialog.prototype.setToolTips = function () {
    __s1param0.prototype.setToolTips.call(this);
    this.dialogDisp.mc_costsStone.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.STONE;
    this.dialogDisp.mc_costsStone.mouseChildren = false;
    this.dialogDisp.mc_costsWood.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.WOOD;
    this.dialogDisp.mc_costsWood.mouseChildren = false;
    this.dialogDisp.mc_costsC1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.dialogDisp.mc_costsC1.mouseChildren = false;
  };
  CastleAllianceForgeUpgradeDialog.prototype.setCopyTexts = function () {
    __s1param0.prototype.setCopyTexts.call(this);
    var __s9local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getUpgradeCosts(__dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE);
    var __s9local1 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE);
    var __s9local2 = __s9local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE);
    var __s9local3 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD);
    var __s9local4 = __s9local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD);
    var __s9local5 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    var __s9local6 = __s9local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_headline, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyForge_upgrade_title"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyforge_upgrade_copytext"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_nextlevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyforge_upgrade_nextlevel"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value_level, new __dep_exact_92d05af59ee2ff30_2.TextVO(String(__dep_export_CastleModel.CastleModel.allianceData.allyForgeLevel + 1)), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyforge_upgrade_copycost"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_costWood = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsWood.txt_value_costwood, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local4), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_costCoins = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsC1.txt_value_costcoins, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local6), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_costStone = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsStone.txt_value_coststone, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local2), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_costWood.color = __s9local3 < __s9local4 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_costCoins.color = __s9local5 < __s9local6 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_costStone.color = __s9local1 < __s9local2 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleAllianceForgeUpgradeDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onCheckConfirmUpgrade();
          this.hide();
      }
    }
  };
  CastleAllianceForgeUpgradeDialog.prototype.onCheckConfirmUpgrade = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceUpgradeVO.C2SAllianceUpgradeVO(__dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE));
  };
  CastleAllianceForgeUpgradeDialog.prototype.initLoaded = function (__s17param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s17param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
    this.itxt_costWood = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsWood.txt_value_costwood, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_costCoins = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsC1.txt_value_costcoins, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_costStone = this.textFieldManager.registerTextField(this.dialogDisp.mc_costsStone.txt_value_coststone, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_dialogHeadline = this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_headline, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyForge_upgrade_title"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_dialogCopy = this.textFieldManager.registerTextField(this.dialogDisp.txt_dialog_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyforge_upgrade_copytext"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_copyNextLevel = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_nextlevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyforge_upgrade_nextlevel"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_valueLevel = this.textFieldManager.registerTextField(this.dialogDisp.txt_value_level, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.itxt_copyCosts = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allyforge_upgrade_copycost"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastleAllianceForgeUpgradeDialog.__initialize_static_members = function () {
    CastleAllianceForgeUpgradeDialog.NAME = "CastleAllianceForgeUpgrade";
  };
  return CastleAllianceForgeUpgradeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceForgeUpgradeDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
