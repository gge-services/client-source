Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_Pagination = require("gge-module:export_Pagination");
var __dep_export_PaginationArrows = require("gge-module:export_PaginationArrows");
var __dep_export_PaginationDots = require("gge-module:export_PaginationDots");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __dep_export_LordEffectItem = require("gge-module:export_LordEffectItem");
var __s0local0 = createjs.Rectangle;
var __s0local1 = createjs.ColorFilter;
var __s0local2 = function (__s1param0) {
  function LordEffectDialogComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __s3local0._pagination = new __dep_export_Pagination.Pagination(__s3local0, LordEffectDialogComponent.MAX_PAGES, false, true);
    __s3local0._paginationDots = new __dep_export_PaginationDots.PaginationDots(__s3local0, __s3local0._pagination, __s3local0._disp.categorySelection.mc_dotContainer.mc_dot);
    __s3local0._pagination.addControl(__s3local0._paginationDots);
    __s3local0._pagination.addControl(new __dep_export_PaginationArrows.PaginationArrows(__s3local0, __s3local0._pagination));
    __s3local0._pagination.addControl(new __dep_export_PaginationMouseWheel.PaginationMouseWheel(__s3local0._disp.categorySelection, __s3local0._pagination));
    var __s3local1 = new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical();
    __s3local0.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0._disp.effectList.mc_slider).addMouseWheelElements([__s3local0._disp.effectList]), __s3local1);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMaskFromMovieClip(__s3local0._disp.effectList.mc_effectContent.contentHolder, __s3local0._disp.effectList.mc_effectContent.mc_mask);
    __s3local0.lordEffectItemCreator = new __dep_export_DialogLordEffectItemCreator.DialogLordEffectItemCreator();
    __s3local0.lordEffectItemCreator.filterStrategy = __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_PASSIVE;
    __s3local0.verticalLayout = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    __s3local0.contentHolderMC = __s3local0._disp.effectList.mc_effectContent.contentHolder;
    __s3local0.seperatorLines = [];
    __s3local0.itxt_fought = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.effectList.mc_lordStats.txt_battlesFought, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_equipment_battlesFought", 0]));
    __s3local0.itxt_won = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.effectList.mc_lordStats.txt_battlesWon, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_equipment_battlesWon", 0]));
    __s3local0.itxt_lost = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.effectList.mc_lordStats.txt_battlesLost, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_equipment_battlesLost", 0]));
    __s3local0.itxt_category = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.categorySelection.txt_category, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_category.autoFitToBounds = true;
    __s3local0._disp.categorySelection.mc_categoryBackground.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordEffectDialogComponent, __s1param0);
  LordEffectDialogComponent.prototype.onClick = function (__s5param0) {
    this._pagination.handleClick(__s5param0);
  };
  LordEffectDialogComponent.prototype.show = function () {
    this._disp.effectList.mc_effectContent.mc_mask.visible = true;
    this._disp.effectList.mc_effectContent.mc_mask.useFilters([new __s0local1(0, 0, 0, 0, 0, 0, 0, 0)]);
    this._pagination.enable();
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
  };
  LordEffectDialogComponent.prototype.hide = function () {
    this._pagination.disable();
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
  };
  LordEffectDialogComponent.prototype.onScrollValueChange = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.contentHolderMC);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.contentHolderMC, LordEffectDialogComponent.SCROLL_DURATION, {
      y: 0 - this.scrollComponent.currentValue,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
    });
  };
  LordEffectDialogComponent.prototype.setActiveLord = function (__s13param0) {
    this._lord = __s13param0;
    this.update();
  };
  LordEffectDialogComponent.prototype.update = function () {
    this.updatePages(this._pagination.currentPageIndex, this._pagination.currentPageIndex);
  };
  LordEffectDialogComponent.prototype.createToolTips = function () {
    var __s17local0 = [];
    for (var __s17local1 = 1; __s17local1 <= LordEffectDialogComponent.MAX_PAGES; __s17local1++) {
      var __s17local2 = this._pagination.currentPage == __s17local1 ? "effect_category_selected_tt" : "effect_category_choose_tt";
      __s17local0.push(__dep_exact_92d05af59ee2ff30.Localize.text(__s17local2, [this.getCategoryTextID(__s17local1)]));
    }
    return __s17local0;
  };
  LordEffectDialogComponent.prototype.updateStats = function () {
    this.itxt_fought.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_equipment_battlesFought"), this._lord.wins + this._lord.defeats];
    this.itxt_won.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_equipment_battlesWon"), this._lord.wins];
    this.itxt_lost.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30.Localize.text("dialog_equipment_battlesLost"), this._lord.defeats];
  };
  LordEffectDialogComponent.prototype.updateEffects = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.contentHolderMC);
    var __s23local0 = [];
    var __s23local1 = __dep_export_LordEffectHelper.LordEffectHelper.createEffectGroups(this._lord.getUniqueBoni(true), this.lordEffectItemCreator, this._pagination.currentPage);
    var __s23local2 = 0;
    if (__s23local1.length == 0) {
      var __s23local3 = new __dep_export_LordEffectItem.LordEffectItem(this.lordEffectItemCreator.getTotalEffectMC(), null, __dep_export_DialogLordEffectItemCreator.DialogLordEffectItemCreator.DEFAULT_FONT_COLOR);
      __s23local3.applyText(__dep_exact_92d05af59ee2ff30.Localize.text("effect_category_empty"));
      this.contentHolderMC.addChild(__s23local3.disp);
      __s23local0.push(__s23local3);
    } else {
      for (var __s23local4 = 0; __s23local4 < __s23local1.length; __s23local4++) {
        var __s23local5 = __s23local1[__s23local4];
        if (__s23local4 > 0) {
          if (this.seperatorLines.length <= __s23local2) {
            this.seperatorLines.push(this.lordEffectItemCreator.createSeperatorLine());
          }
          this.contentHolderMC.addChild(this.seperatorLines[__s23local2].disp);
          __s23local0.push(this.seperatorLines[__s23local2]);
          __s23local2++;
        }
        this.contentHolderMC.addChild(__s23local5.disp);
        __s23local0.push(__s23local5);
      }
    }
    var __s23local6 = this.verticalLayout.apply(__s23local0, new __s0local0()).height;
    var __s23local7 = Math.max(0, __s23local6 - this.contentHolderMC.mask.height);
    this.scrollComponent.init(0, __s23local7, LordEffectDialogComponent.SCROLL_STEP_PIXELS, LordEffectDialogComponent.SCROLL_STEP_PIXELS);
    this.scrollComponent.scrollToValue(0);
    this._disp.effectList.mc_slider.visible = __s23local7 > 0;
    this.scrollComponent.setVisibility(__s23local7 > 0);
  };
  LordEffectDialogComponent.prototype.updatePages = function (__s31param0, __s31param1) {
    if (__s31param1 == LordEffectDialogComponent.MAX_PAGES - 1) {
      this.itxt_category.color = 15724527;
      this._disp.effectList.mc_effectContent.visible = false;
      this._disp.effectList.mc_lordStats.visible = true;
      this._disp.effectList.mc_slider.visible = false;
      this.updateStats();
    } else {
      this.itxt_category.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this._disp.effectList.mc_effectContent.visible = true;
      this._disp.effectList.mc_lordStats.visible = false;
      this._disp.effectList.mc_slider.visible = true;
      this.updateEffects();
    }
    this._paginationDots.setToolTips(this.createToolTips());
    this.itxt_category.textContentVO.textId = this.getCategoryTextID(__s31param1 + 1);
    this._disp.categorySelection.mc_categoryBackground.gotoAndStop(this._pagination.currentPage);
  };
  LordEffectDialogComponent.prototype.getCategoryTextID = function (__s35param0) {
    if (__s35param0 == LordEffectDialogComponent.MAX_PAGES) {
      return "effect_category_stats_" + (this._lord.isBaron ? "castellan" : "general");
    } else {
      return "effect_category_" + __s35param0;
    }
  };
  LordEffectDialogComponent.prototype.addDot = function (__s39param0) {
    this._disp.categorySelection.mc_dotContainer.addChild(__s39param0);
  };
  LordEffectDialogComponent.prototype.highlightDot = function (__s41param0, __s41param1) {
    __s41param0.gotoAndStop(__s41param1 ? 2 : 1);
  };
  LordEffectDialogComponent.prototype.changeArrow = function (__s43param0, __s43param1) {
    return false;
  };
  LordEffectDialogComponent.prototype.getLeftArrow = function () {
    return this._disp.categorySelection.btn_left;
  };
  LordEffectDialogComponent.prototype.getRightArrow = function () {
    return this._disp.categorySelection.btn_right;
  };
  LordEffectDialogComponent.MAX_PAGES = 9;
  LordEffectDialogComponent.SCROLL_STEP_PIXELS = 20;
  LordEffectDialogComponent.SCROLL_DURATION = 0.2;
  return LordEffectDialogComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.LordEffectDialogComponent = __s0local2;
var __dep_export_PaginationMouseWheel = require("gge-module:export_PaginationMouseWheel");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_DialogLordEffectItemCreator = require("gge-module:export_DialogLordEffectItemCreator");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IPaginationContainer", "IPaginationDotsContainer", "IPaginationArrowsContainer");
