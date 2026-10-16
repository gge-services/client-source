Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_ACastleSpyDialogState = require("gge-module:export_ACastleSpyDialogState");
var __s0local0 = function (__s1param0) {
  function CastleSpyDialogSabotageState(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyDialogSabotageState, __s1param0);
  CastleSpyDialogSabotageState.prototype.initElements = function () {
    __s1param0.prototype.initElements.call(this);
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
  };
  CastleSpyDialogSabotageState.prototype.updateElements = function () {
    __s1param0.prototype.updateElements.call(this);
    this.dialogDisp.sabotageDamage.visible = true;
    this.dialogDisp.sabotageTargets.visible = true;
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
    this.dialogDisp.btnTabSabotage.gotoAndStop(2);
    this.addCastleList();
    var __s7local0 = 0;
    var __s7local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PLAGUE), "PlagueEventVO");
    if (__s7local1) {
      for (var __s7local2 = 0; __s7local2 < __s7local1.eventPackages.length; __s7local2++) {
        if ((__s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(__s7local1.eventPackages[__s7local2].packageID))) > 0) {
          this.textFieldManager.registerTextField(this.dialogDisp.btnAddMonk.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [-__s7local0]));
          break;
        }
      }
    }
    this.dialogDisp.btnAddMonk.mc_discount.visible = __s7local0 != 0;
    this.amountPicker.setNumItems(this.startSpyVO.availableSpies);
    this.amountPicker.enabled = this.startSpyVO.availableSpies > 0;
    this.amountPicker.setSelectedValueWithoutLoop(this.startSpyVO.availableSpies - 1);
  };
  CastleSpyDialogSabotageState.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    this.tfTitle.textContentVO.textId = "dialog_spy_titleSabotage";
    this.dialogDisp.amountPicker.toolTipText = "spy_dialog_spyCount";
    this.dialogDisp.guardAmount.toolTipText = "spy_dialog_guardCount";
    this.dialogDisp.costs.toolTipText = "spy_dialog_sabotageCosts";
    this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageDamage";
    this.dialogDisp.sabotageTargets.toolTipText = "spy_dialog_sabotageTargetCount";
    this.dialogDisp.risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.travelTime.toolTipText = "spy_dialog_travelTime";
    this.slider.toolTips = [__dep_exact_92d05af59ee2ff30.Localize.text("spy_dialog_sabotageDamage")];
  };
  CastleSpyDialogSabotageState.prototype.updateSpyVO = function () {
    this.startSpyVO.distance = __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this.castleList.selectedData, this.dialogProperties.worldmapObjectVO);
    this.startSpyVO.spyType = __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE;
    this.updateSliderForDamage();
    this.tfTravelTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeStringBySeconds(this.startSpyVO.getTravelTime(this.startSpyVO.spyType, this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DUNGEON));
  };
  CastleSpyDialogSabotageState.prototype.addBgCharacter = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_char);
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 178, 155);
  };
  CastleSpyDialogSabotageState.prototype.spyCastle = function () {
    if (this.startSpyVO.availableSpies <= 0) {
      __dep_export_ACastleSpyDialogState.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_105")));
    } else {
      var __s19local0 = __dep_exact_f855840627e6e145.int(this.castleList.selectedData.objectId);
      this.startSpyVO.worldmapObjectVO = this.dialogProperties.worldmapObjectVO;
      this.startSpyVO.spyType = __dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE;
      this.startSpyVO.startCastleId = __s19local0;
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE, this.bindFunction(this.onHidePostDialog), this.startSpyVO, null]);
    }
  };
  CastleSpyDialogSabotageState.prototype.resetState = function () {
    __s1param0.prototype.resetState.call(this);
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
    this.dialogDisp.btnTabSabotage.gotoAndStop(1);
  };
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "costHolder", {
    get: function () {
      return this.dialogDisp.sabotageCostsHolder;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "costHolder").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "riskHolder", {
    get: function () {
      return this.dialogDisp.sabotageRiskHolder;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "riskHolder").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "scaleGreen", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 33) - __dep_exact_26a421b704832cff_1.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "scaleGreen").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSabotageState.prototype, "scaleYellow", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 66) - __dep_exact_26a421b704832cff_1.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "scaleYellow").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyDialogSabotageState;
}(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState);
exports.CastleSpyDialogSabotageState = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICastleSpyDialogState");
