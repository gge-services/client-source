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
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleSingleplayerRankingItem(__s3param0) {
    this._rank = 0;
    this._amount = 0;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp, 1.02);
  }
  CastleSingleplayerRankingItem.prototype.onMouseOver = function (__s5param0) {};
  CastleSingleplayerRankingItem.prototype.onMouseOut = function (__s7param0) {};
  CastleSingleplayerRankingItem.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this._ownerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleSingleplayerRankingItem.prototype.update = function (__s12param0, __s12param1, __s12param2) {
    this._ownerInfo = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    if (__s12param0.length > 2) {
      this._ownerInfo.fillFromParamObject(__s12param0[2]);
      this._rank = __dep_exact_f855840627e6e145.int(__s12param0[0]);
      this._amount = __dep_exact_f855840627e6e145.int(__s12param0[1]);
    } else {
      this._ownerInfo.fillFromParamObject(__s12param0[1]);
      this._rank = __dep_exact_f855840627e6e145.int(__s12param0[0]);
      this._amount = 0;
    }
    var __s12local0 = __s12param2 != "" ? __s12param2 : __dep_export_CastleModel.CastleModel.userData.userName;
    var __s12local1 = this._rank <= 1;
    var __s12local2 = this._rank == 2;
    var __s12local3 = this.isSearchedForPlayer(__s12local0);
    this.disp.mc_first.visible = __s12local1 && !__s12local3;
    this.disp.mc_second.visible = __s12local2 && !__s12local3;
    this.disp.mc_own.visible = __s12local3 || __s12local1 || __s12local2;
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._rank), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(this._ownerInfo.playerName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_alliance, new __dep_exact_92d05af59ee2ff30_2.TextVO(this._ownerInfo.isInAlliance ? this._ownerInfo.allianceName : " - "), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.NumberVO(this._ownerInfo.playerLevel), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_distance, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getDistanceToOwnMainCastle()), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    if (this.disp.txt_amount) {
      CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._amount), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleSingleplayerRankingItem.prototype.getDistanceToOwnMainCastle = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    return Math.round(__dep_export_MapHelper.MapHelper.getShortestDistance(this._ownerInfo.getMainCastlePositionByKingdomID(0), new __s0local0(__s17local0.absAreaPosX, __s17local0.absAreaPosY)));
  };
  CastleSingleplayerRankingItem.prototype.isSearchedForPlayer = function (__s19param0) {
    var __s19local0 = parseInt(__s19param0);
    if (isNaN(__s19local0)) {
      return this._ownerInfo.playerName == __s19param0;
    } else {
      return __s19local0 == this._rank;
    }
  };
  Object.defineProperty(CastleSingleplayerRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSingleplayerRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSingleplayerRankingItem, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSingleplayerRankingItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSingleplayerRankingItem;
}();
exports.CastleSingleplayerRankingItem = __s0local1;
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICastleGenericRankingItem");
