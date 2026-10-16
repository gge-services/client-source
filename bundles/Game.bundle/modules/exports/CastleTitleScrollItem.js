Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = function (__s1param0) {
  function CastleTitleScrollItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_threshold = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_threshold, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_threshold_bold = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_threshold_bold, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_title_bold = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_title_bold, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_reward = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_reward_bold = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_reward_bold, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_threshold.autoFitToBounds = true;
    __s3local0.itxt_threshold_bold.autoFitToBounds = true;
    __s3local0.itxt_reward.autoFitToBounds = true;
    __s3local0.itxt_reward_bold.autoFitToBounds = true;
    __s3local0._disp.mc_checkmark.visible = false;
    __s3local0._disp.mc_selected.visible = false;
    __s3local0._disp.mouseChildren = false;
    __s3local0._disp.actLikeButton = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleScrollItem, __s1param0);
  CastleTitleScrollItem.prototype.customFillItem = function () {
    this.setTexts();
    this.setColor();
    this._disp.mc_selected.visible = this.titleScrollItemVO.selected;
  };
  CastleTitleScrollItem.prototype.setTexts = function () {
    if (this.titleScrollItemVO.title.isTopXTitle) {
      var __s7local0 = __dep_exact_f855840627e6e145.int(this.titleScrollItemVO.title.topX);
      if (__s7local0 > 1) {
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_threshold, "Ranking_Topx", [__s7local0]);
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_threshold_bold, "Ranking_Topx", [__s7local0]);
      } else {
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_threshold, "Ranking_Top1");
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_threshold_bold, "Ranking_Top1");
      }
    } else {
      var __s7local1 = this.titleScrollItemVO.title.threshold;
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_threshold, Math.max(0, __s7local1));
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_threshold_bold, Math.max(0, __s7local1));
    }
    this.itxt_title.textContentVO.textId = this.titleScrollItemVO.title.textID;
    this.itxt_title_bold.textContentVO.textId = this.titleScrollItemVO.title.textID;
    this.itxt_reward.textContentVO.textId = this.titleScrollItemVO.title.descriptionTextVO.textId;
    this.itxt_reward.textContentVO.textReplacements = this.titleScrollItemVO.title.descriptionTextVO.textReplacements;
    this.itxt_reward_bold.textContentVO.textId = this.titleScrollItemVO.title.descriptionTextVO.textId;
    this.itxt_reward_bold.textContentVO.textReplacements = this.titleScrollItemVO.title.descriptionTextVO.textReplacements;
    this.itxt_threshold.visible = !this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_threshold_bold.visible = this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_title.visible = !this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_title_bold.visible = this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_reward.visible = !this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_reward_bold.visible = this.titleScrollItemVO.title.isTopXTitle;
  };
  CastleTitleScrollItem.prototype.setColor = function () {
    this._disp.mc_checkmark.visible = false;
    var __s13local0 = __dep_export_CastleModel.CastleModel.titleData.getHighestTitleEverHeldByThisUser(this.titleScrollItemVO.title.titleSystem);
    var __s13local1 = __dep_export_CastleModel.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(this.titleScrollItemVO.title.titleSystem);
    if (this.titleScrollItemVO.title.topX == 1) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_TOP1);
    } else if (this.titleScrollItemVO.title.isTopXTitle) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_TOPX);
    } else if (__s13local1 && this.titleScrollItemVO.title.titleID == __s13local1.titleID) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_CURRENT);
    } else if (__s13local0 && this.titleScrollItemVO.title.orderInSystem <= __s13local0.orderInSystem || __s13local1 && this.titleScrollItemVO.title.orderInSystem <= __s13local1.orderInSystem) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_REACHED);
    } else {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_NOT_REACHED);
    }
    if (this.titleScrollItemVO.title.orderInSystem <= __s13local1.orderInSystem || __s13local1 && this.titleScrollItemVO.title.orderInSystem <= __s13local1.orderInSystem) {
      this._disp.mc_checkmark.visible = true;
      if (this.disp.mc_color.currentFrame == CastleTitleScrollItem.FRAME_NOT_REACHED) {
        this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_REACHED);
      }
    }
  };
  Object.defineProperty(CastleTitleScrollItem.prototype, "titleScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleScrollItem.__initialize_static_members = function () {
    CastleTitleScrollItem.FRAME_NOT_REACHED = 1;
    CastleTitleScrollItem.FRAME_REACHED = 2;
    CastleTitleScrollItem.FRAME_CURRENT = 3;
    CastleTitleScrollItem.FRAME_TOPX = 4;
    CastleTitleScrollItem.FRAME_TOP1 = 5;
  };
  return CastleTitleScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastleTitleScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
