Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SBuyLevelVO = require("gge-module:export_C2SBuyLevelVO");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleConfirmCostsDialogProperties = require("gge-module:export_CastleConfirmCostsDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ButtonBuyLevelComponent(__s3param0) {
    return __s1param0.call(this, __dep_exact_81dacdf05bd32292.instanceOfClass(__s3param0, "BasicButton") ? __s3param0 : __s3param0.basicButton) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonBuyLevelComponent, __s1param0);
  ButtonBuyLevelComponent.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.updateButtonVisibility();
  };
  ButtonBuyLevelComponent.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    __s1param0.prototype.destroy.call(this);
  };
  ButtonBuyLevelComponent.prototype.onXPChanged = function (__s9param0) {
    this.updateButtonVisibility();
  };
  ButtonBuyLevelComponent.prototype.onClickButton = function () {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._button)) {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.level);
      var __s11local1 = new __dep_export_CollectableList.CollectableList();
      __s11local1.addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__dep_export_CastleModel.CastleModel.buyLevelData.getLevelUpCost(__s11local0, __s11local0 + 1)));
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyLevelDialog.CastleBuyLevelDialog, new __dep_export_CastleConfirmCostsDialogProperties.CastleConfirmCostsDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_skipLevel_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_skipLevel_desc"), __s11local1, null, this.bindFunction(this.onConfirm)));
    }
  };
  ButtonBuyLevelComponent.prototype.onConfirm = function (__s14param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyLevelVO.C2SBuyLevelVO(__dep_export_CastleModel.CastleModel.userData.level + 1));
  };
  ButtonBuyLevelComponent.prototype.updateButtonVisibility = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.userData.splitRunData.getBooleanParam(__dep_exact_26a421b704832cff.SplitRunConst.BUY_LEVEL_TEST_PARAM, false);
    var __s16local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userLevel);
    this._button.visible = __s16local0 && __s16local1 >= __dep_exact_26a421b704832cff.SplitRunConst.MIN_LEVEL_TO_BUY_LEVEL && __s16local1 <= __dep_exact_26a421b704832cff.SplitRunConst.MAX_LEVEL_TO_BUY_LEVEL;
  };
  return ButtonBuyLevelComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonBuyLevelComponent = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuyLevelDialog = require("gge-module:export_CastleBuyLevelDialog");
