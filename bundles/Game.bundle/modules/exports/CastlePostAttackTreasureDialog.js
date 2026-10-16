Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePostAttackTreasureDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePostAttackTreasureDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostAttackTreasureDialog, __s1param0);
  CastlePostAttackTreasureDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_postAttack_title")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_name, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_postAttack_instantTravel"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivel, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_postAttack_arrival"));
    this.dialogDisp.mc_travelcost.toolTipText = "costs";
    this.dialogDisp.mc_traveltime.toolTipText = "travelTime";
    this.dialogDisp.mc_wait.icon.toolTipText = "dialog_postAttack_supportTime";
    this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    this.dialogDisp.mc_siegeTime.toolTipText = "dialog_postAttack_siegeTime";
    this.i_travelcost_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_travelcost.txt_value, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_txt_cost0 = this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_cost0.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.i_siegetime_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_siegeTime.txt_value, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_date = this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_traveltime_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_traveltime.txt_value, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.i_honor_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new __dep_exact_92d05af59ee2ff30_4.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_back, this.dialogDisp.btn_travelboost]);
  };
  CastlePostAttackTreasureDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    if (this.dialogDisp.mc_charPlaceHolder) {
      __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, this.dialogDisp.mc_charPlaceHolder, 144, 186);
    }
    this.setArivalDateAndTime(this.fightScreenInfoVO.getTravelTime(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.selectedLord));
    this.i_travelcost_txt_value.textContentVO.stringValue = String(this.fightScreenInfoVO.getTravelCost(this.dialogProperties.selectedLord));
    this.i_txt_cost0.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_2.TravelConst.getTravelBoostCostC2(this.fightScreenInfoVO.distance));
    this.i_siegetime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff_1.OutpostConst.SIEGE_TIME, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_1.Localize.text);
    this.dialogDisp.mc_toolTip.visible = false;
    this.dialogDisp.mc_toolTip.txt_cost0.mc_icon.gotoAndStop(5);
    this.dialogDisp.mc_wait.visible = false;
    this.dialogDisp.mc_siegeTime.visible = this.fightScreenInfoVO.isConquerAttack && !this.fightScreenInfoVO.targetOwner.isOutpostOwner;
    this.dialogDisp.mc_estimatedHonor.visible = (this.fightScreenInfoVO.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK || this.fightScreenInfoVO.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK) && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleTreasureHuntFightscreenVO")) {
      this.dialogDisp.mc_estimatedHonor.visible = false;
    }
    if (this.dialogDisp.mc_estimatedHonor.visible) {
      var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getHonorChange(__dep_export_CastleModel.CastleModel.userData.userHonor, this.fightScreenInfoVO.targetOwner.honor, __dep_export_CastleModel.CastleModel.userData.userLevel, this.fightScreenInfoVO.targetOwnerLevel, true) * (1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS).strength / 100));
      this.i_honor_txt_value.textContentVO.stringValue = String(__s7local0);
      this.i_honor_txt_value.color = __s7local0 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      if (__s7local0 >= 0) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [this.dialogDisp.mc_estimatedHonor.txt_value.text]));
      }
    }
    this.dialogDisp.btn_travelboost.visible = true;
  };
  CastlePostAttackTreasureDialog.prototype.setArivalDateAndTime = function (__s13param0) {
    var __s13local0 = new Date();
    __s13local0.setTime(__s13local0.getTime() + __s13param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.itxt_date.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(__s13local0);
    this.itxt_time.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s13local0, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT);
    this.i_traveltime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(__s13param0);
  };
  CastlePostAttackTreasureDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_back:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.sendMovement(2, 0);
          this.callHideFunction();
          this.hide();
          break;
        case this.dialogDisp.btn_travelboost:
          if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_2.TravelConst.getTravelBoostCostC2(this.fightScreenInfoVO.distance))) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
          } else {
            this.sendMovement(1, 0);
            this.callHideFunction();
            this.hide();
          }
      }
    }
  };
  CastlePostAttackTreasureDialog.prototype.sendMovement = function (__s21param0, __s21param1) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleTreasureHuntFightscreenVO")) {
      this.sendTreasureHuntAttack(__s21param0, __s21param1);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO")) {
      this.sendAttack(__s21param0, __s21param1);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleSupportDefenceVO")) {
      this.sendSupport(__s21param0, __s21param1);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleTroopSupportVO")) {
      this.sendTroops(__s21param0, __s21param1);
    }
  };
  CastlePostAttackTreasureDialog.prototype.sendTreasureHuntAttack = function (__s27param0, __s27param1) {
    __dep_export_CastleModel.CastleModel.treasureMapData.sendTreasureHuntAttack(this.fightScreenInfoVO, __s27param0, __s27param1, this.dialogProperties.selectedLord, false);
  };
  CastlePostAttackTreasureDialog.prototype.sendAttack = function (__s29param0, __s29param1) {
    __dep_export_CastleModel.CastleModel.attackData.sendAttack(this.fightScreenInfoVO, __s29param0, __s29param1, false, 0, this.dialogProperties.selectedLord, false, 0);
  };
  CastlePostAttackTreasureDialog.prototype.sendSupport = function (__s31param0, __s31param1) {
    __dep_export_CastleModel.CastleModel.attackData.sendSupport(this.fightScreenInfoVO, __s31param0, __s31param1, this.dialogProperties.selectedLord, false, 0);
  };
  CastlePostAttackTreasureDialog.prototype.sendTroops = function (__s33param0, __s33param1) {
    __dep_export_CastleTroopSupportData.CastleTroopSupportData.sendTroops(this.fightScreenInfoVO, __s33param0, __s33param1, this.dialogProperties.selectedLord, this.fightScreenInfoVO.targetArea.kingdomID, false, 0);
  };
  CastlePostAttackTreasureDialog.prototype.callHideFunction = function () {
    if (this.dialogProperties.hideFunction != null) {
      this.dialogProperties.hideFunction();
    }
  };
  CastlePostAttackTreasureDialog.prototype.onMouseOut = function (__s38param0) {
    __s1param0.prototype.onMouseOut.call(this, __s38param0);
    this.dialogDisp.mc_toolTip.visible = false;
    this.setArivalDateAndTime(this.fightScreenInfoVO.getTravelTime(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.selectedLord));
    this.i_traveltime_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastlePostAttackTreasureDialog.prototype.onMouseOver = function (__s40param0) {
    __s1param0.prototype.onMouseOver.call(this, __s40param0);
    if (__s40param0.target == this.dialogDisp.btn_travelboost) {
      this.dialogDisp.setChildIndex(this.dialogDisp.mc_toolTip, this.dialogDisp.numChildren - 1);
      this.dialogDisp.mc_toolTip.visible = true;
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_toolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      this.i_traveltime_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_DARK_GREEN;
      this.setArivalDateAndTime(this.fightScreenInfoVO.getBoostedTravelTime(this.dialogProperties.attackInfoVO.targetArea, 0, this.dialogProperties.selectedLord));
    }
  };
  Object.defineProperty(CastlePostAttackTreasureDialog.prototype, "fightScreenInfoVO", {
    get: function () {
      return this.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackTreasureDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackTreasureDialog.__initialize_static_members = function () {
    CastlePostAttackTreasureDialog.NAME = "CastlePostAttackTreasure";
  };
  return CastlePostAttackTreasureDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePostAttackTreasureDialog = __s0local0;
var __dep_export_CastleTroopSupportData = require("gge-module:export_CastleTroopSupportData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
