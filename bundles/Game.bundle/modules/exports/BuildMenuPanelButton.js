Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function BuildMenuPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuildMenuPanelButton, __s1param0);
  BuildMenuPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onAmountChanged));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onAmountChanged));
  };
  BuildMenuPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onAmountChanged));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onAmountChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  BuildMenuPanelButton.prototype.updateOnVisible = function () {
    __s1param0.prototype.updateOnVisible.call(this);
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount());
    this.setAmount(__s9local0 > 0 && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastle, __s9local0);
  };
  Object.defineProperty(BuildMenuPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_BuildItems;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  BuildMenuPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle;
  };
  BuildMenuPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_build";
    } else {
      return "alert_never_available";
    }
  };
  Object.defineProperty(BuildMenuPanelButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  BuildMenuPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.hideAllIngameUIComponents();
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
  };
  BuildMenuPanelButton.prototype.onAmountChanged = function (__s27param0) {
    this.update();
  };
  return BuildMenuPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.BuildMenuPanelButton = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
