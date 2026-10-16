Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_ACastleTournamentRankListItem = require("gge-module:export_ACastleTournamentRankListItem");
var __s0local0 = function (__s1param0) {
  function CastleTournamentRankListItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._playerId = -1;
    __s3local0._playerName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTournamentRankListItem, __s1param0);
  CastleTournamentRankListItem.prototype.parseItemData = function (__s5param0) {
    __s1param0.prototype.parseItemData.call(this, __s5param0);
    this._playerId = __dep_exact_f855840627e6e145.int(__s5param0[2]);
    this._playerName = __s5param0[3];
  };
  CastleTournamentRankListItem.prototype.updateBgColor = function () {
    var __s7local0 = CastleTournamentRankListItem.BACKGROUND_FRAME_BOBBY;
    if (this.isSearchTextRelevant) {
      __s7local0 = CastleTournamentRankListItem.BACKGROUND_FRAME_RELEVANT;
    } else if (this.rank <= CastleTournamentRankListItem.COLOR_TOP3_RANK) {
      __s7local0 = CastleTournamentRankListItem.BACKGROUND_FRAME_TOP3;
    } else if (this.rank <= CastleTournamentRankListItem.COLOR_TOPX_RANK) {
      __s7local0 = CastleTournamentRankListItem.BACKGROUND_FRAME_TOPX;
    }
    this.disp.mc_background.gotoAndStop(__s7local0);
  };
  Object.defineProperty(CastleTournamentRankListItem.prototype, "isSearchTextRelevant", {
    get: function () {
      return this._playerName != "" && this._playerName.toLowerCase() == this.searchFieldValue.toLowerCase();
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleTournamentRankListItem.ACastleTournamentRankListItem.prototype, "isSearchTextRelevant").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentRankListItem.prototype.updateText = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.rank)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(this._playerName)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.points)).autoFitToBounds = true;
  };
  CastleTournamentRankListItem.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      __s1param0.prototype.onClick.call(this, __s18param0);
      __s18param0.target;
      if (this._playerId >= 0) {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this._playerId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleTournamentRankListItem.__initialize_static_members = function () {
    CastleTournamentRankListItem.COLOR_TOP3_RANK = 3;
    CastleTournamentRankListItem.COLOR_TOPX_RANK = 100;
    CastleTournamentRankListItem.BACKGROUND_FRAME_TOP3 = 1;
    CastleTournamentRankListItem.BACKGROUND_FRAME_TOPX = 2;
    CastleTournamentRankListItem.BACKGROUND_FRAME_BOBBY = 3;
    CastleTournamentRankListItem.BACKGROUND_FRAME_RELEVANT = 4;
  };
  return CastleTournamentRankListItem;
}(__dep_export_ACastleTournamentRankListItem.ACastleTournamentRankListItem);
exports.CastleTournamentRankListItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
