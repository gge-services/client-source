Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function EventIconHelper() {}
  Object.defineProperty(EventIconHelper, "asset", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isUndefined(this._asset)) {
        this._asset = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(EventIconHelper.ITEM_CLASS_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(EventIconHelper.ASSET_NAME), null, 0, false);
      }
      return this._asset;
    },
    enumerable: true,
    configurable: true
  });
  EventIconHelper.staticInit = function () {
    if (!EventIconHelper.wasStaticInitCalled) {
      EventIconHelper.wasStaticInitCalled = true;
      if (EventIconHelper.asset.isLoaded) {
        EventIconHelper.loadingComplete(EventIconHelper.asset);
      } else {
        EventIconHelper.asset.clipLoaded.addOnce(EventIconHelper.loadingComplete);
      }
    }
  };
  EventIconHelper.loadingComplete = function (__s13param0) {
    EventIconHelper._isInitialized = true;
    EventIconHelper.fillQueuedRequests();
  };
  EventIconHelper.fillQueuedRequests = function () {
    var __s15local0;
    if (EventIconHelper._queue != null) {
      for (var __s15local1 = 0, __s15local2 = EventIconHelper._queue; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined) {
          __s15local0 = EventIconHelper.createIcon(__s15local3.eventID, __s15local3.isAlliance);
          __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.scaleToFit(__s15local0, __s15local3.size.x, __s15local3.size.y);
          __s15local3.iconMC.addChild(__s15local0);
        }
      }
    }
    EventIconHelper._queue.length = 0;
  };
  EventIconHelper.createIcon = function (__s21param0, __s21param1, __s21param2 = null) {
    var __s21local0;
    var __s21local1 = __s21param1 ? "_alliance" : "";
    try {
      __s21local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("eventIcon_" + __s21param0 + __s21local1))();
    } catch (__s24local0) {
      __s21local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("eventIcon_0"))();
    }
    if (__s21param2) {
      __s21local0.scaleX = __s21local0.scaleY = __s21local0.height = Math.min(__s21param2.y / __s21local0.height, __s21param2.x / __s21local0.width);
    }
    return __s21local0;
  };
  EventIconHelper.createEventIconByEventID = function (__s27param0, __s27param1, __s27param2) {
    var __s27local0;
    if (__s27param2 === undefined) {
      __s27param2 = false;
    }
    EventIconHelper.staticInit();
    if (EventIconHelper._isInitialized) {
      __s27local0 = EventIconHelper.createIcon(__s27param0, __s27param2, __s27param1);
    } else {
      __s27local0 = new __s0local0();
      var __s27local1 = new __s0local2(__s27param0, __s27local0, __s27param1, __s27param2);
      EventIconHelper._queue.push(__s27local1);
    }
    return __s27local0;
  };
  EventIconHelper._queue = [];
  EventIconHelper._isInitialized = false;
  EventIconHelper.ASSET_NAME = "EventIcons";
  EventIconHelper.ITEM_CLASS_NAME = "eventIcon_0";
  EventIconHelper.wasStaticInitCalled = false;
  return EventIconHelper;
}();
exports.EventIconHelper = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local2 = function () {
  return function QueueItem(__s34param0, __s34param1, __s34param2, __s34param3) {
    this.eventID = 0;
    this.isAlliance = false;
    this.eventID = __s34param0;
    this.iconMC = __s34param1;
    this.size = __s34param2;
    this.isAlliance = __s34param3;
  };
}();
