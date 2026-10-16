Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.Container;
var __s0local1 = function () {
  function FightDetailView(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null) {
    this.preConstructor(__s3param4);
    this._detailDrawAble = __s3param0;
    this._targetBackgroundMC = __s3param1;
    this._targetCastleLayerMC = __s3param2;
    this._kingdomVO = __s3param3;
    this.drawBackground();
    this.drawCastleVO();
    this.drawCastleToTargetLayer();
  }
  FightDetailView.prototype.preConstructor = function (__s5param0 = null) {};
  FightDetailView.prototype.drawCastleToTargetLayer = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._targetCastleLayerMC);
    this._castleLayer.scaleX = this._castleLayer.scaleY /= 2;
    this._targetCastleLayerMC.addChild(this._castleLayer);
  };
  FightDetailView.prototype.drawCastleVO = function () {};
  FightDetailView.prototype.drawBackground = function () {
    var __s11local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.getBackgroundClassName(), this.assetBackgroundFileURL, null, 0, false);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._targetBackgroundMC);
    __s11local0.scaleX = __s11local0.scaleY /= 2;
    this._targetBackgroundMC.addChild(__s11local0.asDisplayObject());
    this._targetBackgroundMC.cacheAsBitmap = true;
    this._targetBackgroundMC.doCache();
  };
  Object.defineProperty(FightDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_" + this._kingdomVO.kingdomName);
    },
    enumerable: true,
    configurable: true
  });
  FightDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  Object.defineProperty(FightDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Castle");
    },
    enumerable: true,
    configurable: true
  });
  FightDetailView.prototype.initLayer = function () {
    this._castleLayer = new __s0local0();
    this._castleLayer.name = "castleLayer";
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
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._castleLayer.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
  };
  FightDetailView.prototype.addGlow = function (__s21param0) {
    this.removeGlow();
    __s21param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS.concat(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS).concat(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS), false, 1);
  };
  FightDetailView.prototype.removeGlow = function () {
    if (this.selectedTarget != this._layerKeep) {
      this._layerKeep.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerLeft) {
      this._layerLeft.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerRight) {
      this._layerRight.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerMiddle) {
      this._layerMiddle.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerFront) {
      this._layerFront.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerMoat) {
      this._layerMoat.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
  };
  FightDetailView.prototype.clearView = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerBackground);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerMoat);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerKeep);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerFront);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerLeft);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerRight);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._layerMiddle);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this._castleLayer);
  };
  FightDetailView.prototype.onLoadedCallback = function (__s33param0) {
    if (!__dep_export_CastleModel.CastleModel.gfxData.animationActive) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.stopAllMovies(__s33param0, 1);
    }
  };
  FightDetailView.prototype.getMovieClipByName = function (__s36param0, __s36param1 = null, __s36param2 = null) {
    var __s36local0 = [];
    if (this._detailDrawAble.crestVO) {
      __s36local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", this._detailDrawAble.crestVO.colorsFour));
    }
    var __s36local1 = this.assetCastleFileURL;
    if (__s36param2) {
      __s36local1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s36param2);
    }
    var __s36local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s36param0, __s36local1, __s36local0, 0, false);
    __s36local2.isInteractive = true;
    if (__s36local2.isLoaded) {
      this.onLoadedCallback(__s36local2);
      if (__s36param1 != null) {
        __s36param1(__s36local2);
      }
    } else {
      __s36local2.clipLoaded.addOnce(this.bindFunction(this.onLoadedCallback));
      if (__s36param1 != null) {
        __s36local2.clipLoaded.addOnce(__s36param1);
      }
    }
    return __s36local2.asDisplayObject();
  };
  Object.defineProperty(FightDetailView.prototype, "castleLayer", {
    get: function () {
      return this._castleLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerKeep", {
    get: function () {
      return this._layerKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerFront", {
    get: function () {
      return this._layerFront;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerLeft", {
    get: function () {
      return this._layerLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerRight", {
    get: function () {
      return this._layerRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerMiddle", {
    get: function () {
      return this._layerMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerMoat", {
    get: function () {
      return this._layerMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "selectedTarget", {
    get: function () {
      return this._selectedTarget;
    },
    set: function (__s60param0) {
      this._selectedTarget = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  return FightDetailView;
}();
exports.FightDetailView = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IFightDetailView");
