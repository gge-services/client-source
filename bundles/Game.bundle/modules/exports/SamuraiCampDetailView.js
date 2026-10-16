Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_NomadCampDetailView = require("gge-module:export_NomadCampDetailView");
var __s0local0 = function (__s1param0) {
  function SamuraiCampDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiCampDetailView, __s1param0);
  SamuraiCampDetailView.prototype.drawCastleVO = function () {
    __s1param0.prototype.drawCastleVO.call(this);
    this._layerMiddle.addChildAt(this.getMovieClipByName(SamuraiCampDetailView.CLASSNAME_FENCE_MIDDLE), this._layerMiddle.numChildren - 1);
    this._layerLeft.addChild(this.getMovieClipByName(SamuraiCampDetailView.CLASSNAME_FENCE_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(SamuraiCampDetailView.CLASSNAME_FENCE_RIGHT));
  };
  Object.defineProperty(SamuraiCampDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_SamuraiCamp");
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_NomadCampDetailView.NomadCampDetailView.prototype, "assetCastleFileURL").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampDetailView.prototype, "classNameBackwall", {
    get: function () {
      return SamuraiCampDetailView.CLASSNAME_BACKWALL_0;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_NomadCampDetailView.NomadCampDetailView.prototype, "classNameBackwall").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampDetailView.prototype, "classNameKeep", {
    get: function () {
      return SamuraiCampDetailView.CLASSNAME_KEEP_0;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_NomadCampDetailView.NomadCampDetailView.prototype, "classNameKeep").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampDetailView.prototype, "classNameGate", {
    get: function () {
      return SamuraiCampDetailView.CLASSNAME_GATE_0;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_NomadCampDetailView.NomadCampDetailView.prototype, "classNameGate").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiCampDetailView.__initialize_static_members = function () {
    SamuraiCampDetailView.CLASSNAME_KEEP_0 = "SamuraiCamp_Keep";
    SamuraiCampDetailView.CLASSNAME_BACKWALL_0 = "SamuraiCamp_BackWall";
    SamuraiCampDetailView.CLASSNAME_GATE_0 = "SamuraiCamp_Gate";
    SamuraiCampDetailView.CLASSNAME_FENCE_MIDDLE = "SamuraiCamp_Fence_Middle";
    SamuraiCampDetailView.CLASSNAME_FENCE_LEFT = "SamuraiCamp_Fence_Left";
    SamuraiCampDetailView.CLASSNAME_FENCE_RIGHT = "SamuraiCamp_Fence_Right";
  };
  return SamuraiCampDetailView;
}(__dep_export_NomadCampDetailView.NomadCampDetailView);
exports.SamuraiCampDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
