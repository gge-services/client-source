Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ListAllianceApplicationItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.actLikeButton = true;
    __s3param0.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ListAllianceApplicationItem, __s1param0);
  ListAllianceApplicationItem.prototype.customFillItem = function () {
    if (!this.itxt_date || !this.itxt_date.textContentVO) {
      this.itxt_date = this.textFieldManager.registerTextField(this.disp.txt_date, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_inbox_timeAgo", [0]));
      this.itxt_date.autoFitToBounds = true;
    }
    if (!this.itxt_name || !this.itxt_name.textContentVO) {
      this.itxt_name = this.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    }
    if (!this.itxt_honor || !this.itxt_honor.textContentVO) {
      this.itxt_honor = this.textFieldManager.registerTextField(this.disp.txt_honor, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    }
    if (!this.itxt_distance || !this.itxt_distance.textContentVO) {
      this.itxt_distance = this.textFieldManager.registerTextField(this.disp.txt_distance, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    }
    if (!this.itxt_level || !this.itxt_level.textContentVO) {
      this.itxt_level = this.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    }
    this.itxt_date.textContentVO.textId = "dialog_inbox_timeAgo";
    this.itxt_date.textContentVO.textReplacements = [this.itemVO.listVO.getApplicationDateString()];
    this.itxt_name.textContentVO.stringValue = this.itemVO.listVO.playerOwnerInfo.playerName;
    this.itxt_honor.textContentVO.stringValue = String(this.itemVO.listVO.playerOwnerInfo.honor);
    this.itxt_distance.textContentVO.stringValue = String(this.itemVO.listVO.distance);
    this.itxt_level.textContentVO.stringValue = String(this.itemVO.listVO.playerOwnerInfo.playerLevel);
  };
  Object.defineProperty(ListAllianceApplicationItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListAllianceApplicationItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ListAllianceApplicationItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ListAllianceApplicationItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
