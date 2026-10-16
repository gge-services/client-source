Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetAllianceInfoVO = require("gge-module:export_C2SGetAllianceInfoVO");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInfoDialog() {
    var __s3local0 = this;
    __s3local0._allianceID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialog, __s1param0);
  CastleAllianceInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    if (!this._subLayer) {
      this._subLayer = new Map();
      this._subLayer.set(CastleAllianceInfoDialog.CAT_OVERVIEW, new __dep_export_CastleAllianceInfoDialogOverview.CastleAllianceInfoDialogOverview(this.dialogDisp.cat_overview));
      this._subLayer.set(CastleAllianceInfoDialog.CAT_MEMBERLIST, new __dep_export_CastleAllianceInfoDialogMemberlist.CastleAllianceInfoDialogMemberlist(this.dialogDisp.cat_memberlist));
      this._subLayer.set(CastleAllianceInfoDialog.CAT_DIPLOMACY, new __dep_export_CastleAllianceInfoDialogDiplomacy.CastleAllianceInfoDialogDiplomacy(this.dialogDisp.cat_diplomacy, this.bindFunction(this.onDiplomacyRequestSend)));
      this._subLayer.set(CastleAllianceInfoDialog.CAT_ABG_TOWER, new __dep_export_CastleAllianceInfoDialogABGTower.CastleAllianceInfoDialogABGTower(this.dialogDisp.cat_abgTowers));
    }
    if (!this.itxt_title) {
      this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      this.itxt_title.selectable = true;
    }
    this.dialogDisp.btn_overview.toolTipText = "dialog_alliance_overview";
    this.dialogDisp.btn_memberlist.toolTipText = "dialog_alliance_memberlist";
    this.dialogDisp.btn_diplomacy.toolTipText = "dialog_alliance_diplomacy";
    this.dialogDisp.btn_agbTower.toolTipText = "dialog_alliance_AllianceTower_towerDetails";
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_overview, this.dialogDisp.btn_memberlist, this.dialogDisp.btn_diplomacy, this.dialogDisp.btn_agbTower]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleAllianceInfoDialog.prototype.showLoaded = function (__s9param0 = null) {
    this._allianceID = __dep_exact_f855840627e6e145.int(this.dialogProperties.allianceID);
    this._currentCategory = CastleAllianceInfoDialog.CAT_NONE;
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceInfoVO.C2SGetAllianceInfoVO(this._allianceID));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_diplomacy, __dep_export_CastleModel.CastleModel.userData.isInAlliance && !__dep_export_ABGHelper.ABGHelper.isOnABGServer);
    this.lockDialog();
    this.dialogDisp.btn_agbTower.visible = __dep_export_ABGHelper.ABGHelper.isOnABGAndTower;
    __s1param0.prototype.showLoaded.call(this, __s9param0);
  };
  CastleAllianceInfoDialog.prototype.onAllianceDataUpdated = function (__s11param0) {
    if (__s11param0.allianceInfoVO && this._allianceID == __s11param0.allianceInfoVO.allianceId) {
      this._allianceInfoVO = __s11param0.allianceInfoVO;
      if (this._currentCategory != CastleAllianceInfoDialog.CAT_NONE || this.dialogProperties.startCat) {
        if (this._currentCategory == CastleAllianceInfoDialog.CAT_NONE && this.dialogProperties.startCat) {
          this.changeCategory(this.dialogProperties.startCat);
        } else {
          this.showSublayer(this._subLayer.get(this._currentCategory), [this._allianceInfoVO]);
        }
      } else {
        this.changeCategory(CastleAllianceInfoDialog.CAT_OVERVIEW);
      }
      this.itxt_title.textContentVO.stringValue = this._allianceInfoVO.allianceName;
      this.drawAllianceCrest();
      this.unLockDialog();
    }
  };
  CastleAllianceInfoDialog.prototype.drawAllianceCrest = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
    __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.alliance_symbol_container, this._allianceInfoVO.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.L, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
  };
  CastleAllianceInfoDialog.prototype.onClick = function (__s20param0) {
    if ((!this.isLocked || __s20param0.target == this.dialogDisp.btn_ok || __s20param0.target == this.dialogDisp.btn_close) && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      __s1param0.prototype.onClick.call(this, __s20param0);
      switch (__s20param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          break;
        case this.dialogDisp.btn_overview:
          this.changeCategory(CastleAllianceInfoDialog.CAT_OVERVIEW);
          break;
        case this.dialogDisp.btn_memberlist:
          this.changeCategory(CastleAllianceInfoDialog.CAT_MEMBERLIST);
          break;
        case this.dialogDisp.btn_diplomacy:
          this.changeCategory(CastleAllianceInfoDialog.CAT_DIPLOMACY);
          break;
        case this.dialogDisp.btn_agbTower:
          this.changeCategory(CastleAllianceInfoDialog.CAT_ABG_TOWER);
      }
    }
  };
  CastleAllianceInfoDialog.prototype.changeCategory = function (__s24param0) {
    if (this._currentCategory != __s24param0) {
      __s1param0.prototype.changeCategory.call(this, __s24param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this._allianceInfoVO, this.dialogProperties.statusID, this.dialogProperties.statusConfirmed, this.dialogProperties.allianceName]);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_overview, this._currentCategory == CastleAllianceInfoDialog.CAT_OVERVIEW);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_memberlist, this._currentCategory == CastleAllianceInfoDialog.CAT_MEMBERLIST);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_diplomacy, this._currentCategory == CastleAllianceInfoDialog.CAT_DIPLOMACY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_agbTower, this._currentCategory == CastleAllianceInfoDialog.CAT_ABG_TOWER);
    }
  };
  CastleAllianceInfoDialog.prototype.hideLoaded = function (__s27param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s27param0);
    this._allianceID = -1;
    this._allianceInfoVO = null;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  Object.defineProperty(CastleAllianceInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialog.prototype.onDiplomacyRequestSend = function () {
    this.hide();
  };
  CastleAllianceInfoDialog.NAME = "CastleAllianceInfo_W";
  CastleAllianceInfoDialog.CAT_NONE = "cat_none";
  CastleAllianceInfoDialog.CAT_OVERVIEW = "cat_overview";
  CastleAllianceInfoDialog.CAT_MEMBERLIST = "cat_memberlist";
  CastleAllianceInfoDialog.CAT_DIPLOMACY = "cat_diplomacy";
  CastleAllianceInfoDialog.CAT_ABG_TOWER = "cat_abgTowers";
  return CastleAllianceInfoDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceInfoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleAllianceInfoDialogABGTower = require("gge-module:export_CastleAllianceInfoDialogABGTower");
var __dep_export_CastleAllianceInfoDialogDiplomacy = require("gge-module:export_CastleAllianceInfoDialogDiplomacy");
var __dep_export_CastleAllianceInfoDialogMemberlist = require("gge-module:export_CastleAllianceInfoDialogMemberlist");
var __dep_export_CastleAllianceInfoDialogOverview = require("gge-module:export_CastleAllianceInfoDialogOverview");
