Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function EventOverviewDetailedEventView() {
    this._renderList = [];
  }
  EventOverviewDetailedEventView.prototype.init = function () {
    this.dispClass = __dep_exact_81dacdf05bd32292_1.getDefinitionByName(this.dispClassName);
    this._disp = new this.dispClass();
  };
  EventOverviewDetailedEventView.prototype.updateRewards = function (__s7param0, __s7param1) {};
  EventOverviewDetailedEventView.prototype.fillList = function (__s9param0, __s9param1) {
    var __s9local0;
    var __s9local1;
    var __s9local2;
    var __s9local3;
    var __s9local4;
    var __s9local5;
    var __s9local6 = new __s0local0();
    __s9local0 = __s9param0.length;
    (__s9local1 = this._disp.getChildByName("reward" + __s9param1)).tags_1.visible = __s9local0 == 1;
    __s9local1.tags_2.visible = __s9local0 == 2;
    __s9local2 = __s9local1["tags_" + __s9local0];
    for (var __s9local7 = 0; __s9local7 < __s9local0; __s9local7++) {
      (__s9local3 = __s9local2["item_" + __s9local7]).icon_size.alpha = 0;
      __s9local6.x = __s9local3.icon_size.width;
      __s9local6.y = __s9local3.icon_size.height;
      (__s9local4 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s9local3.mc_item)).addIconMc(__s9local3.mc_item.icon_container);
      __s9local4.addInfoBtn(__s9local3.btn_info);
      __s9local4.addTextfield(__s9local3.txt_text);
      __s9local5 = __s9param0.getItemByIndex(__s9local7);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s9local4, __s9local5, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, __s9local6));
    }
  };
  Object.defineProperty(EventOverviewDetailedEventView.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  EventOverviewDetailedEventView.prototype.destroyCollectableRenderList = function () {};
  Object.defineProperty(EventOverviewDetailedEventView.prototype, "collectableRenderList", {
    get: function () {
      return this._renderList;
    },
    enumerable: true,
    configurable: true
  });
  return EventOverviewDetailedEventView;
}();
exports.EventOverviewDetailedEventView = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
