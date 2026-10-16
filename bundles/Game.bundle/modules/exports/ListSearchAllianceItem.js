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
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function ListSearchAllianceItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __s3local0.itxt_allianceName = __s3local0.textFieldManager.registerTextField(__s3param0.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxt_distance = __s3local0.textFieldManager.registerTextField(__s3param0.txt_distance, new __dep_exact_92d05af59ee2ff30_1.NumberVO(0));
    __s3local0.itxt_member = __s3local0.textFieldManager.registerTextField(__s3param0.txt_member, new __dep_exact_92d05af59ee2ff30_1.NumberVO(0));
    __s3local0.itxt_language = __s3local0.textFieldManager.registerTextField(__s3param0.txt_language, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ListSearchAllianceItem, __s1param0);
  ListSearchAllianceItem.prototype.customFillItem = function () {
    this.itxt_allianceName.textContentVO.stringValue = this.itemVO.listVO.allianceName;
    this.itxt_distance.textContentVO.numberValue = Math.round(this.itemVO.listVO.distance * 10) / 10;
    this.itxt_member.textContentVO.numberValue = this.itemVO.listVO.memberCount;
    this.itxt_language.textContentVO.textId = this.itemVO.listVO.allianceLanguage ? "language_native_" + this.itemVO.listVO.allianceLanguage : "dialog_allLanguages_desc";
  };
  Object.defineProperty(ListSearchAllianceItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListSearchAllianceItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ListSearchAllianceItem.prototype.onMouseClick = function (__s11param0) {
    __s1param0.prototype.onMouseClick.call(this, __s11param0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this.itemVO.listVO.allianceID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  return ListSearchAllianceItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ListSearchAllianceItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
