Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHighscoreInfoVO = require("gge-module:export_AllianceHighscoreInfoVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __s0local0 = function () {
  function CastleEilandAllianceRankingItem(__s3param0) {
    this._rank = 0;
    this._amount = 0;
    this._disp = __s3param0;
    this._disp.mouseChildren = true;
    this.disp.mc_kingIndicator.visible = false;
    this.disp.mc_kingIndicator.toolTipText = "dialog_eiland_currentStormlord_tooltip";
    this.clearTextfields();
  }
  CastleEilandAllianceRankingItem.prototype.onMouseOver = function (__s5param0) {};
  CastleEilandAllianceRankingItem.prototype.onMouseOut = function (__s7param0) {};
  CastleEilandAllianceRankingItem.prototype.onClick = function (__s9param0) {
    if (this.isOwnAlliance()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._allianceInfo.allianceId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleEilandAllianceRankingItem.prototype.update = function (__s13param0, __s13param1, __s13param2) {
    var __s13local0 = new __dep_export_AllianceHighscoreInfoVO.AllianceHighscoreInfoVO();
    __s13local0.fillFromParamObject(__s13param0[3]);
    this._allianceInfo = __s13local0;
    this._rank = __dep_exact_f855840627e6e145.int(__s13param0[1]);
    this._amount = __dep_exact_f855840627e6e145.int(__s13param0[2]);
    this.clearTextfields();
    var __s13local1 = __dep_export_CastleGame.CastleGame.BODY_FONT;
    if (__s13param2.toLowerCase() == this._allianceInfo.allianceName.toLowerCase() || __s13param2 == this._rank.toString()) {
      __s13local1 = __dep_export_CastleGame.CastleGame.HEADER_FONT;
    }
    this.disp.txt_rank.textFormat.font = __s13local1;
    this.disp.txt_name.textFormat.font = __s13local1;
    this.disp.txt_level.textFormat.font = __s13local1;
    this.disp.txt_members.textFormat.font = __s13local1;
    this.disp.txt_alliancePoints.textFormat.font = __s13local1;
    this.disp.bg.gotoAndStop(this._rank == 1 ? 3 : this._rank <= __dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK ? 2 : 1);
    this.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._rank));
    this.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this._allianceInfo.allianceName));
    this.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(this._allianceInfo.allianceCurrentFame)));
    this.textFieldManager.registerTextField(this.disp.txt_members, new __dep_exact_92d05af59ee2ff30_1.NumberVO(this._allianceInfo.memberAmount));
    this.textFieldManager.registerTextField(this.disp.txt_alliancePoints, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._amount));
    this.disp.mc_kingIndicator.visible = __s13param0[0];
  };
  CastleEilandAllianceRankingItem.prototype.clearTextfields = function () {
    this.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_members, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.textFieldManager.registerTextField(this.disp.txt_alliancePoints, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
  };
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandAllianceRankingItem.prototype.isOwnAlliance = function () {
    return !!this._allianceInfo && !!__dep_export_CastleModel.CastleModel.userData.isInAlliance && this._allianceInfo.allianceId == __dep_export_CastleModel.CastleModel.userData.allianceID;
  };
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandAllianceRankingItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandAllianceRankingItem;
}();
exports.CastleEilandAllianceRankingItem = __s0local0;
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleEilandRewardsVO = require("gge-module:export_CastleEilandRewardsVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleGenericRankingItem");
