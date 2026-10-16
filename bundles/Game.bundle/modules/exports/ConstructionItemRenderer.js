Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Container;
var __s0local1 = function () {
  function ConstructionItemRenderer() {}
  ConstructionItemRenderer.render = function (__s5param0, __s5param1 = null, __s5param2 = null) {
    return ConstructionItemRenderer.loadAsset(__s5param0, false, true, __s5param1, __s5param2);
  };
  ConstructionItemRenderer.renderBroken = function (__s7param0, __s7param1 = null, __s7param2 = null) {
    return ConstructionItemRenderer.loadAsset(__s7param0, true, true, __s7param1, __s7param2);
  };
  ConstructionItemRenderer.renderWithoutBuildingIcon = function (__s9param0, __s9param1 = null, __s9param2 = null) {
    return ConstructionItemRenderer.loadAsset(__s9param0, false, false, __s9param1, __s9param2);
  };
  ConstructionItemRenderer.renderBlueprint = function (__s11param0, __s11param1, __s11param2 = null) {
    try {
      var __s11local0 = __s11param1.currentshownDisplayObject;
      __s11local0.mouseChildren = false;
      var __s11local1 = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getBestUnlockedCI(__s11param0) || __s11param0.constructionItem;
      __s11local0.colorChange.gotoAndStop(__s11local1.rarity + 1);
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s11local0.banner.text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ci_craft_new"), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
      __s11local0.banner.visible = false;
      __s11local0.glow.visible = false;
      ConstructionItemRenderer.addBuildingIcon(__s11param0.constructionItem, __s11local0.mc_buildingIconContainer);
      ConstructionItemRenderer.addEffectIcon(__s11param0.constructionItem, __s11local0.mc_effectIconContainer, __s11param2);
    } catch (__s14local0) {
      __dep_exact_9e901e8e2483a22f_4.debug(__s14local0.stack);
      __s11param1.visible = false;
    }
  };
  ConstructionItemRenderer.loadAsset = function (__s16param0, __s16param1, __s16param2, __s16param3 = null, __s16param4) {
    var __s16local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ConstructionItemRenderer.ASSET_NAME);
    var __s16local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(ConstructionItemRenderer.ASSET_NAME, __s16local0);
    var __s16local2 = __s16param4 || new __s0local0();
    __s16local2.addChild(__s16local1);
    __s16local1.doWhenLoaded(function (__s18param0) {
      ConstructionItemRenderer.configureItem(__s16param0, __s18param0.currentshownDisplayObject, __s16param1, __s16param2, __s16param3);
    });
    return __s16local2;
  };
  ConstructionItemRenderer.configureItem = function (__s20param0, __s20param1, __s20param2 = false, __s20param3 = false, __s20param4 = null) {
    if (!__s20param2) {
      __s20param1.removeChild(__s20param1.mc_broken);
    }
    __s20param1.mc_level.visible = !__s20param0.isAppearanceItem || __s20param0.isTemporary;
    if (__s20param0.isTemporary) {
      __s20param1.mc_level.gotoAndStop(2);
      __s20param1.mc_level.txt_level.visible = false;
    } else {
      __s20param1.mc_level.gotoAndStop(1);
      __s20param1.mc_level.txt_level.visible = true;
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s20param1.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_1.NumberVO(__s20param0.level), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    }
    if (__s20param3) {
      ConstructionItemRenderer.addBuildingIcon(__s20param0, __s20param1.mc_buildingIconContainer);
    } else {
      __s20param1.removeChild(__s20param1.mc_buildingIconContainer);
    }
    __s20param1.mc_effects.gotoAndStop(__s20param0.effectsAmount);
    __s20param1.mc_background.gotoAndStop(__s20param0.slotType + 1);
    __s20param1.mc_background.mc_color.gotoAndStop(__s20param0.rarity + 1);
    ConstructionItemRenderer.addEffectIcon(__s20param0, __s20param1.mc_effectIconContainer, __s20param4);
  };
  ConstructionItemRenderer.addEffectIcon = function (__s27param0, __s27param1, __s27param2 = null) {
    var __s27local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s27param0.visClassName);
    var __s27local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s27param0.visClassName, __s27local0);
    if (__s27param1.effectIcon) {
      __s27param1.removeChild(__s27param1.effectIcon);
    }
    var __s27local2 = __s27param1.width;
    var __s27local3 = __s27param1.height;
    __s27param1.addChild(__s27local1);
    __s27param1.effectIcon = __s27local1;
    __s27local1.doWhenLoaded(__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(__s27local2, __s27local3));
    if (__s27param2) {
      __s27local1.doWhenLoaded(__s27param2);
    }
  };
  ConstructionItemRenderer.addBuildingIcon = function (__s31param0, __s31param1) {
    if (__s31param0.buildingIconClass) {
      var __s31local0 = __s31param1.width;
      var __s31local1 = __s31param1.height;
      var __s31local2 = new Library.CastleInterfaceElements.BuildingGroundBg();
      __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.centerMovieClip(__s31local2, __s31local0, __s31local1);
      __s31param1.addChild(__s31local2);
      var __s31local3 = new __s31param0.buildingIconClass();
      __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.centerMovieClip(__s31local3, __s31local0 * 0.8, __s31local1 * 0.8);
      __s31param1.addChild(__s31local3);
    }
  };
  ConstructionItemRenderer.__initialize_static_members = function () {
    ConstructionItemRenderer.ASSET_NAME = "ConstructionItem_Sep24";
    ConstructionItemRenderer.EFFECT_ICON_SIZE = 24;
  };
  return ConstructionItemRenderer;
}();
exports.ConstructionItemRenderer = __s0local1;
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__s0local1.__initialize_static_members();
