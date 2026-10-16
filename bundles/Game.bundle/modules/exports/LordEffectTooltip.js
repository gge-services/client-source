Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleLayoutStrategyHorizontal = require("gge-module:export_SimpleLayoutStrategyHorizontal");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_LordEffectItem = require("gge-module:export_LordEffectItem");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function LordEffectTooltip() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.fixedHeight = 0;
    __s3local0.categoryItems = [];
    __s3local0.seperatorLines = [];
    __s3local0.verticalLayout = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    __s3local0.horizontalLayout = new __dep_export_SimpleLayoutStrategyHorizontal.SimpleLayoutStrategyHorizontal();
    LordEffectTooltip.lordEffectItemCreator = new __dep_export_TooltipLordEffectItemCreator.TooltipLordEffectItemCreator();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordEffectTooltip, __s1param0);
  Object.defineProperty(LordEffectTooltip, "lordEffectTooltip", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isUndefined(this._lordEffectTooltip)) {
        this._lordEffectTooltip = new Library.CastleInterfaceElements.LordEffectTooltip_Main();
      }
      return this._lordEffectTooltip;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectTooltip.prototype.init = function (__s8param0, __s8param1, __s8param2 = null, __s8param3 = null, __s8param4 = null, __s8param5 = true) {
    this.titleItem = new __dep_export_LordEffectItem.LordEffectItem(LordEffectTooltip.lordEffectTooltip.mc_title);
    this.contentItem = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(LordEffectTooltip.lordEffectTooltip.mc_contentHolder);
    this.arrowItem = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(LordEffectTooltip.lordEffectTooltip.mc_arrow);
    LordEffectTooltip.lordEffectItemCreator.filterStrategy = __s8param4;
    this.initHeader(__s8param0, __s8param2);
    var __s8local0 = __s8param1.localToGlobal(new __s0local0(0, 0));
    var __s8local1 = __s8local0.clone();
    __s8local0.y -= __s8param1.height / 2;
    __s8local1.y += __s8param1.height / 2;
    var __s8local2 = __dep_exact_f855840627e6e145.int(__s8local0.y - this.fixedHeight);
    var __s8local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleComponent.CastleComponent.layoutManager.stage.stageHeight - __s8local1.y - this.fixedHeight);
    var __s8local4 = this.createContent(__s8param0, __s8param3, __s8param4, __s8param5);
    var __s8local5 = this.createEffectBoxes(__s8local4, Math.max(__s8local2, __s8local3));
    var __s8local6 = __s8local5[0].height;
    this.contentItem.customHeight = __s8local6;
    this.applyBoxLayout(__s8local5, __s8local0.x);
    if (__s8local6 <= __s8local2 || __s8local2 >= __s8local3) {
      this.arrowItem.margin.top = -2;
      this.arrowItem.margin.bottom = 0;
      this.arrowItem.disp.gotoAndStop(1);
      this.verticalLayout.alignment = __dep_exact_f855840627e6e145.int(__dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM);
      this.verticalLayout.apply([this.titleItem, this.contentItem, this.arrowItem], new __s0local1());
      LordEffectTooltip.lordEffectTooltip.y = __s8local0.y;
    } else {
      this.arrowItem.margin.top = 0;
      this.arrowItem.margin.bottom = -2;
      this.arrowItem.disp.gotoAndStop(2);
      this.verticalLayout.alignment = __dep_exact_f855840627e6e145.int(__dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical.ALIGNMENT_TOP);
      this.verticalLayout.apply([this.arrowItem, this.titleItem, this.contentItem], new __s0local1());
      LordEffectTooltip.lordEffectTooltip.y = __s8local1.y;
    }
    var __s8local7 = __s8local5[0].width / 2;
    LordEffectTooltip.lordEffectTooltip.x = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s8local0.x, __s8local7, __dep_export_CastleComponent.CastleComponent.layoutManager.stage.stageWidth - __s8local7);
    this.arrowItem.disp.x = __s8local0.x - LordEffectTooltip.lordEffectTooltip.x;
  };
  LordEffectTooltip.prototype.initHeader = function (__s12param0, __s12param1) {
    var __s12local0;
    __s12local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s12param1, "ABGAllianceTowerMapobjectVO") ? __s12param0.rawLordEffects.length > 0 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_towerBuffs_active_tooltip") : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_beyondTheHorizon_AllianceTower_towerBuffs_inactive_tooltip") : __s12param0.isBaron ? __s12param1 ? __dep_exact_92d05af59ee2ff30.Localize.text("effect_effectsTooltip_header_castellan", [__s12param1.areaNameString]) : __dep_exact_92d05af59ee2ff30.Localize.text("effect_effectsTooltip_header_general", ["baron_toolTip_isFree"]) : __dep_exact_92d05af59ee2ff30.Localize.text("effect_effectsTooltip_header_general", [__s12param0.defaultName]);
    this.titleItem.applyText(__s12local0, false, 6);
    this.fixedHeight = this.titleItem.height + this.arrowItem.height;
  };
  LordEffectTooltip.prototype.createContent = function (__s14param0, __s14param1 = null, __s14param2 = null, __s14param3 = true) {
    var __s14local0 = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(LordEffectTooltip.lordEffectTooltip.mc_contentHolder);
    var __s14local1 = -1;
    var __s14local2 = 0;
    var __s14local3 = __dep_export_LordEffectHelper.LordEffectHelper.createEffectGroups(__s14param0.getUniqueBoni(true, null, __s14param1 ? __s14param1.areaType : -1, __s14param2, false, __s14param3), LordEffectTooltip.lordEffectItemCreator);
    if (__s14local3.length == 0) {
      var __s14local4 = new __dep_export_LordEffectItem.LordEffectItem(LordEffectTooltip.lordEffectItemCreator.getTotalEffectMC());
      __s14local4.applyText(__dep_exact_92d05af59ee2ff30.Localize.text("equip_effect_no_effect"));
      __s14local0.push(__s14local4);
    } else if (__s14local3 != null) {
      for (var __s14local5 = 0, __s14local6 = __s14local3; __s14local5 < __s14local6.length; __s14local5++) {
        var __s14local7 = __s14local6[__s14local5];
        if (__s14local7 !== undefined) {
          if (__s14local1 != __s14local7.category) {
            __s14local1 = __s14local7.category;
            var __s14local8 = this.categoryItems[__s14local7.category - 1];
            if (!__s14local8) {
              __s14local8 = LordEffectTooltip.lordEffectItemCreator.createCategoryItem(__s14local7.category);
              this.categoryItems[__s14local7.category - 1] = __s14local8;
            }
            __s14local0.push(__s14local8);
            __s14local0.push(__s14local7);
          } else {
            if (this.seperatorLines.length <= __s14local2) {
              this.seperatorLines.push(LordEffectTooltip.lordEffectItemCreator.createSeperatorLine());
            }
            __s14local0.push(this.seperatorLines[__s14local2]);
            __s14local0.push(__s14local7);
            __s14local2++;
          }
        }
      }
    }
    return __s14local0;
  };
  LordEffectTooltip.prototype.createEffectBoxes = function (__s25param0, __s25param1) {
    this.verticalLayout.alignment = __dep_exact_f855840627e6e145.int(__dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical.ALIGNMENT_TOP);
    var __s25local0;
    var __s25local1 = [];
    var __s25local2 = new Library.CastleInterfaceElements.LordEffectBox_Tooltip();
    var __s25local3 = [];
    var __s25local4 = LordEffectTooltip.BOX_BORDER_OFFSET;
    for (var __s25local5 = 0; __s25local5 < __s25param0.length; __s25local5++) {
      var __s25local6;
      var __s25local7 = __s25param0[__s25local5];
      var __s25local8 = __s25local7.margin.top + __s25local7.height + __s25local7.margin.bottom;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25local7, "LordEffectItem")) {
        for (var __s25local9 = __s25local5 + 1; __s25local9 < __s25param0.length && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25param0[__s25local9], "LordEffectItem"); __s25local9++) {
          __s25param0[__s25local9].margin.top + __s25param0[__s25local9].height + __s25param0[__s25local9].margin.bottom;
        }
      }
      if (__s25local4 + __s25local8 > __s25param1) {
        if (this.seperatorLines.indexOf(__s25local3[__s25local3.length - 1]) > -1) {
          __s25local6 = __s25local3.pop();
          __s25local2.mc_holder.removeChild(__s25local6.disp);
          __s25local6 = null;
        } else if (this.categoryItems.indexOf(__s25local3[__s25local3.length - 1]) > -1) {
          __s25local6 = __s25local3.pop();
          __s25local2.mc_holder.removeChild(__s25local6.disp);
        }
        __s25local2.bg.height = this.verticalLayout.apply(__s25local3, new __s0local1()).height + LordEffectTooltip.BOX_BORDER_OFFSET;
        (__s25local0 = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s25local2, new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0))).customHeight = __s25local2.bg.height;
        __s25local1.push(__s25local0);
        __s25local2 = new Library.CastleInterfaceElements.LordEffectBox_Tooltip();
        __s25local4 = LordEffectTooltip.BOX_BORDER_OFFSET;
        __s25local3.length = 0;
        if (__s25local6) {
          __s25local2.mc_holder.addChild(__s25local6.disp);
          __s25local4 += __s25local6.margin.top + __s25local6.height + __s25local6.margin.bottom;
          __s25local3.push(__s25local6);
          __s25local6 = null;
        }
      }
      if (__s25local3.length != 0 || !(this.seperatorLines.indexOf(__s25local7) > -1)) {
        __s25local2.mc_holder.addChild(__s25local7.disp);
        __s25local4 += __s25local8;
        __s25local3.push(__s25local7);
      }
    }
    __s25local2.bg.height = this.verticalLayout.apply(__s25local3, new __s0local1()).height + LordEffectTooltip.BOX_BORDER_OFFSET;
    (__s25local0 = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s25local2)).customHeight = __s25local2.bg.height;
    __s25local1.push(__s25local0);
    return __s25local1;
  };
  LordEffectTooltip.prototype.applyBoxLayout = function (__s37param0, __s37param1) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(LordEffectTooltip.lordEffectTooltip.mc_contentHolder);
    for (var __s37local0 = 0; __s37local0 < __s37param0.length; __s37local0++) {
      var __s37local1 = __s37param0[__s37local0];
      __s37local1.margin.left = __s37local0 != 0 ? -2 : 0;
      LordEffectTooltip.lordEffectTooltip.mc_contentHolder.addChild(__s37local1.disp);
    }
    this.horizontalLayout.alignment = __dep_exact_f855840627e6e145.int(__dep_export_SimpleLayoutStrategyHorizontal.SimpleLayoutStrategyHorizontal.ALIGNMENT_LEFT);
    if (__s37param1 + this.horizontalLayout.apply(__s37param0, new __s0local1()).width - __s37local1.width / 2 > __dep_export_CastleComponent.CastleComponent.layoutManager.stage.stageWidth) {
      for (var __s37local2 = 0; __s37local2 < __s37param0.length; __s37local2++) {
        var __s37local3 = __s37param0[__s37local2];
        __s37local3.margin.left = 0;
        __s37local3.margin.right = __s37local2 != 0 ? -2 : 0;
      }
      this.horizontalLayout.alignment = __dep_exact_f855840627e6e145.int(__dep_export_SimpleLayoutStrategyHorizontal.SimpleLayoutStrategyHorizontal.ALIGNMENT_RIGHT);
      this.horizontalLayout.apply(__s37param0.reverse(), new __s0local1(__s37param0[0].width));
    }
  };
  LordEffectTooltip.prototype.reset = function () {
    this.categoryItems = [];
  };
  Object.defineProperty(LordEffectTooltip.prototype, "disp", {
    get: function () {
      return LordEffectTooltip.lordEffectTooltip;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectTooltip.CATEGORY_COUNT = 7;
  LordEffectTooltip.BOX_BORDER_OFFSET = 4;
  return LordEffectTooltip;
}(__dep_export_CastleComponent.CastleComponent);
exports.LordEffectTooltip = __s0local2;
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_TooltipLordEffectItemCreator = require("gge-module:export_TooltipLordEffectItemCreator");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
