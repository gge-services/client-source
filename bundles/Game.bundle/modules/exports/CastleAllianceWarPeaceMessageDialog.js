Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceWarPeaceMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceWarPeaceMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceWarPeaceMessageDialog, __s1param0);
  CastleAllianceWarPeaceMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_alliance, this.dialogDisp.btn_close, this.dialogDisp.btn_diplomacy]);
  };
  CastleAllianceWarPeaceMessageDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.btn_diplomacy.toolTipText = "dialog_alliance_diplomacy";
    var __s7local0 = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.messageVO.enemyAllianceName);
    var __s7local1 = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.messageVO.alliedMemberOrAllianceName);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.messageVO.subject));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.txt_value, __s7local0);
    switch (this.dialogProperties.messageVO.subtypeAllianceWar) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_ENEMY_ATTACK_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_ATTACK_WAR, [__s7local0, __s7local1]));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_ENEMY_DECLARED_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_DECLARED_WAR, [__s7local0]));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_OUR_DECLARED_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_DECLARED_WAR, [__s7local1, __s7local0]));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_ENEMY_END_WAR:
        var __s7local2 = new Date();
        __s7local2.setTime(this.dialogProperties.messageVO.enemyPeaceOfferEndTimeStamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_PEACE_OFFER, [__s7local0, new __dep_exact_92d05af59ee2ff30.LocalizedDateTimeVO(__s7local2)]));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_OUR_ATTACK_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_ATTACKED_OTHER_ALLY, [__s7local0]));
        break;
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_OUR_SABOTAGE_WAR:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_SABOTAGED_OTHER_ALLIANCE, [__s7local0]));
    }
  };
  CastleAllianceWarPeaceMessageDialog.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.dialogDisp.btn_alliance:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this.dialogProperties.messageVO.enemyAllianceID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_diplomacy:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_DIPLOMACY));
        this.hide();
    }
  };
  Object.defineProperty(CastleAllianceWarPeaceMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceWarPeaceMessageDialog.__initialize_static_members = function () {
    CastleAllianceWarPeaceMessageDialog.NAME = "CastleAllianceWarPeaceMessageEx";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_DECLARED_WAR = "message_autoWar_enemy_declare";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_DECLARED_WAR = "message_autoWar_ownAlliance_declare";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_ATTACKED_OTHER_ALLY = "message_autoWar_ownAlliance_attack";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_WE_SABOTAGED_OTHER_ALLIANCE = "message_autoWar_ownAlliance_sabotage";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_ENEMY_ATTACK_WAR = "message_autoWar_enemy_attack";
    CastleAllianceWarPeaceMessageDialog.TEXT_ID_PEACE_OFFER = "message_peaceOffer_copy";
  };
  return CastleAllianceWarPeaceMessageDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceWarPeaceMessageDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
