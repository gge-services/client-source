Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function AEquipAbleScrollItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._locked = false;
    __s3local0._markAsFavoriteModeEnabled = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AEquipAbleScrollItem, __s1param0);
  AEquipAbleScrollItem.prototype.fillFavoriteInfo = function () {
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_Favorite", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_Favorite"), null, 0, false);
    if (__s5local0.isLoaded) {
      this.onFavoriteClipLoaded(__s5local0);
    } else {
      __s5local0.clipLoaded.add(this.bindFunction(this.onFavoriteClipLoaded));
    }
  };
  AEquipAbleScrollItem.prototype.onFavoriteClipLoaded = function (__s9param0) {
    if (__s9param0) {
      __s9param0.clipLoaded.remove(this.bindFunction(this.onFavoriteClipLoaded));
      if (this._disp.mc_equipmentHolder.favoriteDisp) {
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder.favoriteDisp);
      }
      this._disp.mc_equipmentHolder.favoriteDisp = __s9param0.children[0];
      this._disp.mc_equipmentHolder.addChild(this._disp.mc_equipmentHolder.favoriteDisp);
      if (this._disp.mc_equipmentHolder.favoriteDisp) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_active.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_inactive.visible = false;
        this.toggleOpenMarkAsFavorite(this._markAsFavoriteModeEnabled);
      }
    }
  };
  Object.defineProperty(AEquipAbleScrollItem.prototype, "isVOFavorite", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AEquipAbleScrollItem.prototype.toggleOpenMarkAsFavorite = function (__s16param0) {
    this._markAsFavoriteModeEnabled = __s16param0;
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      if (__s16param0) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = false;
      } else {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = this.isVOFavorite;
        if (this.isVOFavorite && this._disp.mc_equipmentHolder.getChildByName("eq") && this._disp.mc_equipmentHolder.getChildByName("eq").getChildByName("newClip")) {
          this._disp.mc_equipmentHolder.getChildByName("eq").getChildByName("newClip").visible = false;
        }
      }
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_active.visible = __s16param0 && this.isVOFavorite;
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_inactive.visible = __s16param0 && !this.isVOFavorite;
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this._disp.mc_equipmentHolder);
    }
  };
  AEquipAbleScrollItem.prototype.showSmallFavoriteIcon = function () {
    if (!this._markAsFavoriteModeEnabled && this._disp.mc_equipmentHolder.favoriteDisp && this.isVOFavorite) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = this.isVOFavorite;
    }
  };
  AEquipAbleScrollItem.prototype.markAsFavorite = function () {
    this.setVOFav(!this.isVOFavorite);
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_active.visible = this.isVOFavorite;
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_inactive.visible = !this.isVOFavorite;
    }
    this.dispatchFavUpdate();
  };
  AEquipAbleScrollItem.prototype.setVOFav = function (__s28param0) {};
  AEquipAbleScrollItem.prototype.dispatchFavUpdate = function () {};
  AEquipAbleScrollItem.prototype.onEquipLoaded = function (__s32param0 = null) {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this._disp.mc_equipmentHolder);
  };
  AEquipAbleScrollItem.prototype.onMouseClick = function (__s34param0) {
    if (this._markAsFavoriteModeEnabled) {
      this.markAsFavorite();
    }
    __s1param0.prototype.onMouseClick.call(this, __s34param0);
  };
  Object.defineProperty(AEquipAbleScrollItem.prototype, "locked", {
    get: function () {
      return this._locked;
    },
    set: function (__s39param0) {
      if (__s39param0) {
        var __s39local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
        __s39local0.desaturate();
        this._disp.mc_equipmentHolder.useFilters([__s39local0.filter]);
        this._disp.mc_equipmentHolder.alpha = 0.5;
      } else {
        this._disp.mc_equipmentHolder.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
        this._disp.mc_equipmentHolder.alpha = 1;
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp, !__s39param0);
      this._locked = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  return AEquipAbleScrollItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.AEquipAbleScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
