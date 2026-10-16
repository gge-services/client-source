Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_ACastleTournamentRankListItem = require("gge-module:export_ACastleTournamentRankListItem");
var __s0local0 = function (__s1param0) {
  function CastleAllianceTournamentRankListItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._allianceId = -1;
    __s3local0._allianceName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceTournamentRankListItem, __s1param0);
  CastleAllianceTournamentRankListItem.prototype.parseItemData = function (__s5param0) {
    __s1param0.prototype.parseItemData.call(this, __s5param0);
    this._allianceId = __dep_exact_f855840627e6e145.int(__s5param0[2][0]);
    this._allianceName = __s5param0[2][1];
  };
  CastleAllianceTournamentRankListItem.prototype.updateBgColor = function () {
    var __s7local0 = CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_DEFAULT;
    if (this.isSearchTextRelevant) {
      __s7local0 = CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_RELEVANT;
    } else if (this.ownAlliance) {
      __s7local0 = CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_OWN_ALLIANCE;
    }
    this.disp.mc_background.gotoAndStop(__s7local0);
  };
  Object.defineProperty(CastleAllianceTournamentRankListItem.prototype, "isSearchTextRelevant", {
    get: function () {
      return this._allianceName != "" && this._allianceName.toLowerCase() == this.searchFieldValue.toLowerCase() || parseInt(this.searchFieldValue) == this.rank;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleTournamentRankListItem.ACastleTournamentRankListItem.prototype, "isSearchTextRelevant").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentRankListItem.prototype, "ownAlliance", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId == this._allianceId;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentRankListItem.prototype.updateText = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.rank)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(this._allianceName)).autoFitToBounds = true;
    var __s17local0 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.points));
    __s17local0.autoFitToBounds = true;
    __s17local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleAllianceTournamentRankListItem.prototype.onClick = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      __s1param0.prototype.onClick.call(this, __s19param0);
      __s19param0.target;
      this.onItemClick();
    }
  };
  CastleAllianceTournamentRankListItem.prototype.onItemClick = function () {
    if (this._allianceId >= 0) {
      if (this._allianceId != __dep_export_CastleModel.CastleModel.userData.allianceID) {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._allianceId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      } else {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
      }
    }
  };
  CastleAllianceTournamentRankListItem.__initialize_static_members = function () {
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_DEFAULT = 1;
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_OWN_ALLIANCE = 2;
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_BOBBY = 3;
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_RELEVANT = 4;
  };
  return CastleAllianceTournamentRankListItem;
}(__dep_export_ACastleTournamentRankListItem.ACastleTournamentRankListItem);
exports.CastleAllianceTournamentRankListItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
