Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SInstructorStartVO = require("gge-module:export_C2SInstructorStartVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __s0local0 = function (__s1param0) {
  function CastleBuyInstructorDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBuyInstructorDialog.ASSETNAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyInstructorDialog, __s1param0);
  CastleBuyInstructorDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.info_bonus.gotoAndStop(__dep_export_CastleModel.CastleModel.boostData.instructorVO.bonusIconFrame);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("costs"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_booster_renew_generic"));
    this.itxt_infocosts = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_infotime = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.dialogDisp.info_time.toolTipText = "runTime";
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBuyInstructorDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    if (__dep_export_CastleModel.CastleModel.boostData.instructorVO.isActive) {
      this.itxt_copy.textContentVO.textId = "dialog_booster_renew_generic";
      this.itxt_copy.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("instructor")];
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_buyInstructor_copy";
      this.itxt_copy.textContentVO.textReplacements = [];
    }
    this.dialogDisp.info_bonus.toolTipText = {
      t: "dialog_buyInstructor_infoIcon",
      p: [Math.round(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR_BOOST * 100)]
    };
    this.itxt_infotime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR_DURATION, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    this.itxt_infocosts.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.instructorVO.finalCostsC2;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_infocosts, __dep_export_CastleModel.CastleModel.boostData.instructorVO.finalCostsC2);
    this.itxt_infobonus.textContentVO.textReplacements = [Math.round(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR_BOOST * 100)];
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.boostData.instructorVO.rebuyDiscountString]));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.boostData.instructorVO.rebuyDiscountString]));
    this.addCharacterPic();
    this.dialogDisp.info_bonus.mouseChildren = false;
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    var __s7local0 = __dep_export_CastleModel.CastleModel.boostData.instructorVO.hasRebuyDiscount && !__dep_export_CastleModel.CastleModel.boosterSaleData.isBoosterOnSale(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR);
    this.dialogDisp.mc_rebuyDiscount.visible = __s7local0;
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR);
    if (!this.dialogDisp.mc_rebuyDiscount.visible) {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    }
  };
  CastleBuyInstructorDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyInstructorDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyInstructorDialog.prototype.onBoosterDataChanges = function (__s16param0) {
    this.show();
  };
  CastleBuyInstructorDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SInstructorStartVO.C2SInstructorStartVO(__dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR)));
        this.hide();
    }
  };
  CastleBuyInstructorDialog.prototype.addCharacterPic = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var __s21local0 = __dep_export_CastleModel.CastleModel.boostData.instructorVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(__s21local0);
  };
  CastleBuyInstructorDialog.__initialize_static_members = function () {
    CastleBuyInstructorDialog.NAME = "CastleBuyInstructorDialog";
    CastleBuyInstructorDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBuyInstructorDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBuyInstructorDialog = __s0local0;
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
