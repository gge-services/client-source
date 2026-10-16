Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoRenderComponentEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._componentClass = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoRenderComponentEnum, __s1param0);
  Object.defineProperty(IsoRenderComponentEnum.prototype, "componentClass", {
    get: function () {
      return this._componentClass;
    },
    enumerable: true,
    configurable: true
  });
  IsoRenderComponentEnum.__initialize_static_members = function () {
    IsoRenderComponentEnum.LAYERS = new IsoRenderComponentEnum("layers", __dep_export_IsoViewLayers.IsoViewLayers);
    IsoRenderComponentEnum.SETTINGS = new IsoRenderComponentEnum("settings", __dep_export_IsoViewSettings.IsoViewSettings);
    IsoRenderComponentEnum.STRATEGY = new IsoRenderComponentEnum("strategy", __dep_export_IsoViewStrategyManager.IsoViewStrategyManager);
    IsoRenderComponentEnum.MOUSE = new IsoRenderComponentEnum("mouse", __dep_export_IsoViewMouse.IsoViewMouse);
    IsoRenderComponentEnum.OBJECTS = new IsoRenderComponentEnum("objects", __dep_export_IsoViewObjects.IsoViewObjects);
    IsoRenderComponentEnum.CAMERA = new IsoRenderComponentEnum("camera", __dep_export_IsoViewCamera.IsoViewCamera);
  };
  return IsoRenderComponentEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoRenderComponentEnum = __s0local0;
var __dep_export_IsoViewCamera = require("gge-module:export_IsoViewCamera");
var __dep_export_IsoViewLayers = require("gge-module:export_IsoViewLayers");
var __dep_export_IsoViewMouse = require("gge-module:export_IsoViewMouse");
var __dep_export_IsoViewSettings = require("gge-module:export_IsoViewSettings");
var __dep_export_IsoViewObjects = require("gge-module:export_IsoViewObjects");
var __dep_export_IsoViewStrategyManager = require("gge-module:export_IsoViewStrategyManager");
__s0local0.__initialize_static_members();
