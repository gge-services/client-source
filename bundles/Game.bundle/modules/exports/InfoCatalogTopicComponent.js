Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function InfoCatalogTopicComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._topics = [];
    __s3local0._maskHeight = 0;
    __s3local0._dispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    __s3local0._currentSelectedIndex = 0;
    __s3local0._onTopicChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._dispCreator.cacheDisp = false;
    __s3local0._dispCreator.init(__s3param0.mc_items.mc_transform);
    __s3local0._dispCreator.dispContainer.mouseChildren = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfoCatalogTopicComponent, __s1param0);
  InfoCatalogTopicComponent.prototype.init = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    this._topics = __s5param0;
    this._topicAssetClipName = __s5param1;
    this._topicAssetName = __s5param2;
    this._maskHeight = __s5param3;
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
    this._dispCreator.reset();
    this._dispCreator.onLoadedSignal.add(this.bindFunction(this.onTopicsLoaded));
    this._dispCreator.switchCreationState(true);
    for (var __s5local0 = 0; __s5local0 < this._topics.length; ++__s5local0) {
      this._dispCreator.addClip(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(__s5param1, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s5param2)));
    }
    this._dispCreator.switchCreationState(false);
    this.updateScrollPosition();
  };
  InfoCatalogTopicComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.selectIndex(this._currentSelectedIndex);
  };
  InfoCatalogTopicComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  InfoCatalogTopicComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  InfoCatalogTopicComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  InfoCatalogTopicComponent.prototype.selectIndex = function (__s17param0, __s17param1 = true) {
    this._currentSelectedIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_1.MathBase.clamp(__s17param0, 0, this._topics.length - 1));
    for (var __s17local0 = 0; __s17local0 < this._topics.length; ++__s17local0) {
      var __s17local1 = this._dispCreator.getClipMc(__s17local0);
      __s17local1.mc_selected.visible = this._currentSelectedIndex == __s17local0;
      __s17local1.mc_default.visible = this._currentSelectedIndex != __s17local0;
    }
    if (__s17param1) {
      this.onTopicChanged.dispatch();
    }
  };
  InfoCatalogTopicComponent.prototype.selectByType = function (__s22param0) {
    var __s22local0 = __dep_exact_f855840627e6e145.int(this.getIndexByType(__s22param0));
    if (__s22local0 >= 0) {
      this.selectIndex(__s22local0);
    }
  };
  InfoCatalogTopicComponent.prototype.updateScrollPosition = function () {
    this.disp.mc_items.mc_transform.y = -this._scrollComponent.currentValue;
  };
  InfoCatalogTopicComponent.prototype.scrollToTopic = function (__s27param0) {
    var __s27local0 = __dep_exact_f855840627e6e145.int(this.getIndexByType(__s27param0));
    if (__s27local0 >= 0) {
      this._scrollComponent.scrollToValue((this._dispCreator.getClipMc(0).height + InfoCatalogTopicComponent.ITEM_DISTANCE_Y) * __s27local0);
    }
  };
  InfoCatalogTopicComponent.prototype.getSelectedTopic = function () {
    return this._topics[this._currentSelectedIndex];
  };
  InfoCatalogTopicComponent.prototype.getIndexByType = function (__s32param0) {
    for (var __s32local0 = 0; __s32local0 < this._topics.length; ++__s32local0) {
      if (__s32param0 == this._topics[__s32local0].topicType) {
        return __s32local0;
      }
    }
    return -1;
  };
  InfoCatalogTopicComponent.prototype.onTopicsLoaded = function () {
    this._dispCreator.onLoadedSignal.remove(this.bindFunction(this.onTopicsLoaded));
    var __s37local0 = 0;
    var __s37local1 = 0;
    for (var __s37local2 = 0; __s37local2 < this.topics.length; ++__s37local2) {
      var __s37local3 = this._topics[__s37local2];
      var __s37local4 = this._dispCreator.getClipMc(__s37local2);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s37local4, 1);
      __s37local4.mouseChildren = false;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s37local4.mc_default.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s37local3.textId, __s37local3.textReplacements)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s37local4.mc_selected.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s37local3.textId, __s37local3.textReplacements)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      __s37local4.mc_selected.visible = false;
      __s37local4.mc_default.visible = false;
      __s37local4.y = __s37local0;
      if (__s37local1 <= 0) {
        __s37local1 = __s37local4.height + InfoCatalogTopicComponent.ITEM_DISTANCE_Y;
      }
      __s37local0 += __s37local1;
    }
    this.selectIndex(0);
    var __s37local5 = __dep_exact_f855840627e6e145.int(Math.max(0, this._dispCreator.dispContainer.height - this._maskHeight));
    this._scrollComponent.init(0, __s37local5, __s37local1, __s37local1);
    this._scrollComponent.setVisibility(__s37local5 > 0);
    this.updateScrollPosition();
  };
  InfoCatalogTopicComponent.prototype.onClick = function (__s42param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s42param0.target)) {
      __s1param0.prototype.onClick.call(this, __s42param0);
      for (var __s42local0 = 0; __s42local0 < this._topics.length; ++__s42local0) {
        if (this._dispCreator.getClipMc(__s42local0) == __s42param0.target) {
          this.selectIndex(__s42local0);
        }
      }
    }
  };
  InfoCatalogTopicComponent.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "onTopicChanged", {
    get: function () {
      return this._onTopicChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "topicAssetClipName", {
    get: function () {
      return this._topicAssetClipName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "topicAssetName", {
    get: function () {
      return this._topicAssetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "topics", {
    get: function () {
      return this._topics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "currentSelectedIndex", {
    get: function () {
      return this._currentSelectedIndex;
    },
    enumerable: true,
    configurable: true
  });
  InfoCatalogTopicComponent.ITEM_DISTANCE_Y = 8;
  return InfoCatalogTopicComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.InfoCatalogTopicComponent = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
