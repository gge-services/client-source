Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogTreasury(__s3param0) {
    var __s3local0 = this;
    __s3local0._sublayers = new Map();
    __s3local0._tabButtons = new Map();
    __s3local0._currentTab = CastleAllianceDialogTreasury.TAB_STORAGE;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasury, __s1param0);
  CastleAllianceDialogTreasury.prototype.init = function () {
    this._tabButtons = new Map();
    this.initTabButton(CastleAllianceDialogTreasury.TAB_STORAGE, this.subLayerDisp.btn_tab_storage, "dialog_alliance_treasury_treasury_header");
    this.initTabButton(CastleAllianceDialogTreasury.TAB_BOOSTER, this.subLayerDisp.btn_tab_booster, "dialog_alliance_treasury_alliBoosters_header");
    this.initTabButton(CastleAllianceDialogTreasury.TAB_SUBSCRIPTIONS, this.subLayerDisp.btn_tab_subscriptions, "dialog_alliance_treasury_subscription_header");
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_tab_subscriptions, __dep_export_CastleModel.CastleModel.subscriptionData.isFeatureEnabled());
    this._sublayers = new Map();
    this._sublayers.set(CastleAllianceDialogTreasury.TAB_STORAGE, new __dep_export_CastleAllianceDialogTreasuryStorage.CastleAllianceDialogTreasuryStorage(this.subLayerDisp.tab_storage));
    this._sublayers.set(CastleAllianceDialogTreasury.TAB_BOOSTER, new __dep_export_CastleAllianceDialogTreasuryBooster.CastleAllianceDialogTreasuryBooster(this.subLayerDisp.tab_booster));
    this._sublayers.set(CastleAllianceDialogTreasury.TAB_SUBSCRIPTIONS, new __dep_export_CastleAllianceDialogTreasurySubscriptions.CastleAllianceDialogTreasurySubscriptions(this.subLayerDisp.tab_subscriptions));
    if (this._sublayers != null) {
      for (var __s5local0 = 0, __s5local1 = Array.from(this._sublayers.values()); __s5local0 < __s5local1.length; __s5local0++) {
        __s5local1[__s5local0].onHide();
      }
    }
  };
  CastleAllianceDialogTreasury.prototype.initTabButton = function (__s10param0, __s10param1, __s10param2) {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s10param1, 1.015);
    this.textFieldManager.registerTextField(__s10param1.mc_selected.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s10param2)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(__s10param1.mc_default.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s10param2)).autoFitToBounds = true;
    this._tabButtons.set(__s10param0, __s10param1);
  };
  CastleAllianceDialogTreasury.prototype.show = function (__s12param0) {
    __s1param0.prototype.show.call(this, __s12param0);
    var __s12local0 = this._params ? this._params[1] : null;
    if (__s12local0 && __s12local0.defaultTreasuryTab) {
      if (this._sublayers.has(__s12local0.defaultTreasuryTab)) {
        this._currentTab = __s12local0.defaultTreasuryTab;
      }
      __s12local0.defaultTreasuryTab = null;
    }
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    if (!this.getSublayer(this._currentTab).isShown) {
      this.getSublayer(this._currentTab).onShow();
    }
    this.updateTabButtons();
  };
  CastleAllianceDialogTreasury.prototype.hide = function () {
    this.getSublayer(this._currentTab).onHide();
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceDialogTreasury.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceTreasury"));
  };
  CastleAllianceDialogTreasury.prototype.selectButton = function (__s21param0, __s21param1) {
    __s21param0.mc_selected.visible = __s21param1;
    __s21param0.mc_default.visible = !__s21param1;
  };
  CastleAllianceDialogTreasury.prototype.changeTab = function (__s23param0) {
    this._currentTab = __s23param0;
    if (this._sublayers != null) {
      for (var __s23local0 = 0, __s23local1 = Array.from(this._sublayers.values()); __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined && __s23local2.isShown) {
          __s23local2.onHide();
        }
      }
    }
    this.getSublayer(this._currentTab).onShow();
    this.updateTabButtons();
  };
  CastleAllianceDialogTreasury.prototype.updateTabButtons = function () {
    if (this._tabButtons != null) {
      for (var __s29local0 = 0, __s29local1 = Array.from(this._tabButtons.values()); __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        this.selectButton(__s29local2, false);
      }
    }
    this.selectButton(this._tabButtons.get(this._currentTab), true);
  };
  CastleAllianceDialogTreasury.prototype.getSublayer = function (__s34param0) {
    return this._sublayers.get(__s34param0);
  };
  CastleAllianceDialogTreasury.prototype.onClick = function (__s36param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target) && (__s1param0.prototype.onClick.call(this, __s36param0), this._tabButtons != null)) {
      for (var __s36local0 = 0, __s36local1 = Array.from(this._tabButtons.keys()); __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2 !== undefined) {
          var __s36local3 = this._tabButtons.get(__s36local2);
          if (__s36param0.target == __s36local3) {
            this.changeTab(__s36local2);
            break;
          }
        }
      }
    }
  };
  CastleAllianceDialogTreasury.prototype.onAllianceDataUpdate = function (__s43param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      var __s43local0 = this.getSublayer(this._currentTab);
      if (__s43local0) {
        __s43local0.update();
      }
    }
  };
  Object.defineProperty(CastleAllianceDialogTreasury.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogTreasury.TAB_STORAGE = "tab_storage";
  CastleAllianceDialogTreasury.TAB_BOOSTER = "tab_booster";
  CastleAllianceDialogTreasury.TAB_SUBSCRIPTIONS = "tab_subscriptions";
  return CastleAllianceDialogTreasury;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceDialogTreasury = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceDialogTreasuryBooster = require("gge-module:export_CastleAllianceDialogTreasuryBooster");
var __dep_export_CastleAllianceDialogTreasuryStorage = require("gge-module:export_CastleAllianceDialogTreasuryStorage");
var __dep_export_CastleAllianceDialogTreasurySubscriptions = require("gge-module:export_CastleAllianceDialogTreasurySubscriptions");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
