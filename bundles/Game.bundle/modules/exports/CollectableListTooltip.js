Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_InteractiveTooltip = require("gge-module:export_InteractiveTooltip");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MovieClip;
var __s0local2 = function (__s1param0) {
  function CollectableListTooltip() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._itemMCs = [];
    __s3local0._contentMCs = [];
    __s3local0._disp = new __s0local1();
    __s3local0._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CollectableListTooltip.ASSET_NAME, __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CollectableListTooltip.ASSET_NAME), null, 0, false);
    __s3local0._disp.addChild(__s3local0._clip);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableListTooltip, __s1param0);
  Object.defineProperty(CollectableListTooltip.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableListTooltip.prototype, "tooltipDisp", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CollectableListTooltip.prototype.show = function (__s9param0, __s9param1, __s9param2) {
    var __s9local0 = this;
    if (__s9param1.length != __s9param2.length) {
      throw new Error("texts and collectablelists have different length");
    }
    if (this._clip.isLoaded) {
      this.destroyCollectableRenderList();
      this._contentMCs[0] ||= this.tooltipDisp.mc_tooltip;
      this._contentMCs.forEach(function (__s13param0) {
        return __s13param0.visible = false;
      });
      this._itemMCs.forEach(function (__s15param0) {
        return __s15param0.visible = false;
      });
      var __s9local1 = 0;
      for (var __s9local2 = 0; __s9local2 < __s9param1.length; __s9local2++) {
        if (!this._contentMCs[__s9local2]) {
          this._contentMCs[__s9local2] = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CollectableListTooltipExt_Content"))();
          this.tooltipDisp.addChild(this._contentMCs[__s9local2]);
        }
        this.displayContent(this._contentMCs[__s9local2], __s9param1[__s9local2], __s9param2[__s9local2], __s9local2, __s9local1);
        __s9local1 += __s9param2[__s9local2].length;
      }
      this.tooltipDisp.mc_arrowContainer.rotation = 0;
      var __s9local3 = __s9param0.localToGlobal(new __s0local0(0, 0));
      var __s9local4 = __s9param0.height / 2;
      var __s9local5 = false;
      if (__s9local3.y - __s9local4 - this.disp.height < 0) {
        this.tooltipDisp.mc_arrowContainer.rotation = 180;
        this._contentMCs.forEach(function (__s21param0) {
          return __s21param0.y = 10;
        });
        __s9local5 = true;
        this._disp.y = __s9local3.y + __s9local4;
      } else {
        this._disp.y = __s9local3.y - __s9local4;
      }
      var __s9local6 = this.disp.width / 2;
      this._disp.x = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s9local3.x, 0 + __s9local6, __dep_export_CastleComponent.CastleComponent.layoutManager.stage.stageWidth - __s9local6);
      this.tooltipDisp.mc_arrowContainer.mc_arrow.x = (__s9local3.x - this._disp.x) * (__s9local5 ? -1 : 1);
      __s1param0.prototype.onShow.call(this);
    } else {
      this._clip.doWhenLoaded(function () {
        __s9local0.show(__s9param0, __s9param1, __s9param2);
      });
    }
  };
  CollectableListTooltip.prototype.displayContent = function (__s27param0, __s27param1, __s27param2, __s27param3, __s27param4) {
    __s27param0.visible = __s27param2.length > 0;
    __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s27param0.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s27param1)));
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s27param0.mc_items);
    for (var __s27local0 = 0; __s27local0 < __s27param2.length; __s27local0++) {
      var __s27local1 = __s27param4 + __s27local0;
      if (!this._itemMCs[__s27local1]) {
        var __s27local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CollectableListTooltip_ItemContainer"))();
        __s27local2.x = __s27local0 % 3 * CollectableListTooltip.X_OFFSET;
        __s27local2.y = Math.floor(__s27local0 / 3) * CollectableListTooltip.Y_OFFSET;
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s27local2.btn_info);
        this._itemMCs[__s27local1] = __s27local2;
      }
      var __s27local3 = this._itemMCs[__s27local1];
      __s27param0.mc_items.addChild(__s27local3);
      __s27local3.visible = true;
      var __s27local4 = __s27param2.getItemByIndex(__s27local0);
      var __s27local5 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s27local3.mc_item).addInfoBtn(__s27local3.btn_info);
      var __s27local6 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s27local5, __s27local4, __s27local6);
    }
    var __s27local7 = Math.floor(__s27param2.length / 3) * CollectableListTooltip.Y_OFFSET;
    __s27param0.bg_1.height = 89 + __s27local7;
    __s27param0.bg_2.height = 139 + __s27local7;
    __s27param0.y = -this.tooltipDisp.mc_tooltip.height - 10;
    __s27param0.x = __s27param3 * 262;
  };
  Object.defineProperty(CollectableListTooltip.prototype, "fadeDuration", {
    get: function () {
      return CollectableListTooltip.FADE_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  CollectableListTooltip.ASSET_NAME = "CollectableListTooltipExt";
  CollectableListTooltip.X_OFFSET = 87;
  CollectableListTooltip.Y_OFFSET = 85;
  CollectableListTooltip.FADE_DURATION = 0.1;
  return CollectableListTooltip;
}(__dep_export_InteractiveTooltip.InteractiveTooltip);
exports.CollectableListTooltip = __s0local2;
