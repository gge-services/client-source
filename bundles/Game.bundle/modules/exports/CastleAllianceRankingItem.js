Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
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
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function () {
  function CastleAllianceRankingItem(__s3param0) {
    this._rank = 0;
    this._amount = 0;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp, 1.02);
  }
  CastleAllianceRankingItem.prototype.onMouseOver = function (__s5param0) {};
  CastleAllianceRankingItem.prototype.onMouseOut = function (__s7param0) {};
  CastleAllianceRankingItem.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      __s9param0.target;
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.userData.allianceID == this._allianceInfo.allianceId) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._allianceInfo.allianceId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleAllianceRankingItem.prototype.update = function (__s14param0, __s14param1, __s14param2) {
    this._allianceInfo = new __dep_export_AllianceHighscoreInfoVO.AllianceHighscoreInfoVO();
    this._allianceInfo.fillFromParamObject(__s14param0[2]);
    this._rank = __dep_exact_f855840627e6e145.int(__s14param0[0]);
    this._amount = __dep_exact_f855840627e6e145.int(__s14param0[1]);
    this.disp.visible = true;
    var __s14local0 = __s14param2.toLowerCase() == this._allianceInfo.allianceName.toLowerCase() || __s14param2 == this._rank.toString();
    var __s14local1 = this._rank <= 1;
    var __s14local2 = this._rank == 2;
    var __s14local3 = __dep_export_CastleModel.CastleModel.userData.isInAlliance && this._allianceInfo.allianceName.toLowerCase() == __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceName.toLowerCase() || __s14local0;
    this.disp.mc_first.visible = __s14local1 && !__s14local3;
    this.disp.mc_second.visible = __s14local2 && !__s14local3;
    this.disp.mc_own.visible = __s14local3 || __s14local1 || __s14local2;
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._rank), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this._allianceInfo.allianceName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_fameLevel, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(this._allianceInfo.allianceCurrentFame)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_membercount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._allianceInfo.memberAmount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleAllianceRankingItem.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._amount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
  };
  Object.defineProperty(CastleAllianceRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankingItem, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankingItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceRankingItem;
}();
exports.CastleAllianceRankingItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleGenericRankingItem");
