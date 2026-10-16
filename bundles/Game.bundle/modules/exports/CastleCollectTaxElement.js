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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SStartCollectTaxVO = require("gge-module:export_C2SStartCollectTaxVO");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_CastleCollectTaxElementEvent = require("gge-module:export_CastleCollectTaxElementEvent");
var __s0local0 = function (__s1param0) {
  function CastleCollectTaxElement(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.mc_cost.mouseChildren = false;
    __s3param0.mc_cost.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.COSTS;
    __s3param0.mc_duration.mouseChildren = false;
    __s3param0.mc_duration.toolTipText = "dialog_moveOverview_waitTime";
    __s3param0.mc_reward.mouseChildren = false;
    __s3param0.mc_reward.toolTipText = "earning";
    __s3param0.btn_collect.mouseChildren = false;
    __s3param0.btn_collect.toolTipText = "alert_tax_stopCollectinng_title";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_collect]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectTaxElement, __s1param0);
  CastleCollectTaxElement.prototype.customFillItem = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_collect, true);
    if (this.elementVO.hasC2CostWithoutPremium) {
      this.disp.mc_cost.mc_costIcon.gotoAndStop(2);
      this.textfieldManager.registerTextField(this.disp.mc_cost.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.elementVO.c2Costs), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true)).color = this.elementVO.c2Costs > __dep_export_CastleModel.CastleModel.currencyData.c2Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.disp.btn_collect.gotoAndStop(2);
    } else {
      this.disp.mc_cost.mc_costIcon.gotoAndStop(1);
      this.textfieldManager.registerTextField(this.disp.mc_cost.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.elementVO.c1Costs), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true)).color = this.elementVO.c1Costs > __dep_export_CastleModel.CastleModel.currencyData.c1Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.disp.btn_collect.gotoAndStop(1);
    }
    this.textfieldManager.registerTextField(this.disp.mc_duration.txt_duration, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.elementVO.durationString), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true));
    this.textfieldManager.registerTextField(this.disp.mc_reward.txt_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.elementVO.reward), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true));
  };
  CastleCollectTaxElement.prototype.onMouseClick = function (__s9param0) {
    if (this.isActive && __s9param0.target == this.disp.btn_collect) {
      this.onStartTaxCollection();
    }
  };
  CastleCollectTaxElement.prototype.onStartTaxCollection = function () {
    if (this.elementVO.c1Costs > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
      CastleCollectTaxElement.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_no_money_c1_copy")));
    } else if (this.elementVO.c2Costs > __dep_export_CastleModel.CastleModel.currencyData.c2Amount) {
      CastleCollectTaxElement.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    } else {
      this.dispatchEvent(new __dep_export_CastleCollectTaxElementEvent.CastleCollectTaxElementEvent(__dep_export_CastleCollectTaxElementEvent.CastleCollectTaxElementEvent.START_TAX_COLLECTION));
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendServerMessageVOAndWait(new __dep_export_C2SStartCollectTaxVO.C2SStartCollectTaxVO(this.elementVO.taxType));
    }
  };
  Object.defineProperty(CastleCollectTaxElement.prototype, "elementVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement.prototype, "textfieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleCollectTaxElement;
}(__dep_exact_9e901e8e2483a22f_4.ScrollItem);
exports.CastleCollectTaxElement = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
