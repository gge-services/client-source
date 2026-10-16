Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function BreweryPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BreweryPanelButton, __s1param0);
  BreweryPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET, this.bindFunction(this.onBreweryBuildingDataSet));
  };
  BreweryPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET, this.bindFunction(this.onBreweryBuildingDataSet));
  };
  BreweryPanelButton.prototype.onBreweryBuildingDataSet = function (__s9param0) {
    this.update();
  };
  Object.defineProperty(BreweryPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Mead;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  BreweryPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO && !!__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && !__dep_export_CastleModel.CastleModel.breweryData.isBreweryBuildingUnderConstruction && __dep_export_CastleModel.CastleModel.breweryData.isBreweryBuildingBuilt;
  };
  BreweryPanelButton.prototype.getButtonTooltip = function () {
    return "dialog_relicBrewery_header";
  };
  BreweryPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleBreweryDialog.CastleBreweryDialog);
  };
  return BreweryPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.BreweryPanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleBreweryDialog = require("gge-module:export_CastleBreweryDialog");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
