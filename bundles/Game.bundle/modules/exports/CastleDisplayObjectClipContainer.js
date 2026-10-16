Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleDisplayObjectClipContainer() {
    var __s3local0 = this;
    __s3local0._allClipsLoaded = true;
    __s3local0._centerClip = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDisplayObjectClipContainer, __s1param0);
  CastleDisplayObjectClipContainer.prototype.addItem = function (__s5param0, __s5param1) {
    __s1param0.prototype.addItem.call(this, __s5param0, __s5param1);
    if (__s5param0 instanceof __dep_exact_9e901e8e2483a22f_1.GoodgameDisplayObjectClipExternal) {
      var __s5local0 = __s5param0;
      if (!__s5local0.isLoaded) {
        __s5local0.clipLoaded.addOnce(this.bindFunction(this.onClipLoaded));
        this._allClipsLoaded = false;
        this.visible = false;
      }
    }
  };
  CastleDisplayObjectClipContainer.prototype.areAllClipsLoaded = function () {
    for (var __s9local0 = 0, __s9local1 = this.children; __s9local0 < __s9local1.length; __s9local0++) {
      var __s9local2 = __s9local1[__s9local0];
      if (__s9local2 !== undefined) {
        if (__s9local2 instanceof __dep_exact_9e901e8e2483a22f_1.GoodgameDisplayObjectClipExternal) {
          if (!__s9local2.isLoaded) {
            return false;
          }
        }
      }
    }
    return true;
  };
  Object.defineProperty(CastleDisplayObjectClipContainer.prototype, "allClipsLoaded", {
    get: function () {
      return this._allClipsLoaded;
    },
    enumerable: true,
    configurable: true
  });
  CastleDisplayObjectClipContainer.prototype.onClipLoaded = function (__s18param0) {
    this._allClipsLoaded = this.areAllClipsLoaded();
    if (this._allClipsLoaded) {
      this.visible = true;
      this.applyClipSize();
      this.dispatchEvent(new __s0local0(__s0local0.COMPLETE));
    }
  };
  CastleDisplayObjectClipContainer.prototype.applyClipSize = function () {
    if (this._allClipsLoaded) {
      if (this.clipSizeComponent) {
        this.clipSizeComponent.setImageSize(this, this.getBounds());
        if (this.centerClip) {
          this.x = this.clipSizeComponent.offsetX;
          this.y = this.clipSizeComponent.offsetY;
        }
      } else if (this.centerClip) {
        var __s21local0 = this.getBounds(null);
        this.x = -(__s21local0.width / 2 + __s21local0.left);
        this.y = -(__s21local0.height / 2 + __s21local0.top);
      }
    }
  };
  Object.defineProperty(CastleDisplayObjectClipContainer.prototype, "clipSizeComponent", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.DisplayObjectClipContainer.prototype, "clipSizeComponent").get.call(this);
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.DisplayObjectClipContainer.prototype, "clipSizeComponent").set.call(this, __s29param0);
      this.applyClipSize();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDisplayObjectClipContainer.prototype, "centerClip", {
    get: function () {
      return this._centerClip;
    },
    set: function (__s33param0) {
      this._centerClip = __s33param0;
      this.applyClipSize();
    },
    enumerable: true,
    configurable: true
  });
  CastleDisplayObjectClipContainer.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this);
  };
  return CastleDisplayObjectClipContainer;
}(__dep_exact_9e901e8e2483a22f.DisplayObjectClipContainer);
exports.CastleDisplayObjectClipContainer = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "Container", "IClipContainer");
