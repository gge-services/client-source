Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleToggleUpgradeViewButton(__s3param0) {
    this._buttonDisp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(this._buttonDisp);
  }
  CastleToggleUpgradeViewButton.prototype.show = function () {
    this._buttonDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onUpdate));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onUpdate));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUpdate));
    this.update();
  };
  CastleToggleUpgradeViewButton.prototype.update = function () {
    var __s7local0 = __dep_export_Iso.Iso.data.objects.provider.hasUpgradeableBuilding();
    if (__s7local0) {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._buttonDisp, this.isStrategyActive);
      this._buttonDisp.toolTipText = this.isStrategyActive ? "constructionMode_hideUpgrades" : "constructionMode_showUpgrades";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._buttonDisp, false);
      this._buttonDisp.toolTipText = "constructionMode_noUpgrades";
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._buttonDisp, __s7local0);
  };
  CastleToggleUpgradeViewButton.prototype.toggle = function () {
    __dep_export_Iso.Iso.renderer.strategies.toggle(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.UPGRADE_VIEW);
  };
  CastleToggleUpgradeViewButton.prototype.onUpdate = function (__s13param0 = null) {
    this.update();
  };
  CastleToggleUpgradeViewButton.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      this.toggle();
    }
  };
  CastleToggleUpgradeViewButton.prototype.hide = function () {
    this._buttonDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUpdate));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onUpdate));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onUpdate));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onUpdate));
    __dep_export_Iso.Iso.renderer.strategies.switchBy(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.UPGRADE_VIEW, false);
  };
  Object.defineProperty(CastleToggleUpgradeViewButton.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToggleUpgradeViewButton.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToggleUpgradeViewButton.prototype, "isStrategyActive", {
    get: function () {
      return __dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.UPGRADE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  return CastleToggleUpgradeViewButton;
}();
exports.CastleToggleUpgradeViewButton = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
