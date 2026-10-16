Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleEilandRankingDialogProperties = require("gge-module:export_CastleEilandRankingDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleEilandTop1RewardDialog() {
    var __s3local0 = this;
    __s3local0.standardOkButtonY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleEilandTop1RewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTop1RewardDialog, __s1param0);
  CastleEilandTop1RewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_title]);
    this.standardOkButtonY = this.dialogDisp.btn_ok.y;
    this.dialogDisp.mc_kingCrown.visible = true;
    this.dialogDisp.btn_title.toolTipText = "dialog_eiland_grantTitle_copy";
  };
  CastleEilandTop1RewardDialog.prototype.applyPropertiesLoaded = function (__s7param0) {
    var __s7local0;
    var __s7local1;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    if (this.dialogProperties.isKing) {
      __s7local0 = "message_header_eiland_reward_stormlord";
      __s7local1 = "dialog_eilandMessage_reward_stormlord";
      this.dialogDisp.mc_background.height = CastleEilandTop1RewardDialog.HEIGHT_EXTENDED;
      this.dialogDisp.btn_ok.y = this.standardOkButtonY + CastleEilandTop1RewardDialog.HEIGHT_DIFF;
      this.dialogDisp.btn_title.visible = true;
    } else {
      __s7local0 = "message_header_eiland_reward_alliance";
      __s7local1 = "dialog_eilandMessage_reward_alliance";
      this.dialogDisp.mc_background.height = CastleEilandTop1RewardDialog.HEIGHT_NORMAL;
      this.dialogDisp.btn_ok.y = this.standardOkButtonY;
      this.dialogDisp.btn_title.visible = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_forLeader_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardDescription, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rankreward_king_copy"));
  };
  CastleEilandTop1RewardDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_title:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandRankingDialog.CastleEilandRankingDialog, new __dep_export_CastleEilandRankingDialogProperties.CastleEilandRankingDialogProperties(__dep_export_CastleEilandRankingDialogProperties.CastleEilandRankingDialogProperties.SUBLAYER_TITLE));
      }
    }
  };
  Object.defineProperty(CastleEilandTop1RewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandTop1RewardDialog.__initialize_static_members = function () {
    CastleEilandTop1RewardDialog.NAME = "CastleEilandTopReward";
    CastleEilandTop1RewardDialog.HEIGHT_NORMAL = 358;
    CastleEilandTop1RewardDialog.HEIGHT_EXTENDED = 396;
    CastleEilandTop1RewardDialog.HEIGHT_DIFF = CastleEilandTop1RewardDialog.HEIGHT_EXTENDED - CastleEilandTop1RewardDialog.HEIGHT_NORMAL;
  };
  return CastleEilandTop1RewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEilandTop1RewardDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEilandRankingDialog = require("gge-module:export_CastleEilandRankingDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
