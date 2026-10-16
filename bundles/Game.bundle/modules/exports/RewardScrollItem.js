Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RewardScrollItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardScrollItem, __s1param0);
  RewardScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.destroyCollectableRenderList();
    var __s5local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s5local0, this.rewardScrollItemVO.collectableItem, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, RewardScrollItem.TARGET_SIZE), this.bindFunction(this.preRenderFunc));
  };
  RewardScrollItem.prototype.preRenderFunc = function (__s7param0) {
    if (__s7param0.itemVO) {
      __s7param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 0;
    }
  };
  Object.defineProperty(RewardScrollItem.prototype, "rewardScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  RewardScrollItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var __s12local0 = 0; __s12local0 < this._collectableRenderList.length; ++__s12local0) {
        this._collectableRenderList[__s12local0].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(RewardScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  RewardScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  RewardScrollItem.__initialize_static_members = function () {
    RewardScrollItem.TARGET_SIZE = new __s0local0(55, 55);
  };
  return RewardScrollItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.RewardScrollItem = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip", "ICollectableRendererList");
__s0local1.__initialize_static_members();
