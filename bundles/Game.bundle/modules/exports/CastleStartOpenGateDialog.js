Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SOpenGateStartVO = require("gge-module:export_C2SOpenGateStartVO");
var __dep_export_OpenGateEvent = require("gge-module:export_OpenGateEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = function (__s1param0) {
  function CastleStartOpenGateDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStartOpenGateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartOpenGateDialog, __s1param0);
  CastleStartOpenGateDialog.prototype.initLoaded = function (__s5param0 = null) {
    this._openGateTimeList ||= new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.info_time.mc_combobox, "", 1, 40, 45);
    this._castleSelector ||= new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.mc_castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_startOpenGate_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_startOpenGate_decription")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("costs"));
    this.itxt_costValue ||= this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.dialogDisp.info_time.mc_icon.toolTipText = "runTime";
    this.dialogDisp.info_time.mc_icon_more.toolTipText = "dialog_management_extendTime";
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleStartOpenGateDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.fillPeaceTimeList();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), this.getCastleList());
    if (this.layoutManager.isInMyCastle) {
      var __s7local0 = this.getRelevantCastle();
      this._castleSelector.changeSelectedCastle(__s7local0);
    }
    this.onSelectCastle();
    if (!this.dialogProperties.castleSelectionVisible && this._castleSelector.isVisible() || this.dialogProperties.castleSelectionVisible && !this._castleSelector.isVisible()) {
      this._castleSelector.toggleVisibility();
    }
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.getCastleList = function () {
    for (var __s11local0 = __dep_export_CastleModel.CastleModel.userData.castleList.listOfCastlesWithoutEventCamps, __s11local1 = new __dep_export_CastleListVO.CastleListVO(), __s11local2 = 0; __s11local2 < __s11local0.length; __s11local2++) {
      var __s11local3 = __s11local0[__s11local2];
      if (__s11local3.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL && __s11local3.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
        __s11local1.addCastle(__s11local3, __s11local0[__s11local2].kingdomID);
      }
    }
    return __s11local1;
  };
  CastleStartOpenGateDialog.prototype.getRelevantCastle = function () {
    if (__dep_export_CastleModel.CastleModel.userData.castleList) {
      if (this.layoutManager.isInMyCastle) {
        return __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID);
      } else {
        return __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(-1);
      }
    } else {
      return null;
    }
  };
  CastleStartOpenGateDialog.prototype.showLoaded = function (__s22param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s22param0);
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._openGateTimeList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTime));
    this.controller.addEventListener(__dep_export_OpenGateEvent.OpenGateEvent.CHANGE_OPEN_GATE_COUNTER, this.bindFunction(this.onChangeOpenGateCounter));
  };
  CastleStartOpenGateDialog.prototype.hideLoaded = function (__s24param0 = null) {
    this._castleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._openGateTimeList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectTime));
    this.controller.removeEventListener(__dep_export_OpenGateEvent.OpenGateEvent.CHANGE_OPEN_GATE_COUNTER, this.bindFunction(this.onChangeOpenGateCounter));
    __s1param0.prototype.hideLoaded.call(this, __s24param0);
  };
  CastleStartOpenGateDialog.prototype.onSelectTime = function (__s26param0) {
    this.itxt_costValue.textContentVO.numberValue = Number(this._openGateTimeList.selectedData);
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.onChangeOpenGateCounter = function (__s28param0) {
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.onSelectCastle = function (__s30param0 = null) {
    if (this._castleSelector.selectedCastleVO.remainingOpenGateTime > 0) {
      this.dialogDisp.info_time.mc_icon.visible = false;
      this.dialogDisp.info_time.mc_icon_more.visible = true;
    } else {
      this.dialogDisp.info_time.mc_icon.visible = true;
      this.dialogDisp.info_time.mc_icon_more.visible = false;
    }
    this.updateCosts();
  };
  CastleStartOpenGateDialog.prototype.updateCosts = function () {
    var __s34local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this.selectedCastleID).openGateCounter);
    var __s34local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.PlayerConst.getOpenGateCosts(this._openGateTimeList.selectedId, __s34local0 + 1)));
    this.itxt_costValue.textContentVO.numberValue = __s34local1;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_costValue, __s34local1);
  };
  CastleStartOpenGateDialog.prototype.fillPeaceTimeList = function () {
    var __s36local0;
    this._openGateTimeList.clearItems();
    for (var __s36local1 = 0; __s36local1 < __dep_exact_26a421b704832cff.PlayerConst.OPEN_GATE_DURATION.length; __s36local1++) {
      (__s36local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff.PlayerConst.OPEN_GATE_DURATION[__s36local1], __dep_exact_92d05af59ee2ff30.Localize.text);
      __s36local0.data = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.PlayerConst.OPEN_GATE_C2[__s36local1]);
      this._openGateTimeList.addItem(__s36local0);
    }
    this._openGateTimeList.selectItemIndex(0);
  };
  CastleStartOpenGateDialog.prototype.onClick = function (__s40param0) {
    __s1param0.prototype.onClick.call(this, __s40param0);
    switch (__s40param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOpenGateStartVO.C2SOpenGateStartVO(this.selectedCastleID, this.selectedCastleKingdomID, this._openGateTimeList.selectedId));
        this.hide();
    }
  };
  Object.defineProperty(CastleStartOpenGateDialog.prototype, "selectedCastleID", {
    get: function () {
      if (this._castleSelector.isVisible()) {
        return this._castleSelector.selectedCastleVO.objectId;
      } else {
        return this.dialogProperties.castleID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartOpenGateDialog.prototype, "selectedCastleKingdomID", {
    get: function () {
      if (this._castleSelector.isVisible()) {
        return this._castleSelector.selectedCastleVO.kingdomID;
      } else {
        return this.dialogProperties.kingdomID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartOpenGateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartOpenGateDialog.__initialize_static_members = function () {
    CastleStartOpenGateDialog.NAME = "CastleBuyProtectionBoost";
  };
  return CastleStartOpenGateDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleStartOpenGateDialog = __s0local0;
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
