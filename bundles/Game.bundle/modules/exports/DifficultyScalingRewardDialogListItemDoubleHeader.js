Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventAutoScalingDifficultyTypeVO = require("gge-module:export_EventAutoScalingDifficultyTypeVO");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_DifficultyScalingRewardDialogListItemHelper = require("gge-module:export_DifficultyScalingRewardDialogListItemHelper");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingRewardDialogListItemDoubleHeader(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("DiffRewDoubleHeader"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingRewardDialogListItemDoubleHeader, __s1param0);
  Object.defineProperty(DifficultyScalingRewardDialogListItemDoubleHeader.prototype, "difficulties", {
    get: function () {
      return [__dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this._data[0][0]), __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this._data[0][1])];
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardDialogListItemDoubleHeader.prototype.fill = function () {
    __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this._headerMC.mc0.mc_icon, this.difficulties[0], 46, 46, null);
    __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this._headerMC.mc1.mc_icon, this.difficulties[1], 46, 46, null);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.difficulties[0].name_textID));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc1.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.difficulties[1].name_textID));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._contentMC);
    var __s7local0 = 0;
    for (var __s7local1 = 0; __s7local1 < this.rewardArrays.length; __s7local1++) {
      var __s7local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("EventDifficultyRewardListItem"))();
      __dep_export_DifficultyScalingRewardDialogListItemHelper.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(__s7local2, [0, this.rewardArrays[__s7local1][0], this.rewardArrays[__s7local1][1], 4]);
      this._contentMC.addChild(__s7local2);
      __s7local2.mc_end.visible = false;
      __s7local2.y = __s7local0;
      __s7local0 += __s7local2.height + 6;
    }
    if (this.difficulties[1].difficultyType.difficultyTypeID != __dep_export_EventAutoScalingDifficultyTypeVO.EventAutoScalingDifficultyTypeVO.EASY_TYPE_ID) {
      var __s7local3 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LowerRewardsIncludedMC"))();
      this._contentMC.addChild(__s7local3);
      __s7local3.y = __s7local0;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s7local3.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_rewardInfo_desc"));
    }
    this.disp.headerMC.mouseChildren = false;
    this.disp.mouseChildren = true;
    this.disp.headerMC.actLikeButton = true;
    this._contentMC.mask = null;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMask(this._contentMC);
    this._contentMC.alpha = 0;
    this._contentMC.visible = false;
    this._contentMC.mask.height = 0;
    this.applyStateChange();
  };
  DifficultyScalingRewardDialogListItemDoubleHeader.prototype.applyStateChange = function () {
    __s1param0.prototype.applyStateChange.call(this);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulties[0].name_textID)))).visible = this.isExpanded;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_unselected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulties[0].name_textID)))).visible = !this.isExpanded;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc1.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulties[1].name_textID)))).visible = this.isExpanded;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc1.txt_unselected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulties[1].name_textID)))).visible = !this.isExpanded;
  };
  return DifficultyScalingRewardDialogListItemDoubleHeader;
}(require("gge-module:export_DifficultyScalingRewardDialogListItemSingleHeader").DifficultyScalingRewardDialogListItemSingleHeader);
exports.DifficultyScalingRewardDialogListItemDoubleHeader = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
