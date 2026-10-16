Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function AABGDetailView(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4) || this;
    __s3local0.landmarkName = "";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AABGDetailView, __s1param0);
  AABGDetailView.prototype.preConstructor = function (__s5param0 = null) {
    this.landmarkName = __s5param0;
  };
  Object.defineProperty(AABGDetailView.prototype, "skinName", {
    get: function () {
      return __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    },
    enumerable: true,
    configurable: true
  });
  AABGDetailView.prototype.drawCastleVO = function () {
    this._castleLayer = new __s0local0();
    this._layerBackground = new __s0local0();
    this._layerMoat = new __s0local0();
    this._layerMoat.mouseChildren = false;
    this._layerKeep = new __s0local0();
    this._layerKeep.mouseChildren = false;
    this._layerFront = new __s0local0();
    this._layerLeft = new __s0local0();
    this._layerLeft.mouseChildren = false;
    this._layerRight = new __s0local0();
    this._layerRight.mouseChildren = false;
    this._layerMiddle = new __s0local0();
    this._layerMiddle.mouseChildren = false;
    this._castleLayer.y = 3;
    this._castleLayer.x = 10;
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._layerFront.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
    if (this.landmarkName == "Castle") {
      this._layerKeep.addChild(this.getMovieClipByName("CastlePart_Keep_Level" + this._detailDrawAble.keepLevel, null, "DetailView_Castle"));
    } else {
      this._layerKeep.addChild(this.getMovieClipByName(this.keepName, null, this.keepName));
    }
    this._layerLeft.addChild(this.getMovieClipByName(this.classPrefix + "BackWall_Left", null, this.wallAssetName));
    this._layerRight.addChild(this.getMovieClipByName(this.classPrefix + "BackWall_Right", null, this.wallAssetName));
    this._layerMiddle.addChild(this.getMovieClipByName(this.classPrefix + "Gate", null, this.wallAssetName));
    this._layerMoat.addChild(this.getMovieClipByName(this.classPrefix + "Moat", null, this.wallAssetName));
  };
  Object.defineProperty(AABGDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_EventSkin_" + this.skinName);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  AABGDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_EventSkin_" + this.skinName;
  };
  Object.defineProperty(AABGDetailView.prototype, "wallAssetName", {
    get: function () {
      return this.classPrefix + "Wall";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AABGDetailView.prototype, "keepName", {
    get: function () {
      return this.classPrefix + this.landmarkName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AABGDetailView.prototype, "classPrefix", {
    get: function () {
      return AABGDetailView.PREFIX + this.skinName + "_";
    },
    enumerable: true,
    configurable: true
  });
  AABGDetailView.PREFIX = "DetailView_EventSkin_";
  return AABGDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.AABGDetailView = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IFightDetailView");
