Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_C2SAbandonOutpostCancelVO = require("gge-module:export_C2SAbandonOutpostCancelVO");
var __dep_export_C2SAbandonOutpostStartVO = require("gge-module:export_C2SAbandonOutpostStartVO");
var __dep_export_C2SOpenGateStartVO = require("gge-module:export_C2SOpenGateStartVO");
var __dep_export_C2SPeaceModeStartVO = require("gge-module:export_C2SPeaceModeStartVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleLargeYesNoDialogProperties = require("gge-module:export_CastleLargeYesNoDialogProperties");
var __dep_export_CastleTimedYesNoDialogProperties = require("gge-module:export_CastleTimedYesNoDialogProperties");
var __dep_export_CastleRenameCastleDialogProperties = require("gge-module:export_CastleRenameCastleDialogProperties");
var __dep_export_CastleStartOpenGateDialogProperties = require("gge-module:export_CastleStartOpenGateDialogProperties");
var __dep_export_CastleStartPeaceModeDialogProperties = require("gge-module:export_CastleStartPeaceModeDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleManagementDialog() {
    return __s1param0.call(this, CastleManagementDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleManagementDialog, __s1param0);
  CastleManagementDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.disp.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_management_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("castleName"));
    this.dialogDisp.btn_peaceTime.toolTipText = "dialog_startPeaceMode_title";
    this.dialogDisp.btn_editName.toolTipText = "dialog_renameCastle_title";
    this.dialogDisp.btn_extend.toolTipText = "dialog_management_extendTime";
    this.dialogDisp.btn_show_me_up.toolTipText = "panel_action_jumpTo";
    this.dialogDisp.mc_holder0.mouseChildren = false;
    this.dialogDisp.btn_relocate.visible = false;
    this.dialogDisp.bg_peaceTime.visible = false;
    this.dialogDisp.bg_openGateTime.visible = false;
    this.itxt_castleName = this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_peaceStatus = this.textFieldManager.registerTextField(this.dialogDisp.txt_peaceStatus, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.itxt_peaceTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_peaceTime, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_deleteOutpost = this.textFieldManager.registerTextField(this.dialogDisp.txt_deleteOutpost, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_openGateTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_openGateTime, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_relocateStatus = this.textFieldManager.registerTextField(this.dialogDisp.txt_relocateStatus, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_login_bonus, this.dialogDisp.btn_peaceTime, this.dialogDisp.btn_openGate, this.dialogDisp.btn_extend, this.dialogDisp.btn_relocate, this.dialogDisp.btn_editName, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_deleteOutpost, this.dialogDisp.btn_ok, this.dialogDisp.btn_show_me_up]);
  };
  CastleManagementDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.btn_extend.visible = false;
    this.dialogDisp.btn_openGate.visible = true;
    this.setLoginBonusBtn();
    this.dialogDisp.btn_openGate.toolTipText = "dialog_startOpenGate_title";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_editName, CastleManagementDialog.isRenameButtonEnabled());
    this.dialogDisp.btn_editName.visible = !this.env.isCrossplay;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, CastleManagementDialog.isPeaceTimeButtonEnabled());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_relocate, CastleManagementDialog.isRelocateButtonEnabled());
    this.dialogDisp.btn_peaceTime.visible = !this.env.isOnSpecialServer;
    this.itxt_deleteOutpost.clearText();
    if (this.worldmapObjectVO.objectId == __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.worldmapObjectVO.kingdomID).objectId) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = "dialog_management_NoAbandonOutpost";
    } else if (this.worldmapObjectVO.remainingAbandonOutpostTime >= 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
    } else if (this.worldmapObjectVO.remainingCooldownAbandonOutpostTime >= 0) {
      __dep_exact_9e901e8e2483a22f_3.debug(" ----------------------------- disabling outpost abandon button");
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, true);
      this.dialogDisp.btn_deleteOutpost.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName);
    }
    this.itxt_castleName.textContentVO.stringValue = this.worldmapObjectVO.areaNameString;
    this.onPeaceModeUpdate();
    this.onOpenGateUpdate();
    this.setDeleteOutpostAndRelocateButton();
    this.fillUserCastle();
  };
  CastleManagementDialog.prototype.onUpdateTimer = function (__s13param0) {
    this.onPeaceModeUpdate();
    this.onOpenGateUpdate();
  };
  CastleManagementDialog.prototype.onPeaceModeUpdate = function (__s15param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, true);
    switch (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus) {
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PRETIME:
        this.itxt_peaceStatus.textContentVO.textId = "dialog_management_startIn";
        this.dialogDisp.btn_peaceTime.gotoAndStop(2);
        this.dialogDisp.btn_peaceTime.toolTipText = "dialog_management_peaceModeCancel";
        break;
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME:
        this.itxt_peaceStatus.clearText();
        this.dialogDisp.btn_peaceTime.gotoAndStop(2);
        this.dialogDisp.btn_peaceTime.toolTipText = "dialog_management_peaceModeCancel";
        break;
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_POSTTIME:
        this.itxt_peaceStatus.textContentVO.textId = "dialog_management_reStartableIn";
        this.dialogDisp.btn_peaceTime.gotoAndStop(2);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, false);
        this.dialogDisp.btn_peaceTime.toolTipText = {
          t: "dialog_management_reStartableIn_tt",
          p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime())]
        };
        break;
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF:
        this.itxt_peaceStatus.clearText();
        this.dialogDisp.btn_peaceTime.gotoAndStop(1);
        if (__dep_export_CastleModel.CastleModel.userData.noobProtected || __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT) {
          this.dialogDisp.btn_peaceTime.toolTipText = "dialog_management_openGateNotInNoobProtection";
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, false);
        } else {
          this.dialogDisp.btn_peaceTime.toolTipText = "dialog_startPeaceMode_title";
        }
    }
    if (__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime() > 0) {
      this.itxt_peaceTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
      this.dialogDisp.bg_peaceTime.visible = true;
    } else {
      this.itxt_peaceStatus.clearText();
      this.dialogDisp.bg_peaceTime.visible = false;
    }
  };
  CastleManagementDialog.prototype.setLoginBonusBtn = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userXP < __dep_export_CastleLoginBonusData.CastleLoginBonusData.REQUIRED_XP && !__dep_export_CastleModel.CastleModel.loginBonusData.isActive) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_login_bonus, false);
      this.dialogDisp.btn_login_bonus.toolTipText = "panel_shop_needQuestProgress";
      return;
    }
    this.dialogDisp.btn_login_bonus.toolTipText = "dialog_loginBonus_title";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_login_bonus, true);
  };
  CastleManagementDialog.prototype.setOpenGateButton = function () {
    this.dialogDisp.bg_openGateTime.visible = false;
    if (this.worldmapObjectVO.remainingOpenGateTime > 0) {
      this.dialogDisp.btn_openGate.gotoAndStop(2);
      this.dialogDisp.btn_extend.visible = true;
      this.itxt_openGateTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingOpenGateTime, __dep_exact_92d05af59ee2ff30_1.Localize.text);
      this.dialogDisp.bg_openGateTime.visible = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, true);
      this.dialogDisp.btn_openGate.toolTipText = "dialog_management_openGateCancel";
    } else if (this.worldmapObjectVO.remainingAbandonOutpostTime > 0) {
      this.dialogDisp.btn_openGate.gotoAndStop(2);
      this.dialogDisp.btn_extend.visible = false;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      this.dialogDisp.btn_openGate.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
      this.itxt_openGateTime.clearText();
    } else if (this.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL) {
      this.dialogDisp.btn_openGate.gotoAndStop(1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      this.dialogDisp.btn_extend.visible = false;
      this.dialogDisp.btn_openGate.toolTipText = "not_possible_in_capital";
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      this.dialogDisp.btn_openGate.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("not_possible_in_metropolis");
    } else {
      this.dialogDisp.btn_openGate.gotoAndStop(1);
      this.dialogDisp.btn_extend.visible = false;
      if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT) {
        this.dialogDisp.btn_openGate.toolTipText = {
          t: "expansion_higherLevelNeeded",
          p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT]
        };
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      } else if (__dep_export_CastleModel.CastleModel.userData.noobProtected) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
        this.dialogDisp.btn_openGate.toolTipText = "dialog_management_openGateNotInNoobProtection";
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, true);
        this.dialogDisp.btn_openGate.toolTipText = "dialog_startOpenGate_title";
      }
      this.itxt_openGateTime.clearText();
    }
  };
  CastleManagementDialog.prototype.onOpenGateUpdate = function (__s35param0 = null) {
    if (this.worldmapObjectVO !== __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID)) {
      this.dialogProperties.worldmapVO = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID);
    }
    if (this.dialogProperties.worldmapVO) {
      this.setOpenGateButton();
      this.setDeleteOutpostAndRelocateButton();
    } else {
      this.hide();
    }
  };
  CastleManagementDialog.prototype.setDeleteOutpostAndRelocateButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_relocate, CastleManagementDialog.isRelocateButtonEnabled());
    if (__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.worldmapObjectVO.kingdomID).objectId == this.dialogProperties.worldmapVO.objectId) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = "dialog_management_NoAbandonOutpost";
      this.itxt_deleteOutpost.clearText();
      this.dialogDisp.bg_deleteOutpost.visible = false;
      this.dialogDisp.btn_deleteOutpost.visible = false;
      this.dialogDisp.btn_relocate.toolTipText = "panel_relocate_title";
      this.dialogDisp.btn_relocate.visible = this.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID;
      this.itxt_relocateStatus.visible = this.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID;
      this.itxt_deleteOutpost.visible = this.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID;
      if (__dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration > 0) {
        this.itxt_relocateStatus.textContentVO.textId = "dialog_management_inprogress";
        this.dialogDisp.bg_deleteOutpost.visible = this.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID;
        this.itxt_deleteOutpost.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getHoureMinuteSecondTimeString(__dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration);
      } else if (__dep_export_CastleModel.CastleModel.userData.remainingRelocationCooldown > 0) {
        this.itxt_relocateStatus.textContentVO.textId = "dialog_management_reStartableIn";
        this.dialogDisp.bg_deleteOutpost.visible = this.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID;
        this.itxt_deleteOutpost.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getHoureMinuteSecondTimeString(__dep_export_CastleModel.CastleModel.userData.remainingRelocationCooldown);
      } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff_5.RelocationConst.MIN_RELOCATION_LEVEL) {
        this.dialogDisp.btn_relocate.toolTipText = {
          t: "expansion_higherLevelNeeded",
          p: [__dep_exact_26a421b704832cff_5.RelocationConst.MIN_RELOCATION_LEVEL]
        };
        this.itxt_relocateStatus.clearText();
        this.itxt_deleteOutpost.clearText();
      } else {
        this.itxt_relocateStatus.clearText();
        this.itxt_deleteOutpost.clearText();
      }
    } else if (this.worldmapObjectVO.remainingCancelAbandonOutpostTime > 0) {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(2);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, true);
      this.dialogDisp.btn_deleteOutpost.toolTipText = {
        t: __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_keep" + this.worldmapObjectTextIDName),
        p: [__dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeStringBySeconds(this.worldmapObjectVO.remainingCancelAbandonOutpostTime, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT)]
      };
      this.dialogDisp.bg_deleteOutpost.visible = true;
      this.itxt_deleteOutpost.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingAbandonOutpostTime, __dep_exact_92d05af59ee2ff30_1.Localize.text);
      this.dialogDisp.btn_deleteOutpost.visible = true;
      this.dialogDisp.btn_relocate.visible = false;
    } else if (this.worldmapObjectVO.remainingAbandonOutpostTime > 0) {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
      this.dialogDisp.bg_deleteOutpost.visible = true;
      this.itxt_deleteOutpost.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingAbandonOutpostTime, __dep_exact_92d05af59ee2ff30_1.Localize.text);
      this.dialogDisp.btn_deleteOutpost.visible = true;
      this.dialogDisp.btn_relocate.visible = false;
    } else if (this.worldmapObjectVO.remainingCooldownAbandonOutpostTime > 0) {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(1);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = this.getAbandonCooldownText() + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.worldmapObjectVO.remainingCooldownAbandonOutpostTime);
      this.dialogDisp.bg_deleteOutpost.visible = true;
      this.itxt_deleteOutpost.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingCooldownAbandonOutpostTime, __dep_exact_92d05af59ee2ff30_1.Localize.text);
      this.dialogDisp.btn_deleteOutpost.visible = true;
      this.dialogDisp.btn_relocate.visible = false;
    } else {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(1);
      this.dialogDisp.bg_deleteOutpost.visible = false;
      this.dialogDisp.btn_deleteOutpost.visible = !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO") || !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, true);
      this.dialogDisp.btn_deleteOutpost.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName);
      this.itxt_deleteOutpost.clearText();
      this.dialogDisp.btn_relocate.visible = false;
      this.itxt_relocateStatus.visible = false;
    }
  };
  CastleManagementDialog.prototype.getAbandonCooldownText = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO")) {
      return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("errorCode_310");
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO")) {
      return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("errorCode_307");
    } else {
      return "errorCode_140";
    }
  };
  CastleManagementDialog.isRenameButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
  };
  CastleManagementDialog.isRelocateButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration <= 0 && __dep_export_CastleModel.CastleModel.userData.remainingRelocationCooldown <= 0 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff_5.RelocationConst.MIN_RELOCATION_LEVEL;
  };
  CastleManagementDialog.isPeaceTimeButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeArea && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isCapital && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isMetropol && !__dep_export_CastleModel.CastleModel.userData.noobProtected && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
  };
  CastleManagementDialog.prototype.onChangeCastleList = function (__s62param0) {
    this.dialogProperties.worldmapVO = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this.dialogProperties.worldmapVO.objectId, this.dialogProperties.worldmapVO.kingdomID);
    if (this.worldmapObjectVO) {
      this.itxt_castleName.textContentVO.stringValue = this.worldmapObjectVO.areaNameString;
    } else {
      this.hide();
    }
  };
  CastleManagementDialog.prototype.fillUserCastle = function () {
    __dep_exact_9e901e8e2483a22f_5.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder0);
    var __s66local0 = this.worldmapObjectVO;
    var __s66local1 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s66local0, null, true, true, false);
    __s66local1.scaleX = __s66local1.scaleY /= 1.5;
    if (__s66local0.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL) {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.5;
    } else if (__s66local0.kingdomID == __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID) {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.7;
    } else if (__dep_export_CastleModel.CastleModel.titleData.hasIslandTitleSelected() && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s66local0, "CastleMapobjectVO")) {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.7;
    } else {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.85;
    }
    this.dialogDisp.mc_holder0.addChild(__s66local1);
  };
  CastleManagementDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.RELOCATE_INFO_UPDATED, this.bindFunction(this.onRelocateInfoUpdated));
  };
  CastleManagementDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.RELOCATE_INFO_UPDATED, this.bindFunction(this.onRelocateInfoUpdated));
  };
  CastleManagementDialog.prototype.onClick = function (__s76param0) {
    __s1param0.prototype.onClick.call(this, __s76param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s76param0.target)) {
      switch (__s76param0.target) {
        case this.dialogDisp.btn_peaceTime:
          if (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartPeaceModeDialog.CastleStartPeaceModeDialog, new __dep_export_CastleStartPeaceModeDialogProperties.CastleStartPeaceModeDialogProperties());
          } else if (__dep_export_CastleModel.CastleModel.userData.isInPeaceMode) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_management_peaceModeCancel"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_management_peaceModeCancelDescription"), this.bindFunction(this.cancelPeaceMode)));
          }
          break;
        case this.dialogDisp.btn_login_bonus:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDailyLoginBonusDialog.CastleDailyLoginBonusDialog);
          this.hide();
          break;
        case this.dialogDisp.btn_openGate:
          if (this.worldmapObjectVO.remainingOpenGateTime <= 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartOpenGateDialog.CastleStartOpenGateDialog, new __dep_export_CastleStartOpenGateDialogProperties.CastleStartOpenGateDialogProperties(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID, false));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_management_openGateCancel"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_management_openGateCancelDescription"), this.bindFunction(this.cancelOpenGateMode)));
          }
          break;
        case this.dialogDisp.btn_editName:
          if (__s76param0.target.enabled) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRenameCastleDialog.CastleRenameCastleDialog, new __dep_export_CastleRenameCastleDialogProperties.CastleRenameCastleDialogProperties(this.worldmapObjectVO.areaNameString, this.worldmapObjectVO));
          }
          break;
        case this.dialogDisp.btn_extend:
          if (this.worldmapObjectVO.remainingOpenGateTime > 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartOpenGateDialog.CastleStartOpenGateDialog, new __dep_export_CastleStartOpenGateDialogProperties.CastleStartOpenGateDialogProperties(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID, false));
          }
          break;
        case this.dialogDisp.btn_deleteOutpost:
          this.onDeleteOutpostClick();
          break;
        case this.dialogDisp.btn_relocate:
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_RELOCATEWORLDMAP_COMMAND);
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_show_me_up:
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, this.worldmapObjectVO.absAreaPosX, this.worldmapObjectVO.absAreaPosY]);
      }
    }
  };
  CastleManagementDialog.prototype.onRelocateInfoUpdated = function (__s86param0) {
    this.setDeleteOutpostAndRelocateButton();
  };
  CastleManagementDialog.prototype.onDeleteOutpostClick = function () {
    var __s88local0 = __dep_exact_f855840627e6e145.int(this.worldmapObjectVO.remainingCancelAbandonOutpostTime);
    if (__s88local0 > 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTimedYesNoDialog.CastleTimedYesNoDialog, new __dep_export_CastleTimedYesNoDialogProperties.CastleTimedYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_keep" + this.worldmapObjectTextIDName + "_title")), __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_keep" + this.worldmapObjectTextIDName + "_copy")), "countdown_restTime", __s88local0, false, this.bindFunction(this.onCancelAbandoning)));
    } else {
      var __s88local1 = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff.OutpostConst.ABANDON_TIME, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text);
      var __s88local2 = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff.OutpostConst.ABANDON_CANCEL_TIME, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog, new __dep_export_CastleLargeYesNoDialogProperties.CastleLargeYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_abandon" + this.worldmapObjectTextIDName + "_title")), __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_abandon" + this.worldmapObjectTextIDName + "_copy"), [__s88local1, __s88local2]), this.bindFunction(this.onAbandonOutpost)));
    }
  };
  CastleManagementDialog.prototype.onCancelAbandoning = function (__s92param0 = null) {
    if (this.worldmapObjectVO) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAbandonOutpostCancelVO.C2SAbandonOutpostCancelVO(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID));
    }
  };
  CastleManagementDialog.prototype.onAbandonOutpost = function (__s95param0 = null) {
    if (this.worldmapObjectVO) {
      if (this.worldmapObjectVO.remainingCooldownAbandonOutpostTime > 0) {
        var __s95local0 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO") ? __dep_exact_26a421b704832cff_1.ERROR.CAPITAL_NOT_OWNED_LONG_ENOUGH : __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO") ? __dep_exact_26a421b704832cff_1.ERROR.METROPOL_NOT_OWNED_LONG_ENOUGH : __dep_exact_26a421b704832cff_1.ERROR.NOT_OWNED_LONG_ENOUGH);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30_1.Localize.text("errorCode_" + __s95local0, [__dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(this.worldmapObjectVO.remainingCooldownAbandonOutpostTime, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text)])));
      } else {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAbandonOutpostStartVO.C2SAbandonOutpostStartVO(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID));
      }
    }
  };
  CastleManagementDialog.prototype.cancelPeaceMode = function (__s100param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPeaceModeStartVO.C2SPeaceModeStartVO(-1));
  };
  CastleManagementDialog.prototype.cancelOpenGateMode = function (__s102param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOpenGateStartVO.C2SOpenGateStartVO(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID, -1));
  };
  Object.defineProperty(CastleManagementDialog.prototype, "worldmapObjectTextIDName", {
    get: function () {
      var __s104local0 = this.worldmapObjectVO.name;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO")) {
        __s104local0 += "is";
      }
      return __s104local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleManagementDialog.prototype, "worldmapObjectVO", {
    get: function () {
      return this.dialogProperties.worldmapVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleManagementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleManagementDialog.NAME = "CastleManagementRework";
  return CastleManagementDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleManagementDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_CastleLoginBonusData = require("gge-module:export_CastleLoginBonusData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleLargeYesNoDialog = require("gge-module:export_CastleLargeYesNoDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleTimedYesNoDialog = require("gge-module:export_CastleTimedYesNoDialog");
var __dep_export_CastleDailyLoginBonusDialog = require("gge-module:export_CastleDailyLoginBonusDialog");
var __dep_export_CastleRenameCastleDialog = require("gge-module:export_CastleRenameCastleDialog");
var __dep_export_CastleStartOpenGateDialog = require("gge-module:export_CastleStartOpenGateDialog");
var __dep_export_CastleStartPeaceModeDialog = require("gge-module:export_CastleStartPeaceModeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
