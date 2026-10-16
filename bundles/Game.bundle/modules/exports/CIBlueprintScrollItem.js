Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CIBlueprintScrollItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).renderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CIBlueprintScrollItem, __s1param0);
  CIBlueprintScrollItem.prototype.customFillItem = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp);
    var __s5local0 = this._scrollItemVO;
    if (__s5local0 && __s5local0.blueprintVO) {
      var __s5local1 = new __dep_export_CollectableItemConstructionItemBlueprintVO.CollectableItemConstructionItemBlueprintVO();
      __s5local1.blueprintVO = __s5local0.blueprintVO;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.renderList, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp).addIconMc(this._disp), __s5local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, CIBlueprintScrollItem.ICON_SIZE), null, this.bindFunction(this.onActiveStateChange));
      this._disp.actLikeButton = true;
    }
  };
  CIBlueprintScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.renderList.destroyCollectableRenderList();
  };
  CIBlueprintScrollItem.prototype.onActiveStateChange = function () {
    __s1param0.prototype.onActiveStateChange.call(this);
    this.glow(this.isActive);
  };
  CIBlueprintScrollItem.prototype.glow = function (__s12param0 = true) {
    try {
      if (!this.disp || this.disp.numChildren <= 0) {
        return;
      }
      var __s12local0 = this.disp.getChildAt(0).getChildAt(0);
      var __s12local1 = __s12local0.getChildAt(0);
      var __s12local2 = __s12local1.currentshownDisplayObject;
      if (__s12local2) {
        __s12local2.glow.visible = __s12param0;
        if (__s12local1.filters) {
          __s12local1.useFilters(__s12local1.filters);
        }
        if (__s12local0.cacheCanvas) {
          __s12local0.updateCache();
        }
      }
    } catch (__s19local0) {
      __dep_exact_9e901e8e2483a22f_2.debug(__s19local0.stack);
    }
  };
  CIBlueprintScrollItem.__initialize_static_members = function () {
    CIBlueprintScrollItem.ICON_SIZE = new __s0local0(87, 72);
  };
  return CIBlueprintScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CIBlueprintScrollItem = __s0local1;
var __dep_export_CollectableItemConstructionItemBlueprintVO = require("gge-module:export_CollectableItemConstructionItemBlueprintVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
__s0local1.__initialize_static_members();
