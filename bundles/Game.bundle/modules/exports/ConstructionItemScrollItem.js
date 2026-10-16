Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ConstructionItemScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.renderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemScrollItem, __s1param0);
  ConstructionItemScrollItem.prototype.customFillItem = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.renderList, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp), this.constructionItemScrollItemVO.collectableItem, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(51, 51)));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_count, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("xamount", [this.constructionItemScrollItemVO.collectableItem.amount]));
  };
  ConstructionItemScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.renderList.destroyCollectableRenderList();
  };
  Object.defineProperty(ConstructionItemScrollItem.prototype, "constructionItemScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ConstructionItemScrollItem = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
