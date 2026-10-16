Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceMemberScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.mc_name.actLikeButton = true;
    var __s3local1 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    __s3local0.itxt_playerName = __s3local1.registerTextField(__s3param0.mc_name.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3param0.mc_name.actLikeButton = true;
    __s3param0.mc_name.mouseChildren = false;
    __s3local0.itxt_level = __s3local1.registerTextField(__s3param0.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_distance = __s3local1.registerTextField(__s3param0.txt_distance, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_might = __s3local1.registerTextField(__s3param0.txt_might, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceMemberScrollItem, __s1param0);
  CastleAllianceMemberScrollItem.prototype.customFillItem = function () {
    if (this.itxt_playerName.textContentVO) {
      this.itxt_playerName.textContentVO.stringValue = this.memberInfo.playerName;
    }
    this.itxt_level.textContentVO.numberValue = this.memberInfo.playerLevel;
    this.itxt_distance.textContentVO.numberValue = this.scrollItem.distanceToTarget;
    this.itxt_might.textContentVO.numberValue = this.scrollItem.ownerInfoVO.might;
    this.disp.mc_rank.mouseChildren = false;
    this.disp.mc_rank.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(this.memberInfo.allianceRank));
    this.disp.mc_rank.icon_rank.gotoAndStop(this.memberInfo.allianceRank + 1);
  };
  CastleAllianceMemberScrollItem.prototype.onMouseClick = function (__s8param0) {
    __s1param0.prototype.onMouseClick.call(this, __s8param0);
    if (__s8param0.target == this.disp.mc_name) {
      CastleAllianceMemberScrollItem.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.memberInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  Object.defineProperty(CastleAllianceMemberScrollItem.prototype, "memberInfo", {
    get: function () {
      return this._scrollItemVO.ownerInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMemberScrollItem.prototype, "scrollItem", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceMemberScrollItem, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceMemberScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastleAllianceMemberScrollItem = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
