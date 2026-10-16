Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Iso() {}
  Object.defineProperty(Iso, "data", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.areaData) {
        return __dep_export_CastleModel.CastleModel.areaData.activeIsoData;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Iso, "renderer", {
    get: function () {
      Iso._renderer ||= new __dep_export_IsoViewRenderer.IsoViewRenderer();
      return Iso._renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Iso, "controller", {
    get: function () {
      Iso._controller ||= new __dep_export_IsoController.IsoController();
      return Iso._controller;
    },
    enumerable: true,
    configurable: true
  });
  Iso.destroy = function () {
    if (Iso._renderer) {
      Iso._renderer.destroy();
      Iso._renderer = null;
    }
    if (Iso._controller) {
      Iso._controller.destroy();
      Iso._controller = null;
    }
  };
  return Iso;
}();
exports.Iso = __s0local0;
var __dep_export_IsoController = require("gge-module:export_IsoController");
var __dep_export_IsoViewRenderer = require("gge-module:export_IsoViewRenderer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
