Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function HospitalPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HospitalPanelButton, __s1param0);
  Object.defineProperty(HospitalPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Hospital;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  HospitalPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshItem));
  };
  HospitalPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshItem));
  };
  HospitalPanelButton.prototype.onRefreshItem = function (__s13param0) {
    this.update();
  };
  HospitalPanelButton.prototype.getButtonTooltip = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("hospital_name");
  };
  HospitalPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL));
  };
  HospitalPanelButton.prototype.isButtonVisible = function () {
    return !!__dep_export_Iso.Iso.data && __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.HOSPITAL);
  };
  HospitalPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.isInMyCastle;
  };
  return HospitalPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.HospitalPanelButton = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
