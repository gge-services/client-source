Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __s0local0 = function (__s1param0) {
  function GemScrollItem(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GemScrollItem, __s1param0);
  GemScrollItem.prototype.customFillItem = function () {
    this._disp.mc_equipmentHolder.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAsset(this.gemVO, null, null, __dep_export_CastleModel.CastleModel.equipData.isEquipableNew(this.gemVO)));
    this.locked = this.gemScrollItemVO.locked;
    this.fillFavoriteInfo();
  };
  Object.defineProperty(GemScrollItem.prototype, "isVOFavorite", {
    get: function () {
      return !!this.gemScrollItemVO && !!this.gemScrollItemVO.gemVO && this.gemScrollItemVO.gemVO.isFavorite;
    },
    enumerable: true,
    configurable: true
  });
  GemScrollItem.prototype.setVOFav = function (__s9param0) {
    this.gemScrollItemVO.gemVO.isFavorite = __s9param0;
  };
  GemScrollItem.prototype.dispatchFavUpdate = function () {
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.gemItemUpdatedSignal.dispatch(this.gemVO);
  };
  Object.defineProperty(GemScrollItem.prototype, "gemScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  GemScrollItem.prototype.onRollOver = function (__s15param0) {
    __s1param0.prototype.onRollOver.call(this, __s15param0);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
    }
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this._disp, this.gemVO);
    this.isRollOut = false;
  };
  GemScrollItem.prototype.onRollOut = function (__s18param0) {
    __s1param0.prototype.onRollOut.call(this, __s18param0);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
    }
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideEquipmentToolTip();
    this.isRollOut = true;
  };
  GemScrollItem.prototype.onTouchUp = function (__s21param0) {
    if (this._markAsFavoriteModeEnabled) {
      __s1param0.prototype.onTouchUp.call(this, __s21param0);
      if (!this.isRollOut) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
      }
    }
  };
  GemScrollItem.prototype.onTouchDown = function (__s25param0) {
    if (this._markAsFavoriteModeEnabled) {
      __s1param0.prototype.onTouchDown.call(this, __s25param0);
      this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = true;
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
    }
  };
  GemScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder);
  };
  Object.defineProperty(GemScrollItem.prototype, "gemVO", {
    get: function () {
      return this.scrollItemVO.gemVO;
    },
    enumerable: true,
    configurable: true
  });
  return GemScrollItem;
}(require("gge-module:export_AEquipAbleScrollItem").AEquipAbleScrollItem);
exports.GemScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
