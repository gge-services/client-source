Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2SAllianceDonateVO = require("gge-module:export_C2SAllianceDonateVO");
var __dep_export_C2SGetDonationResourcesVO = require("gge-module:export_C2SGetDonationResourcesVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDonateDialog() {
    var __s3local0 = this;
    __s3local0._currentPage = 0;
    __s3local0._amountOfResComponents = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceDonateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDonateDialog, __s1param0);
  CastleAllianceDonateDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_left, this.dialogDisp.btn_Right]);
    this._castleSelector = new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.castleSelector);
  };
  CastleAllianceDonateDialog.prototype.showLoaded = function (__s7param0) {
    var __s7local0 = this;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this);
    this._resourceComponents = [];
    Array.from(__dep_export_CastleModel.CastleModel.allianceData.allianceFundsDonateble.values()).filter(function (__s10param0) {
      return __s10param0.directlyByPlayer;
    }).forEach(function (__s12param0) {
      var __s12local0 = __s12param0.createCollectableItemVO();
      __s7local0._resourceComponents.push(__s12local0);
    });
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_donate"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_donationInfoText"));
    this._DonatorResComponents = [];
    this._itxt_valueRes = [];
    this._mcDonateBonus = [];
    for (var __s7local1 = 0; __s7local1 < 4; __s7local1++) {
      this._DonatorResComponents.push(new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.getChildByName("mc_donate" + __s7local1)));
      this._itxt_valueRes.push(this.textFieldManager.registerTextField(this.dialogDisp.getChildByName("mc_donateBonus_" + __s7local1).txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD)));
      this._mcDonateBonus.push(this.dialogDisp.getChildByName("mc_donateBonus_" + __s7local1));
      this._mcDonateBonus[__s7local1].toolTipText = "dialog_alliance_depositBonus";
      this._mcDonateBonus[__s7local1].mouseChildren = false;
      this._mcDonateBonus[__s7local1].visible = false;
    }
    this._amountOfResComponents = __dep_exact_f855840627e6e145.int(this._DonatorResComponents.length);
    var __s7local2 = 0;
    if (this._DonatorResComponents != null) {
      for (var __s7local3 = 0, __s7local4 = this._DonatorResComponents; __s7local3 < __s7local4.length; __s7local3++) {
        var __s7local5 = __s7local4[__s7local3];
        if (__s7local5 !== undefined) {
          __s7local5.initComponentWithCollectable(100, this._resourceComponents[__s7local2], 51 + __s7local2);
          __s7local5.selectionSlider.setSelectedIndex(0);
          __s7local5.setAmountText();
          __s7local2++;
        }
      }
    }
    this.dialogDisp.btn_left.visible = this.btnLeftVisibility;
    this.dialogDisp.btn_Right.visible = this.btnRightVisibility;
    if (this._resourceComponents != null) {
      for (var __s7local6 = 0, __s7local7 = this._resourceComponents; __s7local6 < __s7local7.length; __s7local6++) {
        __s7local7[__s7local6].amount = 0;
      }
    }
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.selectCastle));
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __dep_export_CastleModel.CastleModel.userData.castleList, __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle(), [__dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID]);
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  CastleAllianceDonateDialog.prototype.getCurrentValue = function (__s23param0) {
    if (this._castleRessourcesVO) {
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s23param0.itemType) > -1) {
        return __dep_exact_f855840627e6e145.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(__s23param0.itemType));
      } else {
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountByType(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s23param0)));
      }
    } else {
      return 0;
    }
  };
  CastleAllianceDonateDialog.prototype.getCurrentAllianceSpace = function (__s29param0) {
    var __s29local0;
    __s29local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s29param0)));
    return __dep_exact_f855840627e6e145.int(Math.max(__dep_export_ClientConstUtils.ClientConstUtils.MAX_INT - __s29local0, 0));
  };
  CastleAllianceDonateDialog.prototype.storeOldValues = function () {
    var __s31local0 = 0;
    var __s31local1 = 0;
    var __s31local2 = __dep_exact_f855840627e6e145.int(this._resourceComponents.length);
    if (this._DonatorResComponents != null) {
      for (var __s31local3 = 0, __s31local4 = this._DonatorResComponents; __s31local3 < __s31local4.length; __s31local3++) {
        var __s31local5 = __s31local4[__s31local3];
        if (__s31local5 !== undefined) {
          if ((__s31local1 = this._amountOfResComponents * this._currentPage + __s31local0) < __s31local2) {
            this._resourceComponents[__s31local1].amount = __s31local5.getSelectedAmount();
            if (this.disp.stage.focus == __s31local5.disp.txt_value) {
              this._resourceComponents[__s31local1].amount = parseInt(__s31local5.disp.txt_value.text);
            }
          }
          __s31local0++;
        }
      }
    }
  };
  CastleAllianceDonateDialog.prototype.setResourcesChanges = function () {
    var __s39local0 = 0;
    var __s39local1 = 0;
    var __s39local2 = 0;
    var __s39local3 = 0;
    var __s39local4 = __dep_exact_f855840627e6e145.int(this._resourceComponents.length);
    if (this._DonatorResComponents != null) {
      for (var __s39local5 = 0, __s39local6 = this._DonatorResComponents; __s39local5 < __s39local6.length; __s39local5++) {
        var __s39local7 = __s39local6[__s39local5];
        if (__s39local7 !== undefined) {
          if ((__s39local1 = this._amountOfResComponents * this._currentPage + __s39local0) < __s39local4) {
            __s39local7.disp.visible = true;
            __s39local3 = __dep_exact_f855840627e6e145.int(this.getCurrentAllianceSpace(this._resourceComponents[__s39local1]));
            __s39local2 = __dep_exact_f855840627e6e145.int(Math.min(this.getCurrentValue(this._resourceComponents[__s39local1]), __s39local3));
            if (this._resourceComponents[__s39local1].itemType == __dep_export_CollectableEnum.CollectableEnum.C2) {
              __s39local7.resetWithValues(__s39local2, this._resourceComponents[__s39local1], 51 + __s39local0, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_noPayUser", [__dep_exact_26a421b704832cff.AllianceConst.MIN_LEVEL_FOR_DONATE_C2]));
              __s39local7.enableComponent(__dep_export_CastleModel.CastleModel.allianceData.userCanDonateToAlliance);
            } else {
              __s39local7.resetWithValues(__s39local2, this._resourceComponents[__s39local1], 51 + __s39local0);
              __s39local7.enableComponent(__s39local3 > 0);
            }
            __s39local7.selectionSlider.setSelectedIndex(Math.min(__s39local2, this._resourceComponents[__s39local1].amount));
            __s39local7.setAmountText();
          } else {
            __s39local7.disp.visible = false;
          }
          __s39local0++;
        }
      }
    }
    this.setDonateBonus();
  };
  CastleAllianceDonateDialog.prototype.setDonateBonus = function () {
    var __s49local0 = 0;
    var __s49local1 = 0;
    var __s49local2 = __dep_exact_f855840627e6e145.int(this._resourceComponents.length);
    if (this._DonatorResComponents != null) {
      for (var __s49local3 = 0, __s49local4 = this._DonatorResComponents; __s49local3 < __s49local4.length; __s49local3++) {
        if (__s49local4[__s49local3] !== undefined) {
          if ((__s49local1 = this._currentPage * this._amountOfResComponents + __s49local0) >= __s49local2) {
            this._mcDonateBonus[__s49local0].visible = false;
          } else if (this._resourceComponents[__s49local1].itemType != __dep_export_CollectableEnum.CollectableEnum.C1 && this._resourceComponents[__s49local1].itemType != __dep_export_CollectableEnum.CollectableEnum.C2) {
            if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getBoostLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_DEPOSIT_BONUS) > 0) {
              this._mcDonateBonus[__s49local0].gotoAndStop(1);
              this._itxt_valueRes[__s49local0].textContentVO.textReplacements = [String(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getCurrentBoostValue(__dep_exact_26a421b704832cff.AllianceConst.TYPE_DEPOSIT_BONUS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESOURCE_DEPOSIT_BOOST))];
              if (this._resourceComponents[__s49local1].itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && this._resourceComponents[__s49local1].id == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_ALLIANCE_COIN) {
                this._mcDonateBonus[__s49local0].visible = false;
              } else {
                this._mcDonateBonus[__s49local0].visible = true;
              }
            } else {
              this._mcDonateBonus[__s49local0].visible = false;
            }
          } else if (this._resourceComponents[__s49local1].itemType == __dep_export_CollectableEnum.CollectableEnum.C2) {
            var __s49local5 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ALLIPRIME), "PrimeAlliBonusEventVO");
            if (__s49local5) {
              this._mcDonateBonus[__s49local0].gotoAndStop(2);
              this._itxt_valueRes[__s49local0].textContentVO.textReplacements = [String([__s49local5.primeFactorInPercent])];
              this._mcDonateBonus[__s49local0].visible = true;
            } else {
              this._mcDonateBonus[__s49local0].visible = false;
            }
          } else {
            this._mcDonateBonus[__s49local0].visible = false;
          }
          __s49local0++;
        }
      }
    }
  };
  CastleAllianceDonateDialog.prototype.onChangeResources = function (__s65param0 = null) {
    var __s65local0 = __dep_exact_81dacdf05bd32292.castAs(__s65param0.params[0], "CastleResourcesVO");
    if (__s65local0 && __s65local0.castleID == this._castleSelector.selectedCastleVO.objectId) {
      this._castleRessourcesVO = __s65local0;
      this.storeOldValues();
      this.setResourcesChanges();
    }
  };
  CastleAllianceDonateDialog.prototype.selectCastle = function (__s68param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDonationResourcesVO.C2SGetDonationResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
    if (this._DonatorResComponents != null) {
      for (var __s68local0 = 0, __s68local1 = this._DonatorResComponents; __s68local0 < __s68local1.length; __s68local0++) {
        var __s68local2 = __s68local1[__s68local0];
        if (__s68local2 !== undefined) {
          __s68local2.resetValue();
        }
      }
    }
  };
  CastleAllianceDonateDialog.prototype.onClick = function (__s74param0) {
    __s1param0.prototype.onClick.call(this, __s74param0);
    switch (__s74param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onDonateForAlliance();
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.storeOldValues();
        this._currentPage--;
        this.dialogDisp.btn_left.visible = this.btnLeftVisibility;
        this.dialogDisp.btn_Right.visible = this.btnRightVisibility;
        this.setResourcesChanges();
        break;
      case this.dialogDisp.btn_Right:
        this.storeOldValues();
        this._currentPage++;
        this.dialogDisp.btn_left.visible = this.btnLeftVisibility;
        this.dialogDisp.btn_Right.visible = this.btnRightVisibility;
        this.setResourcesChanges();
    }
  };
  CastleAllianceDonateDialog.prototype.onDonateForAlliance = function () {
    var __s77local0 = 0;
    var __s77local1 = __dep_exact_f855840627e6e145.int(this._resourceComponents.length);
    var __s77local2 = new Object();
    var __s77local3 = false;
    this.storeOldValues();
    __s77local0 = 0;
    for (; __s77local0 < __s77local1; __s77local0++) {
      var __s77local4 = this._resourceComponents[__s77local0];
      if (__s77local4.amount > 0) {
        __s77local2[__dep_export_CollectableHelper.CollectableHelper.getServerKeyByCollectable(__s77local4)] = __s77local4.amount;
        __s77local3 = true;
      }
    }
    if (__s77local3) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceDonateVO.C2SAllianceDonateVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID, __s77local2));
    }
  };
  CastleAllianceDonateDialog.prototype.hideLoaded = function (__s83param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    __s1param0.prototype.hideLoaded.call(this);
    if (this._DonatorResComponents != null) {
      for (var __s83local0 = 0, __s83local1 = this._DonatorResComponents; __s83local0 < __s83local1.length; __s83local0++) {
        var __s83local2 = __s83local1[__s83local0];
        if (__s83local2 !== undefined) {
          __s83local2.destroy();
        }
      }
    }
    this._castleRessourcesVO = null;
    this._castleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.selectCastle));
  };
  Object.defineProperty(CastleAllianceDonateDialog.prototype, "btnLeftVisibility", {
    get: function () {
      return this._currentPage * this._amountOfResComponents != 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDonateDialog.prototype, "btnRightVisibility", {
    get: function () {
      return this._currentPage * this._amountOfResComponents + this._amountOfResComponents < this._resourceComponents.length;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDonateDialog.prototype.onRefreshSpecialEvents = function (__s93param0) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s93param0.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.setDonateBonus();
    }
  };
  CastleAllianceDonateDialog.prototype.onRemoveSpecialEvent = function (__s96param0) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s96param0.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.setDonateBonus();
    }
  };
  CastleAllianceDonateDialog.NAME = "CastleAllianceDonateEx";
  return CastleAllianceDonateDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceDonateDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
