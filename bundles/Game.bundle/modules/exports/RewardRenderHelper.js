Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RewardRenderHelper() {}
  RewardRenderHelper.renderCollectableList = function (__s5param0, __s5param1, __s5param2) {
    __s5param0.destroyCollectableRenderList();
    var __s5local0 = __s5param2.length > 1;
    __s5param1.item0.visible = __s5param1.item1.visible = __s5local0;
    __s5param1.item.visible = !__s5local0;
    if (__s5param1.btn_info) {
      __s5param1.btn_info.visible = false;
    }
    if (__s5local0) {
      __s5param1.item0.btn_info.actLikeButton = true;
      __s5param1.item0.addChild(__s5param1.item0.btn_info);
      __s5param1.item1.btn_info.actLikeButton = true;
      __s5param1.item1.addChild(__s5param1.item1.btn_info);
      var __s5local1 = [];
      __s5local1.push(__s5param1.item0.item);
      __s5local1.push(__s5param1.item1.item);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(__s5param0, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList().createByItemMcList(__s5local1).addIconMcs("mc_icon").addInfoBtns("parent.btn_info").addTextfields("txt_text"), __s5param2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT));
    } else {
      __s5param1.item.btn_info.actLikeButton = true;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(__s5param0, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5param1.item.item).addInfoBtn(__s5param1.item.btn_info), __s5param2.getItemByIndex(0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT));
      __s5param1.item.btn_info.x = 20;
      __s5param1.item.addChild(__s5param1.item.btn_info);
    }
  };
  return RewardRenderHelper;
}();
exports.RewardRenderHelper = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
