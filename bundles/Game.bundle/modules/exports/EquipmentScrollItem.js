Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __s0local0 = function (__s1param0) {
  function EquipmentScrollItem(__s3param0) {
    var __s3local0;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.actLikeButton = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentScrollItem, __s1param0);
  EquipmentScrollItem.prototype.customFillItem = function () {
    var __s5local0 = this.equipmentScrollItemVO.locked;
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.addEquipmentIcon(this.equipmentScrollItemVO.equipmentVO, this._disp.mc_equipmentHolder, EquipmentScrollItem.MAX_WIDTH, EquipmentScrollItem.MAX_HEIGHT, this.bindFunction(this.onEquipLoaded), true, false, __dep_export_CastleModel.CastleModel.equipData.isEquipableNew(this.equipmentScrollItemVO.equipmentVO), !__s5local0, this.equipmentScrollItemVO.favIconByEQRenderer);
    this.setRarityColor();
    this.locked = __s5local0;
    this.disp.actLikeButton = !__s5local0;
    this.fillFavoriteInfo();
    if (this.disp.cacheCanvas) {
      this.disp.updateCache();
    }
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "isVOFavorite", {
    get: function () {
      return !!this.equipmentScrollItemVO && !!this.equipmentScrollItemVO.equipmentVO && this.equipmentScrollItemVO.equipmentVO.isFavorite;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.setVOFav = function (__s10param0) {
    this.equipmentScrollItemVO.equipmentVO.isFavorite = __s10param0;
  };
  EquipmentScrollItem.prototype.dispatchFavUpdate = function () {
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.equipmentItemUpdatedSignal.dispatch(this.equipmentScrollItemVO.equipmentVO);
  };
  EquipmentScrollItem.prototype.onEquipLoaded = function (__s14param0 = null) {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this._disp.mc_equipmentHolder);
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "equipmentScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.onRollOver = function (__s18param0) {
    var __s18local0 = this._disp.mc_equipmentHolder.children[0];
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.updateEquipmentIconCache(__s18local0, EquipmentScrollItem.MAX_WIDTH * EquipmentScrollItem.MOUSE_OVER_SCALE, EquipmentScrollItem.MAX_HEIGHT * EquipmentScrollItem.MOUSE_OVER_SCALE, EquipmentScrollItem.MOUSE_OVER_SCALE);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
    }
    var __s18local1 = this.equipmentScrollItemVO.getCurrentLordCallback ? this.equipmentScrollItemVO.getCurrentLordCallback() : null;
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this._disp, this.equipmentScrollItemVO.equipmentVO, __s18local1);
    this.isRollOut = false;
    __s1param0.prototype.onRollOver.call(this, __s18param0);
  };
  EquipmentScrollItem.prototype.onRollOut = function (__s21param0) {
    var __s21local0 = this._disp.mc_equipmentHolder.children[0];
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.updateEquipmentIconCache(__s21local0, EquipmentScrollItem.MAX_WIDTH, EquipmentScrollItem.MAX_HEIGHT, 1);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
    }
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideEquipmentToolTip();
    this.isRollOut = true;
    __s1param0.prototype.onRollOut.call(this, __s21param0);
  };
  EquipmentScrollItem.prototype.onMouseClick = function (__s24param0) {
    __s1param0.prototype.onMouseClick.call(this, __s24param0);
    var __s24local0 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.getTouchEvent(__s24param0);
    if (__s24local0 && __s24local0.isLongPressed && !this._markAsFavoriteModeEnabled) {
      this.onRollOver(__s24param0);
    }
  };
  EquipmentScrollItem.prototype.onTouchUp = function (__s27param0) {
    if (this._markAsFavoriteModeEnabled) {
      __s1param0.prototype.onTouchUp.call(this, __s27param0);
      if (!this.isRollOut) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
      }
    }
  };
  EquipmentScrollItem.prototype.onTouchDown = function (__s31param0) {
    if (this._markAsFavoriteModeEnabled) {
      __s1param0.prototype.onTouchDown.call(this, __s31param0);
      if (this._disp.mc_equipmentHolder.favoriteDisp) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = true;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
      }
    }
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.setRarityColor = function () {
    switch (this.equipmentScrollItemVO.equipmentVO.rarity) {
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_COMMON:
        this._disp.gotoAndStop(1);
        break;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RARE:
        this._disp.gotoAndStop(2);
        break;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_EPIC:
        this._disp.gotoAndStop(3);
        break;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_LEGENDARY:
        this._disp.gotoAndStop(4);
        break;
      case __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_UNIQUE:
        this._disp.gotoAndStop(5);
    }
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "lordAway", {
    set: function (__s40param0) {
      this.locked = false;
      if (__s40param0) {
        if (this._disp.mc_lock) {
          this._disp.mc_lock.visible = true;
        }
        __dep_export_ButtonHelper.ButtonHelper.setMouseOverScale(this._disp, 1);
        this._disp.toolTipText = "dialog_equipment_lordNotAvailable";
      } else {
        if (this._disp.mc_lock) {
          this._disp.mc_lock.visible = false;
        }
        __dep_export_ButtonHelper.ButtonHelper.setMouseOverScale(this._disp, EquipmentScrollItem.MOUSE_OVER_SCALE);
        this._disp.toolTipText = null;
      }
      this._locked = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder);
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder.favoriteDisp);
      this._disp.mc_equipmentHolder.favoriteDisp = null;
    }
  };
  EquipmentScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder.favoriteDisp);
      this._disp.mc_equipmentHolder.favoriteDisp = null;
    }
  };
  EquipmentScrollItem.MAX_WIDTH = 55;
  EquipmentScrollItem.MAX_HEIGHT = 55;
  EquipmentScrollItem.MOUSE_OVER_SCALE = 1.05;
  return EquipmentScrollItem;
}(require("gge-module:export_AEquipAbleScrollItem").AEquipAbleScrollItem);
exports.EquipmentScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
