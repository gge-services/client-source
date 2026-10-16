Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceRankItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceRankItem, __s1param0);
  CastleAllianceRankItem.prototype.customFillItem = function () {
    if (this.disp.basicButton == null) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.disp]);
    }
    this.disp.mouseChildren = false;
    this.disp.mc_icon.gotoAndStop(this.itemVO.rankID);
    this.disp.toolTipText = "dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(this.itemVO.rankID);
    this.checked = this.itemVO.isRankOfUser;
  };
  CastleAllianceRankItem.prototype.reset = function () {
    this.checked = false;
    __s1param0.prototype.reset.call(this);
  };
  Object.defineProperty(CastleAllianceRankItem.prototype, "checked", {
    set: function (__s10param0) {
      this.disp.gotoAndStop(__s10param0 ? 2 : 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceRankItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceRankItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.CastleAllianceRankItem = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
