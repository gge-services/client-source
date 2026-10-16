Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function EquipmentPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentPanelButton, __s1param0);
  EquipmentPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED, this.bindFunction(this.onNewRelicsUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.listenOnXPChanged();
  };
  EquipmentPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED, this.bindFunction(this.onNewRelicsUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  EquipmentPanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(__dep_export_APanelButton.APanelButton.HIGHLIGHT_TYPE_RED, __dep_export_CastleModel.CastleModel.equipData.isInventoryFull || __dep_export_CastleModel.CastleModel.gemData.isInventoryFull);
    var __s9local0 = __dep_export_CastleModel.CastleModel.generalsData.getTotalAmountOfAvailableDraws() > 0;
    this.setMark(__dep_export_CastleModel.CastleModel.equipData.hasNewRelics || __s9local0 && !this.isSubMenuExpanded);
  };
  EquipmentPanelButton.prototype.expandSubMenu = function (__s11param0, __s11param1 = true) {
    __s1param0.prototype.expandSubMenu.call(this, __s11param0, __s11param1);
    this.update();
  };
  Object.defineProperty(EquipmentPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Equipment;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT);
  };
  EquipmentPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_equipment";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT]);
    }
  };
  Object.defineProperty(EquipmentPanelButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog);
  };
  EquipmentPanelButton.prototype.onNewRelicsUpdated = function (__s29param0) {
    this.update();
  };
  EquipmentPanelButton.prototype.onInventorySpaceUpdate = function (__s31param0 = null) {
    this.update();
  };
  EquipmentPanelButton.prototype.onHubUpdated = function (__s33param0) {
    this.update();
  };
  EquipmentPanelButton.prototype.onCurrenciesUpdated = function (__s35param0) {
    this.update();
  };
  return EquipmentPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.EquipmentPanelButton = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
