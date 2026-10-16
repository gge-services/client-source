Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Event;
var __s0local1 = function () {
  function TreasureMapLoader() {
    this._treasureMapLoaded = false;
    this._treasureMapFrameLoaded = false;
    this._shouldLoadFrame = true;
  }
  TreasureMapLoader.prototype.loadTreasureMapAssets = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0 = this;
    this._shouldLoadFrame = __s5param3;
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_COMMAND, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    this._treasureMapLoadedFunction = __s5param0;
    if (this._treasureMapLoaded && this._treasureMapFrameLoaded) {
      this.triggerCallback();
    } else if (__s5param2) {
      __dep_exact_9e901e8e2483a22f_1.loadAssets(__s5param2, __dep_exact_9e901e8e2483a22f_1.AssetLoadingFlowType.PARALLEL).then(function (__s9param0) {
        __s5local0.loadMainTreasureMap(__s5param1, __s5param3);
      }).catch(function (__s11param0) {
        return __dep_exact_9e901e8e2483a22f.warn("failed to load treasure map assets", __s11param0);
      });
    } else {
      this.loadMainTreasureMap(__s5param1, __s5param3);
    }
  };
  TreasureMapLoader.prototype.loadMainTreasureMap = function (__s14param0, __s14param1) {
    var __s14local0 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.loadVersionedItemAsset("Event" + __s14param0 + "TreasureMap");
    if (__s14local0._isLoaded) {
      this.onTreasureMapLibLoaded(null);
    } else {
      __s14local0.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onTreasureMapLibLoaded));
    }
    if (__s14param1) {
      var __s14local1 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.loadVersionedItemAsset("Event" + __s14param0 + "TreasuremapFrame");
      if (__s14local1._isLoaded) {
        this.onTreasureMapFrameLoaded(null);
      } else {
        __s14local1.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onTreasureMapFrameLoaded));
      }
    } else {
      this.onTreasureMapFrameLoaded(null);
    }
    __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.assetLoader.start(__dep_exact_9e901e8e2483a22f_3.GoodgameBitmapEngine.numConnections);
  };
  TreasureMapLoader.prototype.onTreasureMapLibLoaded = function (__s22param0) {
    this._treasureMapLoaded = true;
    this.triggerCallback();
  };
  TreasureMapLoader.prototype.onTreasureMapFrameLoaded = function (__s24param0) {
    this._treasureMapFrameLoaded = true;
    this.triggerCallback();
  };
  TreasureMapLoader.prototype.triggerCallback = function () {
    if (this.isLoaded()) {
      if (this._treasureMapLoadedFunction) {
        this._treasureMapLoadedFunction();
      }
      this._treasureMapLoadedFunction = null;
    }
  };
  TreasureMapLoader.prototype.isLoaded = function () {
    return this._treasureMapLoaded && this._shouldLoadFrame && this._treasureMapFrameLoaded || this._treasureMapLoaded && !this._shouldLoadFrame;
  };
  return TreasureMapLoader;
}();
exports.TreasureMapLoader = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
