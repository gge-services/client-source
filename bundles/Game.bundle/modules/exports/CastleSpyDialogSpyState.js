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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_ComboboxItemRendererLong = require("gge-module:export_ComboboxItemRendererLong");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_ACastleSpyDialogState = require("gge-module:export_ACastleSpyDialogState");
var __s0local0 = function (__s1param0) {
  function CastleSpyDialogSpyState(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyDialogSpyState, __s1param0);
  CastleSpyDialogSpyState.prototype.initElements = function () {
    __s1param0.prototype.initElements.call(this);
    this._spyTypeList = new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.spyCombobox, "", 1, 40, 45, -1, 0, new __dep_export_ComboboxItemRendererLong.ComboboxItemRendererLong());
    this._spyTypeList.disp.visible = false;
    this.dialogDisp.spyAccuracy.visible = false;
    this.dialogDisp.btnTabSpy.gotoAndStop(1);
  };
  CastleSpyDialogSpyState.prototype.initTextFields = function () {
    __s1param0.prototype.initTextFields.call(this);
    this.tfSpyAccuracy = this.textFieldManager.registerTextField(this.dialogDisp.spyAccuracy.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE));
  };
  CastleSpyDialogSpyState.prototype.updateElements = function () {
    __s1param0.prototype.updateElements.call(this);
    this.dialogDisp.spyAccuracy.visible = true;
    this.dialogDisp.amountPicker.mc_icon.gotoAndStop(1);
    this.dialogDisp.btnTabSpy.gotoAndStop(2);
    this.fillSpyTypeList();
    this.addCastleList();
    this.amountPicker.setNumItems(this.startSpyVO.availableSpies);
    this.amountPicker.enabled = this.startSpyVO.availableSpies > 0;
    this.amountPicker.setSelectedValueWithoutLoop(this.startSpyVO.availableSpies - 1);
  };
  CastleSpyDialogSpyState.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    this.tfTitle.textContentVO.textId = "dialog_spy_title";
    this.dialogDisp.amountPicker.toolTipText = "spy_dialog_spyCount";
    this.dialogDisp.guardAmount.toolTipText = "spy_dialog_guardCount";
    this.dialogDisp.costs.toolTipText = "spy_dialog_spyCosts";
    this.dialogDisp.spyAccuracy.toolTipText = "spy_dialog_spyAccuracy";
    this.dialogDisp.risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.travelTime.toolTipText = "spy_dialog_travelTime";
    this.slider.toolTips = [__dep_exact_92d05af59ee2ff30.Localize.text("spy_dialog_spyAccuracy")];
  };
  CastleSpyDialogSpyState.prototype.updateSpyVO = function () {
    this.startSpyVO.distance = __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this.castleList.selectedData, this.dialogProperties.worldmapObjectVO);
    this.startSpyVO.spyType = __dep_exact_f855840627e6e145.int(this._spyTypeList.selectedData);
    var __s13local0 = (0.5 + this.slider.getPercentValues()[0] / 2) * 100;
    var __s13local1 = __dep_exact_f855840627e6e145.int(this.amountPicker.selectedValue + 1);
    this.startSpyVO.setSpyValues(__s13local0, __s13local1);
    this.tfTravelTime.textContentVO.stringValue = String(__dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeStringBySeconds(this.startSpyVO.getTravelTime(this.startSpyVO.spyType, this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_DUNGEON)));
    this.tfSpyAccuracy.textContentVO.textReplacements = [String(Math.round(this.startSpyVO.accuracy))];
  };
  CastleSpyDialogSpyState.prototype.fillSpyTypeList = function () {
    var __s15local0;
    this._spyTypeList.disp.visible = true;
    this._spyTypeList.enabled = true;
    this._spyTypeList.clearItems();
    (__s15local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_military");
    __s15local0.data = 0;
    this._spyTypeList.addItem(__s15local0);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "CastleMapobjectVO")) {
      (__s15local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_economy");
      __s15local0.data = 1;
      this._spyTypeList.addItem(__s15local0);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "OutpostMapobjectVO") && this.dialogProperties.worldmapObjectVO.ownerInfo) {
      if (!this.dialogProperties.worldmapObjectVO.isOwnMapobject && !this.dialogProperties.worldmapObjectVO.ownerInfo.isOutpostOwner && !this.dialogProperties.worldmapObjectVO.isConqueredByMe) {
        (__s15local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_spy_economy");
        __s15local0.data = 1;
        this._spyTypeList.addItem(__s15local0);
      }
    }
    this.dialogDisp.spyCombobox.mouseEnabled = this.dialogDisp.spyCombobox.mouseChildren = this._spyTypeList.itemData.length > 1;
    this._spyTypeList.selectItemIndex(0);
    this._spyTypeList.disp.btn_arrow.visible = this._spyTypeList.itemData && this._spyTypeList.itemData.length > 1;
  };
  CastleSpyDialogSpyState.prototype.selectSpyType = function (__s20param0) {
    this._spyTypeList.selectItemIndex(__s20param0);
  };
  CastleSpyDialogSpyState.prototype.addBgCharacter = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_char);
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 178, 155);
  };
  CastleSpyDialogSpyState.prototype.spyCastle = function () {
    if (this.startSpyVO.availableSpies <= 0) {
      __dep_export_ACastleSpyDialogState.ACastleSpyDialogState.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_105")));
    } else {
      var __s24local0 = __dep_exact_f855840627e6e145.int(this.castleList.selectedData.objectId);
      this.startSpyVO.worldmapObjectVO = this.dialogProperties.worldmapObjectVO;
      this.startSpyVO.spyType = __dep_exact_f855840627e6e145.int(this._spyTypeList.selectedData);
      this.startSpyVO.startCastleId = __s24local0;
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.SPYTYPE_SABOTAGE, this.bindFunction(this.onHidePostDialog), this.startSpyVO, null]);
    }
  };
  CastleSpyDialogSpyState.prototype.resetState = function () {
    __s1param0.prototype.resetState.call(this);
    this.dialogDisp.spyAccuracy.visible = false;
    this._spyTypeList.disp.visible = false;
    this.dialogDisp.btnTabSpy.gotoAndStop(1);
  };
  CastleSpyDialogSpyState.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._spyTypeList.clearItems();
    this._spyTypeList.dispose();
  };
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "costHolder", {
    get: function () {
      return this.dialogDisp.spyCostsHolder;
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "costHolder").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "riskHolder", {
    get: function () {
      return this.dialogDisp.spyRiskHolder;
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "riskHolder").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "scaleGreen", {
    get: function () {
      return Math.max(0, this.getAccuracyByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 33) - __dep_exact_26a421b704832cff.SpyConst.MIN_ACCURACY) / 50;
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "scaleGreen").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyDialogSpyState.prototype, "scaleYellow", {
    get: function () {
      return Math.max(0, this.getAccuracyByRisk(this.startSpyVO.spiesInUse, this.startSpyVO.guardCount, 66) - __dep_exact_26a421b704832cff.SpyConst.MIN_ACCURACY) / 50;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState.prototype, "scaleYellow").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyDialogSpyState;
}(__dep_export_ACastleSpyDialogState.ACastleSpyDialogState);
exports.CastleSpyDialogSpyState = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleSpyDialogState");
