Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_C2SCreatePlagueMonkMovementVO = require("gge-module:export_C2SCreatePlagueMonkMovementVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleSpyDataEvent = require("gge-module:export_CastleSpyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_ACastleSpyDialogState = require("gge-module:export_ACastleSpyDialogState");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSpyDialogPlagueState(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.dialogDisp.btnAddMonk);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyDialogPlagueState, __s1param0);
  CastleSpyDialogPlagueState.prototype.initElements = function () {
    __s1param0.prototype.initElements.call(this);
    this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageDamage";
    this.dialogDisp.sabotageTargets.toolTipText = "spy_dialog_sabotageTargetCount";
    this.dialogDisp.btnAddMonk.toolTipText = "dialog_plagueEvent_buyMonk";
    this.dialogDisp.plagueMonkCount.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_plaqueBg.visible = false;
    this.dialogDisp.btnAddMonk.visible = false;
    this.dialogDisp.plagueMonkCount.visible = false;
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
    this.dialogDisp.nameSource.visible = false;
    this.dialogDisp.btnTabPlague.gotoAndStop(1);
    this.dialogDisp.btnTabPlague.toolTipText = "dialog_spy_titlePlague";
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
  };
  CastleSpyDialogPlagueState.prototype.initTextFields = function () {
    __s1param0.prototype.initTextFields.call(this);
    this.tfPlagueMonkCount = this.textFieldManager.registerTextField(this.dialogDisp.plagueMonkCount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.tfSourceCastleName = this.textFieldManager.registerTextField(this.dialogDisp.nameSource.castleName_txt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.btnAddMonk.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE));
  };
  CastleSpyDialogPlagueState.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.spyData.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlaguemonkCountUpdate));
  };
  CastleSpyDialogPlagueState.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.spyData.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlaguemonkCountUpdate));
  };
  CastleSpyDialogPlagueState.prototype.updateElements = function () {
    __s1param0.prototype.updateElements.call(this);
    this.dialogDisp.mc_plaqueBg.visible = true;
    this.dialogDisp.sabotageDamage.visible = true;
    this.dialogDisp.sabotageTargets.visible = true;
    this.dialogDisp.btnTabPlague.gotoAndStop(2);
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(2);
    this.amountPicker.selectedValue = 0;
    this.amountPicker.enabled = this.startSpyVO.availablePlagueMonks > 0;
    this.updateAddMonkButton();
    this.drawSourceCastle();
  };
  CastleSpyDialogPlagueState.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    this.tfPlagueMonkCount.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks;
    this.tfTitle.textContentVO.textId = "dialog_spy_titlePlague";
    this.dialogDisp.amountPicker.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.guardAmount.toolTipText = "spy_dialog_guardCount";
    this.dialogDisp.costs.toolTipText = "spy_dialog_plagueMonkCosts";
    this.dialogDisp.risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.travelTime.toolTipText = "spy_dialog_travelTime";
    this.slider.toolTips = [__dep_exact_92d05af59ee2ff30.Localize.text("spy_dialog_sabotageDamage")];
  };
  CastleSpyDialogPlagueState.prototype.updateSpyVO = function () {
    this.amountPicker.setNumItems(Math.min(this.startSpyVO.availablePlagueMonks, __dep_exact_26a421b704832cff_1.SpyConst.MAX_DEPLOYABLE_PLAGUEMONKS));
    this.startSpyVO.distance = __dep_exact_26a421b704832cff_1.SpyConst.PLAGUEMONK_DISTANCE_TO_TARGET;
    this.updateSliderForDamage();
    this.tfTravelTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getShortTimeStringBySeconds(__dep_export_ClientConstCastle.ClientConstCastle.PLAGUEMONK_TRAVEL_TIME);
  };
  CastleSpyDialogPlagueState.prototype.addPlagueMonks = function () {
    var __s19local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PLAGUE);
    var __s19local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s19local1.specialEventVO = __s19local0;
    __s19local1.eventPackageVO = __s19local0.eventPackages[0];
    __dep_export_ACastleSpyDialogState.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(__dep_export_CastlePlagueUnitEventBuyDialog.CastlePlagueUnitEventBuyDialog, __s19local1);
  };
  CastleSpyDialogPlagueState.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    if (__s21param0.target == this.dialogDisp.btnAddMonk && this.dialogDisp.btnAddMonk.enabled) {
      this.addPlagueMonks();
    }
  };
  CastleSpyDialogPlagueState.prototype.resetState = function () {
    __s1param0.prototype.resetState.call(this);
    this.dialogDisp.mc_plaqueBg.visible = false;
    this.dialogDisp.btnAddMonk.visible = false;
    this.dialogDisp.plagueMonkCount.visible = false;
    this.dialogDisp.sabotageDamage.visible = false;
    this.dialogDisp.sabotageTargets.visible = false;
    this.dialogDisp.nameSource.visible = false;
    this.dialogDisp.btnTabPlague.gotoAndStop(1);
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
  };
  CastleSpyDialogPlagueState.prototype.onPlaguemonkCountUpdate = function (__s26param0) {
    this.startSpyVO.availablePlagueMonks = __dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks;
    this.amountPicker.setNumItems(Math.min(__dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks, __dep_exact_26a421b704832cff_1.SpyConst.MAX_DEPLOYABLE_PLAGUEMONKS));
    this.amountPicker.enabled = this.startSpyVO.availablePlagueMonks > 0;
    this.updateAddMonkButton();
  };
  CastleSpyDialogPlagueState.prototype.updateAddMonkButton = function () {
    this.dialogDisp.btnAddMonk.visible = __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PLAGUE);
    this.dialogDisp.plagueMonkCount.visible = !this.dialogDisp.btnAddMonk.visible;
    if (__dep_export_CastleModel.CastleModel.spyData.totalPlagueMonks < __dep_exact_26a421b704832cff_1.SpyConst.MAX_OWNABLE_PLAGUEMONKS) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnAddMonk, true);
      this.dialogDisp.btnAddMonk.toolTipText = "dialog_plagueEvent_buyMonk";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnAddMonk, false);
      this.dialogDisp.btnAddMonk.toolTipText = "dialog_plagueEvent_maxPlaguemonkCount";
    }
    var __s28local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PLAGUE), "PlagueEventVO");
    var __s28local1 = 0;
    if (__s28local0) {
      for (var __s28local2 = 0; __s28local2 < __s28local0.eventPackages.length; __s28local2++) {
        if ((__s28local1 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(__s28local0.eventPackages[__s28local2].packageID))) > 0) {
          this.itxt_discount.textContentVO.textReplacements = [-__s28local1];
          break;
        }
      }
      this.dialogDisp.btnAddMonk.mc_discount.visible = __s28local1 != 0;
    }
  };
  CastleSpyDialogPlagueState.prototype.onRemoveEvent = function (__s36param0) {
    if (__s36param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PLAGUE) {
      this.dialogDisp.btnAddMonk.visible = false;
      this.dialogDisp.plagueMonkCount.visible = true;
    }
  };
  CastleSpyDialogPlagueState.prototype.drawSourceCastle = function (__s39param0 = null) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.sourceCastleContainer);
    var __s39local0 = new __dep_export_PlagueareaMapobjectVO.PlagueareaMapobjectVO();
    __s39local0.kingdomID = __dep_exact_f855840627e6e145.int(this.dialogProperties.worldmapObjectVO.kingdomID);
    this.dialogDisp.nameSource.visible = true;
    this.dialogDisp.nameSource.mc_dove.visible = this.dialogDisp.nameSource.mc_rank.visible = this.dialogDisp.nameSource.mc_searchAlliance.visible = false;
    this.tfSourceCastleName.textContentVO.textId = "PlaguemonkCamp";
    this.dialogDisp.sourceCastleContainer.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s39local0, new __s0local0(85, 60), true, false, false));
  };
  CastleSpyDialogPlagueState.prototype.addBgCharacter = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_char);
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_PLAGUE_MONK, this.dialogDisp.mc_char, 178, 155);
  };
  CastleSpyDialogPlagueState.prototype.spyCastle = function () {
    if (this.startSpyVO.availablePlagueMonks <= 0) {
      __dep_export_ACastleSpyDialogState.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_noPlagueMonks")));
    } else {
      var __s43local0 = this.dialogProperties.worldmapObjectVO;
      this.startSpyVO.worldmapObjectVO = __s43local0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreatePlagueMonkMovementVO.C2SCreatePlagueMonkMovementVO(__s43local0.absAreaPosX, __s43local0.absAreaPosY, __s43local0.kingdomID, this.startSpyVO.spiesInUse, this.startSpyVO.damage));
      this.onHidePostDialog();
    }
  };
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "costHolder", {
    get: function () {
      return this.dialogDisp.sabotageCostsHolder;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "costHolder").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "riskHolder", {
    get: function () {
      return this.dialogDisp.sabotageRiskHolder;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "riskHolder").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "scaleGreen", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 33) - __dep_exact_26a421b704832cff_1.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "scaleGreen").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogPlagueState.prototype, "scaleYellow", {
    get: function () {
      return Math.max(0, this.getDamageByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 66) - __dep_exact_26a421b704832cff_1.SpyConst.MIN_DAMAGE) / 40;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "scaleYellow").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyDialogPlagueState;
}(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState);
exports.CastleSpyDialogPlagueState = __s0local1;
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_PlagueareaMapobjectVO = require("gge-module:export_PlagueareaMapobjectVO");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastlePlagueUnitEventBuyDialog = require("gge-module:export_CastlePlagueUnitEventBuyDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICastleSpyDialogState");
