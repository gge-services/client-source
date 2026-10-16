Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function NomadCampDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(NomadCampDetailView, __s1param0);
  NomadCampDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_Classic_Dungeon";
  };
  Object.defineProperty(NomadCampDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_NomadCamp");
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  NomadCampDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerKeep.addChild(this.getMovieClipByName(this.classNameKeep));
    this._layerLeft.addChild(this.getMovieClipByName(this.classNameBackwall + "_Left"));
    this._layerMiddle.addChild(this.getMovieClipByName(this.classNameGate));
    this._layerRight.addChild(this.getMovieClipByName(this.classNameBackwall + "_Right"));
  };
  Object.defineProperty(NomadCampDetailView.prototype, "classNameKeep", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_KEEP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampDetailView.prototype, "classNameBackwall", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_BACKWALL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampDetailView.prototype, "classNameGate", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_GATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampDetailView.prototype, "classNameFence", {
    get: function () {
      return NomadCampDetailView.CLASSNAME_FENCE;
    },
    enumerable: true,
    configurable: true
  });
  NomadCampDetailView.__initialize_static_members = function () {
    NomadCampDetailView.CLASSNAME_KEEP = "NomadCamp_Keep";
    NomadCampDetailView.CLASSNAME_BACKWALL = "NomadCamp_BackWall";
    NomadCampDetailView.CLASSNAME_GATE = "NomadCamp_Gate";
    NomadCampDetailView.CLASSNAME_FENCE = "NomadCamp_Fence";
  };
  return NomadCampDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.NomadCampDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
