Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SAllianceChangeDiplomacyVO = require("gge-module:export_C2SAllianceChangeDiplomacyVO");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_CastleAllianceRequestDiplomacyDialogProperties = require("gge-module:export_CastleAllianceRequestDiplomacyDialogProperties");
var __dep_export_CastleSuggestPeaceDialogProperties = require("gge-module:export_CastleSuggestPeaceDialogProperties");
var __dep_export_PeaceOfferVO = require("gge-module:export_PeaceOfferVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInfoDialogDiplomacy(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.sendRank = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.onDiplomacyRequestSend = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.dialogDisp.btn_pact, __s3local0.dialogDisp.btn_noAttack, __s3local0.dialogDisp.btn_war]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialogDiplomacy, __s1param0);
  CastleAllianceInfoDialogDiplomacy.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.updateButtons();
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtons = function () {
    this.resetButtons();
    switch (this.allianceInfoVO.allianceStatusToOwnAlliance) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL:
        this.updateButtonsNeutral();
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
        this.updateButtonsInWar();
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        this.updateButtonsRealAllied();
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        this.updateButtonsSoftAllied();
    }
    this.checkDiplomacyRights();
  };
  CastleAllianceInfoDialogDiplomacy.prototype.checkDiplomacyRights = function () {
    if (!__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_DIPLOMACY)) {
      if (this.dialogDisp.btn_pact.enabled) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
        this.dialogDisp.btn_pact.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogDisp.btn_pact.toolTipText) + "\n\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_rankToLow");
      }
      if (this.dialogDisp.btn_noAttack.enabled) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
        this.dialogDisp.btn_noAttack.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogDisp.btn_noAttack.toolTipText) + "\n\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_rankToLow");
      }
      if (this.dialogDisp.btn_war.enabled) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
        this.dialogDisp.btn_war.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogDisp.btn_war.toolTipText) + "\n\n" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_rankToLow");
      }
    }
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsSoftAllied = function () {
    if (this.allianceInfoVO.canInvitedForHardPact) {
      if (this.newAllianceStatusID != __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_REAL_ALLIED || this.newAllianceStatusConfirmed) {
        this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_requst_pact";
        this.dialogDisp.btn_pact.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_pact");
      } else {
        this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_change_acceptRequest_pact_tooltip";
        this.dialogDisp.btn_pact.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_pact_reply", [this.otherAllianceName]);
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
      this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_maxHardPacted";
      this.dialogDisp.btn_pact.questionText = null;
    }
    if (this.newAllianceStatusConfirmed) {
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_end_noAttack";
      this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_end_noAttack");
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    }
    this.dialogDisp.btn_noAttack.gotoAndStop(2);
    this.dialogDisp.btn_war.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_changeTo_war");
    this.dialogDisp.btn_war.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_changeTo_war");
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoNoAttack";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsRealAllied = function () {
    if (this.allianceInfoVO.canInvitedForSoftPact) {
      if (this.newAllianceStatusID != __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED || this.newAllianceStatusConfirmed) {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_noAttack";
        this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_change_noAttack");
      } else {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
        this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_maxSoftPacted";
      this.dialogDisp.btn_noAttack.questionText = null;
    }
    this.dialogDisp.btn_pact.gotoAndStop(2);
    this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_end_pact";
    this.dialogDisp.btn_pact.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_end_pact");
    this.dialogDisp.btn_war.toolTipText = "dialog_alliance_pact_noWarAgainstPact";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoPact";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsInWar = function () {
    if (this.allianceInfoVO.canInvitedForSoftPact) {
      if (this.newAllianceStatusID != __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED || this.newAllianceStatusConfirmed) {
        if (this.newAllianceStatusConfirmed) {
          this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_requst_noAttack";
          this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_noAttack");
        } else {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
          this.dialogDisp.btn_noAttack.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
        }
      } else {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
        this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_allianceDiplomacy_noAgression_blocked_tooltip";
      this.dialogDisp.btn_noAttack.questionText = null;
    }
    this.dialogDisp.btn_war.gotoAndStop(2);
    if (this.allianceInfoVO.isInPeaceNegociations) {
      this.dialogDisp.btn_war.toolTipText = "dialog_alliance_newDiplomacyRequest";
    } else if (this.newAllianceStatusID != __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_NEUTRAL || this.newAllianceStatusConfirmed) {
      if (this.newAllianceStatusConfirmed) {
        this.dialogDisp.btn_war.toolTipText = "dialog_alliance_requst_noWar";
        this.dialogDisp.btn_war.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_change_noWar");
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
        this.dialogDisp.btn_war.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
      }
    } else {
      this.dialogDisp.btn_war.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
      this.dialogDisp.btn_war.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
    this.dialogDisp.btn_pact.toolTipText = "dialog_allianceDiplomacy_from_neutral_to_war_changed";
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoInWar";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsNeutral = function () {
    var __s43local0 = this;
    if (this.allianceInfoVO.canInvitedForHardPact) {
      if (this.newAllianceStatusID != __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_REAL_ALLIED || this.newAllianceStatusConfirmed) {
        if (this.newAllianceStatusConfirmed) {
          this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_requst_pact";
          this.dialogDisp.btn_pact.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_pact");
        } else {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
          this.dialogDisp.btn_pact.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
        }
      } else {
        this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_change_acceptRequest_pact_tooltip";
        this.dialogDisp.btn_pact.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_pact_reply", [this.otherAllianceName]);
        this.dialogDisp.btn_pact.dialogName = __dep_export_CastleAllianceRequestDiplomacyDialog.CastleAllianceRequestDiplomacyDialog;
        this.dialogDisp.btn_pact.getDialogProperties = function () {
          return new __dep_export_CastleAllianceRequestDiplomacyDialogProperties.CastleAllianceRequestDiplomacyDialogProperties(__s43local0.allianceInfoVO.allianceId, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED, __s43local0.allianceInfoVO);
        };
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
      this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_maxHardPacted";
      this.dialogDisp.btn_pact.questionText = null;
    }
    if (this.allianceInfoVO.canInvitedForSoftPact) {
      if (this.newAllianceStatusID != __dep_export_AllianceInfoVO.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED || this.newAllianceStatusConfirmed) {
        if (this.newAllianceStatusConfirmed) {
          this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_requst_noAttack";
          this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_noAttack");
        } else {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
          this.dialogDisp.btn_noAttack.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
        }
      } else {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
        this.dialogDisp.btn_noAttack.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_maxSoftPacted";
      this.dialogDisp.btn_noAttack.questionText = null;
    }
    if (this.newAllianceStatusConfirmed) {
      this.dialogDisp.btn_war.toolTipText = "dialog_alliance_changeTo_war";
      this.dialogDisp.btn_war.questionText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_yesNo_changeTo_war");
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
      this.dialogDisp.btn_war.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
    }
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoNeutral";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.resetButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_pact, true);
    this.dialogDisp.btn_pact.gotoAndStop(1);
    this.dialogDisp.btn_pact.dialogName = null;
    this.dialogDisp.btn_pact.getDialogProperties = null;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, true);
    this.dialogDisp.btn_noAttack.gotoAndStop(1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_war, true);
    this.dialogDisp.btn_war.gotoAndStop(1);
  };
  CastleAllianceInfoDialogDiplomacy.prototype.onMouseUp = function (__s63param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s63param0.target)) {
      switch (__s63param0.target) {
        case this.dialogDisp.btn_pact:
          if (this.dialogDisp.btn_pact.currentFrame == 0) {
            this.sendRank = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED);
          } else {
            this.sendRank = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL);
          }
          if (this.dialogDisp.btn_pact.dialogName && this.dialogDisp.btn_pact.getDialogProperties) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this.dialogDisp.btn_pact.dialogName, this.dialogDisp.btn_pact.getDialogProperties());
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __s63param0.target.questionText, this.bindFunction(this.sendNewRank)));
          }
          break;
        case this.dialogDisp.btn_noAttack:
          if (this.dialogDisp.btn_noAttack.currentFrame == 0) {
            this.sendRank = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED);
          } else {
            this.sendRank = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL);
          }
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __s63param0.target.questionText, this.bindFunction(this.sendNewRank)));
          break;
        case this.dialogDisp.btn_war:
          if (this.dialogDisp.btn_war.currentFrame == 0) {
            this.sendRank = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR);
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __s63param0.target.questionText, this.bindFunction(this.sendNewRank)));
          } else {
            this.sendRank = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL);
            if (this.bindFunction(this.onDiplomacyRequestSend) != null) {
              this.onDiplomacyRequestSend();
            }
            if (this.allianceInfoVO.isInPeaceNegociations) {
              if (__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay()) {
                var __s63local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_allianceDiplomacy_peaceOffer_copy", [this.allianceInfoVO.allianceName]);
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("attention", __s63local0, this.bindFunction(this.onAcceptPeaceCrossplay)));
              } else {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleReceivedPeaceOfferDialog.CastleReceivedPeaceOfferDialog, new __dep_export_CastleSuggestPeaceDialogProperties.CastleSuggestPeaceDialogProperties(this.allianceInfoVO.peaceOfferVO));
              }
            } else {
              var __s63local1 = new __dep_export_PeaceOfferVO.PeaceOfferVO(this.allianceInfoVO.allianceId, this.allianceInfoVO.allianceName, 0, true);
              if (__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay()) {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("attention", "dialog_alliance_yesNo_end_war", this.bindFunction(this.onOfferPeaceCrossplay)));
              } else {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSuggestPeaceDialog.CastleSuggestPeaceDialog, new __dep_export_CastleSuggestPeaceDialogProperties.CastleSuggestPeaceDialogProperties(__s63local1));
              }
            }
          }
      }
    }
  };
  CastleAllianceInfoDialogDiplomacy.prototype.onOfferPeaceCrossplay = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(this.allianceInfoVO.allianceId, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL));
  };
  CastleAllianceInfoDialogDiplomacy.prototype.onAcceptPeaceCrossplay = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(this.allianceInfoVO.allianceId, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL));
  };
  CastleAllianceInfoDialogDiplomacy.prototype.sendNewRank = function (__s86param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(this.allianceInfoVO.allianceId, this.sendRank));
    if (this.bindFunction(this.onDiplomacyRequestSend) != null) {
      this.onDiplomacyRequestSend();
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "newAllianceStatusID", {
    get: function () {
      return this._params[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "newAllianceStatusConfirmed", {
    get: function () {
      return !!this._params[2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "otherAllianceName", {
    get: function () {
      return this._params[3];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogDiplomacy;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceInfoDialogDiplomacy = __s0local0;
var __dep_export_AllianceInfoVO = require("gge-module:export_AllianceInfoVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleAllianceRequestDiplomacyDialog = require("gge-module:export_CastleAllianceRequestDiplomacyDialog");
var __dep_export_CastleReceivedPeaceOfferDialog = require("gge-module:export_CastleReceivedPeaceOfferDialog");
var __dep_export_CastleSuggestPeaceDialog = require("gge-module:export_CastleSuggestPeaceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
