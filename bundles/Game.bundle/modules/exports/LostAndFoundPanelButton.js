Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleLostAndFoundDataEvent = require("gge-module:export_CastleLostAndFoundDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function LostAndFoundPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LostAndFoundPanelButton, __s1param0);
  LostAndFoundPanelButton.prototype.addEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  LostAndFoundPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleLostAndFoundDataEvent.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  LostAndFoundPanelButton.prototype.updateOnVisible = function () {
    __s1param0.prototype.updateOnVisible.call(this);
    var __s9local0 = __dep_exact_f855840627e6e145.int(Math.min(__dep_export_CastleModel.CastleModel.lostAndFoundData.getItemAmount(), 99));
    this.setAmount(__s9local0 > 0, __s9local0);
  };
  Object.defineProperty(LostAndFoundPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_lostAndFound_Relicus;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  LostAndFoundPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND;
  };
  LostAndFoundPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_lostAndFound";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND]);
    }
  };
  LostAndFoundPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_LostAndFoundDialog.LostAndFoundDialog);
  };
  LostAndFoundPanelButton.prototype.onDataUpdated = function (__s23param0) {
    this.update();
  };
  return LostAndFoundPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.LostAndFoundPanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_LostAndFoundDialog = require("gge-module:export_LostAndFoundDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
