Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleScreen = require("gge-module:export_CastleScreen");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleIsoScreen() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __s0local0()) || this).disp.tickEnabled = __s3local0.disp.tickChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleIsoScreen, __s1param0);
  CastleIsoScreen.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.isoRenderer.camera.isActive = true;
    this.rebuildIsoRenderer();
  };
  CastleIsoScreen.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.isoController.unregisterViewUpdater();
    this.isoRenderer.destroy();
  };
  CastleIsoScreen.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.isoController.unregisterViewUpdater();
    this.isoRenderer.destroy();
  };
  CastleIsoScreen.prototype.rebuildIsoRenderer = function () {
    var __s11local0 = __dep_export_Iso.Iso.data;
    if (this.isoRenderer.isoData != __s11local0) {
      this.isoRenderer.build(__s11local0, this.renderTarget);
    } else {
      this.isoRenderer.strategies.switchToNormalMode();
    }
  };
  Object.defineProperty(CastleIsoScreen.prototype, "isoRenderer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsoScreen.prototype, "isoController", {
    get: function () {
      return __dep_export_Iso.Iso.controller;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIsoScreen.prototype, "renderTarget", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleIsoScreen.__initialize_static_members = function () {
    CastleIsoScreen.NAME = "CastleIsoScreen";
  };
  return CastleIsoScreen;
}(__dep_export_CastleScreen.CastleScreen);
exports.CastleIsoScreen = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
__s0local1.__initialize_static_members();
