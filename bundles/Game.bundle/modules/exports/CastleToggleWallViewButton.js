Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleToggleWallViewButton(__s3param0) {
    this._buttonDisp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(this._buttonDisp);
  }
  CastleToggleWallViewButton.prototype.show = function () {
    this._buttonDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
    this.update();
  };
  CastleToggleWallViewButton.prototype.onRenderStrategyChanged = function (__s7param0) {
    this.update();
  };
  CastleToggleWallViewButton.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      this.toggle();
    }
  };
  CastleToggleWallViewButton.prototype.update = function () {
    var __s12local0 = !this.layoutManager.isInTreasureCamp && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID;
    if (__s12local0) {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._buttonDisp, !this.isStrategyActive);
      this._buttonDisp.toolTipText = this.isStrategyActive ? "constructionMode_showWalls" : "constructionMode_hideWalls";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._buttonDisp, false);
      this._buttonDisp.toolTipText = "constructionMode_hideWalls_notAvailable";
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._buttonDisp, __s12local0);
  };
  CastleToggleWallViewButton.prototype.toggle = function () {
    __dep_export_Iso.Iso.renderer.strategies.toggle(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
  };
  CastleToggleWallViewButton.prototype.hide = function () {
    this._buttonDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
  };
  Object.defineProperty(CastleToggleWallViewButton.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToggleWallViewButton.prototype, "isStrategyActive", {
    get: function () {
      return __dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  return CastleToggleWallViewButton;
}();
exports.CastleToggleWallViewButton = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
