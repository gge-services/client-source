Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePrimeSaleScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_old_costs = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_old_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_new_costs = __s3local0.textFieldManager.registerTextField(__s3local0._disp.txt_new_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeSaleScrollItem, __s1param0);
  CastlePrimeSaleScrollItem.prototype.customFillItem = function () {
    this.itxt_old_costs.textContentVO.numberValue = this.psScrollItemVO.packageVO.basicPriceC2;
    this.itxt_new_costs.textContentVO.numberValue = this.psScrollItemVO.packageVO.priceC2;
    var __s5local0 = this.disp.mc_item;
    var __s5local1 = new __s0local0(44, 35);
    var __s5local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local0);
    __s5local2.addIconMc(__s5local0.mc_package);
    __s5local2.addInfoBtn(this.disp.btn_info);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    this.rewardRenderer = new __dep_export_CollectableRenderer.CollectableRenderer(__s5local2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, __s5local1));
    this.rewardRenderer.options.icon.dimension = __s5local1;
    this.rewardRenderer.updateWithNewVO(this.psScrollItemVO.packageVO.reward);
    __s5local0.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(this.psScrollItemVO.packageVO.nameTextID);
  };
  Object.defineProperty(CastlePrimeSaleScrollItem.prototype, "psScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrimeSaleScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeSaleScrollItem.prototype.reset = function () {
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    __s1param0.prototype.reset.call(this);
  };
  return CastlePrimeSaleScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastlePrimeSaleScrollItem = __s0local1;
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
