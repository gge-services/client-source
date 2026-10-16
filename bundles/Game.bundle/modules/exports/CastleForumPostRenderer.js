Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleForumDeleteDialogProperties = require("gge-module:export_CastleForumDeleteDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleForumPostRenderer(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._postVO = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.itemDisp.btn_delete);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumPostRenderer, __s1param0);
  CastleForumPostRenderer.prototype.onClick = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      switch (__s5param0.target) {
        case this.itemDisp.btn_delete:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleForumDeleteDialog.CastleForumDeleteDialog, new __dep_export_CastleForumDeleteDialogProperties.CastleForumDeleteDialogProperties(__dep_export_CastleForumDeleteDialog.CastleForumDeleteDialog.TYPE_POST, __dep_export_CastleForumViewTopic.CastleForumViewTopic.currentShownTopicId, this.postVO.postId));
      }
    }
  };
  CastleForumPostRenderer.prototype.fillWithContent = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_playerName, new __dep_exact_92d05af59ee2ff30.TextVO(this.postVO.author)).selectable = true;
    var __s9local0 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_content, new __dep_exact_92d05af59ee2ff30.TextVO(this.postVO.content));
    __s9local0.selectable = true;
    var __s9local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getDateStringFromDate(this.postVO.creationTimestamp);
    var __s9local2 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeStringFromDate(this.postVO.creationTimestamp, __dep_export_CastleModel.CastleModel.languageData.getTextById, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_date, new __dep_exact_92d05af59ee2ff30.TextVO(__s9local1)).selectable = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.itemDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__s9local2)).selectable = true;
    this.itemDisp.mc_rank.icon_rank.gotoAndStop(this.postVO.allianceRank + 1);
    this.itemDisp.mc_rank.mouseChildren = false;
    this.itemDisp.mc_rank.toolTipText = "dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(this.postVO.allianceRank);
    this.itemDisp.btn_delete.visible = __dep_export_CastleAllianceForumData.CastleAllianceForumData.canDeletePost(this.postVO);
    this.itemDisp.btn_delete.toolTipText = "dialog_alliance_communication_eraseAnswer_tooltip";
    __s9local0.height = __s9local0.textHeight;
    var __s9local3 = this.itemDisp.txt_content.getTextFormat().size;
    var __s9local4 = __dep_exact_f855840627e6e145.int(__s9local0.textHeight + __s9local3 + CastleForumPostRenderer.TEXT_PADDING_Y);
    __s9local0.height = __s9local4;
    this.itemDisp.mc_background.height = Math.max(CastleForumPostRenderer.TEXT_MIN_HEIGHT, __s9local4);
  };
  Object.defineProperty(CastleForumPostRenderer.prototype, "itemDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostRenderer.prototype, "postVO", {
    get: function () {
      return this._postVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumPostRenderer.__initialize_static_members = function () {
    CastleForumPostRenderer.TEXT_PADDING_Y = 1;
    CastleForumPostRenderer.TEXT_MIN_HEIGHT = 135;
  };
  return CastleForumPostRenderer;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleForumPostRenderer = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleForumViewTopic = require("gge-module:export_CastleForumViewTopic");
var __dep_export_CastleForumDeleteDialog = require("gge-module:export_CastleForumDeleteDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
