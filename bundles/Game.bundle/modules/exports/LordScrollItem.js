Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __s0local0 = function (__s1param0) {
  function LordScrollItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordScrollItem, __s1param0);
  LordScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.disp.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_lordHolder);
    this.updateLordPic();
  };
  LordScrollItem.prototype.setToolTipText = function (__s7param0) {
    this.disp.toolTipText = __s7param0;
  };
  LordScrollItem.prototype.updateLordPic = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_lordHolder);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this.lordScrollItemVO.lordVO, this.disp.mc_lordHolder, 52, 58, null, true);
  };
  Object.defineProperty(LordScrollItem.prototype, "lordScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  LordScrollItem.prototype.showHighlight = function () {
    this.disp.bitmap_1.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_LORD_SCROLL_ITEM, false, 1);
  };
  LordScrollItem.prototype.hideHighlight = function () {
    this.disp.bitmap_1.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  LordScrollItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (this.disp.mc_lordHolder.warning) {
      this.disp.mc_lordHolder.warning.visible = true;
    }
  };
  LordScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.disp.mc_lordHolder.warning) {
      this.disp.mc_lordHolder.warning.visible = false;
    }
  };
  return LordScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.LordScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
