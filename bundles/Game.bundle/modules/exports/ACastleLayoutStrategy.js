Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ACastleLayoutStrategy() {}
  ACastleLayoutStrategy.prototype.setLayout = function (__s5param0, __s5param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleLayoutStrategy.prototype.removeInterface = function (__s7param0, __s7param1 = false) {
    if (!!__s7param1 || !__s7param0.dialogCastleSwitch) {
      __s7param0.hideAllDialogs();
    }
    __s7param0.hideAllPanels();
    __s7param0.hideAllAttackPanels();
    __s7param0.removeAllIngameUIComponents();
    __s7param0.hideBackgroundLayer();
  };
  Object.defineProperty(ACastleLayoutStrategy.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  ACastleLayoutStrategy.prototype.addCorrectResourcePanel = function (__s12param0) {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __s12param0.showPanelRedirecter(__dep_export_CastleResourcePanel_Season.CastleResourcePanel_Season, null, false);
    } else {
      __s12param0.showPanelRedirecter(__dep_export_CastleResourcePanel.CastleResourcePanel, null, true);
    }
  };
  ACastleLayoutStrategy.prototype.addBuddyListPanel = function (__s16param0) {
    if (this.env.hasNetworkBuddies) {
      __s16param0.showPanelRedirecter(__dep_export_CastleBuddylistPanel.CastleBuddylistPanel, null, false);
    }
  };
  return ACastleLayoutStrategy;
}();
exports.ACastleLayoutStrategy = __s0local0;
var __dep_export_CastleBuddylistPanel = require("gge-module:export_CastleBuddylistPanel");
var __dep_export_CastleResourcePanel = require("gge-module:export_CastleResourcePanel");
var __dep_export_CastleResourcePanel_Season = require("gge-module:export_CastleResourcePanel_Season");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
