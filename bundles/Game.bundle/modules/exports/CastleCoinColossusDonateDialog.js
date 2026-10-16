Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_C2SColossusCoinDepositResourcesVO = require("gge-module:export_C2SColossusCoinDepositResourcesVO");
var __dep_export_CastleResourceCollectorEvent = require("gge-module:export_CastleResourceCollectorEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = function (__s1param0) {
  function CastleCoinColossusDonateDialog() {
    var __s3local0 = this;
    __s3local0._bonusCoins = 0;
    __s3local0._points = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleCoinColossusDonateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCoinColossusDonateDialog, __s1param0);
  CastleCoinColossusDonateDialog.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this._coinDonator = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_donate);
    this._coinDonator.dispatcher = new __s0local0();
    this._coinDonator.notifyValueChange = true;
    this.itxtpoint = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("ResourcePointsIcon", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ResourcePointsIcon"));
    if (__s5local0.isLoaded) {
      this.onPointIconLoaded(__s5local0);
    } else {
      __s5local0.clipLoaded.addOnce(this.bindFunction(this.onPointIconLoaded));
    }
    if (this._coinDonator) {
      this._coinDonator.selectionSlider.setSelectedIndex(0);
    }
    this.initCollectorListeners();
    this.setValues(this._bonusCoins);
    this.setTexts();
  };
  CastleCoinColossusDonateDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventCoinColossus_donateCoins_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_label_points, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("colossus_donateResource_labelPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_donate, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventCoinColossus_donateCoins_copy", [CastleCoinColossusDonateDialog.COINS_FOR_POINTS, CastleCoinColossusDonateDialog.FIVE_COLOSSUS_POINTS]));
  };
  CastleCoinColossusDonateDialog.prototype.onPointIconLoaded = function (__s12param0) {
    var __s12local0 = __s12param0.asDisplayObject();
    this.dialogDisp.mc_empty.addChild(__s12local0);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(this.dialogDisp.mc_empty, 55, 55);
  };
  CastleCoinColossusDonateDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    this._points = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this.properties.eventVO.ownPoints));
    this._bonusCoins = 0;
    var __s14local0 = __dep_export_CastleModel.CastleModel.userData.castleList.listOfCastlesWithoutAreaTypesAndEventCamps([__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL, __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL]);
    var __s14local1 = new __dep_export_CastleListVO.CastleListVO();
    if (__s14local0 != null) {
      for (var __s14local2 = 0, __s14local3 = __s14local0; __s14local2 < __s14local3.length; __s14local2++) {
        var __s14local4 = __s14local3[__s14local2];
        if (__s14local4 !== undefined && __s14local4.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL && __s14local4.kingdomID != __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID && __s14local4.controllerWorldMapOwnerInfoVO.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
          __s14local1.addCastle(__s14local4, __s14local4.kingdomID);
        }
      }
    }
    if (this._coinDonator) {
      this._coinDonator.initComponent(__dep_export_CastleModel.CastleModel.currencyData.c1Amount, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.C1, 51);
      this._coinDonator.selectionSlider.setSelectedIndex(0);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    this.setValues(this._bonusCoins);
  };
  CastleCoinColossusDonateDialog.prototype.setValues = function (__s21param0) {
    var __s21local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS), "ColossusEventVO");
    if (__s21local0) {
      if (__s21param0 > 0) {
        var __s21local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ColossusConst.getResourcePointsForCoins(__s21param0) * __s21local0.getConversionRateForEvent());
        this.itxtpoint.textContentVO.stringValue = this._points + " (+ " + __s21local1 + ")";
        if (this._points >= __dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS && __s21param0 > 0 || this._points == 0 && __s21local1 >= __dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS) {
          this.donateButton.enableButton = true;
          this.dialogDisp.btn_ok.toolTipText = null;
        } else {
          this.donateButton.enableButton = false;
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [__dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS]
          };
        }
      } else {
        this.itxtpoint.textContentVO.stringValue = String(this._points);
        this.donateButton.enableButton = false;
        if (this._points >= __dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS) {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minCoin"
          };
        } else {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [__dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS]
          };
        }
      }
    } else {
      this.hide();
    }
  };
  CastleCoinColossusDonateDialog.prototype.initCollectorListeners = function () {
    this._bonusCoins = 0;
    if (this._coinDonator) {
      this._coinDonator.dispatcher.addEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeCoins));
    }
  };
  CastleCoinColossusDonateDialog.prototype.removeCollectorListeners = function () {
    this._coinDonator.dispatcher.removeEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeCoins));
    this._coinDonator.resetValue();
  };
  CastleCoinColossusDonateDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.initCollectorListeners();
  };
  CastleCoinColossusDonateDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.removeCollectorListeners();
  };
  CastleCoinColossusDonateDialog.prototype.onRemoveSpecialEvent = function (__s40param0) {
    if (__s40param0.specialEventVO.eventType == "Colossus") {
      this.hide();
    }
  };
  CastleCoinColossusDonateDialog.prototype.onValueChangeCoins = function (__s43param0) {
    this._bonusCoins = __s43param0.newValue;
    this.setValues(this._bonusCoins);
  };
  CastleCoinColossusDonateDialog.prototype.onClick = function (__s45param0) {
    __s1param0.prototype.onClick.call(this, __s45param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s45param0.target)) {
      switch (__s45param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onDonate();
      }
    }
  };
  CastleCoinColossusDonateDialog.prototype.onDonate = function () {
    if (this._coinDonator.getSelectedAmount() > 0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SColossusCoinDepositResourcesVO.C2SColossusCoinDepositResourcesVO(this._coinDonator.getSelectedAmount()));
      this.donateButton.enableButton = false;
    }
  };
  Object.defineProperty(CastleCoinColossusDonateDialog.prototype, "donateButton", {
    get: function () {
      return this.dialogDisp.btn_ok.basicButton;
    },
    enumerable: true,
    configurable: true
  });
  CastleCoinColossusDonateDialog.__initialize_static_members = function () {
    CastleCoinColossusDonateDialog.NAME = "CastleCoinColossusDonateDialog";
    CastleCoinColossusDonateDialog.COINS_FOR_POINTS = 460;
    CastleCoinColossusDonateDialog.FIVE_COLOSSUS_POINTS = 5;
  };
  return CastleCoinColossusDonateDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleCoinColossusDonateDialog = __s0local1;
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
