Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableRenderer(__s3param0, __s3param1) {
    this._renderer = new Map();
    this._onIconLoadedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._isFinishedRendering = false;
    this._clips = __s3param0;
    this._options = __s3param1;
    this.initComponents();
  }
  CollectableRenderer.prototype.destroy = function () {
    this.onIconLoadedSignal.removeAll();
    this.removeListener();
    this.destroyItemVE();
  };
  CollectableRenderer.prototype.addListener = function () {
    this.removeListener();
    if (this._renderer != null) {
      for (var __s7local0 = 0, __s7local1 = Array.from(this._renderer.values()); __s7local0 < __s7local1.length; __s7local0++) {
        __s7local1[__s7local0].addListener();
      }
    }
  };
  CollectableRenderer.prototype.removeListener = function () {
    if (this._renderer != null) {
      for (var __s12local0 = 0, __s12local1 = Array.from(this._renderer.values()); __s12local0 < __s12local1.length; __s12local0++) {
        __s12local1[__s12local0].removeListener();
      }
    }
  };
  CollectableRenderer.prototype.updateWithNewVO = function (__s17param0) {
    this.changeItemVO(__s17param0);
    this.update();
  };
  CollectableRenderer.prototype.update = function () {
    this.reset();
    this.removeListener();
    if (this.itemVO && this.itemVO.itemType != __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
      this.addListener();
      if (this._renderer != null) {
        for (var __s19local0 = 0, __s19local1 = Array.from(this._renderer.values()); __s19local0 < __s19local1.length; __s19local0++) {
          __s19local1[__s19local0].update();
        }
      }
    } else if (this.clips.itemMc) {
      this.clips.itemMc.visible = false;
    }
  };
  CollectableRenderer.prototype.changeItemVO = function (__s26param0) {
    this._itemVO = __s26param0;
    this.createItemVE();
  };
  CollectableRenderer.prototype.destroyItemVE = function () {
    if (this._itemVE) {
      this._itemVE.destroy();
      this._itemVE = null;
    }
  };
  CollectableRenderer.prototype.createItemVE = function () {
    this.destroyItemVE();
    this._itemVE = __dep_export_CollectableHelper.CollectableHelper.createVE(this.itemVO, this);
  };
  CollectableRenderer.prototype.setVisibility = function (__s33param0) {
    if (this.clips.itemMc) {
      this.clips.itemMc.visible = __s33param0;
    }
    if (this._renderer != null) {
      for (var __s33local0 = 0, __s33local1 = Array.from(this._renderer.values()); __s33local0 < __s33local1.length; __s33local0++) {
        __s33local1[__s33local0].setVisibility(__s33param0);
      }
    }
  };
  CollectableRenderer.prototype.reset = function () {
    if (this.clips.itemMc) {
      this.clips.itemMc.visible = true;
    }
    if (this._renderer != null) {
      for (var __s39local0 = 0, __s39local1 = Array.from(this._renderer.values()); __s39local0 < __s39local1.length; __s39local0++) {
        __s39local1[__s39local0].reset();
      }
    }
  };
  CollectableRenderer.prototype.initComponents = function () {
    this.reset();
    this.removeListener();
    this._renderer = new Map();
    var __s45local0;
    var __s45local1 = 0;
    for (var __s45local2 = 0; __s45local2 < 32; ++__s45local2) {
      __s45local1 = 1 << __s45local2;
      if (this.options.containsRenderOption(__s45local1) && (__s45local0 = __dep_export_ClientConstCollectable.ClientConstCollectable.RENDERER_CLASS_DIC.get(__s45local1))) {
        this._renderer.set(__s45local1, new __s45local0());
        this._renderer.get(__s45local1).init(this);
      }
    }
    this.addListener();
  };
  CollectableRenderer.prototype.getRenderer = function (__s50param0) {
    return this._renderer.get(__s50param0);
  };
  CollectableRenderer.prototype.onIconLoaded = function () {
    if (this._renderer != null) {
      for (var __s52local0 = 0, __s52local1 = Array.from(this._renderer.values()); __s52local0 < __s52local1.length; __s52local0++) {
        __s52local1[__s52local0].onLoadedIcon();
      }
    }
    this._isFinishedRendering = true;
    this.onIconLoadedSignal.dispatch(this);
  };
  Object.defineProperty(CollectableRenderer.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "clips", {
    get: function () {
      return this._clips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "itemVE", {
    get: function () {
      return this._itemVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "onIconLoadedSignal", {
    get: function () {
      return this._onIconLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "isFinishedRendering", {
    get: function () {
      return this._isFinishedRendering;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRenderer;
}();
exports.CollectableRenderer = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
