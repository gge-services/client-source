Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Container;
var __s0local1 = function () {
  function DispCreatorComponent() {
    this._isCreating = false;
    this._clipList = [];
    this._loadingClips = 0;
    this._onLoadedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._cacheDisp = true;
    this._additionalCacheSize = 0;
  }
  DispCreatorComponent.prototype.init = function (__s5param0) {
    this._dispContainer = new __s0local0();
    this._dispContainer.name = "DispContainer";
    this._dispContainer.mouseChildren = false;
    __s5param0.addChild(this._dispContainer);
  };
  DispCreatorComponent.prototype.destroy = function () {
    this.onLoadedSignal.removeAll();
    this.reset();
    if (this.dispContainer) {
      if (this.dispContainer.parent) {
        this.dispContainer.parent.removeChild(this.dispContainer);
      }
      this._dispContainer = null;
    }
  };
  DispCreatorComponent.prototype.reset = function () {
    if (this._dispContainer) {
      this._dispContainer.children.forEach(function (__s14param0) {
        if (__s14param0 instanceof __dep_exact_9e901e8e2483a22f.AbstractDisplayObjectClip) {
          __s14param0.dispose();
        }
      });
      this._dispContainer.removeChildren();
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this._dispContainer);
    }
    this._clipList = [];
    this._loadingClips = 0;
    this._onLoadedSignal.removeAll();
  };
  DispCreatorComponent.prototype.addClip = function (__s17param0) {
    if (!__s17param0) {
      return null;
    }
    this._clipList.push(__s17param0);
    this.dispContainer.addChild(__s17param0);
    var __s17local0 = __s17param0;
    if (__s17local0) {
      if (__s17local0.isLoaded) {
        if (!this.isCreating) {
          this.checkAndTriggerLoadedCallback();
        }
      } else {
        __s17local0.clipLoaded.add(this.bindFunction(this.onClipLoaded));
        this._loadingClips++;
      }
      __s17local0.setOnFrameChangeCallback(this.bindFunction(this.updateCache));
    } else {
      this.updateCache();
    }
    return __s17param0;
  };
  DispCreatorComponent.prototype.updateCache = function () {
    if (this._cacheDisp) {
      if (this._cacheBehaviour) {
        this._cacheBehaviour.updateCache(this);
      } else {
        var __s25local0 = this._dispContainer.getBounds();
        if (__s25local0.width > 0 && __s25local0.height > 0) {
          this._dispContainer.doCache(this._additionalCacheSize);
        }
      }
    }
  };
  DispCreatorComponent.prototype.addDisp = function (__s31param0) {
    if (__s31param0) {
      this.dispContainer.addChild(__s31param0);
    }
    return __s31param0;
  };
  DispCreatorComponent.prototype.switchCreationState = function (__s34param0, __s34param1 = true) {
    this._isCreating = __s34param0;
    if (!__s34param0 && __s34param1) {
      this.checkAndTriggerLoadedCallback();
    }
  };
  DispCreatorComponent.prototype.checkAndTriggerLoadedCallback = function () {
    if (this._loadingClips <= 0 && !this._isCreating) {
      this.onLoadedSignal.dispatch();
      this.updateCache();
    }
  };
  DispCreatorComponent.prototype.onClipLoaded = function (__s40param0) {
    __s40param0.clipLoaded.removeAll();
    this._loadingClips--;
    if (!this.isCreating) {
      this.checkAndTriggerLoadedCallback();
      this.updateCache();
    }
  };
  Object.defineProperty(DispCreatorComponent.prototype, "isLoaded", {
    get: function () {
      return this._loadingClips <= 0 && !this.isCreating;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "firstClip", {
    get: function () {
      if (this._clipList.length > 0) {
        return this._clipList[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  DispCreatorComponent.prototype.getClipMc = function (__s49param0) {
    if (__s49param0 >= 0 && __s49param0 < this._clipList.length) {
      return this._clipList[__s49param0].currentshownDisplayObject;
    } else {
      return null;
    }
  };
  Object.defineProperty(DispCreatorComponent.prototype, "dispContainer", {
    get: function () {
      return this._dispContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "clipList", {
    get: function () {
      return this._clipList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "onLoadedSignal", {
    get: function () {
      return this._onLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "isCreating", {
    get: function () {
      return this._isCreating;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "cacheDisp", {
    get: function () {
      return this._cacheDisp;
    },
    set: function (__s63param0) {
      this._cacheDisp = __s63param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "additionalCacheSize", {
    get: function () {
      return this._additionalCacheSize;
    },
    set: function (__s67param0) {
      this._additionalCacheSize = __s67param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DispCreatorComponent.prototype, "cacheBehaviour", {
    get: function () {
      return this._cacheBehaviour;
    },
    set: function (__s71param0) {
      this._cacheBehaviour = __s71param0;
    },
    enumerable: true,
    configurable: true
  });
  return DispCreatorComponent;
}();
exports.DispCreatorComponent = __s0local1;
