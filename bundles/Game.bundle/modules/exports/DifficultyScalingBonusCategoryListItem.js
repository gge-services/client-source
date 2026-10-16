Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingBonusCategoryListItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("DifficultyBonusCategory"))(), __s3param1) || this;
    __s3local0.data = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingBonusCategoryListItem, __s1param0);
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "headerText", {
    get: function () {
      return this.data.header;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "effectList", {
    get: function () {
      return this.data.effectList;
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingBonusCategoryListItem.prototype.fill = function () {
    var __s9local0;
    var __s9local1;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.headerText));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_items);
    __s9local0 = 0;
    for (; __s9local0 < this.effectList.length; __s9local0++) {
      var __s9local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("DifficultySelectEffectItem"))();
      var __s9local3 = this.effectList[__s9local0];
      if (__s9local3.minValue != __s9local3.maxValue) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9local2.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_dash_split", [__dep_exact_92d05af59ee2ff30.Localize.text("value_percentage", [__s9local3.minValue]), __dep_exact_92d05af59ee2ff30.Localize.text("value_percentage", [__s9local3.maxValue])]));
      } else {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s9local2.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage", [__s9local3.minValue]));
      }
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s9local2.mc_icon);
      var __s9local4 = "Effect_Group_Icon_" + __s9local3.effectGroup;
      var __s9local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local4, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s9local4), null, 0, false);
      __s9local5.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(30, 30);
      __s9local2.mc_icon.addChild(__s9local5);
      __s9local2.mouseChildren = false;
      __s9local2.toolTipText = {
        t: "effect_name_" + __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s9local3.effectID).name,
        ox: 23
      };
      this.itemMc.mc_items.addChild(__s9local2);
      __s9local2.x = __s9local0 % 3 * __s9local2.width;
      __s9local2.y = Math.floor(__s9local0 / 3) * __s9local2.height;
      __s9local1 = __s9local2.height;
    }
    var __s9local6 = Math.ceil(__s9local0 / 3) * __s9local1 + 10;
    this.itemMc.mc_items.scaleY = __s9local6 / 130;
  };
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "itemMc", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingBonusCategoryListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollapsibleItem.ACollapsibleItem.prototype, "height").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingBonusCategoryListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.DifficultyScalingBonusCategoryListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
