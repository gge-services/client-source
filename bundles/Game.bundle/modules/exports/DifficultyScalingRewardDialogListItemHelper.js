Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function DifficultyScalingRewardDialogListItemHelper() {}
  DifficultyScalingRewardDialogListItemHelper.fillRewardMC = function (__s5param0, __s5param1, __s5param2 = null) {
    var __s5local0 = __s5param1[0];
    var __s5local1 = __s5param1[1];
    var __s5local2 = __s5param1[2];
    var __s5local3 = __s5param1[3];
    __s5param0.mc_rank1.visible = __s5local3 == 0;
    __s5param0.mc_rank2.visible = __s5local3 == 1;
    __s5param0.mc_rank3.visible = __s5local3 == 2;
    __s5param0.btn_left.visible = false;
    __s5param0.btn_right.visible = false;
    if (__s5local1 <= 0 && __s5local0 > 0) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank_promotion_value", [__s5local0]));
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(" "));
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(" "));
    } else {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("points_noValue"));
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.number(__s5local1, false))).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param0.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(" "));
    }
    var __s5local4 = __s5param2 || new __dep_export_CollectableRendererList.CollectableRendererList();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(__s5local4, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s5param0, "mc_reward_").addItemMcs("mc_reward").addInfoBtns("parent.btn_info").addBuildingLevelMc("mc_reward.mc_buildingLevel"), __s5local2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(50, 50)));
  };
  return DifficultyScalingRewardDialogListItemHelper;
}();
exports.DifficultyScalingRewardDialogListItemHelper = __s0local1;
