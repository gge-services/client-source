Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_GachaEventMainDialog = require("gge-module:export_GachaEventMainDialog");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function DistrictGachaEventPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DistrictGachaEventPanelButton, __s1param0);
  DistrictGachaEventPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  Object.defineProperty(DistrictGachaEventPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Gacha;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  DistrictGachaEventPanelButton.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  DistrictGachaEventPanelButton.prototype.onRefreshItem = function (__s13param0 = null) {
    this.update();
  };
  DistrictGachaEventPanelButton.prototype.isButtonVisible = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DECO_GACHA);
    return !!__s15local0 && __s15local0.minLevel <= __dep_export_CastleModel.CastleModel.userData.level;
  };
  DistrictGachaEventPanelButton.prototype.getButtonTooltip = function () {
    return "tooltip_gachaName_GachaDeco2x2";
  };
  DistrictGachaEventPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_GachaEventMainDialog.GachaEventMainDialog);
  };
  return DistrictGachaEventPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.DistrictGachaEventPanelButton = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
