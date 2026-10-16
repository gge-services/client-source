Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function AQuestCollapsibleItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2) || this).questSelectCallBack = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._headerMC, 1.01);
    __s3local0.clearContent();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AQuestCollapsibleItem, __s1param0);
  AQuestCollapsibleItem.prototype.clearContent = function () {
    if (this._questItems != null) {
      for (var __s5local0 = 0, __s5local1 = this._questItems; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.destroy();
        }
      }
    }
    this._questItems = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._contentMC);
    this._contentMC.mask.height = 0;
  };
  AQuestCollapsibleItem.prototype.addQuestItem = function (__s11param0, __s11param1 = true) {
    this._contentMC.addChild(__s11param0.disp);
    this._questItems.push(__s11param0);
    if (__s11param1) {
      this._activeQuest = __s11param0;
    }
    this.contentMC.mask.height = this.applyLayout().height;
  };
  AQuestCollapsibleItem.prototype.applyLayout = function () {
    return AQuestCollapsibleItem.layoutStrategy.apply(this._questItems, new __s0local0());
  };
  AQuestCollapsibleItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._questItems != null) {
      for (var __s16local0 = 0, __s16local1 = this._questItems; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          __s16local2.onShow();
        }
      }
    }
  };
  AQuestCollapsibleItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._questItems != null) {
      for (var __s22local0 = 0, __s22local1 = this._questItems; __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          __s22local2.onHide();
        }
      }
    }
  };
  AQuestCollapsibleItem.prototype.onClick = function (__s28param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target) && this.isEnabled) {
      switch (__s28param0.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  AQuestCollapsibleItem.prototype.expand = function (__s32param0, __s32param1, __s32param2 = false) {
    __s1param0.prototype.expand.call(this, __s32param0, __s32param1, __s32param2);
    this._headerMC.mc_arrow.gotoAndStop(1 + (this._isExpanded ? 1 : 0));
  };
  Object.defineProperty(AQuestCollapsibleItem.prototype, "questItems", {
    get: function () {
      return this._questItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AQuestCollapsibleItem.prototype, "activeQuest", {
    get: function () {
      return this._activeQuest;
    },
    enumerable: true,
    configurable: true
  });
  AQuestCollapsibleItem.__initialize_static_members = function () {
    AQuestCollapsibleItem.layoutStrategy = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
  };
  return AQuestCollapsibleItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AQuestCollapsibleItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
__s0local1.__initialize_static_members();
