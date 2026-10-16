Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleBattleLogLootItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBattleLogLootItem, __s1param0);
  CastleBattleLogLootItem.prototype.customFillItem = function () {
    var __s5local0 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(25, 25));
    __s5local1.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp), this.lootScrollItemVO.loot, __s5local1);
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(__s5local0, this.lootScrollItemVO.showSubscriptionBuffed, 15, new __s0local0(-3, 0));
  };
  Object.defineProperty(CastleBattleLogLootItem.prototype, "lootScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBattleLogLootItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastleBattleLogLootItem = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
