Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function KingdomMapPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingdomMapPanelButton, __s1param0);
  KingdomMapPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  KingdomMapPanelButton.prototype.updateOnVisible = function () {
    this.setMark(!!__dep_export_CastleModel.CastleModel.kingdomData.getKingdomThatIsReadyForUnlock());
  };
  KingdomMapPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP && __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MAP_OF_KINGDOMS);
  };
  KingdomMapPanelButton.prototype.isButtonVisible = function () {
    return !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  KingdomMapPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled() || __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP) {
      return "kingdom_map";
    } else {
      return __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MAP_OF_KINGDOMS;
    }
  };
  Object.defineProperty(KingdomMapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_kingdomMap_Relicus;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  KingdomMapPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
  };
  return KingdomMapPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.KingdomMapPanelButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
