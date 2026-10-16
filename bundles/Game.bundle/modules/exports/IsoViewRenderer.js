Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = function (__s1param0) {
  function IsoViewRenderer() {
    var __s3local0;
    var __s3local1;
    var __s3local2 = this;
    __s3local2._components = new Map();
    __s3local2._isReady = false;
    CONSTRUCTOR_HACK;
    __s3local2 = __s1param0.call(this) || this;
    for (var __s3local3 = 0, __s3local4 = IsoViewRenderer.componentTypeList; __s3local3 < __s3local4.length; __s3local3++) {
      __s3local0 = __s3local4[__s3local3];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s3local0, "IsoRenderComponentEnum")) {
        __s3local1 = __s3local0;
        __s3local2._components.set(__s3local1, new __s3local1.componentClass());
      }
    }
    for (var __s3local5 = 0, __s3local6 = IsoViewRenderer.componentTypeList; __s3local5 < __s3local6.length; __s3local5++) {
      __s3local0 = __s3local6[__s3local5];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s3local0, "IsoRenderComponentEnum")) {
        __s3local1 = __s3local0;
        __s3local2.getComponentByType(__s3local1).init(__s3local2);
      }
    }
    return __s3local2;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewRenderer, __s1param0);
  IsoViewRenderer.prototype.build = function (__s11param0, __s11param1) {
    var __s11local0;
    var __s11local1;
    this._isReady = false;
    this._isoData = __s11param0;
    this.objects.init(this);
    for (var __s11local2 = 0, __s11local3 = IsoViewRenderer.componentTypeList; __s11local2 < __s11local3.length; __s11local2++) {
      __s11local0 = __s11local3[__s11local2];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11local0, "IsoRenderComponentEnum")) {
        __s11local1 = __s11local0;
        this.getComponentByType(__s11local1).reset();
      }
    }
    this.layers.setNewRenderTarget(__s11param1);
    if (!__dep_export_Iso.Iso.controller.viewUpdater) {
      __dep_export_Iso.Iso.controller.registerViewUpdater();
    }
    for (var __s11local4 = 0, __s11local5 = IsoViewRenderer.componentTypeList; __s11local4 < __s11local5.length; __s11local4++) {
      __s11local0 = __s11local5[__s11local4];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11local0, "IsoRenderComponentEnum")) {
        __s11local1 = __s11local0;
        this.getComponentByType(__s11local1).setup();
      }
    }
    this.objects.render();
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandZSortAll.IsoCommandZSortAll());
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandZSortAll.IsoCommandZSortAll());
    this._isReady = true;
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_RENDERER_READY));
  };
  IsoViewRenderer.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._isReady = false;
    __dep_export_Iso.Iso.controller.unregisterViewUpdater();
    for (var __s20local0 = __dep_exact_f855840627e6e145.int(IsoViewRenderer.componentTypeList.length - 1); __s20local0 >= 0; --__s20local0) {
      var __s20local1 = IsoViewRenderer.componentTypeList[__s20local0];
      this.getComponentByType(__s20local1).destroy();
    }
  };
  IsoViewRenderer.prototype.getComponentByType = function (__s24param0) {
    return this.components.get(__s24param0);
  };
  Object.defineProperty(IsoViewRenderer.prototype, "layers", {
    get: function () {
      return this.getComponentByType(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum.LAYERS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "settings", {
    get: function () {
      return this.getComponentByType(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum.SETTINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "objects", {
    get: function () {
      return this.getComponentByType(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum.OBJECTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "camera", {
    get: function () {
      return this.getComponentByType(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum.CAMERA);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "mouse", {
    get: function () {
      return this.getComponentByType(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum.MOUSE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "strategies", {
    get: function () {
      return this.getComponentByType(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum.STRATEGY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "components", {
    get: function () {
      return this._components;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "isReady", {
    get: function () {
      return this._isReady;
    },
    enumerable: true,
    configurable: true
  });
  IsoViewRenderer.__initialize_static_members = function () {
    IsoViewRenderer.componentTypeList = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoRenderComponentEnum.IsoRenderComponentEnum);
  };
  return IsoViewRenderer;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoViewRenderer = __s0local0;
var __dep_export_IsoCommandZSortAll = require("gge-module:export_IsoCommandZSortAll");
var __dep_export_IsoRenderComponentEnum = require("gge-module:export_IsoRenderComponentEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
