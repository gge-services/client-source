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
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SFestivalStartVO = require("gge-module:export_C2SFestivalStartVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ComboboxItemRendererLong = require("gge-module:export_ComboboxItemRendererLong");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleFestivalDialog() {
    var __s3local0 = this;
    __s3local0.feastCostReduction = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleFestivalDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFestivalDialog, __s1param0);
  CastleFestivalDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleFestivalDialog.prototype.addEventListenerOnShow = function () {
    this._typeComboBox.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onTypeComboboxChange));
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onCastleComboboxChange));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
  };
  CastleFestivalDialog.prototype.removeEventListenerOnHide = function () {
    this._typeComboBox.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onTypeComboboxChange));
    this._castleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onCastleComboboxChange));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
  };
  CastleFestivalDialog.prototype.showLoaded = function (__s11param0 = null) {
    this._typeComboBox ||= new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.mc_combobox, "", 1, 40, 45, -1, 0, new __dep_export_ComboboxItemRendererLong.ComboboxItemRendererLong());
    this._castleSelector ||= new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.mc_castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_festival_desc"));
    this.itxt_boost = this.textFieldManager.registerTextField(this.dialogDisp.mc_productivity.txt_boost, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_ADD));
    this.itxt_boost.autoFitToBounds = true;
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.dialogDisp.mc_productivity.toolTipText = "recruitspeed";
    this.dialogDisp.mc_time.toolTipText = "dialog_moveOverview_waitTime";
    this.dialogDisp.mc_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.FOOD;
    var __s11local0 = new __dep_export_CastleListVO.CastleListVO();
    for (var __s11local1 = 0; __s11local1 < __dep_export_CastleModel.CastleModel.userData.castleList.list.length; __s11local1++) {
      if (__dep_export_CastleModel.CastleModel.userData.castleList.list[__s11local1].kingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        __s11local0.addCastle(__dep_export_CastleModel.CastleModel.userData.castleList.list[__s11local1], __dep_export_CastleModel.CastleModel.userData.castleList.list[__s11local1].kingdomID);
      }
    }
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __s11local0, this.getCurrentCastleVO());
    this.fillFestivalList();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetFeastCostReductionVO.C2SGetFeastCostReductionVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
    __s1param0.prototype.showLoaded.call(this, __s11param0);
  };
  CastleFestivalDialog.prototype.getCurrentCastleVO = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea) {
      for (var __s16local0 = 0; __s16local0 < __dep_export_CastleModel.CastleModel.userData.castleList.list.length; __s16local0++) {
        if (__dep_export_CastleModel.CastleModel.userData.castleList.list[__s16local0].objectId == __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId) {
          return __dep_export_CastleModel.CastleModel.userData.castleList.list[__s16local0];
        }
      }
    }
    return __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
  };
  CastleFestivalDialog.prototype.onTypeComboboxChange = function (__s22param0 = null) {
    var __s22local0 = this._typeComboBox.selectedData.vo;
    var __s22local1 = __s22local0.hasC2Costs() ? 1 : 1 - this.feastCostReduction / 100;
    this.itxt_boost.textContentVO.textReplacements = [__s22local0.boost];
    this.itxt_cost.textContentVO.numberValue = __s22local0.cost * __s22local1;
    this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__s22local0.durationInSeconds, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_HOURS_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    if (__s22local0.hasC2Costs()) {
      this.dialogDisp.mc_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
      this.itxt_cost.color = __dep_export_CastleModel.CastleModel.currencyData.c2Amount < __s22local0.cost ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this.dialogDisp.mc_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.FOOD;
      this.updateFoodCostColor();
    }
    this.dialogDisp.mc_costs.icon_cost.gotoAndStop(__s22local0.hasC2Costs() ? 2 : 1);
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_imageHolder);
    this.dialogDisp.mc_imageHolder.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s22local0.assetName, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s22local0.assetName), null, 0, false).asDisplayObject());
    this.checkUserlevel();
  };
  CastleFestivalDialog.prototype.updateFoodCostColor = function () {
    var __s26local0 = this._typeComboBox.selectedData.vo;
    var __s26local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.getSelectedCastleID(), this.getSelectedCastleKingdomID());
    if (__s26local1) {
      var __s26local2 = __s26local1.getResource(__dep_export_CollectableEnum.CollectableEnum.FOOD) >= __s26local0.cost;
      this.itxt_cost.color = __s26local2 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
  };
  CastleFestivalDialog.prototype.onCastleComboboxChange = function (__s29param0 = null) {
    this.updateFoodCostColor();
  };
  CastleFestivalDialog.prototype.onDetailedCastleListArrived = function (__s31param0 = null) {
    this.updateFoodCostColor();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
  };
  CastleFestivalDialog.prototype.onFCEArrived = function (__s33param0 = null) {
    this.feastCostReduction = JSON.parse(__s33param0.params[1][1]).FRM;
    this.onTypeComboboxChange();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
  };
  CastleFestivalDialog.prototype.checkUserlevel = function () {
    var __s35local0 = this._typeComboBox.selectedData.vo;
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __s35local0.minLevel) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.enabled = false;
      this.dialogDisp.btn_ok.toolTipText = "expansion_higherLevelNeeded" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s35local0.minLevel;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
      this.dialogDisp.btn_ok.enabled = true;
      this.dialogDisp.btn_ok.toolTipText = "";
    }
  };
  CastleFestivalDialog.prototype.getSelectedCastleID = function () {
    return __dep_exact_f855840627e6e145.int(this._castleSelector.selectedCastleVO.objectId);
  };
  CastleFestivalDialog.prototype.getSelectedCastleKingdomID = function () {
    return __dep_exact_f855840627e6e145.int(this._castleSelector.selectedCastleVO.kingdomID);
  };
  CastleFestivalDialog.prototype.onClick = function (__s43param0) {
    __s1param0.prototype.onClick.call(this, __s43param0);
    switch (__s43param0.target) {
      case this.dialogDisp.btn_cancel:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        if (this.dialogDisp.btn_ok.enabled) {
          var __s43local0 = this._typeComboBox.selectedData.vo;
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFestivalStartVO.C2SFestivalStartVO(__s43local0.id, this.getSelectedCastleID(), this.getSelectedCastleKingdomID()));
          __dep_export_CastleModel.CastleModel.boostData.festivalVO.boostAmount = __s43local0.boost;
          this.hide();
        }
    }
  };
  CastleFestivalDialog.prototype.fillFestivalList = function () {
    var __s47local0;
    this._typeComboBox.clearItems();
    for (var __s47local1 = __dep_export_CastleModel.CastleModel.premiumData.getFestivalItemsByLevel(__dep_export_CastleModel.CastleModel.userData.userLevel), __s47local2 = 0; __s47local2 < __s47local1.length; __s47local2++) {
      (__s47local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s47local1[__s47local2].nameTextID);
      __s47local0.data = {
        vo: __s47local1[__s47local2]
      };
      this._typeComboBox.addItem(__s47local0);
    }
    this._typeComboBox.selectItemIndex(0);
    this.onTypeComboboxChange();
  };
  CastleFestivalDialog.__initialize_static_members = function () {
    CastleFestivalDialog.NAME = "CastleFestivalEx";
  };
  return CastleFestivalDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFestivalDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_C2SGetFeastCostReductionVO = require("gge-module:export_C2SGetFeastCostReductionVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
