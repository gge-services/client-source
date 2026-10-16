Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function () {
  function MaterialBagRenderHelper() {}
  MaterialBagRenderHelper.render = function (__s5param0, __s5param1 = null, __s5param2 = null, __s5param3 = null) {
    var __s5local0 = __s5param0.assetName;
    var __s5local1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CraftingMaterialBags");
    var __s5local2 = [];
    __s5local2.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("bag", __s5param0.color));
    var __s5local3 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __s5local1, __s5local2, 0, false);
    if (__s5param1) {
      __s5param1.addChild(__s5local3);
    }
    __s5local3.doWhenLoaded(function (__s8param0) {
      if (__s5param0.focused) {
        MaterialBagRenderHelper.addFocusedMaterial(__s5param0, __s5local3.currentshownDisplayObject, __s5param2);
      } else {
        __s5param2(__s8param0);
      }
    });
    return __s5local3;
  };
  MaterialBagRenderHelper.addFocusedMaterial = function (__s12param0, __s12param1, __s12param2 = null) {
    if (__s12param0.focused) {
      var __s12local0 = __s12param0.focusedMaterialContent.craftingMaterial;
      var __s12local1 = __dep_export_CollectableHelper.CollectableHelper.createVE(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __s12local0.id), null);
      var __s12local2 = __s12local1.getAssetName();
      var __s12local3 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s12local2, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s12local2), null, 0, false);
      __s12local1.destroy();
      __s12param1.mc_focus.scaleX = __s12param1.mc_focus.scaleY = 0.36;
      __s12param1.mc_focus.addChild(__s12local3);
      if (__s12param2) {
        __s12local3.doWhenLoaded(__s12param2);
      }
    }
  };
  return MaterialBagRenderHelper;
}();
exports.MaterialBagRenderHelper = __s0local0;
