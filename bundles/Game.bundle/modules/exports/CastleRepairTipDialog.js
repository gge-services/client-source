Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_C2SIsoRepairAllVO = require("gge-module:export_C2SIsoRepairAllVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleStartOpenGateDialogProperties = require("gge-module:export_CastleStartOpenGateDialogProperties");
var __dep_export_CastleStartPeaceModeDialogProperties = require("gge-module:export_CastleStartPeaceModeDialogProperties");
var __dep_export_CastleBasicTipDialog = require("gge-module:export_CastleBasicTipDialog");
var __s0local0 = function (__s1param0) {
  function CastleRepairTipDialog() {
    return __s1param0.call(this, CastleRepairTipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRepairTipDialog, __s1param0);
  Object.defineProperty(CastleRepairTipDialog.prototype, "tipPicClassName", {
    get: function () {
      return "RepairTip";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleBasicTipDialog.CastleBasicTipDialog.prototype, "tipPicClassName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRepairTipDialog.prototype.initLoaded = function (__s9param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s9param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_repairAll, this.dialogDisp.btn_opengate, this.dialogDisp.btn_peace]);
    this.dialogDisp.btn_opengate.toolTipText = "dialog_startOpenGate_title";
    this.dialogDisp.btn_peace.toolTipText = "dialog_startPeaceMode_title";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_tip_title")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("tip_repair")).autoFitToBounds = true;
    this.itxt_repair = this.textFieldManager.registerTextField(this.dialogDisp.mc_premiumToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("repairAll"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_premiumToolTip.txt_cost0.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
  };
  CastleRepairTipDialog.prototype.applyPropertiesLoaded = function (__s11param0 = null) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      this.dialogDisp.btn_peace.visible = this.dialogDisp.btn_opengate.visible = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
      this.dialogDisp.mc_premiumToolTip.visible = false;
      this.dialogDisp.mc_premiumToolTip.txt_cost0.mc_icon.gotoAndStop(5);
      this.onUpdateCastleData();
      this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
      this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
      this.onPeaceModeUpdate();
      var __s11local0 = !__dep_export_CastleModel.CastleModel.areaData.activeArea.isCapital && !__dep_export_CastleModel.CastleModel.userData.noobProtected && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
      if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isCapital) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, false);
        this.dialogDisp.btn_opengate.toolTipText = "not_possible_in_capital";
      } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMetropol) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, false);
        this.dialogDisp.btn_opengate.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("not_possible_in_metropol");
      } else if (__s11local0) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, true);
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_opengate, false);
        this.dialogDisp.btn_opengate.toolTipText = "dialog_management_openGateNotInNoobProtection";
      }
      this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
        this.dialogDisp.mc_premiumToolTip.visible = true;
      }
    }
  };
  CastleRepairTipDialog.prototype.showLoaded = function (__s19param0 = null) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      __s1param0.prototype.showLoaded.call(this, __s19param0);
    } else {
      this.hide();
    }
  };
  CastleRepairTipDialog.prototype.hideLoaded = function (__s23param0 = null) {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    __s1param0.prototype.hideLoaded.call(this, __s23param0);
  };
  CastleRepairTipDialog.prototype.onUpdateCastleData = function (__s25param0 = null) {
    this.onUserCurrencyChange(null);
  };
  CastleRepairTipDialog.prototype.onUserCurrencyChange = function (__s27param0) {
    var __s27local0 = __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive ? __dep_exact_26a421b704832cff_2.ConstructionConst.PREMIUM_FACTOR_REPAIR_ALL : 0;
    var __s27local1 = 0;
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      __s27local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.areaData.activeArea.getTotalRepairCostC2(), false, __s27local0));
    }
    this.itxt_repair.textContentVO.textId = __s27local1 <= 0 ? "repairAll_lowDamage" : "repairAll";
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < __s27local1) {
      this.itxt_cost.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
      this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    } else {
      this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
      this.itxt_cost.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
    }
    this.itxt_cost.textContentVO.numberValue = __s27local1;
  };
  CastleRepairTipDialog.prototype.onPeaceModeUpdate = function (__s32param0 = null) {
    this.dialogDisp.btn_peace.visible = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_peace, __dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF && !__dep_export_CastleModel.CastleModel.userData.noobProtected && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT);
    switch (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus) {
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PRETIME:
        this.dialogDisp.btn_peace.toolTipText = {
          t: "dialog_management_startIn_tt",
          p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime())]
        };
        break;
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME:
        var __s32local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime() + __dep_exact_26a421b704832cff.PlayerConst.PEACE_MODE_COOLDOWN);
        this.dialogDisp.btn_peace.toolTipText = {
          t: "dialog_management_reStartableIn_tt",
          p: [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(__s32local0, __dep_exact_92d05af59ee2ff30_2.Localize.text)]
        };
        break;
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_POSTTIME:
        this.dialogDisp.btn_peace.toolTipText = {
          t: "dialog_management_reStartableIn_tt",
          p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime())]
        };
        break;
      case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF:
        if (__dep_export_CastleModel.CastleModel.userData.noobProtected || __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT) {
          this.dialogDisp.btn_peace.toolTipText = "dialog_management_openGateNotInNoobProtection";
        } else {
          this.dialogDisp.btn_peace.toolTipText = "dialog_startPeaceMode_title";
        }
    }
  };
  CastleRepairTipDialog.prototype.onTimerUpdate = function (__s37param0 = null) {
    this.onPeaceModeUpdate();
  };
  CastleRepairTipDialog.prototype.onClick = function (__s39param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s39param0.target)) {
      switch (__s39param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_repairAll:
          this.hide();
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoRepairAllVO.C2SIsoRepairAllVO());
          break;
        case this.dialogDisp.btn_opengate:
          this.hide();
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStartOpenGateDialog.CastleStartOpenGateDialog, new __dep_export_CastleStartOpenGateDialogProperties.CastleStartOpenGateDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID, false));
          break;
        case this.dialogDisp.btn_peace:
          if (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStartPeaceModeDialog.CastleStartPeaceModeDialog, new __dep_export_CastleStartPeaceModeDialogProperties.CastleStartPeaceModeDialogProperties());
            this.hide();
          }
      }
    }
  };
  CastleRepairTipDialog.prototype.onMouseOut = function (__s44param0) {
    __s1param0.prototype.onMouseOut.call(this, __s44param0);
    this.dialogDisp.mc_premiumToolTip.visible = false;
  };
  CastleRepairTipDialog.prototype.onMouseOver = function (__s46param0) {
    __s1param0.prototype.onMouseOver.call(this, __s46param0);
    if (__s46param0.target == this.dialogDisp.btn_repairAll) {
      this.dialogDisp.mc_premiumToolTip.visible = true;
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.mc_premiumToolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0_1.Linear.easeIn
      });
    }
  };
  CastleRepairTipDialog.NAME = "CastleRepairTipEx";
  return CastleRepairTipDialog;
}(__dep_export_CastleBasicTipDialog.CastleBasicTipDialog);
exports.CastleRepairTipDialog = __s0local0;
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStartOpenGateDialog = require("gge-module:export_CastleStartOpenGateDialog");
var __dep_export_CastleStartPeaceModeDialog = require("gge-module:export_CastleStartPeaceModeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
