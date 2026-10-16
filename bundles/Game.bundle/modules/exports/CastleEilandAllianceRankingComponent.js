Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleEilandAllianceRankingComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._ownRank = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_export_CastleEilandAllianceRankingItem.CastleEilandAllianceRankingItem, new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(__dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_AQUA_POINTS)) || this).textFieldManager.registerTextField(__s3local0.disp.txt_rankTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank"));
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_allianceTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_name_default"));
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_levelTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level"));
    __s3local0.textFieldManager.registerTextField(__s3local0.disp.txt_membersTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_member")).autoFitToBounds = true;
    __s3local0.disp.icon_alliancePoints.toolTipText = "aquamarin_points_alliance_tooltip";
    __s3local0.disp.btn_search.toolTipText = "dialog_highscore_search_alliance";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandAllianceRankingComponent, __s1param0);
  CastleEilandAllianceRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "dialog_highscore_search_alliance";
  };
  CastleEilandAllianceRankingComponent.prototype.onGetHighscoreData = function (__s7param0) {
    if (this.searchName == "" && __dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.searchName = __dep_export_CastleModel.CastleModel.userData.allianceName;
    }
    __s1param0.prototype.onGetHighscoreData.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      if (this.rankingItems) {
        for (var __s7local0 = 0; __s7local0 < this.rankingItems.length; __s7local0++) {
          var __s7local1 = this.rankingItems[__s7local0];
          if (__s7local1.isOwnAlliance() && __s7local1.disp.visible) {
            this._ownRank = __dep_exact_f855840627e6e145.int(this.rankingItems[__s7local0].rank);
          }
        }
      }
    } else {
      this._ownRank = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    }
  };
  CastleEilandAllianceRankingComponent.prototype.show = function (__s16param0 = null) {
    __s1param0.prototype.show.call(this);
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onReset));
  };
  CastleEilandAllianceRankingComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onReset));
  };
  CastleEilandAllianceRankingComponent.prototype.onReset = function (__s20param0) {
    this._ownRank = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
  };
  Object.defineProperty(CastleEilandAllianceRankingComponent.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandAllianceRankingComponent;
}(require("gge-module:export_CastleGenericRankingComponent").CastleGenericRankingComponent);
exports.CastleEilandAllianceRankingComponent = __s0local0;
var __dep_export_CastleEilandAllianceRankingItem = require("gge-module:export_CastleEilandAllianceRankingItem");
