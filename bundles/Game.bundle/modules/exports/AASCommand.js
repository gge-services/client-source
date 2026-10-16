Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SearchListAllianceItemVO = require("gge-module:export_SearchListAllianceItemVO");
var __dep_export_CastleSearchAllianceDialogProperties = require("gge-module:export_CastleSearchAllianceDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleLargeYesNoDialogProperties = require("gge-module:export_CastleLargeYesNoDialogProperties");
var __s0local0 = function (__s1param0) {
  function AASCommand() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AASCommand, __s1param0);
  Object.defineProperty(AASCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_AUTO_ALLIANCE_SEARCH;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AASCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    var __s9local1;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9param1[1]);
        if (__s9local2.gal) {
          __dep_export_CastleModel.CastleModel.userData.parse_GAL(__s9local2.gal);
          if (__s9local2.gam) {
            __dep_export_CastleModel.CastleModel.armyData.parse_GAM(__s9local2.gam);
          }
          __s9local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_joiningAlliance_failed_title");
          __s9local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_joiningAlliance_failed_copy");
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog, new __dep_export_CastleLargeYesNoDialogProperties.CastleLargeYesNoDialogProperties(__s9local0, __s9local1, this.bindFunction(this.showAllianceDialog), null, null, "", "", false));
        } else if (__s9local2.AL) {
          var __s9local3 = [];
          for (var __s9local4 = 0, __s9local5 = __s9local2.AL; __s9local4 < __s9local5.length; __s9local4++) {
            var __s9local6 = __s9local5[__s9local4];
            if (__s9local6 !== undefined) {
              var __s9local7 = new __dep_export_SearchListAllianceItemVO.SearchListAllianceItemVO();
              __s9local7.parseItem(__s9local6);
              __s9local3.push(__s9local7);
            }
          }
          if (__s9local3.length == 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties("dialog_noAllianceFound_title", "dialog_noAllianceFound_desc", function () {
              __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewAllianceDialog.CastleNewAllianceDialog);
            }, this.bindFunction(this.showOrUpdateSearchDialog), this.bindFunction(this.showOrUpdateSearchDialog)));
          } else {
            this.showOrUpdateSearchDialog(__s9local3);
          }
        }
    }
    return false;
  };
  AASCommand.prototype.showOrUpdateSearchDialog = function (__s22param0) {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isDialogVisibleByName(__dep_export_CastleSearchAllianceDialog.CastleSearchAllianceDialog)) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleAllianceSearchEvent.CastleAllianceSearchEvent(__dep_export_CastleAllianceSearchEvent.CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, __s22param0));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSearchAllianceDialog.CastleSearchAllianceDialog, new __dep_export_CastleSearchAllianceDialogProperties.CastleSearchAllianceDialogProperties(__s22param0));
    }
  };
  AASCommand.prototype.showAllianceDialog = function (__s26param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
  };
  return AASCommand;
}(__dep_exact_9e901e8e2483a22f.BasicCommand);
exports.AASCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSearchAllianceDialog = require("gge-module:export_CastleSearchAllianceDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleLargeYesNoDialog = require("gge-module:export_CastleLargeYesNoDialog");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleNewAllianceDialog = require("gge-module:export_CastleNewAllianceDialog");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleAllianceSearchEvent = require("gge-module:export_CastleAllianceSearchEvent");
