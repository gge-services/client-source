Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_C2SAllianceChangeDiplomacyVO = require("gge-module:export_C2SAllianceChangeDiplomacyVO");
var __dep_export_C2SAllianceRefuseDiplomacyVO = require("gge-module:export_C2SAllianceRefuseDiplomacyVO");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceInvitationDialog = require("gge-module:export_CastleAllianceInvitationDialog");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceRequestDiplomacyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __dep_export_CastleAllianceInvitationDialog.CastleAllianceInvitationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceRequestDiplomacyDialog, __s1param0);
  CastleAllianceRequestDiplomacyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {};
  CastleAllianceRequestDiplomacyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.dialogProperties_0.allianceInfoVO) {
      this.applyAllianceData(this.dialogProperties_0.allianceInfoVO);
    } else {
      __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(this.dialogProperties_0.allianceID));
    }
    switch (this.dialogProperties_0.requestStatus) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL:
        this.itxt_question.textContentVO.textId = "dialog_alliance_diplomacyQuestion_neutral";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        this.itxt_question.textContentVO.textId = "dialog_alliance_diplomacyQuestion_noAttack";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        this.itxt_question.textContentVO.textId = "dialog_alliance_diplomacyQuestion_pact";
    }
    this.itxt_title.textContentVO.textId = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_requestDiplomacy_title");
  };
  CastleAllianceRequestDiplomacyDialog.prototype.onAllianceDataUpdate = function (__s12param0) {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    this.applyAllianceData(__s12param0.allianceInfoVO);
  };
  Object.defineProperty(CastleAllianceRequestDiplomacyDialog.prototype, "helperTextId", {
    get: function () {
      return "help_requestDiplomacy";
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceInvitationDialog.CastleAllianceInvitationDialog.prototype, "helperTextId").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceRequestDiplomacyDialog.prototype.onRefuse = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceRefuseDiplomacyVO.C2SAllianceRefuseDiplomacyVO(this.dialogProperties_0.allianceID));
  };
  CastleAllianceRequestDiplomacyDialog.prototype.onAccept = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(this.dialogProperties_0.allianceID, this.dialogProperties_0.requestStatus));
  };
  Object.defineProperty(CastleAllianceRequestDiplomacyDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceRequestDiplomacyDialog.__initialize_static_members = function () {
    CastleAllianceRequestDiplomacyDialog.NAME = "CastleAllianceInvitationEx";
  };
  return CastleAllianceRequestDiplomacyDialog;
}(__dep_export_CastleAllianceInvitationDialog.CastleAllianceInvitationDialog);
exports.CastleAllianceRequestDiplomacyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
