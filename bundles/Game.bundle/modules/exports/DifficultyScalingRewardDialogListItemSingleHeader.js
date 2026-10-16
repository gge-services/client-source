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
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_DifficultyScalingRewardDialogListItemHelper = require("gge-module:export_DifficultyScalingRewardDialogListItemHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function DifficultyScalingRewardDialogListItemSingleHeader(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param2 || new (__dep_exact_81dacdf05bd32292.getDefinitionByName("DiffRewSingleHeader"))(), __s3param1) || this;
    __s3local0._data = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingRewardDialogListItemSingleHeader, __s1param0);
  Object.defineProperty(DifficultyScalingRewardDialogListItemSingleHeader.prototype, "difficulty", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this._data[0][0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingRewardDialogListItemSingleHeader.prototype, "rewardArrays", {
    get: function () {
      return this._data[1];
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.fill = function () {
    this._headerMC.mouseChildren = false;
    this._headerMC.actLikeButton = true;
    __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this._headerMC.mc0.mc_icon, this.difficulty, 46, 46, null);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._contentMC);
    var __s9local0 = 0;
    for (var __s9local1 = 0; __s9local1 < this.rewardArrays.length; __s9local1++) {
      var __s9local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("EventDifficultyRewardListItem"))();
      __dep_export_DifficultyScalingRewardDialogListItemHelper.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(__s9local2, [0, this.rewardArrays[__s9local1][0], this.rewardArrays[__s9local1][1], 4]);
      if (__s9local2.headerMC && __s9local2.headerMC.mc_end) {
        __s9local2.headerMC.mc_end.visible = false;
      }
      this._contentMC.addChild(__s9local2);
      __s9local2.y = __s9local0;
      __s9local0 += __s9local2.height;
    }
    if (this.difficulty.difficultyType.difficultyTypeID != __dep_export_EventAutoScalingDifficultyTypeVO.EventAutoScalingDifficultyTypeVO.EASY_TYPE_ID) {
      var __s9local3 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LowerRewardsIncludedMC"))();
      this._contentMC.addChild(__s9local3);
      __s9local3.y = __s9local0;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9local3.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_rewardInfo_desc"));
    }
    this.disp.headerMC.mouseChildren = false;
    this.disp.mouseChildren = true;
    this.disp.headerMC.actLikeButton = true;
    this._contentMC.mask = null;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMask(this._contentMC);
    this._contentMC.alpha = 0;
    this._contentMC.visible = false;
    this._contentMC.mask.height = 0;
    this._headerMC.mc_over.visible = false;
    this._headerMC.mc_down.visible = false;
    this.applyStateChange();
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.applyStateChange = function () {
    __s1param0.prototype.applyStateChange.call(this);
    this._headerMC.mc_selected.visible = this.isExpanded;
    this._contentMC.visible = this.isExpanded;
    if (this.difficulty) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulty.name_textID)))).visible = this.isExpanded;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_unselected, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.difficulty.name_textID)))).visible = !this.isExpanded;
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      __s1param0.prototype.onClick.call(this, __s18param0);
      switch (__s18param0.target) {
        case this.disp.headerMC:
          this.expand(!this.isExpanded, true);
      }
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseOver = function (__s28param0) {
    this._headerMC.mc_over.visible = true;
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseOut = function (__s30param0) {
    this._headerMC.mc_over.visible = false;
    this._headerMC.mc_down.visible = false;
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseDown = function (__s32param0) {
    this._headerMC.mc_down.visible = true;
    this._headerMC.mc_over.visible = false;
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseUp = function (__s34param0) {
    this._headerMC.mc_down.visible = false;
  };
  return DifficultyScalingRewardDialogListItemSingleHeader;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.DifficultyScalingRewardDialogListItemSingleHeader = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
