Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogTitlesItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2) || this;
    __s3local0._titleVO = __s3param1;
    __s3local0._clickFeedbackBehaviour = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3local0._headerMC);
    __s3local0._headerMC.mouseChildren = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3local0._titleVO.textID));
    var __s3local1 = __s3local0._titleVO.topX;
    var __s3local2 = __s3local0._titleVO.nextTitleID > -1 ? __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s3local0._titleVO.nextTitleID).topX + 1 : __s3local1;
    if (__s3local2 != __s3local1) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rankingRange_linebreak_multi", [__s3local2, __s3local1]));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rankingRange_linebreak_single", [__s3local1]));
    }
    __s3local0._headerMC.gotoAndStop(__s3local0.getFrame(__s3local2, __s3local1));
    __s3local0._headerMC.mc_collapsed.visible = true;
    __s3local0._headerMC.mc_collapsed_arrow.visible = true;
    __s3local0._headerMC.mc_expanded.visible = false;
    __s3local0._headerMC.mc_expanded_arrow.visible = false;
    __s3local0._headerMC.bg_inactive.visible = !__dep_export_CastleModel.CastleModel.userData.isInAlliance || __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.currentIslandRank != 1;
    var __s3local3 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._contentMC.txt_description, __s3local0._titleVO.descriptionTextVO);
    __s3local3.height = __s3local3.textHeight;
    __s3local0._contentMC.mc_bg.height = __s3local3.textHeight;
    __s3local0._contentMC.mc_bg2.height = __s3local3.textHeight + 2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogTitlesItem, __s1param0);
  CastleStormIslandsMainDialogTitlesItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._clickFeedbackBehaviour.addEventListener();
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._clickFeedbackBehaviour.removeEventListener();
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target) && this.isEnabled) {
      switch (__s11param0.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.expand = function (__s15param0, __s15param1, __s15param2 = false) {
    __s1param0.prototype.expand.call(this, __s15param0, __s15param1, __s15param2);
    this._headerMC.mc_collapsed.visible = !this._isExpanded;
    this._headerMC.mc_collapsed_arrow.visible = !this._isExpanded;
    this._headerMC.mc_expanded.visible = this._isExpanded;
    this._headerMC.mc_expanded_arrow.visible = this._isExpanded;
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.applyStateChange = function () {
    __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this.contentMC);
    __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this.contentMC.mask);
    if (this._isExpanded) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC, this._properties.expandDuration, {
        autoAlpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      });
    } else {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC, this._properties.expandDuration, {
        autoAlpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
    }
    if (this._properties.isVertical) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC.mask, this._properties.expandDuration, {
        height: this._isExpanded ? this.contentMC.mc_bg2.height : 0,
        ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    } else {
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.contentMC.mask, this._properties.expandDuration, {
        width: this._isExpanded ? this.contentMC.width : 0,
        ease: __dep_exact_608de47b6498f9b0_1.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    }
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.getFrame = function (__s23param0, __s23param1) {
    var __s23local0 = __dep_export_CastleModel.CastleModel.titleData.getTitlesFromSystem(__dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE).length;
    if (__dep_export_CastleModel.CastleModel.userData.currentIslandRank >= __s23param0 && __dep_export_CastleModel.CastleModel.userData.currentIslandRank <= __s23param1 && __dep_export_CastleModel.CastleModel.userData.aquaPoints > 0) {
      return 4;
    } else if (this._titleVO.orderInSystem >= __s23local0 - 3) {
      return __s23local0 - this._titleVO.orderInSystem;
    } else {
      return 5;
    }
  };
  return CastleStormIslandsMainDialogTitlesItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.CastleStormIslandsMainDialogTitlesItem = __s0local0;
