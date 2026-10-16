Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function ConstructionItemsPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemsPanelButton, __s1param0);
  ConstructionItemsPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onRefreshItem));
  };
  Object.defineProperty(ConstructionItemsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Constructor;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onRefreshItem));
  };
  ConstructionItemsPanelButton.prototype.onRefreshItem = function (__s13param0 = null) {
    this.update();
  };
  ConstructionItemsPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.hasConstructorBuilding && !!__dep_export_Iso.Iso.data && __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle;
  };
  ConstructionItemsPanelButton.prototype.getButtonTooltip = function () {
    return "ringmenu_building_constructor";
  };
  ConstructionItemsPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties());
  };
  return ConstructionItemsPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.ConstructionItemsPanelButton = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
